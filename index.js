const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Hello, this is home page');
  });

app.get('/singer/:name',(req,res) =>
{
    const singerName = req.params.name
    console.log(singerName)
    if(singerName === 'sonu nigam')
    {
        res.send(
            `<html>
                <body>
                <li>
                    Tere haath mein mera haath ho
                </li>
                <li>
                    Main hoon na
                </li>
                </body>
            </html>`
        )
    }

    if(singerName === 'shreya ghoshal')
    {
        res.send(
            `<html>
                <body>
                <li>
                    O bekhabar
                </li>
                <li>
                    Jadu hai nasha
                </li>
                </body>
            </html>`
        )
    }

    if(singerName === 'shaan')
    {
        res.send(
            `<html>
                <body>
                <li>
                    Chand sifarish
                </li>
                <li>
                    Main aisa kyu ho
                </li>
                </body>
            </html>`
        )
    }

    if(singerName === 'kk')
    {
        res.send(
            `<html>
                <body>
                <li>
                    Labon ko
                </li>
                <li>
                    Mat azma re
                </li>
                </body>
            </html>`
        )
    }

    if(singerName === 'sunidhi')
    {
        res.send(
            `<html>
                <body>
                <li>
                    Mehboob mere
                </li>
                <li>
                    Kamli
                </li>
                </body>
            </html>`
        )
    }
    

})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });