import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:reconocimiento_app/ui/pages/home/home_page.dart';
import 'package:reconocimiento_app/ui/pages/register/register_screen.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}


// Estado interno de la clase Login
class _LoginState extends State<Login> {
  // Controladores para los campos de texto
  TextEditingController documentNumberController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  // Variable para almacenar el tipo de documento seleccionado
  String selectedDocumentType = 'Cédula de ciudadanía';

  // Lista de tipos de documentos
  List<String> documentTypes = [
    'Cédula de ciudadanía',
    'Tarjeta de identidad',
    'Cédula de extranjería'
  ];

  // Llave para el formulario
  final _formKey = GlobalKey<FormState>();

  // Método para autenticar al usuario
  void _login() {
    // Verificar si el formulario es válido
    if (_formKey.currentState!.validate()) {
      // Obtener los valores de los campos de texto
      String documentNumber = documentNumberController.text;
      String password = passwordController.text;

      // Autenticación (en este caso, hardcodeada)
      if (documentNumber == '123' && password == '123') {
        // Mostrar diálogo de confirmación
        showDialog(
          context: context,
          barrierDismissible: false,
          builder: (BuildContext context) {
            // Cerrar el diálogo después de 1 segundo
            Future.delayed(const Duration(seconds: 1), () {
              Navigator.of(context).pop(true); // Cierra el modal
            });
            return const AlertDialog(
              title: Text('Inicio de sesión exitoso'),
              content: Text('Sesión iniciada con éxito.'),
            );
          },
        ).then((_) {
          // Navegar a la pantalla de inicio
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const MyHomePage()),
          );
        });
      } else {
        // Mostrar mensaje de error si la autenticación falla
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
              content: Text('Número de documento o contraseña incorrectos')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // Construir la interfaz de usuario
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.green,
        body: SingleChildScrollView(
          child: Stack(
            children: [
              // Logo en la esquina superior izquierda
              Positioned(
                top: 0,
                left: 0,
                child: Image.asset(
                    'images/login/LogoReconocimientoFacialBlanco.png',
                    height: 50),
              ),
              // Logo en la esquina superior derecha
              Positioned(
                top: 0,
                right: 0,
                child: Image.asset('images/login/logoSenaBlanco.png', height: 50),
              ),
                
              // Contenedor blanco con bordes redondeados
              Container(
                decoration: BoxDecoration(
                    color: Colors.white, borderRadius: BorderRadius.circular(20)),
                margin: const EdgeInsets.only(
                    top: 100, left: 20, right: 20, bottom: 50),
                padding: const EdgeInsets.only(left: 20, right: 20),
                child: Center(
                  child: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        // Título "Ingreso Usuario Registrado"
                        const Text("Ingreso Usuario Registrado"),
                        const SizedBox(height: 20),
                        // Selección de tipo de documento
                        const Text("Tipo de documento"),
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[200],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: DropdownButton<String>(
                            isExpanded: true,
                            value: selectedDocumentType,
                            onChanged: (String? newValue) {
                              setState(() {
                                selectedDocumentType = newValue!;
                              });
                            },
                            items: documentTypes
                                .map<DropdownMenuItem<String>>((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: Text(value),
                              );
                            }).toList(),
                            underline: const SizedBox(), // Remove the underline
                          ),
                        ),
                        const SizedBox(height: 20),
                        // Campo de texto para número de documento
                        const Text("Número de documento"),
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[200],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: TextFormField(
                            controller: documentNumberController,
                            decoration: const InputDecoration(
                                border: InputBorder.none,
                                hintText: "Número de documento"),
                            inputFormatters: <TextInputFormatter>[
                              FilteringTextInputFormatter.digitsOnly
                            ],
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Por favor ingrese su número de documento';
                              }
                              return null;
                            },
                          ),
                        ),
                        const SizedBox(height: 20),
                        // Campo de texto para contraseña
                        const Text("Contraseña"),
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[200],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: TextFormField(
                            controller: passwordController,
                            obscureText: true,
                            decoration: const InputDecoration(
                                border: InputBorder.none, hintText: "Contraseña"),
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Por favor ingrese su contraseña';
                              }
                              return null;
                            },
                          ),
                        ),
                        const SizedBox(height: 50),
                        // Botón "Iniciar sesión"
                        Container(
                          width: 200,
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              borderRadius: BorderRadius.circular(10)),
                          child: TextButton(
                            onPressed: _login,
                            child: const Text(
                              "Iniciar sesión",
                              style: TextStyle(color: Colors.white, fontSize: 20),
                            ),
                          ),
                        ),
                        const SizedBox(height: 20),
                        // Enlace "¿Olvidaste tu contraseña?"
                        TextButton(
                          onPressed: () {},
                          child: const Text(
                            "¿Olvidaste tu contraseña?",
                            style: TextStyle(color: Colors.blue),
                          ),
                        ),
                        const SizedBox(height: 20),
                        // Enlace "¿Deseas registrarte?"
                        TextButton(
                          onPressed: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => const RegisterScreen()));
                          },
                          child: const Text(
                            "¿Deseas registrarte?",
                            style: TextStyle(color: Colors.blue),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
