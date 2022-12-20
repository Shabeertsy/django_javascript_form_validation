from django.db import models
import django.utils.timezone

# Create your models here.

# for add student


class Student(models.Model):

    reg = models.IntegerField()
    name = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    address = models.CharField(max_length=50)

    def __str__(self):
        return self.name

#    for to do


class Task(models.Model):
    task = models.CharField(max_length=200)
    date = models.DateField()
    expire=models.IntegerField()
   

    def __str__(self):
        return self.task
