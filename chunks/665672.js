n.d(e, {
    Z: function () {
        return r;
    }
});
var i = n(512722),
    l = n.n(i);
function o(t, e, n) {
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
class r {
    setExporter(t) {
        this.exporter = t;
    }
    export(t) {
        l()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let e = this.canvas.getCanvasForExport();
        return l()(null != e, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(e, t);
    }
    constructor(t, e) {
        o(this, 'canvas', void 0), o(this, 'exporter', void 0), (this.canvas = t), (this.exporter = e);
    }
}
