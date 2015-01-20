from django.conf.urls import url, include
from neoc import views
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'contatos', views.ContatosItemViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'^api', include(router.urls)),
    url(r'^', views.HomeView.as_view(), name="Home"),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

