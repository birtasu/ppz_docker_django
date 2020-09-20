from django.db import models

# Create your models here.
class Protocol(models.Model):
    instrument = models.CharField(max_length=30, blank=True, null=True, default=None)
    shift = models.CharField(max_length=1, blank=True, null=True, default=None)
    date = models.DateTimeField(auto_now_add=True, auto_now=False)
    theme = models.CharField(max_length=255, blank=True, null=True, default=None)
    unique_nmb = models.CharField(max_length=20, blank=True, null=True, default=None)

    def __str__(self):
        return self.instrument

    class Meta:
        verbose_name = 'Замовлення'
        verbose_name_plural = 'Замовлення'