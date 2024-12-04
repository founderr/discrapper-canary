t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(192379),
    o = t(704215),
    r = t(481060),
    s = t(605236),
    c = t(63063),
    a = t(369566),
    d = t(678738),
    u = t(151545),
    f = t(527790),
    m = t(493043),
    I = t(981631),
    x = t(921944),
    p = t(388032),
    h = t(189144);
function v(e) {
    let { user: n, currentUser: t, onClose: v, profileGuildId: Z } = e,
        { live: g, recent: j, stream: _ } = (0, a.Z)(n.id),
        b = n.id === t.id,
        E = (0, s.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        l.useEffect(() => {
            if (!!b && !E)
                (0, s.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: x.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [b, E]),
        (0, i.jsxs)(r.ScrollerThin, {
            className: h.scroller,
            fade: !0,
            children: [
                (0, i.jsxs)(d.Z, {
                    children: [
                        null != _ &&
                            (0, i.jsx)(m.Z, {
                                location: 'UserProfileModalActivity',
                                user: n,
                                currentUser: t,
                                stream: _,
                                onClose: v,
                                profileGuildId: Z
                            }),
                        g.map((e, l) =>
                            (0, i.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: v,
                                    profileGuildId: Z
                                },
                                'live-'.concat(l)
                            )
                        )
                    ]
                }),
                j.length > 0 &&
                    (0, i.jsx)(d.Z, {
                        heading: p.intl.string(p.t.M0zgnZ),
                        subheading: b
                            ? p.intl.format(p.t['4bk9Ag'], {
                                  learnMoreHook: (e, n) =>
                                      (0, i.jsx)(
                                          r.Anchor,
                                          {
                                              href: c.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
                                              children: e
                                          },
                                          n
                                      )
                              })
                            : void 0,
                        children: j.map((e) =>
                            (0, i.jsx)(
                                f.Z,
                                {
                                    user: n,
                                    entry: e,
                                    onClose: v
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    );
}
