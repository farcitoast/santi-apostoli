const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/u14/va06', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va06[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va06[1]+'-RANKING.html');
        
        res.render('table',{
            active_u14: true,
            va06: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/u14/va07', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va07[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va07[1]+'-RANKING.html');
        
        res.render('table',{
            active_u14: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}