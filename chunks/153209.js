n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(524437),
    l = n(481060),
    o = n(140155),
    c = n(497089),
    u = n(178480),
    d = n(11799),
    _ = n(632523),
    E = n(695346),
    I = n(626135),
    m = n(709054),
    T = n(791914),
    h = n(981631),
    N = n(689938),
    f = n(802840),
    C = n(811304);
function p(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(l.CircleIconButton, {
        tooltip: N.Z.Messages.MARK_ALL_AS_READ,
        color: l.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(l.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: C.controlButton,
        onClick: t
    });
}
function g(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e,
        { initialized: N, items: C, loading: g, loadMore: A } = (0, d.y6)(),
        S = (0, a.e7)([o.Z], () => o.Z.localItems),
        x = s.useMemo(() => [...[...C, ...S].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [C, S]),
        R = C.length > 0 ? C[0] : null,
        O = E.d$.useSetting(),
        M = s.useMemo(() => {
            if (null != R && 0 >= m.default.compare(R.id, O)) return !1;
            for (let e of x) {
                if (0 >= m.default.compare(e.id, O)) break;
                if (!(0, u.r)(e, O)) return !0;
            }
            return !1;
        }, [R, O, x]);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(T.Z, {
                tab: r.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: l,
                children: M
                    ? (0, i.jsx)(p, {
                          onClick: () => {
                              null != R && (E.d$.updateSetting(R.id), I.default.track(h.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(_.Z, {
                initialized: N,
                items: x,
                loading: g,
                loadMore: A
            })
        ]
    });
}
