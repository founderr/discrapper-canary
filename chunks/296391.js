t.d(n, {
    Z: function () {
        return h;
    }
});
var o = t(735250),
    i = t(470079),
    s = t(704215),
    l = t(481060),
    c = t(605236),
    r = t(63063),
    a = t(369566),
    d = t(678738),
    u = t(151545),
    _ = t(527790),
    I = t(304042),
    E = t(981631),
    f = t(921944),
    p = t(689938),
    Z = t(505865);
function h(e) {
    let { user: n, currentUser: t, onClose: h } = e,
        { live: x, recent: m, stream: S } = (0, a.Z)(n.id),
        T = n.id === t.id,
        v = (0, c.wE)(s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        i.useEffect(() => {
            if (!!T && !v)
                (0, c.EW)(s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: f.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [T, v]),
        (0, o.jsxs)(l.ScrollerThin, {
            className: Z.scroller,
            fade: !0,
            children: [
                (0, o.jsxs)(d.Z, {
                    children: [
                        null != S &&
                            (0, o.jsx)(I.Z, {
                                user: n,
                                currentUser: t,
                                stream: S,
                                onClose: h
                            }),
                        x.map((e, i) =>
                            (0, o.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: h
                                },
                                'live-'.concat(i)
                            )
                        )
                    ]
                }),
                (0, o.jsx)(d.Z, {
                    heading: p.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    subheading: T
                        ? p.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                              learnMoreHook: (e, n) =>
                                  (0, o.jsx)(
                                      l.Anchor,
                                      {
                                          href: r.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS),
                                          children: e
                                      },
                                      n
                                  )
                          })
                        : null,
                    children: m.map((e) =>
                        (0, o.jsx)(
                            _.Z,
                            {
                                user: n,
                                entry: e,
                                onClose: h,
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
