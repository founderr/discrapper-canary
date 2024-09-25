var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(906732),
    c = n(785717),
    d = n(280885),
    _ = n(171368),
    E = n(981631),
    f = n(689938),
    h = n(362187);
let p = 57.75;
t.Z = a.memo(function (e) {
    let { user: t, onClose: n, bio: r, hidePersonalInformation: o, viewFullBioDisabled: m = !1 } = e,
        { context: I } = (0, c.KZ)(),
        { analyticsLocations: T } = (0, u.ZP)(),
        [g, S] = a.useState(!1),
        [A, v] = a.useState(!1),
        N = (e) => {
            null != e && (S(!A && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > p && v(!0));
        },
        O = () => {
            null == n || n(),
                (0, _.openUserProfileModal)({
                    ...I,
                    userId: t.id,
                    sourceAnalyticsLocations: T,
                    analyticsLocation: { section: E.jXE.BITE_SIZE_PROFILE_POPOUT }
                });
        };
    return o || null == r || '' === r
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      ref: N,
                      className: s()(h.descriptionClamp, A && h.maxBioHeight),
                      children: (0, i.jsx)(d.Z, {
                          userBio: r,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (g || A) &&
                      (0, i.jsx)(l.Button, {
                          look: l.Button.Looks.BLANK,
                          size: l.Button.Sizes.NONE,
                          className: h.viewFullBio,
                          color: s()(h.viewFullBioColor, m && h.viewFullBioDisabled),
                          onClick: O,
                          children: (0, i.jsx)(l.Text, {
                              variant: 'text-xs/normal',
                              color: 'none',
                              children: f.Z.Messages.USER_PROFILE_VIEW_FULL_BIO
                          })
                      })
              ]
          });
});
