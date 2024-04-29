"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  n = s("481060"),
  r = s("906732"),
  u = s("171368"),
  d = s("768581"),
  o = s("981631"),
  c = s("689938"),
  E = s("313602");

function I(e) {
  let {
    user: t,
    guildId: s,
    className: l
  } = e, {
    discriminator: I,
    username: T
  } = t, f = d.default.getUserAvatarURL(t), {
    analyticsLocations: R
  } = (0, r.default)();
  return (0, a.jsxs)("div", {
    className: i()(E.container, l),
    children: [(0, a.jsx)(n.Avatar, {
      src: f,
      size: n.AvatarSizes.SIZE_80,
      "aria-label": T,
      className: E.avatar
    }), (0, a.jsxs)("div", {
      className: E.username,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: T
      }), (0, a.jsxs)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: ["#", I]
      })]
    }), (0, a.jsx)(n.Anchor, {
      onClick: () => {
        (0, u.openUserProfileModal)({
          userId: t.id,
          guildId: s,
          sourceAnalyticsLocations: R,
          analyticsLocation: {
            section: o.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: o.AnalyticsObjects.JOIN_REQUEST
          }
        })
      },
      children: c.default.Messages.VIEW_PROFILE
    })]
  })
}