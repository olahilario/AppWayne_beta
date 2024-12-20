# Generated by Django 5.1.2 on 2024-10-28 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('batapi', '0002_guestcitizen'),
    ]

    operations = [
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('why', models.CharField(max_length=256)),
                ('email', models.EmailField(max_length=100)),
                ('phone', models.CharField(max_length=11)),
            ],
        ),
        migrations.DeleteModel(
            name='GuestCitizen',
        ),
    ]
