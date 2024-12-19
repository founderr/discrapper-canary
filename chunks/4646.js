function i(t, e, n) {
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
n.d(e, {
    k2: function () {
        return o;
    }
}),
    n(47120);
let s = new (n(259443).Yd)('AssetMap');
async function o(t) {
    let e = new r(),
        n = Object.entries(t).map((t) => {
            let [n, i] = t;
            return e.loadRemoteImage(n, i).catch((t) => s.warn('Failed to load canvas asset', t, n, i));
        });
    return await Promise.all(n), e;
}
class r {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(t, e) {
        let n = new Image();
        return (n.src = e), (n.crossOrigin = 'anonymous'), await n.decode(), (this.assets[t] = n), Promise.resolve();
    }
    get(t) {
        return this.assets[t];
    }
    has(t) {
        return null != this.assets[t];
    }
    constructor() {
        i(this, 'assets', {}), i(this, 'fontManager', void 0);
    }
}
e.ZP = r;
