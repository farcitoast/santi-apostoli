const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/libera-mista/va13', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-RANKING.html');
        
        res.render('table',{
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/libera-mista/va14', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va14[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va14[1]+'-RANKING.html');
        
        res.render('table',{
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/libera-mista/va15', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va15[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va15[1]+'-RANKING.html');
        
        res.render('table',{
            va15: true,
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    /** PRIMAVERILE **/
    app.get('/prim/libera-mista/va17', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-RANKING.html');
        
        res.render('table',{
            va17: true,
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    app.get('/prim/libera-mista/va16', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va16[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va16[1]+'-RANKING.html');
        
        res.render('table',{
            va16: true,
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    app.get('/prim/libera-mista/va18', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-RANKING.html');
        
        res.render('table',{
            va18: true,
            active_libera: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

}