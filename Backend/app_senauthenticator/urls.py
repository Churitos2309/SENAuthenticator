from django.urls import path, include,re_path
from rest_framework.documentation import include_docs_urls
from rest_framework import rouetrs
from app_senauthenticator import views

router_usuario = routers.DefaultRouter()
router_usuario.register(r'usuario', views.UsuarioView, 'usuario') 
# router_usuario.register(r'contactoEmergencia', views.UsuarioView, 'contactoEmergencia') 

urlpatterns = [
    path('v1/', include(router_usuario.urls)),
    path('docs/', include_docs_urls(title='Reconocimiento facial API')),
    re_path('login',views.login),
    re_path('register',views.register),
    re_path('profile',views.profile),
]