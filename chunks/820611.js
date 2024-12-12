r.d(n, {
    FX: function () {
        return u;
    },
    LX: function () {
        return o;
    },
    Qg: function () {
        return c;
    },
    jH: function () {
        return l;
    },
    p7: function () {
        return d;
    }
});
var i = r(845389),
    a = r(979590),
    s = r.n(a),
    o = function (e) {
        var n = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
            r = 0,
            a = 0;
        return (
            (0, i.Z)(n, function (n) {
                e[n] && ((r += 1), !isNaN(e[n]) && (a += 1), ('s' === n || 'l' === n) && /^\d+%$/.test(e[n]) && (a += 1));
            }),
            r === a && e
        );
    },
    l = function (e, n) {
        var r = e.hex ? s()(e.hex) : s()(e),
            i = r.toHsl(),
            a = r.toHsv(),
            o = r.toRgb(),
            l = r.toHex();
        return (
            0 === i.s && ((i.h = n || 0), (a.h = n || 0)),
            {
                hsl: i,
                hex: '000000' === l && 0 === o.a ? 'transparent' : '#' + l,
                rgb: o,
                hsv: a,
                oldHue: e.h || n || i.h,
                source: e.source
            }
        );
    },
    u = function (e) {
        if ('transparent' === e) return !0;
        var n = '#' === String(e).charAt(0) ? 1 : 0;
        return e.length !== 4 + n && e.length < 7 + n && s()(e).isValid();
    },
    c = function (e) {
        if (!e) return '#fff';
        var n = l(e);
        return 'transparent' === n.hex ? 'rgba(0,0,0,0.4)' : (299 * n.rgb.r + 587 * n.rgb.g + 114 * n.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    },
    d = function (e, n) {
        var r = e.replace('\xB0', '');
        return s()(n + ' (' + r + ')')._ok;
    };
