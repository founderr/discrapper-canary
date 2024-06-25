n.d(t, {
  Z: function() {
    return _
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(246946),
  a = n(5192),
  r = n(741308),
  o = n(588822),
  c = n(681837),
  u = n(900927),
  d = n(724593),
  h = n(678738),
  m = n(502762),
  E = n(530),
  p = n(580512),
  g = n(228168),
  f = n(689938),
  C = n(77540);

function _(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: _,
    isHovering: I,
    onOpenProfile: x
  } = e, T = (0, i.e7)([s.Z], () => s.Z.hidePersonalInformation);
  return (0, l.jsxs)("div", {
    className: C.body,
    children: [(0, l.jsx)(E.Z, {
      user: t,
      profileType: g.y0.PANEL,
      nickname: a.ZP.getName(null, _, t),
      pronouns: null == n ? void 0 : n.pronouns,
      onOpenProfile: x,
      tags: (0, l.jsx)(r.Z, {
        displayProfile: n,
        profileType: g.y0.PANEL
      }),
      nicknameIcons: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.Z, {
          userId: t.id
        }), !T && (0, l.jsx)(d.Z, {
          user: t,
          isHovering: I,
          onOpenProfile: () => x({
            subsection: g.Tb.NOTE
          })
        })]
      })
    }), (0, l.jsx)(p.Z, {
      user: t,
      channelId: _
    }), (0, l.jsxs)(m.Z.Overlay, {
      className: C.overlay,
      children: [!T && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, l.jsx)(h.Z, {
        title: f.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, l.jsx)(o.Z, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: I,
          userId: t.id
        })
      }), (0, l.jsx)(h.Z, {
        title: f.Z.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, l.jsx)(u.Z, {
          userId: t.id
        })
      })]
    })]
  })
}