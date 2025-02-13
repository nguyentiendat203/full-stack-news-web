"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path

from . import views

urlpatterns = [
    path("post", views.PostList.as_view()),
    path("post/<slug:slug>", views.post_detail, name="post_detail"),
    path(
        "one-post/category/<int:category>",
        views.post_detail,
        name="post_detai_cate",
    ),
    path(
        "four-post/category/<int:four_post>",
        views.post_detail,
        name="four_posts_belongs_cate",
    ),
    path(
        "posts/category/<int:category_id>",
        views.PostList.as_view(),
        name="list_post_by_cate",
    ),
    path("post/latest/<int:six_latest>", views.post_detail, name="post_latest"),
    path(
        "post/search/<str:query>", views.SearchAPIView.as_view(), name="search_results"
    ),
    path("author", views.AuthorList.as_view()),
    path(
        "author/posts/<int:author_id>",
        views.AuthorList.as_view(),
        name="post_belongs_author",
    ),
    path("author/<int:pk>", views.AuthorDetail.as_view()),
    path("category", views.CategoryList.as_view()),
    path("category/<int:pk>", views.CategoryDetail.as_view()),
]
