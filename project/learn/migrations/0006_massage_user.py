# Generated by Django 2.0 on 2017-12-05 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0005_auto_20171205_1036'),
    ]

    operations = [
        migrations.AddField(
            model_name='massage',
            name='user',
            field=models.CharField(default=5, max_length=50),
            preserve_default=False,
        ),
    ]
