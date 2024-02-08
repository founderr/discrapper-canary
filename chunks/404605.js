"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, i = n("627445"),
  a = n.n(i);
l = class {
  setExporter(e) {
    this.exporter = e
  }
  export (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      l = arguments.length > 3 ? arguments[3] : void 0;
    a(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
    let i = this.canvas.getCanvasForExport();
    return a(null != i, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(i, e, t, n, l)
  }
  constructor(e, t) {
    this.canvas = e, this.exporter = t
  }
}