r.d(n, {
    U: function () {
        return s;
    }
});
var i = {},
    a = function (e, n, r, i) {
        if ('undefined' == typeof document && !i) return null;
        var a = i ? new i() : document.createElement('canvas');
        (a.width = 2 * r), (a.height = 2 * r);
        var s = a.getContext('2d');
        return s ? ((s.fillStyle = e), s.fillRect(0, 0, a.width, a.height), (s.fillStyle = n), s.fillRect(0, 0, r, r), s.translate(r, r), s.fillRect(0, 0, r, r), a.toDataURL()) : null;
    },
    s = function (e, n, r, s) {
        var o = e + '-' + n + '-' + r + (s ? '-server' : '');
        if (i[o]) return i[o];
        var l = a(e, n, r, s);
        return (i[o] = l), l;
    };
