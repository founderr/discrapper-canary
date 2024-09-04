t.d(n, {
    Z: function () {
        return x;
    }
});
var s = t(735250),
    i = t(470079),
    o = t(704215),
    l = t(481060),
    r = t(605236),
    a = t(63063),
    c = t(929498),
    d = t(678738),
    u = t(151545),
    I = t(527790),
    _ = t(304042),
    E = t(981631),
    f = t(921944),
    m = t(689938),
    p = t(949968);
function x(e) {
    let { user: n, currentUser: t, onClose: x } = e,
        { live: Z, recent: h, stream: v } = (0, c.Z)(n.id),
        S = n.id === t.id,
        T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        i.useEffect(() => {
            if (!!S && !T)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: f.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [S, T]),
        (0, s.jsxs)(l.ScrollerThin, {
            className: p.scroller,
            fade: !0,
            children: [
                (0, s.jsxs)(d.Z, {
                    children: [
                        null != v &&
                            (0, s.jsx)(_.Z, {
                                user: n,
                                currentUser: t,
                                stream: v,
                                onClose: x
                            }),
                        Z.map((e, i) =>
                            (0, s.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: x
                                },
                                'live-'.concat(i)
                            )
                        )
                    ]
                }),
                (0, s.jsx)(d.Z, {
                    heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    subheading: S
                        ? m.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                              learnMoreHook: (e, n) =>
                                  (0, s.jsx)(
                                      l.Anchor,
                                      {
                                          href: a.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS),
                                          children: e
                                      },
                                      n
                                  )
                          })
                        : null,
                    children: h.map((e) =>
                        (0, s.jsx)(
                            I.Z,
                            {
                                user: n,
                                entry: e,
                                onClose: x
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    );
}
