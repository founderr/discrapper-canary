n.d(t, {
    CO: function () {
        return l;
    },
    NU: function () {
        return S;
    },
    X2: function () {
        return A;
    },
    cb: function () {
        return g;
    },
    d$: function () {
        return d;
    },
    tw: function () {
        return u;
    }
});
var r = n(47120);
var i = n(358085);
let a = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split(/\?/, 1);
        return t.test(n);
    },
    o = (e, t) => {
        if (null == e) return !1;
        let [n, r] = e.split('/');
        return n === t;
    },
    s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
    l = (e) => null != e && s.test(e),
    u = (e) => o(e, 'image'),
    c = /\.(webp|gif)$/i,
    d = (e) => a(e, c),
    _ = /\.(mp3|m4a|wav|aif|aiff|ogg)$/i,
    E = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
    f = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
    h = (0, i.isIOS)() ? _ : (0, i.isAndroid)() ? E : f,
    p = /\.(mp4|mov)$/i,
    m = /\.(mp4|webm|mov)$/i,
    I = /\.(mp4|webm|mov)$/i,
    T = (0, i.isIOS)() ? p : (0, i.isAndroid)() ? m : I,
    g = (e) => a(e, T),
    S = (e) => null != e && T.test(e),
    A = (e) => o(e, 'video');
