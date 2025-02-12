from .serializers import AuthorSerializer, PostSerializer, CategorySerializer
from .models import Author, Post, Category
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


class PostPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = "page_size"
    max_page_size = 100


# Create your views here.
@api_view(["GET", "POST"])
def post_list(request):
    if request.method == "GET":
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def post_detail(request, slug=None, category=None, four_post=None):
    try:
        if slug:
            post = Post.objects.get(slug=slug)
        elif category:
            posts = Post.objects.filter(category=category)[:1]
            serializer = PostSerializer(posts, many=True)
            return Response(serializer.data)
        elif four_post:
            posts = Post.objects.filter(category=four_post)[:4]
            serializer = PostSerializer(posts, many=True)
            return Response(serializer.data)

    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PostSerializer(post)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    pagination_class = PostPagination

    def get_queryset(self):
        # Lấy category_id từ URL
        category_id = self.kwargs.get("category_id")

        # Nếu category_id có giá trị, lọc các bài viết theo category_id
        if category_id:
            return Post.objects.filter(category_id=category_id)

        return Post.objects.all()


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = PostSerializer
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
