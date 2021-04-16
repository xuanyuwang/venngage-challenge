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

        this.coords = {};
    }

    updateCoords(){
        const { offsetLeft: left, offsetWidth: width, offsetTop: top, offsetHeight: height } = this.element;
        this.coords = {
            top,
            left,
            centerX: left + width / 2,
            centerY: top + height / 2,
            right: left + width,
            bottom: top + height
        };
    }

    setPage(page){
        this.page = page;
        this.updateCoords();
    }

    onMouseUpHandler(event) {
        this.element.classList.remove('dragging');
        this.element.removeEventListener('mouseup', this.onMouseUpHandlerBind, false);
        this.page.handleDrop(this.element);
        this.updateCoords();
    }

    onMouseDownHandler(event) {
        this.element.classList.add('dragging');
        this.element.addEventListener('mouseup', this.onMouseUpHandlerBind, false);
        this.page.handleDragging(this, event);
    }
}

class Page{
    constructor(){
        this.onMouseMoveHandlerBind = this.onMouseMoveHandler.bind(this);
        this.element = document.createElement('div');
        this.element.id = 'page';
        this.moveData = {};
        this.shapes = [];
        this.pageCenterX = null;
        this.pageCenterY = null;
        this.verticalAlignmentLine = null;
        this.horizontalAlignmentLine = null;

        this.centerLineXSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.centerLineXSvg.id = 'verticalLine';
        this.centerLineXSvg.classList.add('hide');
        this.centerLineXSvg.setAttribute('viewBox', `0 0 10 10`);
        this.lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.lineX.setAttribute('x1', '5');
        this.lineX.setAttribute('y1', '0');
        this.lineX.setAttribute('x2', '5');
        this.lineX.setAttribute('y2', '10');
        this.lineX.setAttribute('stroke', 'black');
        this.centerLineXSvg.appendChild(this.lineX);
        this.element.appendChild(this.centerLineXSvg);

        this.centerLineYSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.centerLineYSvg.id = 'horizontalLine';
        this.centerLineYSvg.classList.add('hide');
        this.centerLineYSvg.setAttribute('viewBox', `0 0 10 10`);
        this.lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.lineY.setAttribute('x1', '0');
        this.lineY.setAttribute('y1', '5');
        this.lineY.setAttribute('x2', '10');
        this.lineY.setAttribute('y2', '5');
        this.lineY.setAttribute('stroke', 'black');
        this.centerLineYSvg.appendChild(this.lineY);
        this.element.appendChild(this.centerLineYSvg);
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
    isAlignWithPage(){
        const { object } = this.moveData;
        const { centerX, centerY } = object.coords;
        let pageAlignX, pageAlignY;

        if(Math.abs(this.pageCenterX - centerX) < 2){
            this.centerLineXSvg.classList.remove('hide');
            pageAlignX = true;
        }else{
            this.centerLineXSvg.classList.add('hide');
            pageAlignX = false;
        }

        if(Math.abs(this.pageCenterY - centerY) < 2){
            this.centerLineYSvg.classList.remove('hide');
            pageAlignY = true;
        }else{
            this.centerLineYSvg.classList.add('hide');
            pageAlignY = false;
        }

        return {
            pageAlignX,
            pageAlignY
        };
    }
    cleanAlignmentLines(){
        const existingVerticalLines = document.getElementsByClassName('vertical');
        for (let i = 0; i < existingVerticalLines.length; i++) {
            existingVerticalLines[i].remove();
        }
        const existingHorizontalLines = document.getElementsByClassName('horizontal');
        for (let i = 0; i < existingHorizontalLines.length; i++) {
            existingHorizontalLines[i].remove();
        }
    }
    isAlignWithCloestShape(){
        const { object } = this.moveData;
        const { centerX, centerY } = object.coords;
        let minDistance = Infinity;
        let closestObject;
        this.shapes.forEach((shape) => {
            const { centerX: x, centerY: y } = shape.coords;
            const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            if(distance < minDistance && shape.element.id != object.element.id){
                closestObject = shape;
                minDistance = distance;
            }
        });
        if(!closestObject){
            return;
        }

        const alignment = {};
        if(Math.abs(closestObject.coords.left - object.coords.left) < 2 || Math.abs(closestObject.coords.left - object.coords.right) < 2 || Math.abs(closestObject.coords.left - object.coords.centerX) < 2){
            alignment.type = 'vertical';
            alignment.pos = closestObject.coords.left;
            alignment.points = [
                closestObject.coords.top,
                closestObject.coords.bottom,
                object.coords.top,
                object.coords.bottom
            ];
        }else if(Math.abs(closestObject.coords.right - object.coords.right) < 2 || Math.abs(closestObject.coords.right - object.coords.left) < 2 || Math.abs(closestObject.coords.right - object.coords.centerX) < 2){
            alignment.type = 'vertical';
            alignment.pos = closestObject.coords.right;
            alignment.points = [
                closestObject.coords.top,
                closestObject.coords.bottom,
                object.coords.top,
                object.coords.bottom
            ];
        }else if(Math.abs(closestObject.coords.centerX - object.coords.centerX) < 2 || Math.abs(closestObject.coords.centerX - object.coords.left) < 2 || Math.abs(closestObject.coords.centerX - object.coords.right) < 2){
            alignment.type = 'vertical';
            alignment.pos = closestObject.coords.centerX;
            alignment.points = [
                closestObject.coords.top,
                closestObject.coords.bottom,
                object.coords.top,
                object.coords.bottom
            ];
        }else if(Math.abs(closestObject.coords.centerY - object.coords.centerY) < 2 || Math.abs(closestObject.coords.centerY - object.coords.bottom) < 2 || Math.abs(closestObject.coords.centerY - object.coords.top) < 2){
            alignment.type = 'horizontal';
            alignment.pos = closestObject.coords.centerY;
            alignment.params = [
                closestObject.coords.left,
                closestObject.coords.right,
                object.coords.left,
                object.coords.right
            ];
        }

        this.cleanAlignmentLines();
        if(alignment.type == 'vertical'){
            const start = Math.min(...alignment.points);
            const end = Math.max(...alignment.points);

            this.verticalAlignmentLine = document.createElement('div');
            this.verticalAlignmentLine.classList.add('vertical');
            this.verticalAlignmentLine.style.height = `${end - start}px`;
            this.verticalAlignmentLine.style.top = `${start}px`;
            this.verticalAlignmentLine.style.left = `${alignment.pos}px`;
            this.element.appendChild(this.verticalAlignmentLine);
        }else if(alignment.type == 'horizontal'){
            const start = Math.min(alignment.points);
            const end = Math.max(alignment.points);

            this.horizontalAlignmentLine = document.createElement('div');
            this.horizontalAlignmentLine.classList.add('horizontal');
            this.horizontalAlignmentLine.style.width = `${end - start}px`;
            this.horizontalAlignmentLine.style.top = `${alignment.pos}px`;
            this.horizontalAlignmentLine.style.left = `${start}px`;
            this.element.appendChild(this.horizontalAlignmentLine);
        }else{
            this.verticalAlignmentLine = null;
            this.horizontalAlignmentLine = null;
        }
    }
    onMouseMoveHandler(event){
        const { object, target, startTop, startLeft, startX, startY } = this.moveData;
        const deltaY = event.pageY - startY;
        const deltaX = event.pageX - startX;
        const newTop = startTop + deltaY;
        const newLeft = startLeft + deltaX;
        const { correctedTop, correctedLeft } = this.pushBack(target, newTop, newLeft);
        target.style.top = `${correctedTop}px`;
        target.style.left = `${correctedLeft}px`;
        object.updateCoords();
        this.moveData.pageAlignment = this.isAlignWithPage();
        this.isAlignWithCloestShape();
    }
    handleDrop(target){
        // snap to center
        const {pageAlignX, pageAlignY} = this.moveData.pageAlignment;
        if(pageAlignX){
            target.style.left = `${this.pageCenterX - target.offsetWidth / 2}px`;
        }
        if(pageAlignY){
            target.style.top = `${this.pageCenterY - target.offsetHeight / 2}px`;
        }

        this.moveData = {};
        this.element.removeEventListener('mousemove', this.onMouseMoveHandlerBind);
        this.cleanAlignmentLines();
    }
    handleDragging(target, mouseEvent){
        this.element.removeChild(target.element);
        this.element.appendChild(target.element);
        this.pageCenterX = this.element.offsetWidth / 2;
        this.pageCenterY = this.element.offsetHeight / 2;
        const { element } = target;
        this.moveData = {
            object: target,
            target: element,
            startTop: element.offsetTop,
            startLeft: element.offsetLeft,
            startX: mouseEvent.pageX,
            startY: mouseEvent.pageY,
            pageAlignment: {}
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
    document.body.appendChild(page.element);
    circles.forEach((circle) => {
        page.addShape(circle);
    });
};

Scene();