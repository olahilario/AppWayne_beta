from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
import os

# Create your models here.

class CustomUserManager(BaseUserManager):
  def create_user(self, email, password=None, **extra_fields):
    if not email:
      raise ValueError('Email is a required field.')
    
    email = self.normalize_email(email)
    user = self.model(email=email, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, email, password=None, **extra_fields):
    extra_fields.setdefault('is_staff', True)
    extra_fields.setdefault('is_superuser', True)
    return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
  email = models.EmailField(max_length=200, unique=True)
  birthday = models.DateField(null=True, blank=True)
  username = models.CharField(max_length=200, null=True, blank=True)

  objects = CustomUserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []

@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
  siteLink = "http://localhost:5173/"
  token = reset_password_token.key
  full_link = str(siteLink)+str('password-reset/')+str(token)
  print(token)
  print(full_link)

  context = {
    'full_link' : full_link,
    'email_address' : reset_password_token.user.email
  }

  html_message = render_to_string("backend/email.html", context=context)
  plain_message = strip_tags(html_message)

  msg = EmailMultiAlternatives(
    subject = f'Lembrete para o {reset_password_token.user.email} - cidadão de Gothan.',
    body = plain_message,
    from_email = os.environ.get('batman_email'),
    to=[reset_password_token.user.email]
  )

  msg.attach_alternative(html_message, 'text/html')
  msg.send()