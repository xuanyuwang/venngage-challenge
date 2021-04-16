import './index.scss';

class Circle {
    constructor(id, size, initTop = 0, initLeft = 0, fillColor = 'cyan') {
        this.onMouseDownHandlerBind = this.onMouseDownHandler.bind(this);
        this.onMouseUpHandlerBind = this.onMouseUpHandler.bind(this);

        this.element = document.createElement('div');
        this.element.className = 'container';
        this.element.id = id;
        this.element.style.width = `${size}px`;
        this.element.style.height = `${size}px`;
        this.element.style.top = `${initTop}px`;
        this.element.style.left = `${initLeft}px`;
        this.element.addEventListener('mousedown', this.onMouseDownHandlerBind, false);
        this.element.addEventListener('dragstart', () => false, false);

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute('viewBox', `0 0 10 10`);
        this.svg.style.width = '100%';
        this.svg.style.height = '100%';

        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.style['cx'] = '5';
        this.circle.style['cy'] = '5';
        this.circle.style['r'] = '5';
        this.circle.style['fill'] = fillColor;

        this.element.appendChild(this.svg);
        this.svg.appendChild(this.circle);
    }

    setPage(page){
        this.page = page;
    }

    onMouseUpHandler(event) {
        this.element.classList.remove('dragging');
        this.element.removeEventListener('mouseup', this.onMouseUpHandlerBind, false);
        this.page.handleDrop(this.element);
    }

    onMouseDownHandler(event) {
        this.element.classList.add('dragging');
        this.element.addEventListener('mouseup', this.onMouseUpHandlerBind, false);
        this.page.handleDragging(this.element, event);
    }
}

class Page{
    constructor(){
        this.onMouseMoveHandlerBind = this.onMouseMoveHandler.bind(this);
        this.element = document.createElement('div');
        this.element.id = 'page';
        this.moveData = {};
        this.shapes = [];
    }
    pushBack(target, newTop, newLeft){
        const { offsetWidth: targetWidth, offsetHeight: targetHeight } = target;
        const newRight = newLeft + targetWidth;
        const newBottom = newTop + targetHeight; 
        const { offsetWidth: pageWidth, offsetHeight: pageHeight } = this.element;

        let correctedLeft, correctedTop;
        // X axis
        if(newLeft < 0){
            correctedLeft = 0;
        }else if(newRight > pageWidth){
            correctedLeft = pageWidth - targetWidth;
        }else{
            correctedLeft = newLeft;
        }

        // Y axis
        if(newTop < 0){
            correctedTop = 0;
        }else if(newBottom > pageHeight){
            correctedTop = pageHeight - targetHeight;
        }else{
            correctedTop = newTop;
        }

        return {
            correctedTop,
            correctedLeft
        };
    }
    addShape(shape){
        this.element.appendChild(shape.element);
        this.shapes.push(shape);
        shape.setPage(this);
    }
    onMouseMoveHandler(event){
        const { target, startTop, startLeft, startX, startY } = this.moveData;
        const deltaY = event.pageY - startY;
        const deltaX = event.pageX - startX;
        const newTop = startTop + deltaY;
        const newLeft = startLeft + deltaX;
        const { correctedTop, correctedLeft } = this.pushBack(target, newTop, newLeft);
        target.style.top = `${correctedTop}px`;
        target.style.left = `${correctedLeft}px`;
    }
    handleDrop(target){
        this.moveData = {};
        this.element.removeEventListener('mousemove', this.onMouseMoveHandlerBind);
    }
    handleDragging(target, mouseEvent){
        this.moveData = {
            target: target,
            startTop: target.offsetTop,
            startLeft: target.offsetLeft,
            startX: mouseEvent.pageX,
            startY: mouseEvent.pageY
        };
        this.element.addEventListener('mousemove', this.onMouseMoveHandlerBind);
    }
}

const Scene = () => {
    const firstCircle = new Circle('first', 100, 0, 0, 'red');
    const secondCircle = new Circle('second', 150, 0, 100, 'yellow');
    const thirdCircle = new Circle('third', 200, 0, 250, 'blue');
    const circles = [firstCircle, secondCircle, thirdCircle]

    const page = new Page();
    circles.forEach((circle) => {
        page.addShape(circle);
    });
    document.body.appendChild(page.element);
};

Scene();