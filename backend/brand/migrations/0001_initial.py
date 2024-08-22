# Generated by Django 5.0.3 on 2024-08-19 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='brand-image')),
                ('description', models.CharField(blank=True, max_length=400, null=True)),
            ],
        ),
    ]
