import 'package:flutter/material.dart';
import 'package:reconocimiento_app/ui/pages/login/login_screen.dart';

// Clase RegisterScreen que extiende de StatefulWidget
class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override

  // Estado interno de la clase RegisterScreen
  // ignore: library_private_types_in_public_api
  _RegisterScreenState createState() => _RegisterScreenState();
}

// Estado interno de la clase RegisterScreen
class _RegisterScreenState extends State<RegisterScreen> {
  // Variable para almacenar el tipo de documento seleccionado

  String _selectedDocumentType = 'Cédula Ciudadana';

  @override
  Widget build(BuildContext context) {
    // Construir la interfaz de usuario
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.green,
        body: SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Logo de Sena en blanco
                Image.asset('images/register/logoSenaBlanco.png', height: 100),
                const SizedBox(height: 20),
                // Contenedor blanco con bordes redondeados
                
                Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  
                  margin: const EdgeInsets.symmetric(horizontal: 20),
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // Título "Confirmemos que tu usuario no haya sido creado"
                      const Text(
                        'Confirmemos que tu usuario no haya sido creado',
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      
                      const SizedBox(height: 20),
                      // Selección de tipo de documento
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                
                            'Tipo de documento',
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.all(10),
                            decoration: BoxDecoration(
                              color: Colors.grey[200],
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: DropdownButton<String>(
                              isExpanded: true,
                              value: _selectedDocumentType,
                              onChanged: (String? newValue) {
                                setState(() {
                                  _selectedDocumentType = newValue!;
                                });
                              },
                              items: const [
                                DropdownMenuItem(
                                  value: 'Cédula Ciudadana',
                                  child: Text('Cédula Ciudadana'),
                                ),
                                DropdownMenuItem(
                                  value: 'Tarjeta de Identidad',
                                  child: Text('Tarjeta de Identidad'),
                                ),
                                DropdownMenuItem(
                                  value: 'Cédula de Extranjería',
                                  child: Text('Cédula de Extranjería'),
                                ),
                              ],
                              underline: const SizedBox(), // Remove the underline
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 20),
                      // Campo de texto para número de documento
                      const Text(
                        'Número de documento',
                        style: TextStyle(
                          fontSize: 18,
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.grey[200],
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const TextField(
                          decoration: InputDecoration(
                            border: InputBorder.none,
                            hintText: 'Número de documento',
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),
                      // Botón "Validar"
                      ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue[900],
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: () {
                          // Aquí hay que validar
                        },
                        child: const Text('Validar'),
                      ),
                      const SizedBox(height: 10),
                      // Botón "Regresar al inicio"
                      ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue[900],
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => const Login()));
                        },
                        child: const Text('Regresar al inicio'),
                
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
