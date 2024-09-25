n.d(t, {
    Cf: function () {
        return I;
    },
    SR: function () {
        return E;
    },
    ZP: function () {
        return m;
    },
    vM: function () {
        return h;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(979590),
    o = n.n(a),
    s = n(652874),
    l = n(731965),
    u = n(442837),
    c = n(607070),
    d = n(302221),
    _ = n(956664);
let E = (0, s.Z)(() => ({
    palette: {},
    fetching: {}
}));
function f(e) {
    return null != E.getState().palette[e];
}
async function h(e) {
    !f(e) && (await p(e));
}
async function p(e) {
    if (!E.getState().fetching[e]) {
        (0, l.j)(() =>
            E.setState((t) => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }))
        );
        try {
            let t = await (0, _.OF)(e),
                n = (0, d.WY)(t[0]);
            (0, l.j)(() => {
                E.setState((r) => ({
                    fetching: {
                        ...r.fetching,
                        [e]: !1
                    },
                    palette: {
                        ...r.palette,
                        [e]: [...t.slice(0, 2), ...n]
                    }
                }));
            });
        } catch (t) {
            (0, l.j)(() =>
                E.setState((t) => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            );
        }
    }
}
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = I(e, t, n);
    return r;
}
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = E((t) => (null == e ? void 0 : t.palette[e])),
        a = (0, u.e7)([c.Z], () => (n && c.Z.desaturateUserColors ? c.Z.saturation : 1));
    i.useEffect(() => {
        if (null != e && null == r) p(e);
    }, [e, r]);
    let s = i.useMemo(
        () =>
            null == r
                ? void 0
                : r.map((e) => {
                      let [t, n, r] = e,
                          {
                              h: i,
                              s,
                              l
                          } = o()({
                              r: t,
                              g: n,
                              b: r
                          }).toHsl();
                      return o()({
                          h: i,
                          s: s * a,
                          l
                      }).toHexString();
                  }),
        [r, a]
    );
    return null != s ? s : [t, t];
}
