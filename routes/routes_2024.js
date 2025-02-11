const fs = require('fs');
const express = require('express');
const router = express.Router();

const categorie = {
    u14: 32,
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

/** INVERNALE */
router.get('/inv/u13/va02', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va02[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va02[1]+'-RANKING.html');
    
    res.render('table',{
        va02: true,
        active_u13: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/u13/va03', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va03[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va03[1]+'-RANKING.html');
    
    res.render('table',{
        active_u13: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/inv/u16/va06', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va06[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va06[1]+'-RANKING.html');
    
    res.render('table',{
        active_u16: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/u16/va07', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va07[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va07[1]+'-RANKING.html');
    
    res.render('table',{
        va07: true,
        active_u16: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/u16/va08', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va08[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va08[1]+'-RANKING.html');
    
    res.render('table',{
        active_u16: true,
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
        va12: true,
        active_libera_f: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/libera-f/va13', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va13[1]+'-RANKING.html');
    
    res.render('table',{
        va13: true,
        active_libera_f: true,
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
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/libera-mista/va16', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va16[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va16[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/libera-mista/va17', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va17[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va17[1]+'-RANKING.html');
    
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

/** PRIMAVERILE */
router.get('/prim/u13/va03', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va03[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va03[1]+'-RANKING.html');
    
    res.render('table',{
        va03: true,
        active_u13: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/u13/va04', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va04[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va04[1]+'-RANKING.html');
    
    res.render('table',{
        active_u13: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/u13/va05', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va05[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va05[1]+'-RANKING.html');
    
    res.render('table',{
        active_u13: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/u16/va09', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va09[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va09[1]+'-RANKING.html');
    
    res.render('table',{
        active_u16: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/u16/va10', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va10[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va10[1]+'-RANKING.html');
    
    res.render('table',{
        va10: true,
        active_u16: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/u16/va11', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va11[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va11[1]+'-RANKING.html');
    
    res.render('table',{
        active_u16: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-f/va16', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va16[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va16[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera_f: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-f/va17', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-RANKING.html');
    
    res.render('table',{
        va17: true,
        active_libera_f: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-f/va18', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-RANKING.html');
    
    res.render('table',{
        va18: true,
        active_libera_f: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-mista/va19', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va19[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va19[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-mista/va20', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va20[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va20[1]+'-RANKING.html');
    
    res.render('table',{
        va20: true,
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-mista/va21', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va21[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va21[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/prim/libera-mista/va22', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va22[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va22[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

module.exports = router