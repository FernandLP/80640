package mx.uv;
import static spark.Spark.*;

public class App {
    public static void main( String[] args ) {
        System.out.println( "Hello World!" );
        get("/", 
            (request, response) -> "<h1>Hola mundo</h1>"
        );
        get("/ruta1", 
            (request, response) -> "<h1>Adios mundo</h1>"
        );
        get("/ruta2", 
            (request, response) -> "<h1>Whats up mundo</h1>"
        );
        get("/ruta3", 
            (request, response) -> "{'alumno':'ytguyhij','matricula':'weret','carrera':'asdf'}"
        );
    }
}
