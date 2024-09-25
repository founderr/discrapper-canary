n.d(t, {
    WE: function () {
        return c;
    },
    lE: function () {
        return l;
    }
});
var r = n(709054),
    i = n(124368),
    a = n(689938);
let o = '992549565104128000',
    s = (e) => r.default.compare(o, e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = s(t);
            return (null == t || n) && e >= i.vw ? '50+' : e >= i.M3 ? '100k+' : ''.concat(e);
        }
    },
    u = (e, t, n) => {
        let r = l(e, n);
        return '0' === r ? a.Z.Messages.SEE_THREAD : t.format({ count: r });
    },
    c = (e, t) => u(e, a.Z.Messages.THREAD_MESSAGE_COUNT, t);
