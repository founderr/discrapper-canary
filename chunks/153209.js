n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(524437),
    r = n(481060),
    o = n(140155),
    c = n(497089),
    d = n(178480),
    u = n(11799),
    _ = n(632523),
    E = n(695346),
    I = n(626135),
    m = n(709054),
    T = n(791914),
    N = n(981631),
    h = n(689938),
    C = n(802840),
    f = n(811304);
function p(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(r.CircleIconButton, {
        tooltip: h.Z.Messages.MARK_ALL_AS_READ,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(r.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: f.controlButton,
        onClick: t
    });
}
function g(e) {
    let { setTab: t, badgeState: n, closePopout: r } = e,
        { initialized: h, items: f, loading: g, loadMore: A } = (0, u.y6)(),
        S = (0, s.e7)([o.Z], () => o.Z.localItems),
        M = a.useMemo(() => [...[...f, ...S].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [f, S]),
        O = f.length > 0 ? f[0] : null,
        x = E.d$.useSetting(),
        R = a.useMemo(() => {
            if (null != O && 0 >= m.default.compare(O.id, x)) return !1;
            for (let e of M) {
                if (0 >= m.default.compare(e.id, x)) break;
                if (!(0, d.r)(e, x)) return !0;
            }
            return !1;
        }, [O, x, M]);
    return (0, i.jsxs)('div', {
        className: C.container,
        children: [
            (0, i.jsx)(T.Z, {
                tab: l.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: r,
                children: R
                    ? (0, i.jsx)(p, {
                          onClick: () => {
                              null != O && (E.d$.updateSetting(O.id), I.default.track(N.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(_.Z, {
                initialized: h,
                items: M,
                loading: g,
                loadMore: A
            })
        ]
    });
}
