n.d(e, {
    Jj: function () {
        return c;
    },
    Lz: function () {
        return f;
    },
    gS: function () {
        return h;
    },
    s$: function () {
        return p;
    }
}),
    n(47120);
var r = n(829883),
    l = n(378233),
    i = n(591759);
let a = /^.*\.discordapp\.net$/,
    u = 'cdn.discordapp.com',
    o = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    d = new Set(['jpg', 'jpeg', 'png']),
    s = (t) => {
        var e, n, r, l;
        return null === (l = i.Z.toURLSafe(t)) || void 0 === l ? void 0 : null === (r = l.pathname) || void 0 === r ? void 0 : null === (n = r.split('.')) || void 0 === n ? void 0 : null === (e = n.pop()) || void 0 === e ? void 0 : e.toLowerCase();
    };
function c(t) {
    return !((0, l.B0)(t) || (0, r.zt)(t)) && !0;
}
function h(t) {
    let e = i.Z.toURLSafe(t);
    if (null == e) return !1;
    let n = s(t);
    return (a.test(e.hostname) || e.host === u) && c(t) && null != n && o.has(n);
}
function f(t) {
    let e = i.Z.toURLSafe(t);
    if (null == e) return !1;
    let n = s(t);
    return (a.test(e.hostname) || e.host === u) && c(t) && null != n && d.has(n);
}
function p(t) {
    let e = i.Z.toURLSafe(t);
    return null == e || e.host === u ? t : 'https://media.discordapp.net' === e.origin ? ((e.host = u), e.searchParams.delete('size'), e.searchParams.delete('width'), e.searchParams.delete('height'), e.searchParams.delete('quality'), e.searchParams.delete('format'), e.toString()) : (e.searchParams.delete('width'), e.searchParams.delete('height'), e.searchParams.set('quality', 'lossless'), e.searchParams.delete('format'), e.toString());
}
