"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(246946),
  o = n(5192),
  a = n(741308),
  l = n(681837),
  u = n(724593),
  _ = n(530),
  c = n(580512),
  d = n(67152),
  E = n(579285),
  I = n(287612),
  T = n(228168),
  h = n(472375);

function f(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: f,
    guild: S,
    isHovering: A,
    onOpenProfile: N,
    channelId: m,
    onClose: O
  } = e, R = o.ZP.getName(null == S ? void 0 : S.id, m, t), p = (0, r.e7)([s.Z], () => s.Z.hidePersonalInformation);
  return (0, i.jsxs)("div", {
    className: h.body,
    children: [(0, i.jsx)(_.Z, {
      user: t,
      profileType: T.y0.BITE_SIZE,
      onOpenProfile: N,
      nickname: R,
      pronouns: null == f ? void 0 : f.pronouns,
      tags: (0, i.jsx)(a.Z, {
        displayProfile: f,
        profileType: T.y0.BITE_SIZE,
        onClose: O
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Z, {
          userId: t.id
        }), !p && (0, i.jsx)(u.Z, {
          user: t,
          isHovering: A,
          onOpenProfile: () => N({
            subsection: T.Tb.NOTE
          })
        })]
      })
    }), (0, i.jsx)(I.Z, {
      user: t,
      onOpenProfile: e => N({
        section: e
      })
    }), (0, i.jsx)(d.Z, {
      user: t,
      bio: null == f ? void 0 : f.bio,
      hidePersonalInformation: p,
      onClose: O
    }), (0, i.jsx)(c.Z, {
      user: t,
      guild: S,
      channelId: m,
      onClose: O
    }), null != S && (0, i.jsx)(E.Z, {
      user: t,
      currentUser: n,
      guild: S,
      onOpenProfile: () => N({
        subsection: T.Tb.ROLES
      })
    })]
  })
}