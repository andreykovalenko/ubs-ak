const colors = ["#d62728", "#1f77b4", "#ff7f0e", "#17becf", "#2ca02c"];

export function getRectanglesRenderer(ctx) {


  return (rectangles, invert) => {
    ctx.clearRect(0, 0, 500, 500);
    rectangles.forEach((rectangle, index) => {
        // ctx.filter = "invert(1)";
        ctx.fillStyle = invert ? "#ffffff" : colors[index] ;
      
         ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    });
  };
}
