const path = require('path')
const express = require('express')
const jsonParser = express.json()
const GenRouter = express.Router()
const {fillStart, fillCellGroup} = require('../../functions/fillGrid')

GenRouter
    .route('/visual-art-generator')
    .post(jsonParser, (req, res, next) => {
        const {width, height, cellSize} = req.body
        let totalColumns = width
        let totalRows = height
        let totalCells
        totalCells = totalRows * totalColumns
        let gridData = fillStart(totalColumns, totalRows, cellSize)
        gridData = fillCellGroup(gridData)
        let svg = (
            `<svg version="1.1"
            baseProfile="full"
            width="${width * cellSize}" height="${height * cellSize}"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"><g>`
        )
        for (let c = 0; c < totalColumns; c++) {
            for (let r = 0; r < totalRows; r++) {
                const cell =  gridData.grid.columns[c][r]
                const rect = (
                    `<rect 
                        x="${cell.column * cellSize}" 
                        y="${cell.row * cellSize}" 
                        width="${cellSize}" 
                        height="${cellSize}"
                        fill="${cell.color.rgb}"
                    />`
                )
                svg += rect
            }
        }
        svg += '</g></svg>'

        res.send({svg, params: gridData.params})
    })

module.exports = GenRouter