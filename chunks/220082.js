n.d(t, {
    Cf: function () {
        return m;
    },
    SR: function () {
        return f;
    },
    ZP: function () {
        return p;
    },
    vM: function () {
        return _;
    }
}),
    n(47120);
var r = n(192379),
    i = n(979590),
    a = n.n(i),
    s = n(903797),
    o = n(731965),
    l = n(442837),
    u = n(607070),
    c = n(302221),
    d = n(956664);
let f = (0, s.Z)(() => ({
    palette: {},
    fetching: {}
}));
async function _(e) {
    var t;
    if (((t = e), null == f.getState().palette[t])) await h(e);
}
async function h(e) {
    if (!f.getState().fetching[e]) {
        (0, o.j)(() =>
            f.setState((t) => ({
                fetching: {
                    ...t.fetching,
                    [e]: !0
                }
            }))
        );
        try {
            let t = await (0, d.OF)(e),
                n = (0, c.WY)(t[0]);
            (0, o.j)(() => {
                f.setState((r) => ({
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
            (0, o.j)(() =>
                f.setState((t) => ({
                    fetching: {
                        ...t.fetching,
                        [e]: !1
                    }
                }))
            );
        }
    }
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r] = m(e, t, n);
    return r;
}
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = f((t) => (null == e ? void 0 : t.palette[e])),
        s = (0, l.e7)([u.Z], () => (n && u.Z.desaturateUserColors ? u.Z.saturation : 1));
    r.useEffect(() => {
        if (null != e && null == i) h(e);
    }, [e, i]);
    let o = r.useMemo(
        () =>
            null == i
                ? void 0
                : i.map((e) => {
                      let [t, n, r] = e,
                          {
                              h: i,
                              s: o,
                              l
                          } = a()({
                              r: t,
                              g: n,
                              b: r
                          }).toHsl();
                      return a()({
                          h: i,
                          s: o * s,
                          l
                      }).toHexString();
                  }),
        [i, s]
    );
    return null != o ? o : [t, t];
}
