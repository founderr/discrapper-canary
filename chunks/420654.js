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
    h = n(671180);
let p = 57.75;
t.Z = i.memo(function (e) {
    let { user: t, onClose: n, bio: a, hidePersonalInformation: m, viewFullBioDisabled: g = !1 } = e,
        { context: E } = (0, u.KZ)(),
        { analyticsLocations: v } = (0, l.ZP)(),
        [I, S] = i.useState(!1),
        [T, b] = i.useState(!1);
    return m || null == a || '' === a
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', {
                      ref: (e) => {
                          null != e && (S(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > p && b(!0));
                      },
                      className: s()(h.descriptionClamp, T && h.maxBioHeight),
                      children: (0, r.jsx)(c.Z, {
                          userBio: a,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (I || T) &&
                      (0, r.jsx)(o.Button, {
                          look: o.Button.Looks.BLANK,
                          size: o.Button.Sizes.NONE,
                          className: h.viewFullBio,
                          color: s()(h.viewFullBioColor, g && h.viewFullBioDisabled),
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
