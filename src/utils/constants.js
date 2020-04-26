export const languages = [
  {name: 'python', 
  logo: 'https://res.cloudinary.com/dqttdaxfr/image/upload/c_scale,h_100/v1587927328/loggify/python.png',
  code: `import logging
  import auxiliary_module
  
  # create logger with 'spam_application'
  logger = logging.getLogger('spam_application')
  logger.setLevel(logging.DEBUG)
  # create file handler which logs even debug messages
  fh = logging.FileHandler('spam.log')
  fh.setLevel(logging.DEBUG)
  # create console handler with a higher log level
  ch = logging.StreamHandler()
  ch.setLevel(logging.ERROR)
  # create formatter and add it to the handlers
  formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
  fh.setFormatter(formatter)
  ch.setFormatter(formatter)
  # add the handlers to the logger
  logger.addHandler(fh)
  logger.addHandler(ch)
  
  logger.info('creating an instance of auxiliary_module.Auxiliary')
  a = auxiliary_module.Auxiliary()
  logger.info('created an instance of auxiliary_module.Auxiliary')
  logger.info('calling auxiliary_module.Auxiliary.do_something')
  a.do_something()
  logger.info('finished auxiliary_module.Auxiliary.do_something')
  logger.info('calling auxiliary_module.some_function()')
  auxiliary_module.some_function()
  logger.info('done with auxiliary_module.some_function()')`,
  },
  {name: 'java', 
    logo: 'https://res.cloudinary.com/dqttdaxfr/image/upload/c_scale,h_100/v1587927328/loggify/java.png',
    code: `
    package bitacora;
    
    import bitacora.subnivel.Control;
    import bitacora.subnivel.Utilidades;
    import bitacora.subnivel.under.InternalSys;
    import java.io.IOException;
    import java.io.PrintWriter;
    import java.io.StringWriter;
    import java.util.logging.ConsoleHandler;
    import java.util.logging.FileHandler;
    import java.util.logging.Handler;
    import java.util.logging.Level;
    import java.util.logging.Logger;
    import java.util.logging.SimpleFormatter;
    
    /**
     *
     * @author David
     */
    public class Bitacora {
    
        // Preparamos el log para cada paquete del proyecto, esto con el fin de capturar cada log
        // que se genere e irlo pasando al nivel superior hasta que encuentren un handler que los
        // maneje
        private final static Logger LOG_RAIZ = Logger.getLogger("bitacora");
        private final static Logger LOG_SUBNIVEL = Logger.getLogger("bitacora.subnivel");
        private final static Logger LOG_UNDER = Logger.getLogger("bitacora.subnivel.under");
    
        // El log para ESTA clase en particular
        private final static Logger LOGGER = Logger.getLogger("bitacora.Bitacora");
    
        public static void main(String[] args) {
            try {
                // Los handler (manejadores) indican a donde mandar la salida ya sea consola o archivo
                // En este caso ConsoleHandler envia los logs a la consola
                Handler consoleHandler = new ConsoleHandler();
                // Con el manejador de archivo, indicamos el archivo donde se mandaran los logs
                // El segundo argumento controla si se sobre escribe el archivo o se agregan los logs al final
                // Para sobre escribir pase un true para agregar al final, false para sobre escribir
                // todo el archivo
                Handler fileHandler = new FileHandler("./bitacora.log", false);
    
                // El formateador indica como presentar los datos, en este caso usaremos el formaro sencillo
                // el cual es mas facil de leer, si no usamos esto el log estara en formato xml por defecto
                SimpleFormatter simpleFormatter = new SimpleFormatter();
    
                // Se especifica que formateador usara el manejador (handler) de archivo
                fileHandler.setFormatter(simpleFormatter);
    
                // Asignamos los handles previamente declarados al log *raiz* esto es muy importante ya que
                // permitira que los logs de todas y cada una de las clases del programa que esten en ese paquete
                // o sus subpaquetes se almacenen en el archivo y aparescan en consola
                LOG_RAIZ.addHandler(consoleHandler);
                LOG_RAIZ.addHandler(fileHandler);
    
                // Indicamos a partir de que nivel deseamos mostrar los logs, podemos especificar un nivel en especifico
                // para ignorar informacion que no necesitemos
                consoleHandler.setLevel(Level.ALL);
                fileHandler.setLevel(Level.ALL);
    
                LOGGER.log(Level.INFO, "Bitacora inicializada");
    
                // Creamos los objetos de las otras clases
                Utilidades util = new Utilidades();
                Control control = new Control();
                InternalSys internalSys = new InternalSys();
    
                // Estas llamadas se registraran en el log
                LOGGER.log(Level.INFO, "Llamadas a los componentes del sistema");
    
                util.funcionDudosa();
                control.controlar();
                internalSys.llamadaSistema();
    
                LOGGER.log(Level.INFO, "Probando manejo de excepciones");
    
                try {
                    throw new Exception("ERROR DE CONTROL DE FLUJO DE PROGRAMA");
                } catch (Exception e) {
                    // Mediante el metodo getStack obtenemos el stackTrace de la excepcion en forma de un objecto String
                    // de modo que podamos almacenarlo en bitacora para su analisis posterior
                    LOGGER.log(Level.SEVERE, Bitacora.getStackTrace(e));
                }
            } catch (IOException ex) {
                LOGGER.log(Level.SEVERE, "Error de IO");
            } catch (SecurityException ex) {
                LOGGER.log(Level.SEVERE, "Error de Seguridad");
            }
        }
    
        /**
         * Esta funcion nos permite convertir el stackTrace en un String, necesario
         * para poder imprimirlos al log debido a cambios en como Java los maneja
         * internamente
         *
         * @param e Excepcion de la que queremos el StackTrace
         * @return StackTrace de la excepcion en forma de String
         */
        public static String getStackTrace(Exception e) {
            StringWriter sWriter = new StringWriter();
            PrintWriter pWriter = new PrintWriter(sWriter);
            e.printStackTrace(pWriter);
            return sWriter.toString();
        }
    }`,
  },
  {name: 'ruby', 
  logo: 'https://res.cloudinary.com/dqttdaxfr/image/upload/c_scale,h_100/v1587927328/loggify/ruby.png',
  code: `require 'logger'

  logger = Logger.new(STDOUT)
  logger.level = Logger::WARN
  
  logger.debug("Created logger")
  logger.info("Program started")
  logger.warn("Nothing to do!")
  
  path = "a_non_existent_file"
  
  begin
    File.foreach(path) do |line|
      unless line =~ /^(\w+) = (.*)$/
        logger.error("Line in wrong format: #{line.chomp}")
      end
    end
  rescue => err
    logger.fatal("Caught exception; exiting")
    logger.fatal(err)
  end`,
  }
];