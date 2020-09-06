import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-drawing',
  template: `
    <canvas #canvas id="hangmanCanvas"> </canvas>
  `,
  styles: [ '#hangmanCanvas { width: 500px; height: 500px; border: 1px solid white; }'
  ]
})
export class HangmanDrawingComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  newDrawing(): void {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  drawCircle(): void {
    this.ctx.beginPath();
    this.ctx.arc(140, 40, 20, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }

  drawLostFace(): void {
    this.drawLeftEye();
    this.drawRightEye();
    this.drawMouthLost();
  }

  drawWinFace(): void {
    this.drawLeftEye();
    this.drawRightEye();
    this.drawMouthWin();
  }

  drawRightEye(): void{
    this.ctx.beginPath();
    this.ctx.arc(145, 35, 2, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  drawLeftEye(): void{
    this.ctx.beginPath();
    this.ctx.arc(135, 35, 2, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  drawMouthWin(): void{
    this.ctx.beginPath();
    this.ctx.arc(140, 45, 8, 6, 3 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  drawMouthLost(): void {
    this.ctx.beginPath();
    this.ctx.arc(140, 52, 8, 3, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  drawBody(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 50);
    this.ctx.lineTo(140, 100);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawLeftArm(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 70);
    this.ctx.lineTo(120, 80);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawRightArm(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 70);
    this.ctx.lineTo(160, 80);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawLeftLeg(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 100);
    this.ctx.lineTo(120, 120);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawRightLeg(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 100);
    this.ctx.lineTo(160, 120);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawTopPoleUp(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 20);
    this.ctx.lineTo(140, 10);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawTopPoleStraight(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(140, 10);
    this.ctx.lineTo(230, 10);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawTopPoleDown(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(230, 10);
    this.ctx.lineTo(230, 140);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawTopPoleSupport(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(200, 10);
    this.ctx.lineTo(230, 30);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawPoleBaseStraight(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(190, 140);
    this.ctx.lineTo(270, 140);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawPoleBaseDownLeft(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(190, 140);
    this.ctx.lineTo(190, 180);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  drawPoleBaseDownRight(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(270, 140);
    this.ctx.lineTo(270, 180);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

}
