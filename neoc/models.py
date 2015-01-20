from django.db import models

# Create your models here.


class TodoListItem(models.Model):
    description = models.CharField(max_length=140, null=False)
    done = models.BooleanField(null=False, default=False)

class ContatosItem(models.Model):
    nome = models.CharField(max_length=100)
    fone = models.CharField(max_length=100)
    mfone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    #email = forms.EmailField()
    
    def __str__(self):
		return self.nome
