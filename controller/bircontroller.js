import birrePreferite from "../data.js"

const index = (req, res) => {
    const birreFiltro = req.query.tipologia;
    let result = birrePreferite;

    if (birreFiltro) {
        const filtroLower = birreFiltro.toLowerCase();
        result = birrePreferite.filter(
            (birra) =>
                birra.tipologia &&
                birra.tipologia.toLowerCase().includes(filtroLower)
        );
    }

    res.json({ data: result });
};


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
    const newID = birrePreferite[birrePreferite.length -1].id +1;

    const newBeer = {
        id: newID,
        titolo: req.body.titolo,
        tipologia: req.body.tipologia,
        immagine: req.body.immagine,
        tags: req.body.tags,
    }

    birrePreferite.push(newBeer);
    console.log(birrePreferite);
    
    res.status(201).json({
        data: `aggiungo un elemento al mio post`, newBeer

    });
};

const update =  (req, res) => {
    const birreID = parseInt(req.params.id);
    const index = birrePreferite.findIndex((curElem) => curElem.id === birreID);
    if(index === -1) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "birra non trovata"
        })
    }

    birrePreferite[index].titolo = req.body.titolo || birrePreferite[index].titolo;
    birrePreferite[index].tipologia = req.body.tipologia || birrePreferite[index].tipologia;
    birrePreferite[index].immagine = req.body.immagine || birrePreferite[index].immagine;
    birrePreferite[index].tags = req.body.tags || birrePreferite[index].tags;

    res.json({
         message: `Birra con ID ${birreID} aggiornata con successo`,
        data: birrePreferite[index]
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