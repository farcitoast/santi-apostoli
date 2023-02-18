const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/libera-f/va11', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va11[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va11[1]+'-RANKING.html');
        
        res.render('table',{
            va11: true,
            active_libera_f: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/libera-f/va12', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va12[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va12[1]+'-RANKING.html');
        
        res.render('table',{
            active_libera_f: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    /** PRIMAVERILE */
    app.get('/prim/libera-f/va13', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va13[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va13[1]+'-RANKING.html');
        
        res.render('table',{
            active_libera_f: true,
            va13: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}