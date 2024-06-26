import 'dart:convert';

import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl = "http://127.0.0.1:8000/senauthenticator/crear_usuario";

  Future<http.Response> createUser(String username, String email, String password) async {
    final url = Uri.parse('$baseUrl/crear_usuario/');
    final response = await http.post(
      url,
      headers: {"Content-Type": "application/json"},
      body: json.encode({
        'username': username,
        'email': email,
        'password': password,
      }),
    );
    return response;
  }

  Future<http.Response> getUser(int id) async {
    final url = Uri.parse('$baseUrl/crear_usuario/$id/');
    final response = await http.get(url);
    return response;
  }
}
