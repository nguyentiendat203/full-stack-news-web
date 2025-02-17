import django_filters
from BLogApp.models import Post


class PostsFilter(django_filters.FilterSet):

    class Meta:
        model = Post
        fields = {"title": ["icontains"]}
