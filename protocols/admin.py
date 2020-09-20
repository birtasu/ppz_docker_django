from django.contrib import admin
from .models import Protocol

# Register your models here.
class ProtocolAdmin (admin.ModelAdmin):
    list_display = [field.name for field in Protocol._meta.fields]

    class Meta:
        model = Protocol

admin.site.register(Protocol, ProtocolAdmin)