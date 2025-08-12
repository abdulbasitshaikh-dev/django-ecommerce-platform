from django.shortcuts import render
from django.http import HttpResponse
from store.models import Order, Product, Customer, Collection, OrderItem
from tags.models import Tag, TaggedItem
from django.db.models import Q, F
from django.db.models.aggregates import Aggregate, Count, Max, Min, Sum, Avg
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey


def home(request):
    # queryset = Order.objects.select_related(
    #     'customer').prefetch_related('orderitem_set').all().order_by('-placed_at')[:5]

    # queryset = OrderItem.objects.filter(
    #     product__id=1).aggregate(units_sold=Sum('quantity'))

    # content_type = ContentType.objects.get_for_model(Product)

    # queryset = TaggedItem.objects.select_related('tag').filter(
    #     content_type = content_type,
    #     object_id = 1
    # )

    # collection = Collection()
    # collection.title = 'New Collection'
    # collection.featured_product = Product(pk=1)
    # collection.save()
    

    return render(request, 'hello.html', {'name': 'Basit'})
