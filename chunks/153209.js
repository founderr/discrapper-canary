n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
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
    f = n(981631),
    h = n(689938),
    N = n(802840),
    p = n(811304);
function C(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(l.CircleIconButton, {
        tooltip: h.Z.Messages.MARK_ALL_AS_READ,
        color: l.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(l.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: p.controlButton,
        onClick: t
    });
}
function g(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e,
        { initialized: h, items: p, loading: g, loadMore: S } = (0, d.y6)(),
        A = (0, s.e7)([o.Z], () => o.Z.localItems),
        x = a.useMemo(() => [...[...p, ...A].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [p, A]),
        R = p.length > 0 ? p[0] : null,
        v = E.d$.useSetting(),
        O = a.useMemo(() => {
            if (null != R && 0 >= m.default.compare(R.id, v)) return !1;
            for (let e of x) {
                if (0 >= m.default.compare(e.id, v)) break;
                if (!(0, u.r)(e, v)) return !0;
            }
            return !1;
        }, [R, v, x]);
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsx)(T.Z, {
                tab: r.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: l,
                children: O
                    ? (0, i.jsx)(C, {
                          onClick: () => {
                              null != R && (E.d$.updateSetting(R.id), I.default.track(f.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(_.Z, {
                initialized: h,
                items: x,
                loading: g,
                loadMore: S
            })
        ]
    });
}
