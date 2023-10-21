const fs = require('fs');
const express = require('express');
const router = express.Router();

const categorie = {
    u13: 30,
    u20: 38,
    libera_f: 40,
    libera_mista: 42
}
const calendari_inv = {
    va02: [categorie.u13,4508],
    va09: [categorie.u20,4523],
    va10: [categorie.u20,4524],
    va11: [categorie.libera_f,4525],
    va12: [categorie.libera_f,4526],
    va13: [categorie.libera_mista,4529],
    va14: [categorie.libera_mista,4531],
    va15: [categorie.libera_mista,4533]
};  
const calendari_prim = {
    va03: [categorie.u13,4889],
    va04: [categorie.u13,4891],
    va12: [categorie.u20,4904],
    va13: [categorie.libera_f,4906],
    va14: [categorie.libera_f,4908],
    va15: [categorie.libera_f,4909],
    va16: [categorie.libera_mista,4911],
    va17: [categorie.libera_mista,4912],
    va18: [categorie.libera_mista,4914]
};  

/** INVERNALE */
router.get('/inv/libera-f/va11', (req, res) =>{
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
router.get('/inv/libera-f/va12', (req, res) =>{
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
router.get('/prim/libera-f/va13', (req, res) =>{
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
router.get('/prim/libera-f/va14', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va14[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va14[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera_f: true,
        va14: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/prim/libera-f/va15', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va15[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va15[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera_f: true,
        va15: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

/** INVERNALE */
router.get('/inv/libera-mista/va13', (req, res) =>{
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
router.get('/inv/libera-mista/va14', (req, res) =>{
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
router.get('/inv/libera-mista/va15', (req, res) =>{
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
router.get('/prim/libera-mista/va17', (req, res) =>{
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
router.get('/prim/libera-mista/va16', (req, res) =>{
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
router.get('/prim/libera-mista/va18', (req, res) =>{
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

/** INVERNALE */
router.get('/inv/u13/va02', (req, res) =>{
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
router.get('/prim/u13/va04', (req, res) =>{
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
router.get('/prim/u13/va03', (req, res) =>{
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

/** INVERNALE */
router.get('/inv/u20/va09', (req, res) =>{
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
router.get('/inv/u20/va10', (req, res) =>{
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
router.get('/prim/u20/va12', (req, res) =>{
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

module.exports = router