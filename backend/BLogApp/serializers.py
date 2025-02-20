from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Author, Post, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
        ]


class AuthorSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    username = serializers.CharField(source="user.username")
    email = serializers.EmailField(source="user.email")

    class Meta:
        model = Author
        fields = "__all__"

    def get_full_name(self, obj):
        return obj.user.first_name + " " + obj.user.last_name


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    category_name = serializers.CharField(source="category.name")

    class Meta:
        model = Post
        fields = "__all__"
