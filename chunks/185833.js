r.d(n, {
    B8: function () {
        return o;
    },
    Jn: function () {
        return c;
    },
    L_: function () {
        return f;
    },
    Ym: function () {
        return u;
    },
    g7: function () {
        return _;
    },
    m4: function () {
        return l;
    },
    sA: function () {
        return h;
    },
    wb: function () {
        return d;
    }
});
var i = '[-+]?\\d*\\.?\\d+',
    a = i + '%';
function s() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var o = RegExp('rgb' + s(i, i, i)),
    l = RegExp('rgba' + s(i, i, i, i)),
    u = RegExp('hsl' + s(i, a, a)),
    c = RegExp('hsla' + s(i, a, a, i)),
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    f = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    _ = /^#([0-9a-fA-F]{6})$/,
    h = /^#([0-9a-fA-F]{8})$/;
