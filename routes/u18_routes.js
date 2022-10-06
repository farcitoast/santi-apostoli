const fs = require('fs');

module.exports = function(app,calendari_inv)
{   
    app.get('/inv/u18/va11', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va11[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va11[1]+'-RANKING.html');
        
        res.render('table',{
            active_u18: true,
            va11: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/u18/va12', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va12[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va12[1]+'-RANKING.html');
        
        res.render('table',{
            active_u18: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
    app.get('/inv/u18/va13', (req, res) =>{
        const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-CALENDAR.html');
        const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-RANKING.html');
        
        res.render('table',{
            active_u18: true,
            table: true,
            helpers: {
                calendar: function () { return calendar_rows; },
                rank: function() { return rank_rows }
            }
        });
    });
}