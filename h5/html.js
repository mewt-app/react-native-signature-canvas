const content = script =>
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');
    body {
    
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    
    .m-signature-pad {
      position: absolute;
      font-size: 10px;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
    }
    
    .m-signature-pad:before, .m-signature-pad:after {
      position: absolute;
      z-index: -1;
      content: "";
      width: 40%;
      height: 10px;
      left: 20px;
      bottom: 10px;
      background: transparent;
      -webkit-transform: skew(-3deg) rotate(-3deg);
      -moz-transform: skew(-3deg) rotate(-3deg);
      -ms-transform: skew(-3deg) rotate(-3deg);
      -o-transform: skew(-3deg) rotate(-3deg);
      transform: skew(-3deg) rotate(-3deg);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    }
    
    .m-signature-pad:after {
      left: auto;
      right: 20px;
      -webkit-transform: skew(3deg) rotate(3deg);
      -moz-transform: skew(3deg) rotate(3deg);
      -ms-transform: skew(3deg) rotate(3deg);
      -o-transform: skew(3deg) rotate(3deg);
      transform: skew(3deg) rotate(3deg);
    }
    
    .m-signature-pad--body
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
      }
    
      .m-signature-pad--footer{
        width: 100%;
      }
    .m-signature-pad--footer
      .button {
        position: absolute;
        top: 0px;
        height: 75px;
        padding: 0 45px;
        text-align: center;
        color: #FFF;
        border: 1px solid transparent;
        border-radius: 20px;
        outline: none;
        box-shadow: -4.41667px -4.41667px 13.25px #FFFFFF, 6.625px 6.625px 13.25px rgba(174, 174, 192, 0.4);;
        font-size: 1.6em;
        font-family: Comfortaa;
      }
    
    .m-signature-pad--footer
      .button.clear {
        left: -20px;
        background-color: #B7544A;
      }
    
    .m-signature-pad--footer
      .button.save {
        right: -20px;
        background-color: #1E96A3;
      }
    
    @media screen and (max-width: 1024px) {
      .m-signature-pad {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: auto;
        min-width: 250px;
        min-height: 140px;
        margin: 0;
      }
      #github {
        display: none;
      }
    }
    
    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      .m-signature-pad {
        margin: 10%;
      }
    }
    
    @media screen and (max-height: 320px) {
      .m-signature-pad--body {
        left: 0;
        right: 0;
        top: 0;
        bottom: 32px;
      }
      .m-signature-pad--footer {
        left: 20px;
        right: 20px;
        bottom: 4px;
        height: 28px;
      }
    }
    <%style%>
    </style>
</head>
<body onselectstart="return false">
  <div id="signature-pad" class="m-signature-pad">
    <div class="m-signature-pad--body">
      <canvas></canvas>
    </div>
    <div class="m-signature-pad--footer">
      <button type="button" class="button clear" data-action="clear"><%clear%></button>
      <button type="button" class="button save" data-action="save"><%confirm%></button>
    </div>
  </div>
  <script>
    ${script}
  </script>
</body>
</html>`;

export default content;
