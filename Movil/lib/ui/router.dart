// router.dart
import 'package:flutter/material.dart';
import 'package:reconocimiento_app/services/auth_service.dart';
import 'package:reconocimiento_app/ui/pages/login/forgot_password_screen.dart';
import 'package:reconocimiento_app/ui/pages/login/login_screen.dart';
import 'package:reconocimiento_app/ui/pages/register/register_screen.dart';

class AppRouter {
  final AuthService authService;

  AppRouter({required this.authService});

  Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => LoginScreen(authService: authService));
      case '/register':
        return MaterialPageRoute(builder: (_) => RegisterScreen(authService: authService));
      case '/forgot-password':
        return MaterialPageRoute(builder: (_) => ForgotPasswordScreen(authService: authService));
      default:
        return MaterialPageRoute(builder: (_) => LoginScreen(authService: authService));
    }
  }
}
