n.d(t, {
    WS: function () {
        return I;
    },
    ZP: function () {
        return g;
    },
    zS: function () {
        return T;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(264344),
    c = n.n(u),
    d = n(772848),
    _ = n(511266);
let E = 'com.discord',
    f = 985746746,
    h = 'com.hammerandchisel.discord',
    p = 'https://discordapp.page.link';
function m() {
    var e, t;
    let n = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'],
        r = RegExp('('.concat(n.join('|'), ')'), 'ig'),
        i = (null === c() || void 0 === c() ? void 0 : null === (e = c().ua) || void 0 === e ? void 0 : e.match(r)) != null,
        a = (null === c() || void 0 === c() ? void 0 : c().name) === 'Safari' && !i;
    return (null === c() || void 0 === c() ? void 0 : null === (t = c().os) || void 0 === t ? void 0 : t.family) !== 'iOS' || a;
}
function I() {
    return (0, d.Z)();
}
function T(e) {
    if (!e.startsWith(p)) return null;
    try {
        var t;
        let n = new URL(e).searchParams,
            r = n.get('link');
        if (null == r) return null;
        let i = decodeURIComponent(r),
            a = new URL(i).searchParams,
            o = { utmSource: null !== (t = n.get('utm_source')) && void 0 !== t ? t : void 0 };
        for (let [e, t] of a.entries()) o[e] = t;
        return o;
    } catch {
        return null;
    }
}
function g(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i, ...a } = t,
        o = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && o.searchParams.set(e, t);
    }
    let s = encodeURIComponent(o.toString()),
        l = encodeURIComponent((0, _.Z)()),
        u = m() ? 1 : 0,
        c = null != r ? encodeURIComponent(r) : null,
        d = null != i ? encodeURIComponent(i) : null,
        I = ''.concat(p, '/?link=').concat(s, '&utm_source=').concat(n, '&apn=').concat(E, '&isi=').concat(f, '&ibi=').concat(h, '&sd=').concat(l, '&efr=').concat(u);
    return null != c && (I += '&afl='.concat(c)), null != d && (I += '&ifl='.concat(d)), I;
}
