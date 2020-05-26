import express from 'express'
export const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('listening!!!')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))