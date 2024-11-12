n.d(t, {
    CO: function () {
        return o;
    },
    NU: function () {
        return _;
    },
    X2: function () {
        return p;
    },
    cb: function () {
        return f;
    },
    d$: function () {
        return c;
    },
    tw: function () {
        return l;
    }
}),
    n(47120);
var r = n(358085);
let i = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split(/\?/, 1);
        return t.test(n);
    },
    a = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split('/');
        return n === t;
    },
    s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
    o = (e) => null != e && s.test(e),
    l = (e) => a(e, 'image'),
    u = /\.(webp|gif)$/i,
    c = (e) => i(e, u);
(0, r.isIOS)() || (0, r.isAndroid)();
let d = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
    f = (e) => i(e, d),
    _ = (e) => null != e && d.test(e),
    p = (e) => a(e, 'video');
