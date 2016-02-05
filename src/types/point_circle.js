import BaseType from './base';

class PointCircle extends BaseType {
    constructor(shape, actor) {
        if (shape.type !== 'PointCircle') {
            throw new Error(`Type mismatch, expected 'PointCircle' got '${ shape.type }'`);
        }

        super(shape, actor);
    }

    get size() {
        if (!this._size || this.radius !== this._size.width) {
            this._size = {
                width: this.radius * 2,
                height: this.radius * 2,
            };
        }

        return this._size;
    }

    get radius() {
        return this.get('radius');
    }

    get radiusSq() {
        let radius = this.radius;
        return radius * radius;
    }

    get bbox() {
        if (!this._bbox || !this.actor._bbox) {
            let { radius, position } = this;

            this._bbox = {
                width: radius * 2,
                height: radius * 2,
                x: position.x - radius,
                y: position.y - radius
            };
        }
        return this._bbox;
    }

    get fill() {
        return this.get('fill');
    }

    get stroke() {
        let stroke = this.get('stroke');
        if (stroke && this.get('strokeWidth') > 0.001) {
            return stroke;
        } else {
            return this.fill;
        }
    }

    get strokeWidth() {
        return this.get('strokeWidth') || 0.001;
    }

    checkIntersection(position) {
        let shapePosition = this.position;
        let x = (shapePosition.x - position.x);
        let y = (shapePosition.y - position.y);

        return (x * x) + (y * y) < this.radiusSq;
    }
};

export default PointCircle;
