const express = require('express');
const csvParse = require('csv-parse');
const fs = require('fs');

const fileName = `${__dirname}/data/pbp_matches_atp_main_current.csv`;
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(`Error reading ${fileName}: ${err}`);
    }
    else {
        csvParse(data, { columns: true }, (err, arr) => {
            if (err) {
                console.log(`Error parsing ${fileName}: ${err}`);
            }
            else {
                const apiRouter = express.Router();
                apiRouter.get('/', onGetAllMatches);

                const app = express();
                app.use('/', express.static(`${__dirname}/public`));
                app.use('/api/matches', apiRouter);

                const port = process.env.PORT || 3000;
                app.listen(port, () => console.log(`Listening on port ${port}`));

                function onGetAllMatches(_, res) {
                    res.json(arr);
                }
            }
        });
    }
});
