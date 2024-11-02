# Generated by Django 5.1.2 on 2024-10-31 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('batapi', '0006_batguest_delete_guest'),
    ]

    operations = [
        migrations.CreateModel(
            name='Patent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('mvp', models.CharField(max_length=10)),
                ('price', models.FloatField()),
                ('author', models.CharField(max_length=100)),
            ],
        ),
    ]
