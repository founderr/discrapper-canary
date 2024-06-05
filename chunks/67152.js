"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("906732"),
  o = n("785717"),
  l = n("588822"),
  u = n("171368"),
  d = n("981631"),
  _ = n("689938"),
  c = n("783116");
t.default = r.memo(function(e) {
  let {
    user: t,
    onClose: n,
    bio: E,
    hidePersonalInformation: I,
    disableViewFullBio: T
  } = e, {
    guildId: f,
    channelId: S,
    messageId: h,
    roleId: A
  } = (0, o.useUserProfileAnalyticsContext)(), {
    analyticsLocations: m
  } = (0, a.default)(), [N, p] = r.useState(!1);
  return I || null == E || "" === E ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        null != e && p(e.scrollHeight - e.clientHeight > 1)
      },
      className: c.descriptionClamp,
      children: (0, i.jsx)(l.default, {
        userBio: E,
        setLineClamp: !1,
        textColor: "header-primary"
      })
    }), N && (0, i.jsx)(s.Button, {
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.NONE,
      className: c.viewFullBio,
      color: c.viewFullBioColor,
      onClick: () => {
        null == n || n(), (0, u.openUserProfileModal)({
          userId: t.id,
          guildId: null != f ? f : void 0,
          channelId: null != S ? S : void 0,
          messageId: null != h ? h : void 0,
          roleId: null != A ? A : void 0,
          analyticsLocation: {
            section: d.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
          },
          sourceAnalyticsLocations: m
        })
      },
      disabled: T,
      children: (0, i.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "none",
        children: _.default.Messages.USER_PROFILE_VIEW_FULL_BIO
      })
    })]
  })
})