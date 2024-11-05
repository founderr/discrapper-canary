n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(524437),
    o = n(481060),
    s = n(140155),
    c = n(497089),
    d = n(178480),
    u = n(11799),
    m = n(616032),
    h = n(695346),
    f = n(626135),
    p = n(709054),
    g = n(791914),
    _ = n(981631),
    C = n(388032),
    E = n(802840),
    I = n(811304);
function x(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.CircleIconButton, {
        tooltip: C.intl.string(C.t['8k+6QU']),
        color: o.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(o.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: I.controlButton,
        onClick: t
    });
}
function v(e) {
    let { setTab: t, badgeState: n, closePopout: o } = e,
        { initialized: C, items: I, loading: v, loadMore: N } = (0, u.y6)(),
        T = (0, l.e7)([s.Z], () => s.Z.localItems),
        S = r.useMemo(() => [...[...I, ...T].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [I, T]),
        b = I.length > 0 ? I[0] : null,
        A = h.d$.useSetting(),
        j = r.useMemo(() => {
            if (null != b && 0 >= p.default.compare(b.id, A)) return !1;
            for (let e of S) {
                if (0 >= p.default.compare(e.id, A)) break;
                if (!(0, d.r)(e, A)) return !0;
            }
            return !1;
        }, [b, A, S]);
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)(g.Z, {
                tab: a.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: o,
                children: j
                    ? (0, i.jsx)(x, {
                          onClick: () => {
                              null != b && (h.d$.updateSetting(b.id), f.default.track(_.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(m.Z, {
                initialized: C,
                items: S,
                loading: v,
                loadMore: N
            })
        ]
    });
}
