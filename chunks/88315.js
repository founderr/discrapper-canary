n.d(t, {
    P7: function () {
        return p;
    },
    RR: function () {
        return m;
    },
    UN: function () {
        return u;
    },
    bg: function () {
        return f;
    },
    hn: function () {
        return d;
    },
    np: function () {
        return h;
    }
});
var i = n(979590),
    l = n.n(i),
    r = n(866442),
    s = n(220082),
    a = n(594174),
    o = n(292793),
    c = n(813900);
function u(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext('2d');
    if (null != t && null != n) n.clearRect(0, 0, t.width, t.height);
}
function d(e, t) {
    let { width: n, height: i, left: l, top: r } = e.getBoundingClientRect(),
        s = (t.clientX - l) / n;
    return {
        x: s,
        y: (t.clientY - r) / i
    };
}
function h(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}
function m(e, t, n) {
    return {
        x: h(e.x, t),
        y: h(e.y, n),
        deltaTime: e.deltaTime
    };
}
function p(e) {
    return e.type === o.W.LINE;
}
function f(e, t, n, i) {
    var o;
    let u = a.default.getUser(e),
        d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
        h = null != d ? (null === (o = s.SR.getState().palette[d]) || void 0 === o ? void 0 : o[0]) : null,
        m =
            null != h
                ? '#'.concat(
                      l()({
                          r: h[0],
                          g: h[1],
                          b: h[2]
                      }).toHex()
                  )
                : i,
        p = (0, r.Bd)((0, r._i)(m)) > 0.5 ? n : t;
    return {
        fillColor: m,
        outlineColor: p
    };
}
