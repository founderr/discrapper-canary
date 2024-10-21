t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(230711),
    o = t(574755),
    l = t(663389),
    c = t(309739),
    d = t(293389),
    _ = t(327885),
    u = t(326528),
    E = t(332325),
    T = t(981631),
    S = t(689938),
    I = t(164354);
function N() {
    let e = (0, u.b)(),
        s = (0, a.e7)([l.Z], () => l.Z.getSubsection()),
        t = null != s && e.some((e) => e.id === s) ? s : e[0].id;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Heading, {
                className: I.heading,
                variant: 'heading-xl/semibold',
                children: S.Z.Messages.GAMES
            }),
            (0, n.jsx)(i.TabBar, {
                className: I.tabBar,
                selectedItem: t,
                onItemSelect: (e) => {
                    r.Z.setSection(T.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, n.jsxs)(
                        i.TabBar.Item,
                        {
                            className: I.tab,
                            id: e.id,
                            'aria-label': e.title,
                            children: [
                                (0, n.jsx)(e.icon, {
                                    className: I.tabIcon,
                                    color: 'currentColor'
                                }),
                                (0, n.jsx)('div', {
                                    className: I.iconTitle,
                                    children: e.title
                                })
                            ]
                        },
                        e.id
                    )
                )
            }),
            (() => {
                switch (t) {
                    case E.Z.CLIPS:
                        return (0, n.jsx)(o.Z, {
                            className: I.body,
                            showHeader: !1
                        });
                    case E.Z.OVERLAY:
                        return (0, n.jsx)(_.Z, {
                            className: I.body,
                            showHeader: !1
                        });
                    case E.Z.ACTIVITY_PRIVACY:
                        return (0, n.jsx)(c.Z, {
                            className: I.body,
                            showHeader: !1
                        });
                    case E.Z.MY_GAMES:
                    default:
                        return (0, n.jsx)(d.Z, {
                            className: I.body,
                            showHeader: !1
                        });
                }
            })()
        ]
    });
}
