# Generated by Django 4.2.6 on 2023-11-03 01:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0007_rename_comic_id_user_collect_comic_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user_history',
            old_name='comic_id',
            new_name='comic',
        ),
        migrations.RenameField(
            model_name='user_history',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='user_like',
            old_name='comic_id',
            new_name='comic',
        ),
        migrations.RenameField(
            model_name='user_like',
            old_name='user_id',
            new_name='user',
        ),
    ]
