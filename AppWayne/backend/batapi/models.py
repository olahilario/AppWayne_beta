from django.db import models

# Create your models here.

class Desire(models.Model):
  title = models.CharField(max_length=50)
  description = models.CharField(max_length=256)
  deadline = models.DateField()

  def __str__(self):
    return self.title


class BatGuest(models.Model):
  name = models.CharField(max_length=100, blank=False)
  why = models.CharField(max_length=256, blank=False)
  email = models.CharField(max_length=100, blank=False)
  phone = models.CharField(max_length=50, blank=False)
  date = models.CharField(max_length=50, blank=False)
  aproved = models.BooleanField(default=False)

  def __str__(self):
    return self.name

class Patent(models.Model):
  name = models.CharField(max_length=100, blank=False, null=False)
  country = models.CharField(max_length=100, blank=False, null=False)
  mvp = models.CharField(max_length=10, blank=False, null=False)
  price = models.FloatField(blank=False, null=False)
  author = models.CharField(max_length=100, blank=False, null=False)

  def __str__(self):
    return self.name

class Task(models.Model):
  name = models.CharField(max_length=100)
  complete = models.BooleanField(default=False)

  def __str__(self):
    return self.name