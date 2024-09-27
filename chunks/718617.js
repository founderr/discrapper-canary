n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(526629),
    l = n(442837),
    r = n(186325),
    o = n(481060),
    c = n(110924),
    u = n(714338),
    d = n(237617),
    h = n(433355),
    m = n(189432),
    p = n(727381),
    _ = n(313692),
    f = n(596443),
    E = n(50493),
    g = n(981631);
function C(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let i = 'forwards' === t.current,
            s = n > 0,
            a = !1;
        return s && i && 'left' === e && (a = !0), s && !i && 'right' === e && (a = !0), !s && i && 'right' === e && (a = !0), !s && !i && 'left' === e && (a = !0), a ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function I(e) {
    var t, n;
    let { userId: I, guildId: T, onClose: x, analyticsLocation: S, className: v } = e,
        N = (0, l.e7)([h.ZP], () => h.ZP.getGuildSidebarState(T), [T]),
        A = null !== (t = null == N ? void 0 : N.details.modViewPanel) && void 0 !== t ? t : E.k.INFO,
        Z = (0, c.Z)(I);
    let M = null == (n = A) ? null : n === E.k.INFO ? 'backwards' : 'forwards',
        b = (0, d.Z)(M),
        { reducedMotion: R } = s.useContext(r.S),
        L = s.useCallback(
            (e) => {
                null != N && (0, m.r)(T, I, N.baseChannelId, { modViewPanel: e });
            },
            [N, T, I]
        ),
        j = s.useMemo(
            () => ({
                [g.EkH.CLOSE_MODAL]: {
                    binds: ['esc'],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (A === E.k.INFO) return x();
                        return L(E.k.INFO);
                    }
                }
            }),
            [x, A, L]
        );
    s.useEffect(() => (u.Z.enable(), u.Z.enableTemp(j), () => u.Z.disableTemp()), [j]);
    let O = (0, o.useTransition)(
        A,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 }
        },
        Z !== I ? 'animate-never' : 'animate-always'
    );
    return (0, i.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: O((e, t, n) => {
            var s, l, r;
            let { key: o } = n;
            return (0, i.jsx)(
                a.animated.div,
                {
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: '100%',
                        height: '100%',
                        ...(R.enabled
                            ? { opacity: null === (s = e.value) || void 0 === s ? void 0 : s.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null === (l = e.value) || void 0 === l ? void 0 : l.to(C('left', b)),
                                  right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C('right', b))
                              })
                    },
                    children: (function (e) {
                        switch (e) {
                            case E.k.INFO:
                                return (0, i.jsx)(p.Z, {
                                    userId: I,
                                    guildId: T,
                                    onNavigate: L,
                                    className: v
                                });
                            case E.k.MESSAGE_HISTORY:
                                return (0, i.jsx)(_.Z, {
                                    userId: I,
                                    guildId: T,
                                    onNavigate: () => L(E.k.INFO),
                                    className: v
                                });
                            case E.k.PERMISSIONS:
                                return (0, i.jsx)(f.Z, {
                                    userId: I,
                                    guildId: T,
                                    onNavigate: () => L(E.k.INFO),
                                    className: v
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
