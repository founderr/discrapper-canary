n.d(t, {
    $s: function () {
        return O;
    },
    DE: function () {
        return b;
    },
    Fv: function () {
        return A;
    },
    Gw: function () {
        return p;
    },
    JQ: function () {
        return N;
    },
    Jw: function () {
        return C;
    },
    Mr: function () {
        return S;
    },
    Vn: function () {
        return m;
    },
    ZD: function () {
        return T;
    },
    f9: function () {
        return R;
    },
    h7: function () {
        return g;
    },
    nf: function () {
        return L;
    },
    o: function () {
        return v;
    },
    pT: function () {
        return y;
    },
    s9: function () {
        return I;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(571269);
var o = n(298267);
var s = n(97613),
    l = n.n(s),
    u = n(652874),
    c = n(731965),
    d = n(40851),
    _ = n(602091),
    E = n(981631);
let f = n(338305).Z,
    h = [_.z1, _.u1];
function p() {
    let e = (0, d.GB)();
    return null != e ? m(e) : _.z1;
}
function m(e) {
    return e === E.IlC.POPOUT ? _.u1 : _.z1;
}
let I = (0, u.Z)((e) => ({
    [_.z1]: [],
    [_.u1]: []
}));
async function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = p(), ...r } = t,
        i = null != t.modalKey ? t.modalKey : l()(),
        a = !1,
        o = setTimeout(() => {
            (a = !0),
                g(
                    f,
                    {
                        ...r,
                        modalKey: i
                    },
                    n
                );
        }, 300),
        s = await e();
    return (
        clearTimeout(o),
        a
            ? L(i, n) && v(i, s, r.onCloseRequest, r.onCloseCallback, n)
            : g(
                  s,
                  {
                      ...r,
                      modalKey: i
                  },
                  n
              ),
        i
    );
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p(),
        { modalKey: r, instant: i, Layer: a, onCloseRequest: o, onCloseCallback: s, backdropStyle: u } = t,
        d = null != r ? r : l()();
    return (
        (0, c.j)(() => {
            I.setState((t) => {
                let r = t[n];
                return void 0 !== r &&
                    r.some((e) => {
                        let { key: t } = e;
                        return t === d;
                    })
                    ? t
                    : {
                          ...t,
                          [n]: [
                              ...r,
                              {
                                  key: d,
                                  Layer: a,
                                  render: e,
                                  onCloseRequest: null != o ? o : () => S(d, n),
                                  onCloseCallback: s,
                                  instant: i,
                                  backdropStyle: u
                              }
                          ]
                      };
            });
        }),
        d
    );
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p(),
        n = I.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    (0, c.j)(() => {
        I.setState((n) =>
            void 0 === n[t]
                ? n
                : {
                      ...n,
                      [t]: n[t].filter((t) => {
                          let { key: n } = t;
                          return n !== e;
                      })
                  }
        );
    }),
        null != r && null != r.onCloseCallback && r.onCloseCallback();
}
function A(e) {
    let t = I.getState(),
        n = h
            .map((e) => {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : [];
            })
            .map((t) => {
                var n;
                return null !==
                    (n = t.find((t) => {
                        let { key: n } = t;
                        return n === e;
                    })) && void 0 !== n
                    ? n
                    : null;
            });
    if (!!n.some((e) => null != e))
        (0, c.j)(() => {
            I.setState((t) => {
                let n = { ...t };
                return (
                    h.forEach((t) => {
                        var r;
                        n[t] =
                            null === (r = n[t]) || void 0 === r
                                ? void 0
                                : r.filter((t) => {
                                      let { key: n } = t;
                                      return n !== e;
                                  });
                    }),
                    n
                );
            });
        }),
            n.forEach((e) => {
                var t;
                null == e || null === (t = e.onCloseCallback) || void 0 === t || t.call(e);
            });
}
function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p();
    (0, c.j)(() => {
        I.setState((a) =>
            void 0 === a[i]
                ? a
                : {
                      ...a,
                      [i]: a[i].map((a) =>
                          a.key === e
                              ? {
                                    ...a,
                                    render: t,
                                    onCloseRequest: null == n ? () => S(e, i) : n,
                                    onCloseCallback: r
                                }
                              : a
                      )
                  }
        );
    });
}
function N(e) {
    for (let t of h) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function O() {
    return N(I.getState());
}
function R() {
    return N(I());
}
function C(e) {
    var t, n;
    let { default: r, popout: i } = I();
    return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = r.at(-1)) || void 0 === n ? void 0 : n.key) === e;
}
function y() {
    let e = I.getState();
    for (let t in e) for (let n of e[t]) S(n.key, t);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.z1,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function L(e, t) {
    return b(I.getState(), e, t);
}
