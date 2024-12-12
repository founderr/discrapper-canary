Object.defineProperty(n, '__esModule', { value: !0 });
var r = {},
    i = (n.render = function (e, n, r, i) {
        if ('undefined' == typeof document && !i) return null;
        var a = i ? new i() : document.createElement('canvas');
        (a.width = 2 * r), (a.height = 2 * r);
        var s = a.getContext('2d');
        return s ? ((s.fillStyle = e), s.fillRect(0, 0, a.width, a.height), (s.fillStyle = n), s.fillRect(0, 0, r, r), s.translate(r, r), s.fillRect(0, 0, r, r), a.toDataURL()) : null;
    });
n.get = function (e, n, a, s) {
    var o = e + '-' + n + '-' + a + (s ? '-server' : '');
    if (r[o]) return r[o];
    var l = i(e, n, a, s);
    return (r[o] = l), l;
};
