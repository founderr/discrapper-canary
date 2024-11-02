n.d(e, {
    ML: function () {
        return o;
    },
    nH: function () {
        return s;
    },
    vK: function () {
        return d;
    },
    yV: function () {
        return i;
    }
});
var r = n(180650),
    a = n(921948);
let i = 1060,
    o = (t) => t * (0, a.Z)(),
    s = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
            { primary: n, secondary: r } = t;
        return 'linear-gradient('.concat(e, 'deg, ').concat(n.toHslString(), ', ').concat(r.toHslString(), ')');
    },
    l = [n(241371), n(448509)],
    c = {
        [''.concat(r.T.FANTASY)]: [n(709393), n(646584)],
        [''.concat(r.T.ANIME)]: [n(647387), n(448509)],
        [''.concat(r.T.BREAKFAST)]: [n(289901), n(402344)],
        [''.concat(r.T.FALL)]: [n(432170), n(15888)],
        [''.concat(r.T.WINTER)]: [n(304088), n(774694)],
        [''.concat(r.T.MONSTERS)]: [n(16724), n(441506)]
    },
    d = (t) => {
        var e;
        return null == t ? l : null !== (e = c[t]) && void 0 !== e ? e : l;
    };
