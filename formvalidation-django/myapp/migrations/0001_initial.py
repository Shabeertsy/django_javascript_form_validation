# Generated by Django 4.1.4 on 2022-12-19 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Student",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("reg", models.IntegerField()),
                ("name", models.CharField(max_length=50)),
                ("department", models.CharField(max_length=50)),
                ("address", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("task", models.CharField(max_length=200)),
                ("date", models.DateField()),
                ("expire", models.IntegerField()),
            ],
        ),
    ]
