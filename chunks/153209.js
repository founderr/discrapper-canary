n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(524437),
    l = n(481060),
    u = n(140155),
    c = n(497089),
    d = n(178480),
    _ = n(11799),
    E = n(632523),
    f = n(695346),
    h = n(626135),
    p = n(709054),
    m = n(791914),
    I = n(981631),
    T = n(689938),
    g = n(802840),
    S = n(811304);
function A(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(l.CircleIconButton, {
        tooltip: T.Z.Messages.MARK_ALL_AS_READ,
        color: l.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(l.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: S.controlButton,
        onClick: t
    });
}
function v(e) {
    let { setTab: t, badgeState: n, closePopout: r } = e,
        { initialized: l, items: T, loading: S, loadMore: v } = (0, _.y6)(),
        N = (0, o.e7)([u.Z], () => u.Z.localItems),
        O = a.useMemo(() => [...[...T, ...N].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [T, N]),
        R = T.length > 0 ? T[0] : null,
        C = f.d$.useSetting(),
        y = a.useMemo(() => {
            if (null != R && 0 >= p.default.compare(R.id, C)) return !1;
            for (let e of O) {
                if (0 >= p.default.compare(e.id, C)) break;
                if (!(0, d.r)(e, C)) return !0;
            }
            return !1;
        }, [R, C, O]),
        L = () => {
            null != R && (f.d$.updateSetting(R.id), h.default.track(I.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
        };
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsx)(m.Z, {
                tab: s.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: r,
                children: y ? (0, i.jsx)(A, { onClick: L }) : null
            }),
            (0, i.jsx)(E.Z, {
                initialized: l,
                items: O,
                loading: S,
                loadMore: v
            })
        ]
    });
}
