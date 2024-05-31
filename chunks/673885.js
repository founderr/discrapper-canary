"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  n = s("481060"),
  r = s("906732"),
  u = s("171368"),
  o = s("768581"),
  d = s("51144"),
  c = s("981631"),
  E = s("689938"),
  I = s("313602");

function T(e) {
  let {
    user: t,
    guildId: s,
    className: l
  } = e, {
    username: T
  } = t, f = o.default.getUserAvatarURL(t), {
    analyticsLocations: R
  } = (0, r.default)(), _ = () => {
    (0, u.openUserProfileModal)({
      userId: t.id,
      guildId: s,
      sourceAnalyticsLocations: R,
      analyticsLocation: {
        section: c.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
        object: c.AnalyticsObjects.JOIN_REQUEST
      }
    })
  };
  return (0, a.jsxs)("div", {
    className: i()(I.container, l),
    children: [(0, a.jsx)(n.Anchor, {
      onClick: _,
      children: (0, a.jsx)(n.Avatar, {
        src: f,
        size: n.AvatarSizes.SIZE_80,
        "aria-label": T,
        className: I.avatar
      })
    }), (0, a.jsx)("div", {
      className: I.username,
      children: (0, a.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: d.default.getFormattedName(t)
      })
    }), (0, a.jsx)(n.Anchor, {
      onClick: _,
      children: E.default.Messages.VIEW_PROFILE
    })]
  })
}