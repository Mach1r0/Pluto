# Generated by Django 5.0.3 on 2024-08-27 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='cep',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
