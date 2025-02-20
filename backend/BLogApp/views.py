from .serializers import (
    AuthorSerializer,
    PostSerializer,
    CategorySerializer,
    UserSerializer,
)
from .models import Author, Post, Category
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from .filters import PostsFilter


class PostPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = "page_size"
    max_page_size = 100


from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.exceptions import NotFound


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_class = PostsFilter
    search_fields = ["title", "author__user__first_name"]
    ordering_fields = ["id", "title", "created_at"]

    pagination_class = PostPagination

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method == "POST":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

    def get_queryset(self):
        #   ---------------Get params
        fk_category_id = self.kwargs.get("category_id")
        fk_author_id = self.kwargs.get("author_id")
        #   ---------------Get query params
        category_id = self.request.query_params.get("category_id")
        limit = self.request.query_params.get("limit")

        if limit and category_id:
            return Post.objects.filter(category_id=category_id)[: int(limit)]
        elif fk_category_id:
            return Post.objects.filter(category_id=fk_category_id)
        elif fk_author_id:
            return Post.objects.filter(author_id=fk_author_id)
        return Post.objects.all()


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method in ["PUT", "PATCH", "DELETE"]:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

    def get_object(self):
        category_id = self.request.query_params.get("category_id")
        slug = self.kwargs.get("slug")
        posts = Post.objects.filter(category_id=category_id)
        try:
            if slug:
                return Post.objects.get(slug=slug)
            return posts.first()
        except Post.DoesNotExist:
            raise NotFound("Post not found in this category.")


class SearchAPIView(APIView, PostPagination):

    def get(self, request, query, format=None):
        posts = Post.objects.filter(title__icontains=query)
        authors = Author.objects.filter(
            Q(user__first_name__icontains=query) | Q(user__last_name__icontains=query)
        )

        paginated_posts = self.paginate_queryset(posts, request)
        posts_data = PostSerializer(paginated_posts, many=True).data

        authors_data = AuthorSerializer(authors, many=True).data

        return self.get_paginated_response(
            {"posts": posts_data, "authors": authors_data}
        )


class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = PostPagination

    def get_queryset(self):
        # Lấy author_id từ URL
        author_id = self.kwargs.get("author_id")
        # Nếu author_id có giá trị, lọc các bài viết theo author_id
        if author_id:
            return Post.objects.filter(author_id=author_id)

        return Author.objects.all()


class AuthorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
