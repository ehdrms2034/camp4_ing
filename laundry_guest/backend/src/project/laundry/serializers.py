from rest_framework import serializers as sz
from .models import LaundryShop, LaundryItem, Like, Review


class LaundryShopSerializer(sz.ModelSerializer):
    class Meta:
        model = LaundryShop
#        fields = '__all__'
        fields = [
            'name', 'tel', 'information', 'operating_time', 'min_price', 'grade', 'delivery_dt'
        ]


class LaundryItemSerializer(sz.ModelSerializer):
    laundry_shop = sz.PrimaryKeyRelatedField(
        queryset=LaundryShop.objects.all())

    class Meta:
        model = LaundryItem
        fields = ('category', 'material', 'price', 'laundry_shop')


class LaundryShopDetailSerializer(sz.ModelSerializer):
    laundry_item = LaundryItemSerializer(many=True, read_only=True)

    class Meta:
        model = LaundryShop
        fields = [
            'name', 'tel', 'information', 'operating_time', 'min_price', 'grade', 'delivery_dt', 'laundry_item'
        ]
