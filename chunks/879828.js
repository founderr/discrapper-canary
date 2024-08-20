t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(735250),
    s = t(470079),
    o = t(704215),
    l = t(481060),
    r = t(605236),
    a = t(929498),
    c = t(678738),
    d = t(151545),
    u = t(527790),
    I = t(304042),
    _ = t(921944),
    f = t(689938),
    E = t(694842);
function m(e) {
    let { user: n, currentUser: t, onClose: m } = e,
        { live: p, recent: x, stream: v } = (0, a.Z)(n.id),
        Z = n.id === t.id,
        h = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        s.useEffect(() => {
            if (!!Z && !h)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: _.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [Z, h]),
        (0, i.jsxs)(l.ScrollerThin, {
            className: E.scroller,
            fade: !0,
            children: [
                (0, i.jsxs)(c.Z, {
                    children: [
                        null != v &&
                            (0, i.jsx)(I.Z, {
                                user: n,
                                currentUser: t,
                                stream: v,
                                onClose: m
                            }),
                        p.map((e, s) =>
                            (0, i.jsx)(
                                d.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: m
                                },
                                'live-'.concat(s)
                            )
                        )
                    ]
                }),
                (0, i.jsx)(c.Z, {
                    heading: (0, i.jsxs)('div', {
                        className: E.heading,
                        children: [
                            f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                            (0, i.jsx)(l.Tooltip, {
                                tooltipContentClassName: E.tooltipContent,
                                text: f.Z.Messages.USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
                                children: (e) =>
                                    (0, i.jsx)(l.CircleInformationIcon, {
                                        ...e,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    })
                            })
                        ]
                    }),
                    children: x.map((e) =>
                        (0, i.jsx)(
                            u.Z,
                            {
                                user: n,
                                entry: e,
                                onClose: m
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    );
}
