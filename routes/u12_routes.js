const fs = require('fs');

module.exports = function(app,calendari_inv,calendari_prim)
{   
    app.get('/inv/u12/va01', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va01[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va01[1]+'-RANKING.html');
        
        res.render('table',{
            active_u12: true,
            va01: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}