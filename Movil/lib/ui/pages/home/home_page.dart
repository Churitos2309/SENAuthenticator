import 'package:flutter/material.dart';
import 'package:reconocimiento_app/ui/pages/camera/camera_page.dart';
import 'package:reconocimiento_app/ui/pages/history/history_page.dart';
import 'package:reconocimiento_app/ui/pages/home/post_section.dart';
import 'package:reconocimiento_app/ui/pages/home/story_section.dart';
import 'package:reconocimiento_app/ui/pages/objets/objets_page.dart';
import 'package:reconocimiento_app/ui/pages/profile/profile_page.dart';
import 'package:reconocimiento_app/ui/pages/report/report_page.dart';
import 'package:reconocimiento_app/ui/pages/search/search_page.dart';
import 'package:reconocimiento_app/ui/widgets/buttom_navigation.dart';

// Definicion de la clase MyHomePage, que extiende StatefulWidget.
// StatefulWidget significa que este widget tiene un estado mutable.
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

// Definicion del estado asociado a MyHomePage.
class _MyHomePageState extends State<MyHomePage> {
  // Indice de la pagina actual seleccionada en la barra de navegacion.
  int currentPage = 0;

  // Lista de widgets que representan las paginas de la aplicacion.
  final List<Widget> pages = [
    const HomePage(),
    const SearchPage(),
    const ObjetsPage(),
    const CameraPage(),
    const HistoryPage(),
    const ProfilePage(),
    const ReportPage(),

    // Agrega mas paginas aqui si es necesario.
  ];

  // Funcion que se llama cuando se selecciona una pagina en la barra de navegacion.
  void onPageSelected(int index) {
    setState(() {
      currentPage = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    // Retorna un Scaffold que contiene la estructura basica de la pagina.
    return Scaffold(
      // Cuerpo de la pagina, que muestra la pagina correspondiente al indice actual.
      body: pages[currentPage],
      // Barra de navegacion inferior.
      bottomNavigationBar: BottomNavigation(
        currentPage: currentPage,
        onPageSelected: onPageSelected,
      ),
    );
  }
}

// Definicion de la clase HomePage, que extiende StatelessWidget.
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    // Retorna un Scaffold que contiene la estructura básica de la página.
    return Scaffold(
      // Barra de la aplicación (AppBar) con iconos de acción.
      appBar: AppBar(
        title: const Image(image: AssetImage('images/login/LogoReconocimientoFacialBlanco.png')),
        actions: [
          IconButton(
            icon: const Icon(Icons.add_circle_outline),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.favorite_border),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.chat_bubble_outline),
            onPressed: () {},
          ),
        ],
      ),
      // Cuerpo de la pagina con un RefreshIndicator para refrescar el contenido.
      body: RefreshIndicator(
        onRefresh: () async {
          await Future.delayed(const Duration(seconds: 1));
        },
        child: const SingleChildScrollView(
          child: Column(
            children: [
              // Seccion de historias.
              StorySection(),
              Divider(),
              // Seccion de publicaciones.
              PostSection(),
            ],
          ),
        ),
      ),
    );
  }
}
