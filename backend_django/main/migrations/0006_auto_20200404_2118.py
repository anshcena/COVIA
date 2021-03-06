# Generated by Django 2.2.11 on 2020-04-04 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20200325_1536'),
    ]

    operations = [
        migrations.AddField(
            model_name='selfcheckupmodel',
            name='fingerprint',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='selfcheckupmodel',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='selfcheckupmodel',
            name='age',
        ),
        migrations.RemoveField(
            model_name='selfcheckupmodel',
            name='ip',
        ),
        migrations.RemoveField(
            model_name='selfcheckupmodel',
            name='request',
        ),
    ]
