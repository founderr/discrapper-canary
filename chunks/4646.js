function a(e, t, n) {
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
n.d(t, {
    k2: function () {
        return i;
    }
}),
    n(47120);
let l = new (n(259443).Y)('AssetMap');
async function i(e) {
    let t = new r(),
        n = Object.entries(e).map((e) => {
            let [n, a] = e;
            return t.loadRemoteImage(n, a).catch((e) => l.warn('Failed to load canvas asset', e, n, a));
        });
    return await Promise.all(n), t;
}
class r {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(e, t) {
        let n = new Image();
        return (n.src = t), (n.crossOrigin = 'anonymous'), await n.decode(), (this.assets[e] = n), Promise.resolve();
    }
    get(e) {
        return this.assets[e];
    }
    has(e) {
        return null != this.assets[e];
    }
    constructor() {
        a(this, 'assets', {}), a(this, 'fontManager', void 0);
    }
}
