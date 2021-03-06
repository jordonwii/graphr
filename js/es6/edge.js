import {CanvasUtils} from "dist/canvas_utils"

export class Edge {
	/* Constructors */
	constructor(fromNode, toNode, weight) {
		this.fromNode = fromNode
		this.toNode = toNode
		this.weight = weight
		this.directed = true
	}

	/* Render methods */
	render(ctx) {
		var lineWidth = Math.abs(this.weight)
		lineWidth = .5 // for debugging purposes
		CanvasUtils.drawLine(ctx,
			this.fromNode.coords,
			this.toNode.coords,
			lineWidth,
			this.directed,
			true
		);
		var midPoint = [
			this.fromNode.coords[0] + (this.toNode.coords[0] - this.fromNode.coords[0]) / 2,
			this.fromNode.coords[1] + (this.toNode.coords[1] - this.fromNode.coords[1]) / 2
		]
		CanvasUtils.drawText(ctx, midPoint[0], midPoint[1], this.weight)
    }
}