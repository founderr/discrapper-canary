n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n(259443),
    c = n(481060),
    u = n(81897),
    d = n(911284),
    h = n(322614),
    p = n(785717),
    m = n(369566),
    _ = n(527790),
    f = n(689938),
    E = n(869426);
let g = new o.Y('UserProfilePanelRecentActivity');
function C(e) {
    let { user: t, cardClassName: n } = e,
        { trackUserProfileAction: a } = (0, p.KZ)(),
        o = (0, h.Z)(t.id),
        { recent: C } = (0, m.Z)(t.id),
        I = (0, u.Z)();
    s.useEffect(() => {
        (async () => {
            try {
                await (0, d.Z)(t.id, I);
            } catch (e) {
                g.log('Failed to fetch content inventory outbox for '.concat(t.id, ':'), e);
            }
        })();
    }, [t.id, I]);
    let T = s.useMemo(() => (null == o || 0 === o.length ? C : (0, r.uniqBy)([...o, ...C], (e) => e.id)), [o, C]),
        [x, v] = s.useState(!0),
        S = x ? c.ChevronSmallDownIcon : c.ChevronSmallRightIcon;
    return 0 === T.length
        ? null
        : T.length <= 3
          ? (0, i.jsxs)('section', {
                children: [
                    (0, i.jsxs)(c.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        className: E.header,
                        children: [f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY, ' \u2014 ', C.length]
                    }),
                    (0, i.jsx)('ul', {
                        className: E.list,
                        children: T.map((e) =>
                            (0, i.jsx)(
                                _.Z,
                                {
                                    user: t,
                                    entry: e,
                                    className: n,
                                    hideHeader: !0
                                },
                                e.id
                            )
                        )
                    })
                ]
            })
          : (0, i.jsxs)('section', {
                children: [
                    (0, i.jsxs)(c.Clickable, {
                        className: l()(E.header, E.clickable),
                        onClick: () => {
                            a({ action: x ? 'COLLAPSE_RECENT_ACTIVITY' : 'EXPAND_RECENT_ACTIVITY' }), v(!x);
                        },
                        children: [
                            (0, i.jsxs)(c.Heading, {
                                variant: 'text-xs/semibold',
                                color: 'header-primary',
                                children: [f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY, ' \u2014 ', C.length]
                            }),
                            (0, i.jsx)(S, { size: 'xs' })
                        ]
                    }),
                    (0, i.jsx)('ul', {
                        className: E.list,
                        children: (x ? T : T.slice(0, 3)).map((e) =>
                            (0, i.jsx)(
                                _.Z,
                                {
                                    user: t,
                                    entry: e,
                                    className: n,
                                    hideHeader: !0
                                },
                                e.id
                            )
                        )
                    })
                ]
            });
}
