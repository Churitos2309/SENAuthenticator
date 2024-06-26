// main.dart
import 'package:flutter/material.dart';
import 'package:reconocimiento_app/services/auth_service.dart';
import 'package:reconocimiento_app/ui/router.dart';

void main() {
  final authService = AuthService(apiUrl: 'http://127.0.0.1:8000/senauthenticator/crear_usuario');
  runApp(MyApp(authService: authService));
}

class MyApp extends StatelessWidget {
  final AuthService authService;

  const MyApp({super.key, required this.authService});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter App',
      onGenerateRoute: AppRouter(authService: authService).generateRoute,
    );
  }
}
