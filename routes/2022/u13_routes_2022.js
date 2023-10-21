const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/u13/va02', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va02[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va02[1]+'-RANKING.html');
        
        res.render('table',{
            active_u13: true,
            va02: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });

    /** PRIMAVERILE */
    app.get('/prim/u13/va04', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va04[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va04[1]+'-RANKING.html');
        
        res.render('table',{
            active_u13: true,
            va04: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/prim/u13/va03', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va03[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va03[1]+'-RANKING.html');
        
        res.render('table',{
            active_u13: true,
            va03: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}