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
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)


urlpatterns = [
    path("posts", views.PostList.as_view()),
    path("posts/<slug:slug>", views.PostDetail.as_view(), name="post_detail"),
    path(
        "posts/category/first-post",
        views.PostDetail.as_view(),
        name="get_first_post_by_cate",
    ),
    path(
        "posts/category/four-posts",
        views.PostList.as_view(),
        name="get_four_posts_by_cate",
    ),
    path(
        "posts/category/<int:category_id>",
        views.PostList.as_view(),
        name="list_post_by_cate",
    ),
    path(
        "posts/author/<int:author_id>",
        views.PostList.as_view(),
        name="list_post_by_author",
    ),
    path(
        "posts/search/<str:query>", views.SearchAPIView.as_view(), name="search_results"
    ),
    path("author", views.AuthorList.as_view()),
    path("author/<int:pk>", views.AuthorDetail.as_view()),
    path("category", views.CategoryList.as_view()),
    path("category/<int:pk>", views.CategoryDetail.as_view()),
    path("users", views.UserList.as_view()),
    # ---------------------------------------------------------------------------------------------------------------
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    # Optional UI:
    path(
        "api/schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        "api/schema/redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
]
