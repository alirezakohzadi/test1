from django.db.models import Count
from rest_framework import serializers

from .models import Category


class CategorySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    product_count = serializers.IntegerField(read_only=True)
    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = [
            'id', 'name', 'slug', 'description', 'icon', 'image', 'is_featured',
            'badge', 'product_count', 'seo_title', 'seo_description',
            'canonical_url', 'og_image', 'meta_keywords', 'parent', 'children',
        ]

    def get_image(self, obj):
        return obj.image.url if obj.image else ''

    def get_children(self, obj):
        children = obj.children.filter(is_active=True).annotate(product_count=Count('products'))
        return CategorySerializer(children, many=True, context=self.context).data
