from django.shortcuts import render

# Create your views here.

from django.views.generic.base import TemplateView
from rest_framework import viewsets
import serializers
import models

class ContatosItemViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    serializer_class = serializers.ContatosItemSerializer
    queryset = models.ContatosItem.objects.all()

class HomeView(TemplateView):
    template_name = "home.html"
