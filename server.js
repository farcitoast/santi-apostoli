const path = require('path');
const fs = require('fs');
const archiver = require('archiver');
const express = require('express');
const exphbs  = require('express-handlebars');
const cheerio = require('cheerio');
const request = require('request');
const bodyParser = require('body-parser');
const device = require('express-device');

const port = 3000;
const app = express();
app.use(device.capture());

const URL = 'https://santi-apostoli.onrender.com'
//Codici calendari e categorie
const categorie = {
    u13: 30,
    u16: 34,
    libera_f: 40,
    libera_mista: 42
}
const calendari_inv = {
    va02: [categorie.u13,8120],
    va03: [categorie.u13,8123],
    va06: [categorie.u16,7787],
    va07: [categorie.u16,7788],
    va08: [categorie.u16,7791],
    va12: [categorie.libera_f,7796],
    va13: [categorie.libera_f,7797],
    va14: [categorie.libera_mista,7800],
    va15: [categorie.libera_mista,7802],
    va16: [categorie.libera_mista,7803],
    va17: [categorie.libera_mista,7806]
}; 

const calendari_prim = {
    va03: [categorie.u13,8334],
    va04: [categorie.u13,8335],
    va05: [categorie.u13,8336],
    va09: [categorie.u16,8347],
    va10: [categorie.u16,8349],
    va11: [categorie.u16,8352],
    va16: [categorie.libera_f,8362],
    va17: [categorie.libera_f,8363],
    va18: [categorie.libera_f,8366],
    va19: [categorie.libera_mista,8369],
    va20: [categorie.libera_mista,8372],
    va21: [categorie.libera_mista,8375],
    va22: [categorie.libera_mista,8376]
}; 

//Function to download and cache tables
function fetchTable(sport,category,calendar){
    request.post(new RequestOptions(sport,category,calendar), function(err, response, body) {     
        console.log("Updating calendar " + calendar);  

        if (!body){
            return;
        }
        const $ = cheerio.load(body);
        //console.log($.html());
        let calendar_rows = '';
        let rank_rows = '';        
        //CALENDARIO
        let n_righe = 0;
        $("tr[id^='row_sfida_']").each(function(i,element){
            //console.log(calendar, ' entered each loop');
            //al posto di $(element) posso anche usare $(this), è la stessa cosa
            if( $(this).children().eq(0).text() == "" ){
                $(this).children().eq(0).remove();
            }
            $(this).children().eq(0).remove(); // 'G.' column
            $(this).children().eq(6).remove(); // 'omologazione' column
            $(this).children().eq(6).remove(); // ics column
            //Cheerio, seppur simile a JQuery, non supporta la proprietà outerHTML, quindi non posso fare $(this).prop('outerHTML')
            //"If you want to return the outerHTML you can use $.html(selector)", preso dalla documentazione di Cheerio     
            calendar_rows += $.html( $(element) );
            //console.log(category,calendar,'righe calendario:',i);
            n_righe = i;
        }); 
        // console.log(calendar, ' EXIT each loop');
        if( n_righe>0 ){
            fs.writeFile('cache/table-'+calendar+'-CALENDAR.html', calendar_rows, (err) => {
                if (err)
                    console.log(err);
                console.log('table-'+calendar+'-CALENDAR has been saved!');
            });
        }
        else {
            console.log('table-'+calendar+': could not fetch table correctly...');
        }
        //CLASSIFICA
        n_righe = 0;
        $("tr:nth-of-type(2) > td > table tr[class=pari],tr:nth-of-type(2) > td > table tr[class=dispari]").each(function(i,element){
            rank_rows += $.html( $(element) );
            n_righe = i+1;
        });

        if( n_righe>0 ){
            fs.writeFile('cache/table-'+calendar+'-RANKING.html', rank_rows, (err) => {
                if (err)
                    console.log(err);
                console.log('table-'+calendar+'-RANKING has been saved!');
            });
        } 
    }); 
}
function fetchPdf(url,filePath){
    /* request(url).pipe(fs.createWriteStream(filePath).on('finish', function() {
        var convertapi = require('convertapi')('ULq1XIRZbLy2jH7Q');
        convertapi.convert('jpg', { File: `${filePath}` }, 'pdf')
            .then(function(result) {
                result.saveFiles('public/regionali/');
                console.log("IMAGE SAVED");
            });
    })); //download and save pdf locally. */
    request(url).pipe(fs.createWriteStream(filePath)); //download and save pdf locally.

    console.log(filePath + ' downloaded and saved'); 
}
function updateTables(){
    console.log("Updating results");
    const interval = 10;

    /* FINALI PROVINCIALI */
    //fetchPdf('http://www.varese-pgslombardia.org/wp-content/uploads/2019/06/TABELLONE-DEFINITIVO-DELLE-FINALI-PROVINCIALI-2019.pdf','public/finali_provinciali.pdf');
    /* REGIONALE TABELLONI*/
    // //U14
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/U14f.pdf','public/regionali/u14.pdf');
    // //U16
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/U16f.pdf','public/regionali/u16.pdf');
    // //LIBERA MISTA
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/mista2.pdf','public/regionali/libera_mista.pdf');
   
    // /* REGIONALE INDIRIZZI E CONTATTI */
    // //U14
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/Indirizzi%20U14.pdf','public/regionali/indirizzi_u14.pdf');
    // //U16
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/Indirizzi%20U16.pdf','public/regionali/indirizzi_u16.pdf');
    // //LIBERA MISTA
    // fetchPdf('http://www.pgslombardia.org/evsport/volley2019/Indirizzi%20mista2.pdf','public/regionali/indirizzi_libera_mista.pdf');

    
    /* CAMPIONATO INVERNALE */
    // let i=0;
    // for (let cal in calendari_inv){ //need let variable because it's block-level scoped      
    //     setTimeout(()=>{
    //         console.log("Updating calendar " + calendari_inv[cal][0] + " " + calendari_inv[cal][1]);
    //         fetchTable('3',calendari_inv[cal][0],calendari_inv[cal][1]);

    //         // extract .ics for santi apostoli
    //         switch(cal){
    //             case "va02":
    //                 extractEvents(`${URL}/inv/u13/${cal}`,cal);
    //                 break;
    //             case "va07":
    //                 extractEvents(`${URL}/inv/u16/${cal}`,cal);
    //                 break;
    //             case "va12":
    //                 extractEvents(`${URL}/inv/libera-f/${cal}`,cal);
    //                 break;
    //             case "va13":
    //                 extractEvents(`${URL}/inv/libera-f/${cal}`,cal);
    //                 break;
    //             case "va17":
    //                 extractEvents(`${URL}/inv/libera-mista/${cal}`,cal);
    //                 break;
    //         }

    //     }, (interval+i*interval)*1000);
    //     i++;
    // }
    
    /* CAMPIONATO PRIMAVERILE */
    let i=0;
    for (let cal in calendari_prim){ //need let variable because it's block-level scoped      
        setTimeout(()=> {
            fetchTable('3', calendari_prim[cal][0], calendari_prim[cal][1]);
            switch(cal){
                case "va03":
                    extractEvents(`${URL}/prim/u13/${cal}`, cal);
                    break;
                case "va04":
                    extractEvents(`${URL}/prim/u13/${cal}`, cal);
                    break;
                case "va05":
                    extractEvents(`${URL}/prim/u13/${cal}`, cal);
                    break;
                case "va09":
                    extractEvents(`${URL}/prim/u16/${cal}`, cal);
                    break;
                case "va10":
                    extractEvents(`${URL}/prim/u16/${cal}`, cal);
                    break;
                case "va11":
                    extractEvents(`${URL}/prim/u16/${cal}`, cal);
                    break;
                case "va16":
                    extractEvents(`${URL}/prim/libera-f/${cal}`, cal);
                    break;
                case "va17":
                    extractEvents(`${URL}/prim/libera-f/${cal}`, cal);
                    break;
                case "va18":
                    extractEvents(`${URL}/prim/libera-f/${cal}`, cal);
                    break;
                case "va19":
                    extractEvents(`${URL}/prim/libera-mista/${cal}`, cal);
                    break;
                case "va20":
                    extractEvents(`${URL}/prim/libera-mista/${cal}`, cal);
                    break;
                case "va21":
                    extractEvents(`${URL}/prim/libera-mista/${cal}`, cal);
                    break;
                case "va22":
                    extractEvents(`${URL}/prim/libera-mista/${cal}`, cal);
                    break;
            }
        }, (interval + i * interval) * 1000);
        i++;
    }
};
updateTables();
setInterval(updateTables, 3600*1000);  //update tables every hour

//Fetch, build and create .ics calendar files
function extractEvents(calendarURL, girone){
    request.get(calendarURL, function(err, response, body) {     
        console.log("Creating calendar for " + calendarURL);  

        var fileICS = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//santi-apostoli.onrender.com//iCal calendar//\n";
        if (!body){
            console.log("ERROR RETRIEVING CALENDAR!!!!!!!!!")
            return;
        }
        const $ = cheerio.load(body);
        //console.log( $.html() );

        $('#calendar-table tr').each(function() {
            var casa = $(this).children('td').eq(3).text();
            var fuori = $(this).children('td').eq(4).text();
            if (casa.toUpperCase().includes('SANTI APOSTOLI') ||
                fuori.toUpperCase().includes('SANTI APOSTOLI')){
                fileICS += "BEGIN:VEVENT\n";    
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }    
                fileICS += `DTSTAMP:${yyyy}${mm}${dd}T000000\n`;        
                $(this).find('td').each(function(i){
                    switch(i){
                        case 0: //NUMERO PARTITA
                            fileICS += `UID:${$(this).text()}\n`;
                            fileICS += `DESCRIPTION:Gara numero ${$(this).text()}\n`;
                            break;
                        case 1: //DATE
                            var anno = "20"+$(this).text().substr(10,2);
                            var mese = $(this).text().substr(7,2);
                            var giorno = $(this).text().substr(4,2);
                            var ora = $(this).text().substr(13,2);
                            var minuti = $(this).text().substr(16,2);
                            fileICS += `DTSTART:${anno}${mese}${giorno}T${ora}${minuti}00\n`;                        
                            fileICS += `DTEND:${anno}${mese}${giorno}T${parseInt(ora)+2}${minuti}00\n`;                        
                            break;
                        case 2: //LOCATION
                            var span = $(this).children('span').eq(0);
                            span.text( span.text().replace(/�/g,'') );  //tolgo i replacement characters perché sono brutti da vedere, pace se perdo la lettera accentata
                            span.css('cursor','pointer');  //cambio forma del puntatore sugli indirizzi	
                            var str = span.attr('onmouseover');
                            var mystr = str.substring(str.indexOf("(")+2,str.indexOf(")")-1);
                            var mapsaddr = mystr.substring(mystr.indexOf(":")+2,);
                            mapsaddr = mapsaddr.replace(/<br>/g,'');
                            mapsaddr = mapsaddr.replace(/,/g,'\\,'); //a quanto pare nel formato .ics le virgole hanno bisogno di escape, quindi ',' deve diventare '\,'
                            fileICS += `LOCATION:${mapsaddr}\n`;                        
                            break;
                        case 3: //SQUADRA CASA
                            fileICS += `SUMMARY:${girone.toUpperCase()}: ${$(this).text()} VS `;                        
                            break;
                        case 4: //SQUADRA TRASFERTA
                            fileICS += `${$(this).text()}\n`;                        
                            break;
                    }
                });   
                fileICS += "END:VEVENT\n";        
            }
        });

        fileICS += "END:VCALENDAR";
        // write to a new file
        fs.writeFile(`public/ics/${girone}.ics`, fileICS, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log(' .ics calendar saved!');
        });
    });
}

//Constructor for options to pass in POST requests to Pgs' server
function RequestOptions(sport, category, calendar) {
    this.url = 'https://www.gestionecampionati.it/calendari/classifiche.php?public_key=db8b2797fbba1f749da63e9611862441:26';
    this.form = {
        id_disciplina: sport, 
        id_categoria: category, 
        id_calendario: calendar
    };
}

var hbs = exphbs.create({
    helpers: {
        dateFormat: require('handlebars-dateformat')
    },
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath,{
    maxAge: 3600*1000 
}));  //keep static files valid for an hour, so that the browser can immediately get those from the cache, without hitting a request on the server (which would return 304 status code, cause eTags are enabled)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.render('home',{
        active_home: true,
        home:true
    });
});


//CAMPIONATO 2024
router_2024 = require('./routes/routes_2024.js');
app.use(router_2024);

//CAMPIONATO 2023
router_2023 = require('./routes/routes_2023.js');
app.use('/2023', router_2023);

//CAMPIONATO 2022
router_2022 = require('./routes/2022/routes_2022.js');
app.use('/2022', router_2022);

//END-POINT TO DOWNLOAD ALL CACHED RESULTS IN A SINGLE ZIP
app.get('/download-cache', (req, res) => {
  console.log('downloading cache...');
  const output = fs.createWriteStream('tmp/results.zip');
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    res.download('tmp/results.zip', 'results.zip', (err) => {
      if (err) {
        console.error('Error sending zip file:', err);
      }
    });
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(path.join(__dirname, 'cache'), false);
  console.log(path.join(__dirname, 'cache'))
  archive.finalize();
});

//404
app.use( (req,res) =>{
    res.status(404);
    res.send("<h1>404, file not found</h1>");
});

app.listen(process.env.PORT || port, () =>{
    console.log('Server started');
});