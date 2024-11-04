n.d(e, {
    Z: function () {
        return o;
    }
});
var i = n(512722),
    l = n.n(i);
function r(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class o {
    setExporter(t) {
        this.exporter = t;
    }
    export(t) {
        l()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let e = this.canvas.getCanvasForExport();
        return l()(null != e, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(e, t);
    }
    constructor(t, e) {
        r(this, 'canvas', void 0), r(this, 'exporter', void 0), (this.canvas = t), (this.exporter = e);
    }
}
