from django.db.models import Q
from django.utils import timezone
from rest_framework import generics

from .models import Banner
from .serializers import BannerSerializer


class BannerList(generics.ListAPIView):
    serializer_class = BannerSerializer
    pagination_class = None

    def get_queryset(self):
        now = timezone.now()
        queryset = Banner.objects.filter(is_active=True).filter(
            Q(start_date__isnull=True) | Q(start_date__lte=now),
            Q(end_date__isnull=True) | Q(end_date__gte=now),
        )
        position = self.request.query_params.get('position')
        if position:
            queryset = queryset.filter(position=position)
        return queryset.order_by('position', 'order')
