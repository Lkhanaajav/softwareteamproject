from rest_framework import serializers
from event.models import Event, Location, Student, Order,OrderItem, accountSignUp
from decimal import Decimal

class StudentSerializer(serializers.ModelSerializer): 
    class Meta:
        model=Student
        fields = ['id', 'first_name', 'last_name', 'four_by_four','student_id', 'email','phone']

class LocationSerializer(serializers.ModelSerializer): 
    class Meta:
        model=Location
        fields = ['id', 'title']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields=['id', 'title', 'description', 'unit_price', 'inventory','price_with_tax', 'location' ]
    
    price_with_tax = serializers.SerializerMethodField(method_name='calculate_tax')
    

    def calculate_tax(self, event):
     return event.unit_price * Decimal(1.1)

class OrderSerializer(serializers.ModelSerializer): 
    class Meta:
        model=Order
        fields = ['id', 'payment_status', 'student']

class OrderItemSerializer(serializers.ModelSerializer): 
    class Meta:
        model=OrderItem
        fields = ['id','event','order', 'quantity', 'unit_price']
class SignupItemSerializer(serializers.ModelSerializer): 
    class Meta:
        model=accountSignUp
        fields = ['firstName','lastName','email','phone', 'password','rePassword']
class accountItemSerializer(serializers.ModelSerializer): 
    class Meta:
        model=accountSignUp
        fields = ['firstName','lastName','email','phone', 'password','rePassword']
