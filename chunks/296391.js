t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(200651),
    l = t(192379),
    o = t(442837),
    r = t(704215),
    s = t(481060),
    c = t(353647),
    a = t(605236),
    d = t(63063),
    u = t(369566),
    f = t(678738),
    m = t(151545),
    I = t(744802),
    x = t(493043),
    p = t(228168),
    h = t(981631),
    v = t(921944),
    Z = t(388032),
    g = t(189144),
    j = t(731218);
function _(e) {
    let { user: n, currentUser: t, profileGuildId: _, subsection: b, onClose: E } = e,
        { live: N, recent: T, stream: S } = (0, u.Z)(n.id),
        y = N.length > 0 || T.length > 0 || null != S,
        P = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        C = n.id === t.id,
        A = (0, a.wE)(r.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (l.useEffect(() => {
        if (!!C && !A)
            (0, a.EW)(r.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: v.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [C, A]),
    !y && P)
        ? (0, i.jsx)('div', {
              className: j.empty,
              children: (0, i.jsx)(s.Spinner, {})
          })
        : (0, i.jsxs)(s.ScrollerThin, {
              className: g.scroller,
              fade: !0,
              children: [
                  (0, i.jsxs)(f.Z, {
                      children: [
                          null != S &&
                              (0, i.jsx)(x.Z, {
                                  location: 'UserProfileModalActivity',
                                  user: n,
                                  currentUser: t,
                                  stream: S,
                                  onClose: E,
                                  profileGuildId: _
                              }),
                          N.map((e, l) =>
                              (0, i.jsx)(
                                  m.Z,
                                  {
                                      user: n,
                                      currentUser: t,
                                      activity: e,
                                      onClose: E,
                                      profileGuildId: _
                                  },
                                  'live-'.concat(l)
                              )
                          )
                      ]
                  }),
                  T.length > 0 &&
                      (0, i.jsx)(f.Z, {
                          heading: Z.intl.string(Z.t.M0zgnZ),
                          subheading: C
                              ? Z.intl.format(Z.t['4bk9Ag'], {
                                    learnMoreHook: (e, n) =>
                                        (0, i.jsx)(
                                            s.Anchor,
                                            {
                                                href: d.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
                                                children: e
                                            },
                                            n
                                        )
                                })
                              : void 0,
                          scrollIntoView: b === p.Tb.RECENT_ACTIVITY,
                          children: T.map((e) =>
                              (0, i.jsx)(
                                  I.Z,
                                  {
                                      location: 'UserProfileModalActivity',
                                      user: n,
                                      currentUser: t,
                                      entry: e,
                                      profileGuildId: _,
                                      onClose: E
                                  },
                                  e.id
                              )
                          )
                      })
              ]
          });
}
