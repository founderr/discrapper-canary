n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(218867),
    o = n(155701);
let c = 16 / 9;
function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function d(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            s = Math.floor(i / 2);
        n((t += s)) ? ((e = t + 1), (i -= s + 1)) : (i = s);
    }
    return e;
}
function h(e) {
    var t;
    let { className: n, children: a, keyExtractor: h, paddingTop: m = 0, paddingBottom: p = 0 } = e,
        [_, f] = s.useState({
            width: 0,
            height: 0
        }),
        { width: E, height: g } = _,
        C = null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0,
        I = E - 16,
        T = g - (m + p),
        {
            tileStyle: x,
            tileWidth: S,
            rows: v,
            columns: N
        } = s.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: i,
                        columns: s,
                        tileWidth: a
                    } = (function (e, t, n) {
                        let i;
                        let s = Math.floor(t / 25);
                        i =
                            e > 25
                                ? d(s, t, (e) => {
                                      let i = u(e, t),
                                          s = (function (e, t) {
                                              let n = e / c;
                                              return Math.ceil((t - n) / (8 + n)) + 1;
                                          })(e, n);
                                      return i * s > 25;
                                  })
                                : d(s, t, (i) => {
                                      let s = u(i, t),
                                          a = (function (e, t) {
                                              let n = e / c;
                                              return Math.floor((t - n) / (8 + n)) + 1;
                                          })(i, n);
                                      return s * a >= e;
                                  }) - 1;
                        let a = u(i, t),
                            l = Math.ceil(e / a);
                        return {
                            tileWidth: i,
                            columns: Math.max(1, a),
                            rows: l
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: a },
                        tileWidth: a,
                        rows: i,
                        columns: s
                    };
                })(C, I, T),
            [C, I, T]
        ),
        A = N + 1,
        Z = A * S + (A - 1) * 8 <= E,
        M = Math.floor(S / c) + 8,
        b = Math.max(0, T - M * v) / 2;
    return (0, i.jsx)(r.Z, {
        fade: !0,
        className: n,
        listPadding: [m + b, 0, p + b - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * N;
            return (0, i.jsx)(
                'div',
                {
                    className: o.row,
                    children:
                        null == a
                            ? void 0
                            : null === (t = a.slice(n, n + N)) || void 0 === t
                              ? void 0
                              : t.map((e, t) => {
                                    var s;
                                    let a = n + t;
                                    return (0, i.jsx)(
                                        'div',
                                        {
                                            style: x,
                                            className: l()(o.tile, {
                                                [o.padColumn]: Z,
                                                [o.noVerticalMargin]: a >= (v - 1) * N,
                                                [o.noHorizontalMargin]: (a + 1) % N == 0 || a === C - 1
                                            }),
                                            children: (0, i.jsx)('div', {
                                                className: o.tileSizer,
                                                children: e(S)
                                            })
                                        },
                                        null !== (s = null == h ? void 0 : h(a)) && void 0 !== s ? s : a
                                    );
                                })
                },
                e
            );
        },
        rowCount: v,
        rowCountBySection: [v],
        rowHeight: M,
        onResize: f
    });
}
