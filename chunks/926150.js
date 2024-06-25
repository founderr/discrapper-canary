n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(246946),
  s = n(5192),
  r = n(741308),
  o = n(588822),
  c = n(681837),
  u = n(900927),
  d = n(724593),
  h = n(678738),
  p = n(502762),
  m = n(530),
  _ = n(580512),
  f = n(228168),
  E = n(689938),
  g = n(77540);

function C(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: C,
    isHovering: I,
    onOpenProfile: x
  } = e, T = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: g.body,
    children: [(0, i.jsx)(m.Z, {
      user: t,
      profileType: f.y0.PANEL,
      nickname: s.ZP.getName(null, C, t),
      pronouns: null == n ? void 0 : n.pronouns,
      onOpenProfile: x,
      tags: (0, i.jsx)(r.Z, {
        displayProfile: n,
        profileType: f.y0.PANEL
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Z, {
          userId: t.id
        }), !T && (0, i.jsx)(d.Z, {
          user: t,
          isHovering: I,
          onOpenProfile: () => x({
            subsection: f.Tb.NOTE
          })
        })]
      })
    }), (0, i.jsx)(_.Z, {
      user: t,
      channelId: C
    }), (0, i.jsxs)(p.Z.Overlay, {
      className: g.overlay,
      children: [!T && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, i.jsx)(h.Z, {
        title: E.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, i.jsx)(o.Z, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: I,
          userId: t.id
        })
      }), (0, i.jsx)(h.Z, {
        title: E.Z.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, i.jsx)(u.Z, {
          userId: t.id
        })
      })]
    })]
  })
}