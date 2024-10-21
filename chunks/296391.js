t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(735250),
    s = t(470079),
    o = t(704215),
    l = t(481060),
    r = t(605236),
    c = t(63063),
    a = t(369566),
    d = t(678738),
    u = t(151545),
    _ = t(527790),
    I = t(304042),
    E = t(981631),
    f = t(921944),
    m = t(689938),
    p = t(505865);
function x(e) {
    let { user: n, currentUser: t, onClose: x, profileGuildId: Z } = e,
        { live: h, recent: v, stream: S } = (0, a.Z)(n.id),
        T = n.id === t.id,
        g = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        s.useEffect(() => {
            if (!!T && !g)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: f.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [T, g]),
        (0, i.jsxs)(l.ScrollerThin, {
            className: p.scroller,
            fade: !0,
            children: [
                (0, i.jsxs)(d.Z, {
                    children: [
                        null != S &&
                            (0, i.jsx)(I.Z, {
                                user: n,
                                currentUser: t,
                                stream: S,
                                onClose: x
                            }),
                        h.map((e, s) =>
                            (0, i.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: x,
                                    profileGuildId: Z
                                },
                                'live-'.concat(s)
                            )
                        )
                    ]
                }),
                T &&
                    v.length > 0 &&
                    (0, i.jsx)(d.Z, {
                        heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                        subheading: m.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                            learnMoreHook: (e, n) =>
                                (0, i.jsx)(
                                    l.Anchor,
                                    {
                                        href: c.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS),
                                        children: e
                                    },
                                    n
                                )
                        }),
                        children: v.map((e) =>
                            (0, i.jsx)(
                                _.Z,
                                {
                                    user: n,
                                    entry: e,
                                    onClose: x,
                                    hideHeader: !0
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    );
}
