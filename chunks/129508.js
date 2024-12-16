n(47120);
var i = n(512722),
    l = n.n(i),
    o = n(921608),
    r = n(693824);
function a(t, e, n) {
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
e.Z = class t {
    getCanvas() {
        return this.canvas;
    }
    setColor(t) {
        this.color = t;
    }
    setFont(t) {
        var e, n, i, l, o;
        (this.font.style = null !== (e = t.style) && void 0 !== e ? e : this.font.style), (this.font.size = null !== (n = t.size) && void 0 !== n ? n : this.font.size), (this.font.weight = null !== (i = t.weight) && void 0 !== i ? i : this.font.weight), (this.font.family = null !== (l = t.family) && void 0 !== l ? l : this.font.family), (this.font.truncate = null !== (o = t.truncate) && void 0 !== o ? o : this.font.truncate);
    }
    getLoadedImage(t) {
        l()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
        let e = this.assetMap.get(t);
        if (void 0 === e) {
            console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(t, '.  Make sure to load it before trying to render.'));
            return;
        }
        return e;
    }
    drawRoundedImageWithFallbacks(t, e, n, i, l) {
        for (let o of t) {
            let t = this.drawRoundedImage(o, e, n, i, l);
            if (t !== r.vP.Failure) return t;
        }
        return r.vP.Failure;
    }
    constructor(t, e) {
        a(this, 'color', 'black'),
            a(this, 'font', {
                style: 'normal',
                weight: 300,
                size: o.n,
                family: ['serif'],
                truncate: r.GX.None
            }),
            a(this, 'assetMap', void 0),
            a(this, 'canvas', void 0),
            (this.canvas = t),
            (this.assetMap = e);
    }
};
