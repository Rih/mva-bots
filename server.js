var restify = require('restify');
var builder = require('botbuilder');
var dotenv = require('dotenv');
var mysql = require('mysql');
// Levantar restify
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});


// No te preocupes por estas credenciales por ahora, luego las usaremos para conectar los canales.
var connector = new builder.ChatConnector({
     appId: 'b82b7496-7164-46c0-9887-392ac840da61',//'a6395f58-0d10-40a3-9025-003eb4ad61a1',
    appPassword: 'h6Fgd6nKnoSZ20bym9DF0oa' //'f8ZhQOrpkkvx2zJMT9dWB4E'
});

// Ahora utilizamos un UniversalBot
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Para utilizar variables de entorno
dotenv.config();

var luisApp = process.env.LUIS_APP;
var luisKey = process.env.LUIS_KEY;


// Serve a static web page
server.get(/.*/, restify.serveStatic({
	'directory': '.',
	'default': 'index.html'
}));

//cards = require('./dataOTEC.json');
cardsCourses = 
[
    { id: 3388,
      title: 'Liderazgo',
      summary: '..',
      image_thumbnail: 'https://s3.amazonaws.com/ctv.videoservice.prod/institutions/test/58ff9c5391a83adf4d000001/ctv-como-navegar-pentavida.jpg',
      view_count: 22 },
    { id: 3385,
      title: 'Técnicas para reuniones y presentaciones efectivas en el ámbito laboral',
      summary: 'Objetivo: Que los alumnos sean capaces de aplicar técnicas para reuniones y presentaciones efectivas en el ámbito laboral.',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/institutions/717/courses/3385/264de6c1c175ceb9304326cace7e4119.png',
      view_count: 31 },
    { id: 3384,
      title: ' Técnicas de trabajo en equipo en el ámbito laboral',
      summary: '.',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/institutions/717/courses/3384/2e1314ad7ac48a2c5db41921244773d2.png',
      view_count: 14 },
    { id: 3294,
      title: 'otec material',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 4 },
    { id: 3149,
      title: 'Herramientas para la gestión de proyectos en el ámbito laboral',
      summary: 'El objetivo general es que los estudiantes sean capaces de emplear herramientas para la gestión de proyectos en el ámbito laboral.',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/img/assets/courses/3149/1e7e3e6051a964317eaa2c84edb6cd73.png',
      view_count: 137 },
    { id: 3145,
      title: 'Técnicas de servicio al cliente en el ámbito laboral',
      summary: 'OBJETIVO GENERAL: \r\nQue los estudiantes sean capaces de aplicar técnicas para un adecuado servicio al cliente en el ámbito laboral.\r\n',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/img/assets/courses/3145/4e0eb68137cddbbd2872f1758ccb1250.png',
      view_count: 109 },
    { id: 3144,
      title: 'Servicio al cliente',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3129,
      title: 'Técnicas para una comunicación efectiva ',
      summary: 'Que los estudiantes sean capaces de aplicar herramientas de la comunicación efectiva en el ámbito laboral.',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/img/assets/courses/3129/ce2c6b28c75c682ce3b57690121de1c2.png',
      view_count: 101 },
    { id: 3116,
      title: 'Excel Avanzado',
      summary: 'N/A',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/institutions/717/courses/3116/40600cccf6bddfd17f93b0a807e33398.png',
      view_count: 21 },
    { id: 3115,
      title: 'Excel Intermedio',
      summary: ',',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/institutions/717/courses/3115/6754d937c6c42371ed2543cba4b46d65.png',
      view_count: 39 },
    { id: 3073,
      title: 'Herramientas para el uso de  Excel nivel básico',
      summary: 'OBJETIVO GENERAL: Que los alumnos sean capaces de emplear las herramientas básicas de Excel en el ámbito laboral.\r\n',
      image_thumbnail: 'https://s3.amazonaws.com/uploads.classroom.tv/uploads/img/assets/courses/3073/7954ca3c57ad5d2e2a71a7200cc9240e.png',
      view_count: 203 },
    { id: 3072,
      title: 'Evaluación final',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3071,
      title: 'Módulo 9: Delegaciones y reuniones efectivas',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3070,
      title: 'Módulo 8: Planificación personal',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3069,
      title: 'Módulo 7: Disciplina y efectividad laboral',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3068,
      title: 'Módulo 6: Planificación efectiva',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3067,
      title: 'Módulo 5: Actividad, Productividad y Ejecución Efectiva',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3066,
      title: 'Módulo 7: Disciplina y efectividad laboral',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3065,
      title: 'Módulo 6: Planificación efectiva',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 },
    { id: 3064,
      title: 'Módulo 5: Actividad, Productividad y Ejecución Efectiva',
      summary: '.',
      image_thumbnail: 'https://img.youtube.com/vi//default.jpg',
      view_count: 1 }
];

cardsMovil = [
    { 
        title:'ClassroomTV Móvil',
        summary:'Disponible para iOS y Android',
        description:'Descarga tu aplicación y accede a nuestra versión Móvil. Realiza tus pruebas, revisa documentos y disfruta de tus Videos desde tu dispositivo móvil.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/gratis.jpg',
    },
    { 
        title:'ClassroomTV Móvil',
        summary:'Se utiliza con tu cuenta CTV',
        description:'Classroom está disponible para usuarios que tengan una cuenta en ClassroomTV. Puedes crear una cuenta con nosotros de forma muy fácil y gratuita. Classroom está disponible para usuarios que tengan una cuenta en ClassroomTV. Puedes crear una cuenta con nosotros de forma muy fácil y gratuita.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/Cuenta_CTV-01.png',
    },
    { 
        title:'ClassroomTV Móvil',
        summary:' Programas',
        description:'Explora los distintos programas y cursos en los que has sido registrado, cada uno de ellos contiene clases, materiales de estudio, actividades y evaluaciones que podrás realizar fácilmente para completarlo.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/Programas.png',
    },
    { 
        title:'ClassroomTV Móvil',
        summary:'  Actualizado',
        description:'La app de ClassroomTV se actualiza para ir mejorando cada vez más y adaptándose a los cambios.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/ctv_movil_actualizado.jpg',
    },
     { 
        title:'ClassroomTV Móvil',
        summary:'Disponible en tu celular o tablet ',
        description:'No importa el dispositivo que utilices, siempre tendrás acceso a ClassroomTV.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/disponible_celular.png',
    },
     { 
        title:'ClassroomTV Móvil',
        summary:'Idiomas',
        description:'La app de ClassroomTV se encuentra disponible tanto en español como en inglés.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/movil/idiomas.jpg',
    },
];


cardsStreaming = [
    { 
        title:'ClassroomTV Live',
        summary:'ClassroomTV Live',
        description:'¡No te pierdas de nada! Hemos incorporado nuestra versión LIVE, donde tus clases y capacitaciones son en Streaming. Podrás chatear con tus profesores e interactuar con otros usuarios, mientras sigues disfrutando de tu Plataforma de siempre.',
        image_thumbnail:'',
    },
    { 
        title:'ClassroomTV Live',
        summary:'Chat',
        description:'Permite interactuar en el momento oportuno. Podrás hacer y responder preguntas o compartir opiniones con otros usuarios y con los relatores presentes en la charla, gracias al chat incorporado en ClassroomTV LIVE.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/chat-01.png',
    },
    { 
        title:'ClassroomTV Live',
        summary:'Aumenta la Participación',
        description:'ClassroomTV LIVE no deja de lado la opinión de los usuarios; ellos quieren más participación en sus clases y capacitaciones. Gracias a la transmisión en vivo y el chat incorporado que ofrece Streaming, la experiencia será: ¡como estar ahí!',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/participacion-2.jpeg',
    },
    { 
        title:'ClassroomTV Live',
        summary:'Almacenamiento en la nube',
        description:'Todo lo transmitido en Streaming se guarda para quedar a tu disposición y poder ser visto en otro momento, así como las diapositivas sincronizadas y el historial de interacción del chat.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/archiva_informacion-01.png',
    },
     { 
        title:'ClassroomTV Live',
        summary:'Libertad Creativa',
        description:'¡La creatividad es el límite! Puedes utilizar este servicio para emitir charlas, ilustrar servicios o generar conferencias expertas sobre temas de interés',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/Libertad_creativa.jpg',
    },
     { 
        title:'ClassroomTV Live',
        summary:'Clases en tiempo real',
        description:'CTV LIVE no te hace esperar por tu conocimiento. Te permite participar de una clase, charla o conferencia en tiempo real, desde cualquier lugar, como si estuvieras en la sala de clases incluyendo preguntas del profesor/orador para que los espectadores la respondan en vivo, tal como una clase presencial.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/clases_en_tiempo_real.jpg',
    },
    { 
        title:'ClassroomTV Live',
        summary:'Sin límite de espectadores',
        description:'A diferencia de una clase presencial, en ClassroomTV LIVE no hay límite de espectadores, todos pueden conectarse al momento de dictarse la clase o charla, sin importar cuantos sean, ni donde estén.',
        image_thumbnail:'https://www.classroomtv.com/img/pages/live/university-105709_1280.jpg',
    },
];


// Crear un procesador LUIS que apunte a nuestro modelo en el root (/)
//https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ddfd35d8-36f5-4260-bd5d-ba307c2d2d7a?subscription-key=98fd554ddf0947a18ddb48da521ac841&verbose=true&timezoneOffset=0&q=
var model = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/${luisApp}?subscription-key=${luisKey}&timezoneOffset=0.0&verbose=true`;

var recognizer = new builder.LuisRecognizer(model);
var dialog = new builder.IntentDialog({ recognizers: [recognizer] });
bot.dialog('/', dialog);

// Agregamos nuestro middleware

bot.use({
    botbuilder: function (session, next) {
        logMensajeEntrante(session, next);
    },
    send: function (event, next) {
        logMensajeSaliente(event, next);
    }
});

// Dialogos
bot.dialog('/common', [
    function (session) {
        

        builder.Prompts.text(session, '¿Cómo te llamas loco?');

    },
    function (session, results) {
        var msj = results.response;
        session.userData.name = results.response;
        session.send(`Hola ${msj}!`);
    }
]).beginDialogAction('preguntarEdadDialogAction', 'preguntarEdad', { matches: /^edad$/i })
  .beginDialogAction('preguntarMenuDialogAction', 'preguntarMenu', { matches: /^menu$/i })
  .beginDialogAction('preguntarBotonDialogAction', 'preguntarBoton', { matches: /^boton$/i })
  .beginDialogAction('preguntarCotizacionDialogAction', 'preguntarCotizacion', { matches: /^cotizacion$/i })
  .beginDialogAction('carouselMovilDialogAction', 'movilCTV', { matches: /^movil$/i })
  .beginDialogAction('carouselLiveDialogAction', 'liveCTV', { matches: /^live$/i })
  .beginDialogAction('tarjetaDialogAction', 'tarjeta', { matches: /^tarjeta$/i })
  .beginDialogAction('carouselDialogAction', 'cursosOTEC', { matches: /^cursos$/i });




dialog.matches('PotentialClient',[
    function (session, results, next) {
        if(!session.userData.name){
          fetchRecords();
          builder.Prompts.text(session, '¿Cómo te llamas?');
        }else{
            next();
        }
    },
    function (session, results) {
        session.userData.name = results.response;
        builder.Prompts.text(session, 'Indicanos tu email por favor');
    },
    function (session, results) {
        session.userData.email = results.response;
        builder.Prompts.number(session, 'Indicanos tu teléfono de contacto');
    },
    function (session, results) {
        session.userData.phone = results.response;
        builder.Prompts.choice(session, '¿Perteneces a alguna empresa?', 'Si|No', { listStyle: builder.ListStyle.button });
    },
    function (session, results, next) {
        session.userData.belongsTocompany = results.response.entity;
        if(session.userData.belongsTocompany == "Si"){
            builder.Prompts.text(session, '¿Cuál es tu empresa?');
        }else{
            next();
        }
    },
    function (session, results) {
        session.userData.company = results.response;
        builder.Prompts.choice(session, '¿Algún servicio interesado?', 'Crear mi propia escuela virtual|Diseñar y construir un curso|Importar o curar un curso existente|Promocion y marketing|Distribución', { listStyle: builder.ListStyle.button });

    },
    function (session, results) {
        session.userData.service = results.response.entity;
        builder.Prompts.text(session, '¿Tienes cursos online? ¿dónde podemos verlo?');
    },
    function (session, results) {
        session.userData.hasCourses = results.response;
        builder.Prompts.text(session, '¿Cómo planeas usar tu plataforma de educación online?');
    },
    function (session, results) {
        session.userData.planCourses = results.response;
        builder.Prompts.number(session, '¿Cúal es su presupuesto?');
    },
    
    function (session, results) {
        session.userData.budget = results.response;
        builder.Prompts.confirm(session, '¿Quieres ver un resumen?');
    },
    function (session, results) {
        if (results.response) {
            console.log(session.userData);
            console.log(session.dialogData);
            session.endDialog(`Me contaste que... `);
            sendMailToSellers({"email":session.userData.email,"contentUser":session.userData});

        }
        else {
            session.endDialog('Adios!');
        }
    }
]);

// Ejemplo: menú
bot.dialog('preguntarMenu', [
    function (session) {
        builder.Prompts.choice(session, 'Estos son los temas que podemos conversar', 'Movil|Streaming|Cursos');
    }
]);

// Ejemplo: botón
bot.dialog('preguntarBoton', [
    function (session) {
        builder.Prompts.choice(session, '¿Cuál es tu comida favorita?', 'Pizza|Pizza|Pizza', { listStyle: builder.ListStyle.button });
    },
    function (session, results) {
        session.endDialog('Obvio!');
    }
]);

// Ejemplo: tarjeta
bot.dialog('tarjeta', [
    function (session) {
        var heroCard = new builder.HeroCard(session)
            .title('Esta es una tarjeta de tipo Hero Card')
            .subtitle('Este es su correspondente subtítulo')
            .text('Sigan a Marcelo Felman en Twitter: @mfelman')
            .images([
                builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://www.classroomtv.com/user/account/login', 'Aprende')
            ]);

        // Adjuntamos la tarjeta al mensaje
        var msj = new builder.Message(session).addAttachment(heroCard);
        session.send(msj);
    }
]);

// Ejemplo: carousel
dialog.matches('ShowCourses', [
    function (session, args, next) {
        var HeroCards = [];
        
        console.log(cardsCourses);

        cardsCourses.forEach(function(row){
            hero = new builder.HeroCard(session)
                    .title(row.title)
                    .subtitle(row.summary)
                    .text('Total visto: ' + row.view_count.toString())
                    .images([
                        builder.CardImage.create(session, row.image_thumbnail)
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
                    ]);
                HeroCards.push(hero);
        });
        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(HeroCards);
        session.send("Este es el conjunto de tarjetas para cursos OTEC");
        session.send(msj);

    }
]);

dialog.matches('ShowMovil',[
    function (session) {
        var HeroCards = [];
        
        console.log(cardsMovil);

        cardsMovil.forEach(function(row){
            hero = new builder.HeroCard(session)
                    .title(row.title)
                    .subtitle(row.summary)
                    .text(row.description)
                    .images([
                        builder.CardImage.create(session, row.image_thumbnail)
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
                    ]);
                HeroCards.push(hero);
        });

        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(HeroCards);
        session.send("Este es el conjunto de tarjetas con información de la App Movil");
        session.send(msj);
    }
]);

dialog.matches('ShowLive',[
    function (session) {
        var HeroCards = [];
        
        console.log(cardsStreaming);

        cardsStreaming.forEach(function(row){
            hero = new builder.HeroCard(session)
                    .title(row.title)
                    .subtitle(row.summary)
                    .text(row.description)
                    .images([
                        builder.CardImage.create(session, row.image_thumbnail)
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
                    ]);
                HeroCards.push(hero);
        });
        var msj = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel).attachments(HeroCards);
        session.send("Este es el conjunto de tarjetas con información del servicio de Streaming");
        session.send(msj);
    }
]);

//Este es el Default, cuando LUIS no entendió la consulta.
dialog.onDefault(builder.DialogAction.send("No entendí. Me lo decís de nuevo pero de otra manera, por favor?"));


// Esta es la lógica de ejecución del middlware
function logMensajeEntrante(session, next) {
    console.log('Estamos grabando: ' + session.message.text);
    next();
}

function logMensajeSaliente(event, next) {
    console.log(event.text);
    next();
}

/*
HOW-TO
  npm install sendgrid-nodejs
  echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
  echo "sendgrid.env" >> .gitignore
  source ./sendgrid.env 

*/
function sendMailToSellers(data, info){
        var helper = require('sendgrid').mail;
        var fromEmail = new helper.Email(data.email);
        var toEmail = new helper.Email("rodrigo.diaz@classroomtv.com");
        var subject = 'Cotizacion';
        var dataFromUser = data.contentUser;
        var contentBody = 'Hola te ha llegado un mensaje desde el Chat, ';
         contentBody += 'El usuario llamado ' + dataFromUser.name + '\n';
         contentBody += 'Este prospecto ' + '\n';
         contentBody += ((dataFromUser.belongsTocompany)? 'Pertenece a la empresa '+dataFromUser.company : 'es persona natural.' ) + '\n';
         contentBody += 'El servicio al que esta interesado: ' + dataFromUser.service + '\n';
         contentBody += 'cursos anteriores: ' + dataFromUser.hasCourses+ '\n';
         contentBody += 'Su contacto es: ' + dataFromUser.phone+ '\n';
         contentBody += 'Planes asociados: ' + dataFromUser.planCourses+ '\n';
         contentBody += 'Su presupuesto consta de $ ' + dataFromUser.budget+ '\n';
         contentBody += 'Favor contactarlo dentro de las proximas 48 horas'+ '\n';
         contentBody += 'equipo ClassroomTV';

         content = new helper.Content('text/plain', contentBody);
         mail = new helper.Mail(fromEmail, subject, toEmail, content);


        var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON()
        });

        sg.API(request, function (error, response) {
          if (error) {
            console.log('Error response received');
          }
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
        });
}


function fetchRecords(){
    var query = 'SELECT c.id, c.title, c.summary, c.image_thumbnail, c.view_count  FROM ctv_courses c ' +
            'WHERE c.institution_id = 717 ORDER BY c.id DESC LIMIT 20 ';
        
        console.log(process.env.DB_HOST);
        console.log(process.env.DB_USERNAME);
        console.log(process.env.DB_PASSWORD);
        console.log(process.env.DB_DATABASE);
        /*var heroCard = new builder.HeroCard(session)
                    .title('Esta es una tarjeta de tipo Hero Card')
                    .subtitle('Este es su correspondente subtítulo')
                    .text('Sigan a Marcelo Felman en Twitter: @mfelman')
                    .images([
                        builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, 'https://docs.botframework.com/en-us/', 'Aprende')
                    ]);
                cards.push(heroCard);*/
        // Adjuntamos la tarjeta al mensaje
        var dataBase = mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE
        });

        dataBase.connect();
        var result = dataBase.query(query);
        
        result.on('error', function(err) {
            console.log(err);
              throw err;
        });

        result.on('result',function(row){
            data = {"id": row.id, "title": row.title, "summary":row.summary, "image_thumbnail":row.image_thumbnail,"view_count":row.view_count};
            //cards.push(data);
            console.log(data);
            return data;
        });


        dataBase.end();
}