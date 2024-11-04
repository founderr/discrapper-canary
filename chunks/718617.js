n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(100621),
    s = n(442837),
    a = n(186325),
    o = n(481060),
    c = n(110924),
    u = n(714338),
    d = n(237617),
    h = n(433355),
    m = n(189432),
    p = n(727381),
    f = n(313692),
    g = n(596443),
    C = n(50493),
    x = n(981631);
function v(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let i = 'forwards' === t.current,
            l = n > 0,
            r = !1;
        return l && i && 'left' === e && (r = !0), l && !i && 'right' === e && (r = !0), !l && i && 'right' === e && (r = !0), !l && !i && 'left' === e && (r = !0), r ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function _(e) {
    var t, n;
    let { userId: _, guildId: I, onClose: E, analyticsLocation: b, className: S } = e,
        Z = (0, s.e7)([h.ZP], () => h.ZP.getGuildSidebarState(I), [I]),
        T = null !== (t = null == Z ? void 0 : Z.details.modViewPanel) && void 0 !== t ? t : C.k.INFO,
        N = (0, c.Z)(_);
    let j = null == (n = T) ? null : n === C.k.INFO ? 'backwards' : 'forwards',
        A = (0, d.Z)(j),
        { reducedMotion: y } = l.useContext(a.S),
        P = l.useCallback(
            (e) => {
                null != Z && (0, m.r)(I, _, Z.baseChannelId, { modViewPanel: e });
            },
            [Z, I, _]
        ),
        M = l.useMemo(
            () => ({
                [x.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (T === C.k.INFO) return E();
                        return P(C.k.INFO);
                    }
                }
            }),
            [E, T, P]
        );
    l.useEffect(() => (u.Z.enable(), u.Z.enableTemp(M), () => u.Z.disableTemp()), [M]);
    let R = (0, o.useTransition)(
        T,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        N !== _ ? 'animate-never' : 'animate-always'
    );
    return (0, i.jsx)(r.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: R((e, t, n) => {
            var l, s, a;
            let { key: o } = n;
            return (0, i.jsx)(
                r.animated.div,
                {
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: '100%',
                        height: '100%',
                        ...(y.enabled
                            ? { opacity: null === (l = e.value) || void 0 === l ? void 0 : l.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null === (s = e.value) || void 0 === s ? void 0 : s.to(v('left', A)),
                                  right: null === (a = e.value) || void 0 === a ? void 0 : a.to(v('right', A))
                              })
                    },
                    children: (function (e) {
                        switch (e) {
                            case C.k.INFO:
                                return (0, i.jsx)(p.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: P,
                                    className: S
                                });
                            case C.k.MESSAGE_HISTORY:
                                return (0, i.jsx)(f.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: () => P(C.k.INFO),
                                    className: S
                                });
                            case C.k.PERMISSIONS:
                                return (0, i.jsx)(g.Z, {
                                    userId: _,
                                    guildId: I,
                                    onNavigate: () => P(C.k.INFO),
                                    className: S
                                });
                            default:
                                return null;
                        }
                    })(t)
                },
                o
            );
        })
    });
}
