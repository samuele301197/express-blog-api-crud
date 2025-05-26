import birrePreferite from "../data.js"

const index = (req, res) => {
    const birreFiltro = req.query.tipologia;
    let result = birrePreferite;
    if(birreFiltro !== undefined) {
        result = birrePreferite.filter((curElem) =>
        curElem.tipologia.includes(birreFiltro)
    )};
     res.json ({
        data: result,
    });
}

const show = (req, res) => {
    const birreID = parseInt(req.params.id);
    const birra = birrePreferite.find((curElem) => curElem.id === birreID);
    if(birra === undefined) {
        res.status(404);
        return res.json({
            error: "birra non trovata",
        });
    }
    res.json({
        data: `mostro un ID ${birreID}`, birra
    });
}

const store = (req, res) => {
    res.json({
        data: `aggiungo un elemento al mio post`
    });
};

const update =  (req, res) => {
    const birreID = req.params.id;
    res.json({
        data: `modifico il mio ID ${birreID}`
    })
};

const destroy = (req, res) => {
const birreID = req.params.id;
const index = birrePreferite.findIndex((curElem) => curElem.id === birreID);
// if(index === -1) {
//         res.status(404);
//         return res.json({
//             error: "birra non trovata",
//         });
    // }
birrePreferite.splice(index, 1);
res.sendStatus(204);
console.log(birrePreferite);
};

const birController = {
    index,
    show,
    store,
    update,
    destroy,
};

export default birController;