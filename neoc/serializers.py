from rest_framework import serializers
import models


class ContatosItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContatosItem
