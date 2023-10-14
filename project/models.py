from django.db import models

# Create your models here.

from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    lastname = models.CharField(max_length=200,blank=False, default='')
    email = models.EmailField()
    class Meta:
        db_table = "user"

