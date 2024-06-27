"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(906732),
  u = n(785717),
  _ = n(588822),
  c = n(171368),
  d = n(981631),
  E = n(689938),
  I = n(376406);
let T = 57.75;
t.Z = r.memo(function(e) {
  let {
    user: t,
    onClose: n,
    bio: s,
    hidePersonalInformation: h
  } = e, {
    guildId: f,
    channelId: S,
    messageId: A,
    roleId: N
  } = (0, u.KZ)(), {
    analyticsLocations: m
  } = (0, l.ZP)(), [O, R] = r.useState(!1), [p, g] = r.useState(!1);
  return h || null == s || "" === s ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        null != e && (R(!p && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > T && g(!0))
      },
      className: o()(I.descriptionClamp, p && I.maxBioHeight),
      children: (0, i.jsx)(_.Z, {
        userBio: s,
        setLineClamp: !1,
        textColor: "header-primary"
      })
    }), (O || p) && (0, i.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.NONE,
      className: I.viewFullBio,
      color: I.viewFullBioColor,
      onClick: () => {
        null == n || n(), (0, c.openUserProfileModal)({
          userId: t.id,
          guildId: null != f ? f : void 0,
          channelId: null != S ? S : void 0,
          messageId: null != A ? A : void 0,
          roleId: null != N ? N : void 0,
          analyticsLocation: {
            section: d.jXE.BITE_SIZE_PROFILE_POPOUT
          },
          sourceAnalyticsLocations: m
        })
      },
      children: (0, i.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "none",
        children: E.Z.Messages.USER_PROFILE_VIEW_FULL_BIO
      })
    })]
  })
})