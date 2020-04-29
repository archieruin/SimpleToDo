from django.db import models


class Task(models.Model):
    description = models.TextField()
    done = models.BooleanField(default=False)

    def __str__(self):
        if len(self.description) > 15:
            return f'{self.description[:15]}... {self.done}'
        return self.description + '' + str(self.done)
