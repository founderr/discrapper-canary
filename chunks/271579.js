r.d(n, {
    WS: function () {
        return v;
    },
    ZP: function () {
        return T;
    },
    zS: function () {
        return I;
    }
});
var i = r(315314);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(264344),
    d = r.n(c),
    f = r(772848),
    _ = r(511266);
let h = 'com.discord',
    p = 985746746,
    m = 'com.hammerandchisel.discord',
    g = 'https://discordapp.page.link';
function E() {
    var e, n;
    let r = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'],
        i = RegExp('('.concat(r.join('|'), ')'), 'ig'),
        a = (null === d() || void 0 === d() ? void 0 : null === (e = d().ua) || void 0 === e ? void 0 : e.match(i)) != null,
        s = (null === d() || void 0 === d() ? void 0 : d().name) === 'Safari' && !a;
    return (null === d() || void 0 === d() ? void 0 : null === (n = d().os) || void 0 === n ? void 0 : n.family) !== 'iOS' || s;
}
function v() {
    return (0, f.Z)();
}
function I(e) {
    if (!e.startsWith(g)) return null;
    try {
        var n;
        let r = new URL(e).searchParams,
            i = r.get('link');
        if (null == i) return null;
        let a = decodeURIComponent(i),
            s = new URL(a).searchParams,
            o = { utmSource: null !== (n = r.get('utm_source')) && void 0 !== n ? n : void 0 };
        for (let [e, n] of s.entries()) o[e] = n;
        return o;
    } catch {
        return null;
    }
}
function T(e, n) {
    let { utmSource: r, androidFallbackLink: i, iosFallbackLink: a, ...s } = n,
        o = new URL(e);
    for (let e in s) {
        let n = s[e];
        null != n && o.searchParams.set(e, n);
    }
    let l = encodeURIComponent(o.toString()),
        u = encodeURIComponent((0, _.Z)()),
        c = E() ? 1 : 0,
        d = null != i ? encodeURIComponent(i) : null,
        f = null != a ? encodeURIComponent(a) : null,
        v = ''.concat(g, '/?link=').concat(l, '&utm_source=').concat(r, '&apn=').concat(h, '&isi=').concat(p, '&ibi=').concat(m, '&sd=').concat(u, '&efr=').concat(c);
    return null != d && (v += '&afl='.concat(d)), null != f && (v += '&ifl='.concat(f)), v;
}
