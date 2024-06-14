"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("246946"),
  i = n("5192"),
  r = n("741308"),
  o = n("588822"),
  u = n("681837"),
  d = n("900927"),
  c = n("724593"),
  f = n("678738"),
  h = n("502762"),
  m = n("530"),
  p = n("580512"),
  E = n("228168"),
  C = n("689938"),
  g = n("181456");

function S(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: S,
    isHovering: _,
    onOpenProfile: T
  } = e, I = (0, l.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
  return (0, a.jsxs)("div", {
    className: g.body,
    children: [(0, a.jsx)(m.default, {
      user: t,
      profileType: E.UserProfileTypes.PANEL,
      nickname: i.default.getName(null, S, t),
      pronouns: null == n ? void 0 : n.pronouns,
      onOpenProfile: T,
      tags: (0, a.jsx)(r.default, {
        displayProfile: n,
        profileType: E.UserProfileTypes.PANEL
      }),
      nicknameIcons: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.default, {
          userId: t.id
        }), !I && (0, a.jsx)(c.default, {
          user: t,
          isHovering: _,
          onOpenProfile: () => T({
            subsection: E.UserProfileSubsections.NOTE
          })
        })]
      })
    }), (0, a.jsx)(p.default, {
      user: t,
      channelId: S
    }), (0, a.jsxs)(h.default.Overlay, {
      className: g.overlay,
      children: [!I && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, a.jsx)(f.default, {
        title: C.default.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, a.jsx)(o.default, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: _,
          userId: t.id
        })
      }), (0, a.jsx)(f.default, {
        title: C.default.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, a.jsx)(d.default, {
          userId: t.id
        })
      })]
    })]
  })
}