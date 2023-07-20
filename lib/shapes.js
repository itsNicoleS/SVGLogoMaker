class Shape {
    constructor(shape, color, text) {
        this.shape ="";
        this.color ="";
        this.text ="";
    }
    setColor(newColor) {
        this.color = newColor;
    }
};
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`;
    }
}; 
class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 250,250 50,250" fill="${this.color}"/>`;
    }
}; 
class Square extends Shape {
    render() {
        return `<rect x="100" y="100" width="100" fill="${this.color}"/>`;
    }
}; 
module.exports = {
    Circle, 
    Triangle, 
    Square,
};
