n.d(t, {
    HI: function () {
        return u;
    },
    gG: function () {
        return l;
    },
    hb: function () {
        return c;
    }
});
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(516373);
let o = {};
function l() {
    var e, t;
    return null !== (t = null === (e = (0, s.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : o;
}
function u(e) {
    let t = l();
    return r.useMemo(
        () =>
            a()(t)
                .map((t, n) => {
                    var r;
                    return {
                        ...t,
                        url: n,
                        src: null !== (r = null == e ? void 0 : e(t.src, n)) && void 0 !== r ? r : t.src
                    };
                })
                .sortBy('order')
                .reverse()
                .value(),
        [t, e]
    );
}
function c(e) {
    return null != l()[e];
}
