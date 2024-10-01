n(47120);
var a = n(512722),
    l = n.n(a),
    i = n(921608),
    r = n(693824);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
t.Z = class e {
    getCanvas() {
        return this.canvas;
    }
    setColor(e) {
        this.color = e;
    }
    setFont(e) {
        var t, n, a, l, i;
        (this.font.style = null !== (t = e.style) && void 0 !== t ? t : this.font.style), (this.font.size = null !== (n = e.size) && void 0 !== n ? n : this.font.size), (this.font.weight = null !== (a = e.weight) && void 0 !== a ? a : this.font.weight), (this.font.family = null !== (l = e.family) && void 0 !== l ? l : this.font.family), (this.font.truncate = null !== (i = e.truncate) && void 0 !== i ? i : this.font.truncate);
    }
    getLoadedImage(e) {
        l()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
        let t = this.assetMap.get(e);
        if (void 0 === t) {
            console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(e, '.  Make sure to load it before trying to render.'));
            return;
        }
        return t;
    }
    drawRoundedImageWithFallbacks(e, t, n, a, l) {
        for (let i of e) {
            let e = this.drawRoundedImage(i, t, n, a, l);
            if (e !== r.vP.Failure) return e;
        }
        return r.vP.Failure;
    }
    constructor(e, t) {
        s(this, 'color', 'black'),
            s(this, 'font', {
                style: 'normal',
                weight: 300,
                size: i.n,
                family: ['serif'],
                truncate: r.GX.None
            }),
            s(this, 'assetMap', void 0),
            s(this, 'canvas', void 0),
            (this.canvas = e),
            (this.assetMap = t);
    }
};
