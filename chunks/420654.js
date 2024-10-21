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
    _ = n(981631),
    E = n(689938),
    f = n(362187);
let h = 57.75;
t.Z = i.memo(function (e) {
    let { user: t, onClose: n, bio: a, hidePersonalInformation: p, viewFullBioDisabled: I = !1 } = e,
        { context: m } = (0, u.KZ)(),
        { analyticsLocations: T } = (0, l.ZP)(),
        [S, g] = i.useState(!1),
        [A, N] = i.useState(!1);
    return p || null == a || '' === a
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', {
                      ref: (e) => {
                          null != e && (g(!A && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > h && N(!0));
                      },
                      className: s()(f.descriptionClamp, A && f.maxBioHeight),
                      children: (0, r.jsx)(c.Z, {
                          userBio: a,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (S || A) &&
                      (0, r.jsx)(o.Button, {
                          look: o.Button.Looks.BLANK,
                          size: o.Button.Sizes.NONE,
                          className: f.viewFullBio,
                          color: s()(f.viewFullBioColor, I && f.viewFullBioDisabled),
                          onClick: () => {
                              null == n || n(),
                                  (0, d.openUserProfileModal)({
                                      ...m,
                                      userId: t.id,
                                      sourceAnalyticsLocations: T,
                                      analyticsLocation: { section: _.jXE.BITE_SIZE_PROFILE_POPOUT }
                                  });
                          },
                          children: (0, r.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'none',
                              children: E.Z.Messages.USER_PROFILE_VIEW_FULL_BIO
                          })
                      })
              ]
          });
});
