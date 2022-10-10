$(function() {
    /** CALENDAR **/
    //LOCATION POPOVERS
    $("#calendar-table td:nth-child(3)").css("text-decoration", "underline"); //Underline locations
    $('#calendar-table .hotspot').each(function(i) {
        $(this).text( $(this).text().replace(/�/g,'') );  //tolgo i replacement characters perché sono brutti da vedere, pace se perdo la lettera accentata
        $(this).css('cursor','pointer');  //cambio forma del puntatore sugli indirizzi	
        var str = $(this).attr('onmouseover');
        var mystr = str.substring(str.indexOf("(")+2,str.indexOf(")")-1);
        mystr = mystr.replace(/\\/g,'');  //l'apostrofo viene scritto come \', non voglio mostrare \
        var mapsaddr = mystr.substring(mystr.indexOf(":")+2,);
        //console.log(mapsaddr);
        mapsaddr = mapsaddr.replace(/<br>/g,'');
        mapsaddr = mapsaddr.replace(/,/g,'');        
        mapsaddr = mapsaddr.replace(/ /g,'+');        
        //mystr = mystr.replace(/<br>/g,' ');
        //mystr = mystr.substr(0,mystr.indexOf("Localit")+7)+'à'+mystr.substr(mystr.indexOf("Localit")+8, );	
        //var citta = mystr.substr(mystr.indexOf("Localit")+9, );
        //citta = citta.replace(/<br>/g,'');
        //citta = citta.replace(/ /g,'+');
        //var via = mystr.substring(mystr.indexOf("Indirizzo:")+10, mystr.indexOf("Localit"));
        //via = via.replace(/<br>/g,'');
        //via = via.replace(/ /g,'+');

        //mystr = `<a href="http://maps.apple.com/?q=${citta}+${via}" target="_blank">`+mystr+'</a>';
        //mystr = `<a href="https://www.google.com/maps?q=${citta}+${via}" target="_blank">`+mystr+'</a>';
        //mystr = `<a href="https://www.google.com/maps?q=${citta}+${via}" target="_blank">`+mystr+"PROVA"+'</a>';        
        mystr = `<a href="https://www.google.com/maps?q=${mapsaddr}" target="_blank">`+mystr+'</a>';

        //IMPORTANT! I handle manually the popover trigger because there is a bug if I put the popover trigger attribute to 'focus' and I need to click a link inside it
        $(this).attr('tabindex','0');
        $(this).popover({ 
            content:mystr, 
            html:true, 
            trigger:'manual',
            placement:'top' 
        }).on("focus", function () {
            $(this).popover("show");
        }).on("focusout", function () {
            var _this = this;
            if (!$(".popover:hover").length) {
                $(this).popover("hide");
            }
            else {
                $('.popover').mouseleave(function() {
                    $(_this).popover("hide");
                    $(this).off('mouseleave');
                });
            }
        });
    });

    //HIGHLIGHT SANTI APOSTOLI
    $('#calendar-table td').each(function(i) {
        if($(this).text().trim().toUpperCase().includes('SANTI APOSTOLI')){ 
            $(this).html(`<span style="background-color:#ffffb3">${$(this).text()}</span>`);
        }
    });

    //WINNER/LOSER TEXT COLOR AND RESULTS IN BOLD
    $('#calendar-table td:nth-child(6)').each(function(i) {
        if ( $(this).text()[0].toUpperCase()!='D' && $(this).text()[0].toUpperCase()!='R' ){
            const won_sets = Number( $(this).text()[0] );
            var result = $(this).text().substr(0,3);
            if ( !isNaN(won_sets) ){
                $(this).html( $(this).text().replace(result, '<span style="font-weight:bold;">'+result+'</span>') );
                if( won_sets >= 3) {
                    $('#calendar-table td:nth-child(4)').eq(i).css('color','#009900'); //green
                    $('#calendar-table td:nth-child(5)').eq(i).css('color','#e60000'); //red
                }
                else {
                    $('#calendar-table td:nth-child(4)').eq(i).css('color','#e60000'); //red
                    $('#calendar-table td:nth-child(5)').eq(i).css('color','#009900'); //green
                }
            }
        }
    });

    //COLUMN TO HIDE,BOTH DESKTOP AND MOBILE
    $('#calendar-table tr th').each(function(i) {
        if (i==0)
            $(this).addClass('d-none d-sm-table-cell');
    });
    $('#calendar-table tr').each(function() {
        $(this).find('td').each(function(i){
            if (i==0)
                $(this).addClass('d-none d-sm-table-cell');

        });
    });

    //HIGHLIGHT GARE COPERTE DA ARBITRAGGIO UFFICIALE
    let gare_coperte = [
        /*
        //Ottobre
        104,404,610,906,1119,1401,1504,1605,1902,
        201,406,618,914,1121,1403,1505,1606,1903,
        202,417,703,1003,1204,1404,1506,1607,1904,
        203,501,706,1005,1208,1405,1507,1609,2002,
        206,503,803,1007,1214,1406,1509,1613,2004,
        303,504,804,1104,1301,1408,1511,1617,2005,
        305,505,805,1105,1303,1409,1516,1801,2006,
        316,506,806,1107,1306,1411,1601,1806,
        402,519,807,1108,1307,1501,1603,1809,
        403,609,903,1109,1317,1502,1604,1901,
        //Novembre
        107,507,810,1116,1312,1429,1616,1907,
        111,510,811,1118,1313,1503,1618,1908,
        207,603,819,1204,1314,1510,1619,2007,
        209,614,907,1210,1315,1513,1649,2009,
        211,617,910,1211,1316,1514,1650,2010,
        212,626,911,1215,1318,1515,1803,
        308,702,1012,1218,1413,1518,1805,
        309,708,1102,1225,1415,1602,1816,
        310,711,1114,1310,1422,1614,1820,
        410,808,1115,1311,1427,1615,1905,
        214,623,916,1206,1519,1808,2012,
        306,624,1008,1219,1520,1811,2013,
        314,707,1013,1223,1521,1812,2014,
        315,709,1015,1321,1524,1814,
        408,714,1016,1323,1611,1910,
        414,715,1106,1407,1612,1911,
        415,812,1108,1416,1620,1913,
        513,813,1117,1419,1621,1914,
        514,816,1122,1424,1650,2008,
        622,904,1124,1517,1803,2011,
        //Dicembre
        108,420,627,818,1101,1229,1430,1810,2015,
        118,509,628,908,1125,1325,1522,1817,2016,
        204,514,629,917,1126,1326,1523,1818,2017,
        217,518,630,919,1127,1328,1526,1819,2018,
        218,520,717,920,1128,1329,1527,1906,2019,
        219,602,719,1001,1129,1330,1528,1915,2020,
        220,606,720,1017,1130,1402,1530,1916,
        307,611,801,1018,1221,1412,1660,1917,
        317,622,809,1019,1224,1417,1802,1918,
        319,625,817,1020,1226,1423,1804,1920,
        1706,2103
        */
        //Febbraio
        // 203,405,511,809,910,1104,1210,1508,1824,
        // 206,407,517,810,911,1105,1213,1515,1901,
        // 208,408,603,811,1004,1108,1301,1604,1905,
        // 301,411,604,812,1005,1109,1304,1607,1906,
        // 305,419,605,822,1006,1112,1308,1609,1907,
        // 306,424,606,828,1007,1115,1309,1702,
        // 308,504,704,902,1008,1205,1312,1705,
        // 310,505,705,903,1011,1206,1403,1717,
        // 324,508,708,904,1012,1207,1410,1807,
        // 327,510,804,908,1030,1208,1420,1808

    ];
    
    $('#calendar-table tr').each(function(row_i) {
        $(this).find('td').each(function(i){
            if(i==0){
                let nGara = parseInt( $(this).text() );
                if(gare_coperte.indexOf(nGara) > -1){
                    $(this).append(" (C)");                
                }
            }
        });
    });

    /** RANKING **/
    //COLUMNS TO HIDE, BOTH DESKTOP AND MOBILE
    $('#rank-table tr th').each(function(i) {
        if (i==5 || i==6 || i==7 || i==8)
            $(this).addClass('d-none');
        if (i==9 || i==10)
            $(this).addClass('d-none d-sm-table-cell');
    });
    $('#rank-table tr').each(function() {
        $(this).find('td').each(function(i){
            if (i==5 || i==6 || i==7 || i==8)
                $(this).addClass('d-none');
            if (i==9 || i==10)
                $(this).addClass('d-none d-sm-table-cell');
        });
    });
    
    /** ORDINA TABELLE **/
    //IMMEDIATELY ORDER BY DATE
    sortDateColumn(1, "calendar-table");
    //HANDLE CLICK ON TABLE HEADERS TO ORDER
    $("th.sortable").click( function(){
        //console.log($(this).text());
        switch( $(this).text() ){
            case "SQUADRA":
                sortTableColumn(0, "rank-table");   
                break;
            case "Casa":
                sortTableColumn(3, "calendar-table");
                break;
            case "Fuori":
                sortTableColumn(4, "calendar-table");
                break;
            case "Data":
                sortDateColumn(1, "calendar-table");
                break;
            case "N° Gara":
                sortTableColumn(0, "calendar-table");
                break;
        }
    })
    
})

//n is the number of the column to sort in the table
function sortTableColumn(n, tableID) {
    //console.log('sorting');
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    var table = document.getElementById(tableID);
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function sortDateColumn(n, tableID) {
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    var table = document.getElementById(tableID);
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        switching = false;
        rows = table.rows;
        var year,month,day;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n].innerHTML;
            x = x.replace(/ /g,'');
            x = x.replace(/&nbsp;/g,'');
            year = parseInt("20"+x.substr(9,2));
            month = parseInt(x.substr(6,2))-1;
            day = parseInt(x.substr(3,2));
            var data1 = new Date(year,month,day);
            
            y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML;
            y = y.replace(/ /g,'');
            y = y.replace(/&nbsp;/g,'');
            year = parseInt("20"+y.substr(9,2));
            month = parseInt(y.substr(6,2))-1;
            day = parseInt(y.substr(3,2));
            var data2 = new Date(year,month,day);
            
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (data1 > data2) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (data1 < data2) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    } 
}