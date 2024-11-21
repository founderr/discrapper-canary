n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(785717),
    c = n(280885),
    d = n(171368),
    f = n(981631),
    _ = n(388032),
    p = n(362187);
let h = 57.75;
t.Z = i.memo(function (e) {
    let { user: t, onClose: n, bio: a, hidePersonalInformation: m, viewFullBioDisabled: g = !1 } = e,
        { context: E } = (0, u.KZ)(),
        { analyticsLocations: v } = (0, l.ZP)(),
        [b, I] = i.useState(!1),
        [T, S] = i.useState(!1);
    return m || null == a || '' === a
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', {
                      ref: (e) => {
                          null != e && (I(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > h && S(!0));
                      },
                      className: s()(p.descriptionClamp, T && p.maxBioHeight),
                      children: (0, r.jsx)(c.Z, {
                          userBio: a,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (b || T) &&
                      (0, r.jsx)(o.Button, {
                          look: o.Button.Looks.BLANK,
                          size: o.Button.Sizes.NONE,
                          className: p.viewFullBio,
                          color: s()(p.viewFullBioColor, g && p.viewFullBioDisabled),
                          onClick: () => {
                              null == n || n(),
                                  (0, d.openUserProfileModal)({
                                      ...E,
                                      userId: t.id,
                                      sourceAnalyticsLocations: v,
                                      analyticsLocation: { section: f.jXE.BITE_SIZE_PROFILE_POPOUT }
                                  });
                          },
                          children: (0, r.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'none',
                              children: _.intl.string(_.t.YDiPq6)
                          })
                      })
              ]
          });
});
