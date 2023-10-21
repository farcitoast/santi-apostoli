const fs = require('fs');
const express = require('express');
const router = express.Router();

const categorie = {
    u14: 32,
    libera_f: 40,
    libera_mista: 42
}
const calendari_inv = {
    va05: [categorie.u14,5722],
    va06: [categorie.u14,5724],
    va12: [categorie.libera_f,5735],
    va13: [categorie.libera_f,5736],
    va14: [categorie.libera_f,5737],
    va15: [categorie.libera_f,5738],
    va16: [categorie.libera_mista,5741],
    va17: [categorie.libera_mista,5742],
    va18: [categorie.libera_mista,5746]
}; 

/** INVERNALE */
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
router.get('/inv/libera-f/va14', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va14[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va14[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera_f: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/libera-f/va15', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va15[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va15[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera_f: true,
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
        va16: true,
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
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/libera-mista/va18', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va18[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va18[1]+'-RANKING.html');
    
    res.render('table',{
        active_libera: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});

router.get('/inv/u14/va05', (req, res) =>{
    const calendar_rows = fs.readFileSync('cache/table-'+calendari_inv.va05[1]+'-CALENDAR.html');
    const rank_rows = fs.readFileSync('cache/table-'+calendari_inv.va05[1]+'-RANKING.html');
    
    res.render('table',{
        active_u14: true,
        table: true,
        helpers: {
            calendar: function () { return calendar_rows; },
            rank: function() { return rank_rows }
        }
    });
});
router.get('/inv/u14/va06', (req, res) =>{
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

/** PRIMAVERILE */
// router.get('/prim/libera-f/va13', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va13[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va13[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_libera_f: true,
//         va13: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });
// router.get('/prim/libera-mista/va17', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va17[1]+'-RANKING.html');
    
//     res.render('table',{
//         va17: true,
//         active_libera: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

module.exports = router