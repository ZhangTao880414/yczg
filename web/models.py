from django.db import models
#from __future__ import unicode_literals
# Create your models here.


class UserInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    phoneNumber = models.CharField(max_length=100)
    wxNumber = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    class Meta:
        verbose_name = u'联系信息'
        verbose_name_plural = verbose_name
        ordering = ['name', 'id']

    def __unicode__(self):
        return self.name