from django.contrib import admin
from web.models import *
# Register your models here.

class self_Admin(admin.ModelAdmin):
    list_display = ('name', 'phoneNumber', 'wxNumber', 'address')
    list_display_links = ('name', 'phoneNumber',)
    list_editable = ('name', 'phoneNumber')