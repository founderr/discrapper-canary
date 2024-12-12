r.d(n, {
    T: function () {
        return i;
    }
});
var i = function (e, n, r, i, a) {
    var s = a.clientWidth,
        o = a.clientHeight,
        l = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
        u = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
        c = l - (a.getBoundingClientRect().left + window.pageXOffset),
        d = u - (a.getBoundingClientRect().top + window.pageYOffset);
    if ('vertical' === r) {
        var f = void 0;
        if (((f = d < 0 ? 0 : d > o ? 1 : Math.round((100 * d) / o) / 100), n.a !== f))
            return {
                h: n.h,
                s: n.s,
                l: n.l,
                a: f,
                source: 'rgb'
            };
    } else {
        var _ = void 0;
        if (i !== (_ = c < 0 ? 0 : c > s ? 1 : Math.round((100 * c) / s) / 100))
            return {
                h: n.h,
                s: n.s,
                l: n.l,
                a: _,
                source: 'rgb'
            };
    }
    return null;
};
