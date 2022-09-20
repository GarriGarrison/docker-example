const express = require('express')
const app = express()

const port = process.env.PORT || 4001

app.get('/', (req, res) => {
  res.send('Home Routes')
})

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
)
