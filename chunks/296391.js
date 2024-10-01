s.d(n, {
    Z: function () {
        return Z;
    }
});
var t = s(735250),
    i = s(470079),
    o = s(704215),
    l = s(481060),
    r = s(605236),
    c = s(63063),
    a = s(369566),
    d = s(678738),
    u = s(151545),
    I = s(527790),
    _ = s(304042),
    E = s(981631),
    f = s(921944),
    m = s(689938),
    x = s(505865);
function Z(e) {
    let { user: n, currentUser: s, onClose: Z } = e,
        { live: p, recent: h, stream: v } = (0, a.Z)(n.id),
        S = n.id === s.id,
        T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        i.useEffect(() => {
            if (!!S && !T)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: f.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [S, T]),
        (0, t.jsxs)(l.ScrollerThin, {
            className: x.scroller,
            fade: !0,
            children: [
                (0, t.jsxs)(d.Z, {
                    children: [
                        null != v &&
                            (0, t.jsx)(_.Z, {
                                user: n,
                                currentUser: s,
                                stream: v,
                                onClose: Z
                            }),
                        p.map((e, i) =>
                            (0, t.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: s,
                                    activity: e,
                                    onClose: Z
                                },
                                'live-'.concat(i)
                            )
                        )
                    ]
                }),
                (0, t.jsx)(d.Z, {
                    heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    subheading: S
                        ? m.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                              learnMoreHook: (e, n) =>
                                  (0, t.jsx)(
                                      l.Anchor,
                                      {
                                          href: c.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS),
                                          children: e
                                      },
                                      n
                                  )
                          })
                        : null,
                    children: h.map((e) =>
                        (0, t.jsx)(
                            I.Z,
                            {
                                user: n,
                                entry: e,
                                onClose: Z
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    );
}
