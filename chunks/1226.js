n.d(t, {
    BO: function () {
        return a;
    },
    cq: function () {
        return c;
    },
    gI: function () {
        return d;
    },
    xN: function () {
        return h;
    },
    yA: function () {
        return u;
    }
});
var i = n(348327),
    o = n.n(i),
    l = n(972959),
    r = n(569545);
let s = (0, l.H)(() => ({ streams: {} }));
function a(e) {
    var t, n;
    let i = (0, r.V9)(e);
    return null !== (n = null === (t = s.useState((e) => e.streams, o())[i]) || void 0 === t ? void 0 : t.zoom) && void 0 !== n ? n : 100;
}
function u(e) {
    return a(e) / 100;
}
function c(e, t) {
    let n = (0, r.V9)(e);
    s.setState((e) => {
        var i;
        return {
            ...e,
            streams: {
                ...e.streams,
                [n]: {
                    zoom: t,
                    fitOverride: null === (i = e.streams[n]) || void 0 === i ? void 0 : i.fitOverride
                }
            }
        };
    }, !0);
}
function d(e, t) {
    let n = (0, r.V9)(e);
    s.setState((e) => {
        var i;
        return {
            ...e,
            streams: {
                ...e.streams,
                [n]: {
                    zoom: null === (i = e.streams[n]) || void 0 === i ? void 0 : i.zoom,
                    fitOverride: t
                }
            }
        };
    });
}
function h(e) {
    var t;
    let n = (0, r.V9)(e);
    return null === (t = s.useState((e) => e.streams, o())[n]) || void 0 === t ? void 0 : t.fitOverride;
}
