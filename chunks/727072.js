n.d(e, {
    I2: function () {
        return N;
    },
    RD: function () {
        return _;
    },
    mY: function () {
        return f;
    },
    pH: function () {
        return I;
    }
}),
    n(653041),
    n(47120),
    n(724458);
var r = n(192379),
    i = n(903797),
    l = n(782690),
    u = n(731965),
    a = n(881052),
    o = n(36459),
    E = n(866894),
    s = n(273504),
    c = n(981631);
let d = {},
    S = (t) => {
        let e = {
            [s.fX.KEYWORD]: [],
            [s.fX.ML_SPAM]: [],
            [s.fX.DEFAULT_KEYWORD_LIST]: [],
            [s.fX.MENTION_SPAM]: [],
            [s.fX.USER_PROFILE]: [],
            [s.fX.SERVER_POLICY]: []
        };
        return (
            t.forEach((t) => {
                var n;
                let { triggerType: r } = t;
                null === (n = e[r]) || void 0 === n || n.push(t);
            }),
            e
        );
    },
    T = (0, i.Z)((t, e) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            var r, i;
            let { guildId: l, id: a, triggerType: o } = n,
                { rules: s } = e(),
                c = null !== (r = s[l]) && void 0 !== r ? r : {},
                d = null !== (i = c[o]) && void 0 !== i ? i : [],
                S = d.some((t) => t.id === a),
                T = d.filter((t) => (!(0, E.U)(t.id) || t.triggerType !== o) && !0),
                f = S ? T.map((t) => (t.id === a ? n : t)) : [...T, n];
            (0, u.j)(() => {
                t({
                    rules: {
                        ...s,
                        [l]: {
                            ...c,
                            [o]: f
                        }
                    },
                    error: null
                });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = e(),
                l = i[r],
                a = Object.keys(l).reduce((t, e) => {
                    var r;
                    let i = Number(e),
                        u = null !== (r = l[i]) && void 0 !== r ? r : [];
                    return (t[i] = u.filter((t) => t.id !== n)), t;
                }, l);
            (0, u.j)(() => {
                t({
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
                !!(function (t) {
                    var e;
                    let n = Date.now(),
                        r = null !== (e = d[t]) && void 0 !== e ? e : 0;
                    return n - r > 20000;
                })(n)
            ) {
                d[n] = Date.now();
                try {
                    let r = await (0, o.$Y)(n),
                        i = S(r),
                        l = e().rules;
                    (0, u.j)(() => {
                        t({
                            rules: {
                                ...l,
                                [n]: i
                            },
                            error: null
                        });
                    });
                } catch (n) {
                    let e = new a.Hx(n);
                    (0, u.j)(() => {
                        t({ error: e });
                    });
                }
            }
        }
    })),
    f = (t, e) => {
        var n, r;
        return (null !== (r = null === (n = T.getState().rules[t]) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : []).length;
    };
function N(t) {
    let [e, n] = r.useState(!1),
        [i, u] = T((t) => [t.syncRules, t.fetching], l.Z);
    return [
        e,
        r.useCallback(async () => {
            if (!u && null != t)
                try {
                    n(!0), await i(t);
                } finally {
                    n(!1);
                }
        }, [t, u, i])
    ];
}
function _(t) {
    let [e, n] = N(t);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [t, n]),
        [e, n]
    );
}
function I(t) {
    return T((e) => {
        var n;
        return {
            rulesByTriggerType: null !== (n = e.rules[null != t ? t : c.lds]) && void 0 !== n ? n : {},
            updateRule: e.updateRule,
            removeRule: e.removeRule
        };
    });
}
