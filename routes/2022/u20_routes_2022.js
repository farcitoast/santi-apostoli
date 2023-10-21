const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/u20/va09', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va09[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va09[1]+'-RANKING.html');
        
        res.render('table',{
            active_u20: true,
            va09: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/u20/va10', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va10[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va10[1]+'-RANKING.html');
        
        res.render('table',{
            active_u20: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    /** PRIMAVERILE */
    app.get('/prim/u20/va12', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va12[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va12[1]+'-RANKING.html');
        
        res.render('table',{
            active_u20: true,
            va12: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}