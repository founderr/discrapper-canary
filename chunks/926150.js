n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(699516),
  s = n(246946),
  r = n(5192),
  o = n(824572),
  c = n(741308),
  u = n(588822),
  d = n(681837),
  h = n(91433),
  p = n(900927),
  m = n(724593),
  _ = n(678738),
  f = n(502762),
  E = n(530),
  g = n(580512),
  C = n(228168),
  I = n(981631),
  x = n(689938),
  T = n(77540);

function N(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: N,
    isHovering: v,
    onOpenProfile: S
  } = e, {
    improvedPanelFriendingEnabled: Z
  } = (0, o.O)({
    location: "SimplifiedProfilePanelBody"
  }), A = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), M = (0, a.e7)([s.Z], () => s.Z.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: T.body,
    children: [(0, i.jsx)(E.Z, {
      user: t,
      profileType: C.y0.PANEL,
      nickname: r.ZP.getName(null, N, t),
      pronouns: null == n ? void 0 : n.pronouns,
      onOpenProfile: S,
      tags: (0, i.jsx)(c.Z, {
        displayProfile: n,
        profileType: C.y0.PANEL
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Z, {
          userId: t.id
        }), !M && (0, i.jsx)(m.Z, {
          user: t,
          isHovering: v,
          onOpenProfile: () => S({
            subsection: C.Tb.NOTE
          })
        })]
      })
    }), Z && A === I.OGo.PENDING_INCOMING && (0, i.jsx)(f.Z.Overlay, {
      children: (0, i.jsx)(h.Z, {
        user: t,
        channelId: N
      })
    }), (0, i.jsx)(g.Z, {
      user: t,
      channelId: N
    }), (0, i.jsxs)(f.Z.Overlay, {
      className: T.overlay,
      children: [!M && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, i.jsx)(_.Z, {
        title: x.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, i.jsx)(u.Z, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: v,
          userId: t.id
        })
      }), (0, i.jsx)(_.Z, {
        title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, i.jsx)(p.Z, {
          userId: t.id
        })
      })]
    })]
  })
}