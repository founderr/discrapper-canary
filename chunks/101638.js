n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(259443),
    o = n(481060),
    c = n(81897),
    u = n(911284),
    d = n(785717),
    h = n(369566),
    p = n(527790),
    m = n(689938),
    _ = n(869426);
let f = new r.Y('UserProfilePanelRecentActivity');
function E(e) {
    let { user: t, cardClassName: n } = e,
        { trackUserProfileAction: a } = (0, d.KZ)(),
        { recent: r } = (0, h.Z)(t.id),
        E = (0, c.Z)();
    s.useEffect(() => {
        (async () => {
            try {
                await (0, u.Z)(t.id, E);
            } catch (e) {
                f.log('Failed to fetch content inventory outbox for '.concat(t.id, ':'), e);
            }
        })();
    }, [t.id, E]);
    let [g, C] = s.useState(!0),
        I = g ? o.ChevronSmallDownIcon : o.ChevronSmallRightIcon;
    return 0 === r.length
        ? null
        : r.length <= 3
          ? (0, i.jsxs)('section', {
                children: [
                    (0, i.jsxs)(o.Heading, {
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        className: _.header,
                        children: [m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY, ' \u2014 ', r.length]
                    }),
                    (0, i.jsx)('ul', {
                        className: _.list,
                        children: r.map((e) =>
                            (0, i.jsx)(
                                p.Z,
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
                    (0, i.jsxs)(o.Clickable, {
                        className: l()(_.header, _.clickable),
                        onClick: () => {
                            a({ action: g ? 'COLLAPSE_RECENT_ACTIVITY' : 'EXPAND_RECENT_ACTIVITY' }), C(!g);
                        },
                        children: [
                            (0, i.jsxs)(o.Heading, {
                                variant: 'text-xs/semibold',
                                color: 'header-primary',
                                children: [m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY, ' \u2014 ', r.length]
                            }),
                            (0, i.jsx)(I, { size: 'xs' })
                        ]
                    }),
                    (0, i.jsx)('ul', {
                        className: _.list,
                        children: (g ? r : r.slice(0, 3)).map((e) =>
                            (0, i.jsx)(
                                p.Z,
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
