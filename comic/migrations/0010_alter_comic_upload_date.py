# Generated by Django 4.2.6 on 2023-11-07 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0009_alter_user_history_comic_alter_user_history_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comic',
            name='upload_date',
            field=models.DateTimeField(),
        ),
    ]