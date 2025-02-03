from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


# Model Author
class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="authors")
    bio = models.TextField(null=True, blank=True)
    website_url = models.URLField(null=True, blank=True)
    facebook_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.user.username


# Model cho thể loại bài viết
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


# Model cho bài viết (Post)
class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    author = models.ForeignKey(
        Author, on_delete=models.SET_NULL, null=True, related_name="posts"
    )
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, related_name="posts"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-created_at"]


# Model Comment
class Comment(models.Model):
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author} on {self.post.title}"

    class Meta:
        ordering = ["-created_at"]
