a.d(s, {
  Z: function() {
    return T
  }
});
var n = a(735250);
a(470079);
var t = a(120356),
  l = a.n(t),
  r = a(481060),
  i = a(906732),
  o = a(171368),
  c = a(768581),
  I = a(51144),
  d = a(981631),
  u = a(689938),
  E = a(767795);

function T(e) {
  let {
    user: s,
    guildId: a,
    className: t
  } = e, {
    username: T
  } = s, _ = c.ZP.getUserAvatarURL(s), {
    analyticsLocations: N
  } = (0, i.ZP)(), R = () => {
    (0, o.openUserProfileModal)({
      userId: s.id,
      guildId: a,
      sourceAnalyticsLocations: N,
      analyticsLocation: {
        section: d.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
        object: d.qAy.JOIN_REQUEST
      }
    })
  };
  return (0, n.jsxs)("div", {
    className: l()(E.container, t),
    children: [(0, n.jsx)(r.Anchor, {
      onClick: R,
      children: (0, n.jsx)(r.Avatar, {
        src: _,
        size: r.AvatarSizes.SIZE_80,
        "aria-label": T,
        className: E.avatar
      })
    }), (0, n.jsx)("div", {
      className: E.username,
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: I.ZP.getFormattedName(s)
      })
    }), (0, n.jsx)(r.Anchor, {
      onClick: R,
      children: u.Z.Messages.VIEW_PROFILE
    })]
  })
}