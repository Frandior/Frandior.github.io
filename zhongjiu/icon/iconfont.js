;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M82.125824 627.0976l103.499776 0c-9.604096-17.394688-20.102144-33.898496-31.500288-49.50016l46.799872-26.099712c16.797696 24.004608 33.30048 49.205248 49.50016 75.599872l80.100352 0c13.198336-25.797632 25.797632-51.898368 37.799936-78.30016l53.999616 24.29952c-8.999936 16.804864-18.899968 34.804736-29.700096 53.999616l98.100224 0 0 52.200448L82.125824 679.297024 82.125824 627.0976zM110.925824 276.99712l152.999936 0 0-65.69984L90.225664 211.29728l0-52.200448 173.700096 0L263.92576 78.997504l58.500096 0 0 80.100352 165.600256 0 0 52.200448L322.425856 211.298304l0 65.69984 146.700288 0 0 52.200448L110.925824 329.198592 110.925824 276.99712zM119.025664 379.5968l342.899712 0L461.925376 558.697472l-57.6 0 0-17.999872L176.625664 540.6976l0 17.999872-57.6 0L119.025664 379.5968zM119.025664 734.196736l344.699904 0 0 212.400128-57.6 0 0-39.600128L176.625664 906.996736l0 39.600128-57.6 0L119.025664 734.196736zM404.325376 429.997056 176.625664 429.997056l0 61.200384 227.699712 0L404.325376 429.997056zM406.125568 784.596992 176.625664 784.596992l0 72.000512 229.499904 0L406.125568 784.596992zM533.025792 276.99712l161.999872 0 0-65.69984L512.325632 211.29728l0-52.200448 182.700032 0L695.025664 78.097408l59.400192 0 0 81.000448 182.700032 0 0 52.200448L754.425856 211.298304l0 65.69984 159.299584 0 0 52.200448L533.025792 329.198592 533.025792 276.99712zM515.02592 627.0976l105.299968 0c-10.800128-17.999872-21.600256-34.797568-32.400384-50.400256l47.699968-26.099712c20.39808 30.002176 36.89984 55.504896 49.50016 76.499968l80.100352 0c13.198336-25.199616 25.495552-51.595264 36.89984-79.200256l53.999616 24.29952c-11.404288 21.00224-21.600256 39.305216-30.600192 54.899712l117.000192 0 0 52.200448-427.49952 0L515.02592 627.0976zM540.225536 379.5968l365.400064 0L905.6256 558.697472l-57.6 0 0-17.999872L597.825536 540.6976l0 17.999872-57.6 0L540.225536 379.5968zM540.225536 734.196736l365.400064 0 0 212.400128-57.6 0 0-39.600128L597.825536 906.996736l0 39.600128-57.6 0L540.225536 734.196736zM848.0256 429.997056 597.825536 429.997056l0 61.200384 250.200064 0L848.0256 429.997056zM848.0256 784.596992 597.825536 784.596992l0 72.000512 250.200064 0L848.0256 784.596992z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M196.277147 225.916333c0 12.674671-10.264182 22.950711-22.951652 22.950711L87.253731 248.867044C74.567285 248.867044 64.300033 238.58998 64.300033 225.916333l0-86.069261C64.300033 127.172401 74.567285 116.895337 87.253731 116.895337l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.950711L196.277147 225.916333z"  ></path>'+
      ''+
      '<path d="M959.45027 225.916333c0 12.674671-10.265205 22.950711-22.951652 22.950711L311.040523 248.867044c-12.686447 0-22.952675-10.276041-22.952675-22.950711l0-86.069261c0-12.674671 10.266228-22.950711 22.952675-22.950711l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.950711L959.45027 225.916333z"  ></path>'+
      ''+
      '<path d="M196.277147 532.893866c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 555.845601C74.567285 555.845601 64.300033 545.568537 64.300033 532.893866l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.951735L196.276124 532.893866z"  ></path>'+
      ''+
      '<path d="M959.45027 532.893866c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 555.845601c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.951735L959.45027 532.893866z"  ></path>'+
      ''+
      '<path d="M196.277147 839.871399c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 862.823134C74.567285 862.823134 64.300033 852.54607 64.300033 839.871399l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l86.071764 0c12.68747 0 22.951652 10.277064 22.951652 22.952758L196.276124 839.871399z"  ></path>'+
      ''+
      '<path d="M959.45027 839.871399c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 862.823134c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l625.458095 0c12.685423 0 22.951652 10.277064 22.951652 22.952758L959.45027 839.871399z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-baijiu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M24.7205 26.314363l121.641862 800.503676-0.117821 0 0 170.87166 730.42659 0 0-163.403319 59.090309-389.171866 0-0.067567L999.291126 26.314363 24.7205 26.314363zM886.497827 460.929822c-90.246077 26.38193-281.913085 68.310586-374.449949-15.84906-123.528058-112.254448-376.855994 0-376.924437 0l-56.615883-372.600255L945.518818 72.480507 886.497827 460.929822z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-i43" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M742.978117 958.031543 279.477714 958.031543c-90.923826 0-164.900677-73.968665-164.900677-164.887374L114.577037 501.316683c0-90.917686 73.976852-164.888398 164.900677-164.888398l51.836599 0L331.314313 146.352229c0-46.600341 37.906332-84.519975 84.507696-84.519975l190.81079 0c46.601364 0 84.507696 37.919634 84.507696 84.519975l0 190.076056 51.837622 0c90.929965 0 164.912957 73.970712 164.912957 164.888398l0 291.828508C907.891074 884.062877 833.908082 958.031543 742.978117 958.031543zM279.477714 415.674141c-47.232744 0-85.655845 38.422078-85.655845 85.642542l0 291.828508c0 47.232744 38.423101 85.641519 85.655845 85.641519l463.500403 0c47.231721 0 85.667102-38.408775 85.667102-85.641519L828.645219 501.316683c0-47.220465-38.435381-85.642542-85.667102-85.642542l-91.460038 0c-21.887496 0-39.622416-17.73492-39.622416-39.622416L611.895663 146.352229c0-2.902096-2.361791-5.275143-5.263887-5.275143L415.822009 141.077086c-2.902096 0-5.262864 2.373047-5.262864 5.275143l0 229.699496c0 21.88852-17.73492 39.622416-39.622416 39.622416L279.477714 415.674141z"  ></path>'+
      ''+
      '<path d="M686.445566 829.929979 336.009242 829.929979c-53.319369 0-96.696296-43.375903-96.696296-96.708576L239.312946 571.983139c0-53.319369 43.375903-96.695273 96.696296-96.695273 4.617158 0 9.18315 0.812505 13.516852 2.38635 21.849634 7.931646 83.449597 29.600155 105.867166 34.591843 21.358447 4.747117 34.824133 25.91216 30.078039 47.270607-4.758374 21.372773-25.859971 34.850739-47.28391 30.079062-26.504654-5.895267-84.443227-26.260084-107.116623-34.372855-7.223518 2.140757-12.511965 8.835226-12.511965 16.740266l0 161.237241c0 9.634428 7.829316 17.463744 17.451464 17.463744l350.437347 0c9.621125 0 17.451464-7.829316 17.451464-17.463744L703.899076 519.153934c0-21.875217 17.733896-39.623439 39.622416-39.623439 21.887496 0 39.621393 17.748223 39.621393 39.623439l0 214.066447C783.140839 786.554076 739.764935 829.929979 686.445566 829.929979z"  ></path>'+
      ''+
      '<path d="M387.936915 693.430142c-47.812959 0-92.207052-11.504008-127.225613-41.209564-16.690124-14.161534-18.74083-39.157835-4.579295-55.846936 14.135952-16.676821 39.157835-18.727527 55.834656-4.579295 86.48063 73.362868 322.873572-50.004881 398.829498-99.030457 18.406209-11.878538 42.924625-6.564509 54.776557 11.815093 11.867282 18.379603 6.578836 42.911322-11.800767 54.777581C727.113801 576.549132 540.299021 693.430142 387.936915 693.430142z"  ></path>'+
      ''+
      '<path d="M623.000582 289.661146 397.249001 289.661146c-21.887496 0-39.622416-17.73492-39.622416-39.622416 0-21.875217 17.73492-39.623439 39.622416-39.623439l225.752604 0c21.887496 0 39.621393 17.748223 39.621393 39.623439C662.621974 271.926226 644.888078 289.661146 623.000582 289.661146z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-hongjiu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.609097 961.619254"  ></path>'+
      ''+
      '<path d="M546.667567 459.228099c0-30.768771-10.614755-59.008952-28.263717-81.455173L453.316459 275.385001 453.316459 75.578326c0-6.225795-5.094018-11.319813-11.319813-11.319813l-54.677297 0c-6.225795 0-11.319813 5.094018-11.319813 11.319813l0 199.807698-65.089437 102.392018c-17.646915 22.445198-28.259624 50.683333-28.259624 81.450057 0 2.382257 0.232291 4.705162 0.356111 7.055696-0.194428 1.146103-0.356111 2.305509-0.356111 3.504824l0 477.992465c0 6.225795 5.094018 11.319813 11.319813 11.319813l241.377466 0c6.225795 0 11.319813-5.094018 11.319813-11.319813L546.667567 469.788619c0-1.199315-0.161682-2.358721-0.356111-3.504824C546.435277 463.932238 546.667567 461.610356 546.667567 459.228099zM507.064594 825.070298c0 11.616572-9.504468 21.12104-21.12104 21.12104L343.373465 846.191338c-11.616572 0-21.12104-9.504468-21.12104-21.12104L322.252425 570.099233c0-11.617595 9.504468-21.12104 21.12104-21.12104l142.570089 0c11.616572 0 21.12104 9.504468 21.12104 21.12104L507.064594 825.070298z"  ></path>'+
      ''+
      '<path d="M726.792994 938.14154c-9.984399-4.607948-56.738235-18.029632-56.738235-18.029632-4.89652-8.428973-6.240121-26.516934-6.240121-26.516934l0.079818-85.914742c1.232061-22.551622 9.138124-25.366737 9.138124-25.366737 31.490202-9.134031 52.991911-24.659633 63.171762-75.349105 10.180873-50.690496-31.024597-142.135184-31.024597-142.135184l-47.254234 0-47.254234 0c0 0-41.205471 91.444689-31.025621 142.135184 10.180873 50.690496 31.682583 66.216097 63.172785 75.349105 0 0 7.906064 2.815115 9.137101 25.366737l0.080841 85.914742c0 0-1.343601 18.08796-6.240121 26.516934 0 0-46.753837 13.421684-56.738235 18.029632s-24.576745 9.117658-0.38374 13.967106c0 0 3.070942 0.317225 7.852852 0.792039l107.340727 0c0 0-21.218254 3.989871-50.531883 4.716418 1.74269 0.072655 3.346211 0.12382 4.589528 0.12382 14.848173 0 69.251224-5.632277 69.251224-5.632277C751.369739 947.258175 736.777393 942.749488 726.792994 938.14154zM614.335736 617.706507c-3.442402 11.473309-12.172227 40.72861-12.172227 59.894112 0 19.764136 3.891633 38.081317 8.083096 46.656623 4.192485 8.574283-10.286274 18.928095-18.671245-11.918447-7.881504-28.990265-1.796926-65.284889 5.989411-88.044242C605.351108 601.535199 617.928564 605.727685 614.335736 617.706507z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-huangjiu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.609097 961.619254"  ></path>'+
      ''+
      '<path d="M496.952282 142.881175c0 0-189.537797 4.03285-259.453147 72.659857 0 0-42.268686 28.103058-16.105816 34.935674 26.16287 6.832615 130.541125-28.26781 183.632297 1.509377 53.090149 29.777187 57.722656 53.534264 69.343321 77.206406 11.620665 23.672142 44.868907 33.139771 77.674057-2.227738 67.503417-72.780607 154.61031-97.783047 175.786609-90.034573 52.788274 19.315928 75.609025 19.674085 75.609025 19.674085s19.760043 2.310625 25.434276-11.650341C833.166697 234.386238 764.003478 142.858662 496.952282 142.881175z"  ></path>'+
      ''+
      '<path d="M419.489026 129.97626l182.696995 0c18.072611 0 32.858362-14.786775 32.858362-32.859385s-14.786775-32.859385-32.858362-32.859385L419.489026 64.257489c-18.072611 0-32.859385 14.786775-32.859385 32.859385S401.416416 129.97626 419.489026 129.97626z"  ></path>'+
      ''+
      '<path d="M730.580251 258.913864c-69.901023-0.020466-148.014078 55.734372-178.538279 93.088118-30.525224 37.353746-73.207325 22.718421-84.827991-0.953721-11.620665-23.672142-9.098215-44.246737-62.189388-74.023924-45.364187-25.443485-128.135332-3.53757-167.599136-0.87902-31.395034 34.903951-43.464931 100.653421-43.464931 153.86432 0 205.216895 75.794244 400.88225 178.854481 514.696412 0 0 69.37095 14.394848 138.021493 14.394848 68.650543 0 138.021493-14.394848 138.021493-14.394848C751.919255 830.892911 827.713498 635.226532 827.713498 430.009637c0-52.768831-11.859096-117.885897-42.673915-153.005766C768.756735 265.475304 755.322771 258.921028 730.580251 258.913864zM510.837524 745.969753 354.61039 589.742619 510.837524 433.516508l156.226111 156.227134L510.837524 745.969753z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lihe" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M488.704 1024 139.648 1024c-25.856 0-46.592-20.608-46.592-46.592L93.056 512c0-25.856 20.672-46.592 46.592-46.592l349.12 0L488.768 1024 488.704 1024zM884.224 465.408 535.232 465.408 535.232 1024l349.056 0c25.856 0 46.656-20.608 46.656-46.592L930.944 512C930.88 486.144 910.144 465.408 884.224 465.408L884.224 465.408zM1024 209.408l0 116.416c0 25.856-20.736 46.528-46.528 46.528L535.232 372.352 535.232 162.88 488.704 162.88l0 209.408-442.24 0C20.672 372.352 0 351.68 0 325.824L0 209.408c0-25.792 20.736-46.528 46.528-46.528L196.48 162.88c-18.112-28.48-36.224-64.64-33.6-93.056 0-12.928 5.184-31.04 36.16-51.776C214.592 7.808 235.264 0 261.184 0c15.552 0 31.04 2.56 49.088 7.808 64.704 15.488 137.088 62.08 204.288 124.096 64.64-59.52 139.584-105.984 204.288-124.096C736.896 2.56 752.512 0 768 0c23.232 0 44.032 5.184 62.016 18.112 31.104 20.736 36.224 38.784 36.224 51.776 2.496 31.04-12.992 64.576-33.6 93.056l144.896 0C1003.264 162.88 1024 183.616 1024 209.408L1024 209.408zM473.152 162.88C416.256 113.792 346.496 69.824 297.344 56.896 284.416 54.272 271.488 51.712 261.184 51.712c-15.488 0-25.92 2.624-33.6 7.808C224.96 62.08 214.592 69.824 214.592 74.944 212.032 95.68 237.888 134.464 258.56 162.88L473.152 162.88 473.152 162.88zM809.344 74.944c0-5.12-10.368-12.928-12.992-15.488-7.744-5.248-17.984-7.808-30.976-7.808-10.368 0-23.232 2.624-36.096 5.248-49.152 12.928-118.976 56.896-175.936 105.984L768 162.88C788.608 134.464 812.032 90.56 809.344 74.944L809.344 74.944z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
