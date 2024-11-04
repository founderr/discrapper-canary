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
        return r;
    }
}),
    n(47120);
let l = new (n(259443).Y)('AssetMap');
async function r(t) {
    let e = new o(),
        n = Object.entries(t).map((t) => {
            let [n, i] = t;
            return e.loadRemoteImage(n, i).catch((t) => l.warn('Failed to load canvas asset', t, n, i));
        });
    return await Promise.all(n), e;
}
class o {
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
