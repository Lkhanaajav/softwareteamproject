from django.db import models
from django.core.validators import MinValueValidator
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser

class Location(models.Model):
    title=models.CharField(max_length=255)
    featured_event = models.ForeignKey('Event', on_delete=models.SET_NULL, null =True, blank=True,related_name='+')
    def __str__(self) -> str:
        return self.title
    class Meta: 
        ordering=['title']
    

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    unit_price = models.DecimalField(max_digits=5, decimal_places=2, 
    validators=[MinValueValidator(1, message="cannot be less than 1")])
    inventory = models.IntegerField()
    date = models.DateTimeField(auto_now_add = True)
    location = models.ForeignKey(Location, on_delete = models.PROTECT)


class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    four_by_four = models.CharField(max_length=8)
    student_id = models.CharField(max_length=9)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)
    date_birth = models.DateField(null=True)

class Order(models.Model):
    PAYMENT_STATUS_PENDING = 'P'
    PAYMENT_STATUS_COMPLETE = 'C'
    PAYMENT_STATUS_FAILED = 'F'
    PAYMENT_STATUS_CHOICES = [
        (PAYMENT_STATUS_PENDING, 'Pending'),
        (PAYMENT_STATUS_COMPLETE, 'Complete'),
        (PAYMENT_STATUS_FAILED, 'Failed'),
    ]
    placed_at = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(max_length=1, choices=PAYMENT_STATUS_CHOICES, default=PAYMENT_STATUS_PENDING)
    student = models.ForeignKey(Student, on_delete = models.CASCADE)



class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.PROTECT)
    event = models.ForeignKey(Event, on_delete = models.PROTECT)
    quantity = models.PositiveSmallIntegerField()
    unit_price= models.DecimalField(max_digits=6, decimal_places=2)
class Cart(models.Model):
    created_dat=models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    cart = models.ForeignKey(Cart,on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField()
class accountSignUp(models.Model):
    firstName=models.CharField(max_length=255)
    lastName=models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    rePassword=models.CharField(max_length=255)


