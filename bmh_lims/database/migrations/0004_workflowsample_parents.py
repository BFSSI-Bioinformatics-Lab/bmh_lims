# Generated by Django 3.0.10 on 2020-09-29 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0003_auto_20200925_2001'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflowsample',
            name='parents',
            field=models.ManyToManyField(blank=True, related_name='_workflowsample_parents_+', to='database.WorkflowSample'),
        ),
    ]