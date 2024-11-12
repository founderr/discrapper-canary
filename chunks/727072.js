n.d(t, {
    I2: function () {
        return A;
    },
    RD: function () {
        return _;
    },
    mY: function () {
        return S;
    },
    pH: function () {
        return R;
    }
}),
    n(653041),
    n(47120),
    n(724458);
var r = n(192379),
    i = n(976649),
    l = n(454000),
    u = n(731965),
    a = n(881052),
    o = n(36459),
    c = n(866894),
    s = n(273504),
    f = n(981631);
let E = {},
    d = (e) => {
        let t = {
            [s.fX.KEYWORD]: [],
            [s.fX.ML_SPAM]: [],
            [s.fX.DEFAULT_KEYWORD_LIST]: [],
            [s.fX.MENTION_SPAM]: [],
            [s.fX.USER_PROFILE]: [],
            [s.fX.SERVER_POLICY]: []
        };
        return (
            e.forEach((e) => {
                var n;
                let { triggerType: r } = e;
                null === (n = t[r]) || void 0 === n || n.push(e);
            }),
            t
        );
    },
    g = (0, l.F)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            var r, i;
            let { guildId: l, id: a, triggerType: o } = n,
                { rules: s } = t(),
                f = null !== (r = s[l]) && void 0 !== r ? r : {},
                E = null !== (i = f[o]) && void 0 !== i ? i : [],
                d = E.some((e) => e.id === a),
                g = E.filter((e) => (!(0, c.U)(e.id) || e.triggerType !== o) && !0),
                S = d ? g.map((e) => (e.id === a ? n : e)) : [...g, n];
            (0, u.j)(() => {
                e({
                    rules: {
                        ...s,
                        [l]: {
                            ...f,
                            [o]: S
                        }
                    },
                    error: null
                });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = t(),
                l = i[r],
                a = Object.keys(l).reduce((e, t) => {
                    var r;
                    let i = Number(t),
                        u = null !== (r = l[i]) && void 0 !== r ? r : [];
                    return (e[i] = u.filter((e) => e.id !== n)), e;
                }, l);
            (0, u.j)(() => {
                e({
                    rules: {
                        ...i,
                        [r]: a
                    },
                    error: null
                });
            });
        },
        syncRules: async (n) => {
            if (
                !!(function (e) {
                    var t;
                    let n = Date.now(),
                        r = null !== (t = E[e]) && void 0 !== t ? t : 0;
                    return n - r > 20000;
                })(n)
            ) {
                E[n] = Date.now();
                try {
                    let r = await (0, o.$Y)(n),
                        i = d(r),
                        l = t().rules;
                    (0, u.j)(() => {
                        e({
                            rules: {
                                ...l,
                                [n]: i
                            },
                            error: null
                        });
                    });
                } catch (n) {
                    let t = new a.Hx(n);
                    (0, u.j)(() => {
                        e({ error: t });
                    });
                }
            }
        }
    })),
    S = (e, t) => {
        var n, r;
        return (null !== (r = null === (n = g.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length;
    };
function A(e) {
    let [t, n] = r.useState(!1),
        [l, u] = g((e) => [e.syncRules, e.fetching], i.X);
    return [
        t,
        r.useCallback(async () => {
            if (!u && null != e)
                try {
                    n(!0), await l(e);
                } finally {
                    n(!1);
                }
        }, [e, u, l])
    ];
}
function _(e) {
    let [t, n] = A(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function R(e) {
    return g((t) => {
        var n;
        return {
            rulesByTriggerType: null !== (n = t.rules[null != e ? e : f.lds]) && void 0 !== n ? n : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule
        };
    });
}
