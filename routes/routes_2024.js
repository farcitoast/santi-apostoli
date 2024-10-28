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

// const calendari_prim = {
//     va08: [categorie.u14,6777],
//     va18: [categorie.libera_f,6794],
//     va19: [categorie.libera_mista,6796],
//     va20: [categorie.libera_mista,6799],
//     va21: [categorie.libera_mista,6801]
// };  

// /** PRIMAVERILE */
// router.get('/prim/u14/va08', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va08[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va08[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_u14: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

// router.get('/prim/libera-f/va18', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va18[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_libera_f: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

// router.get('/prim/libera-mista/va19', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va19[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va19[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_libera: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

// router.get('/prim/libera-mista/va20', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va20[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va20[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_libera: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

// router.get('/prim/libera-mista/va21', (req, res) =>{
//     const calendar_rows = fs.readFileSync('cache/table-'+calendari_prim.va21[1]+'-CALENDAR.html');
//     const rank_rows = fs.readFileSync('cache/table-'+calendari_prim.va21[1]+'-RANKING.html');
    
//     res.render('table',{
//         active_libera: true,
//         table: true,
//         helpers: {
//             calendar: function () { return calendar_rows; },
//             rank: function() { return rank_rows }
//         }
//     });
// });

module.exports = router