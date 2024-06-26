import 'dart:convert';

import 'package:http/http.dart' as http;

class AuthService {
  final String apiUrl;

  AuthService({required this.apiUrl});

  Future<http.Response> login(String username, String password) async {
    final response = await http.post(
      Uri.parse('$apiUrl/'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'username': username,
        'password': password,
      }),
    );
    return response;
  }

  Future<http.Response> register(String username, String password, String email) async {
    final response = await http.post(
      Uri.parse('$apiUrl/crear_usuario/'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'username': username,
        'password': password,
        'email': email,
      }),
    );
    return response;
  }

  Future<http.Response> getUserData(String token) async {
    final response = await http.get(
      Uri.parse('$apiUrl/crear_usuario/'),
      headers: <String, String>{
        'Authorization': 'Token $token',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
    return response;
  }

  Future<http.Response> getUserDetail(String token, int id) async {
    final response = await http.get(
      Uri.parse('$apiUrl/crear_usuario/$id/'),
      headers: <String, String>{
        'Authorization': 'Token $token',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
    return response;
  }

  Future<http.Response> forgotPassword(String email) {
    final url = Uri.parse('$apiUrl/forgot-password/');
    return http.post(
      url,
      body: {'email': email},
    );
  }
}
