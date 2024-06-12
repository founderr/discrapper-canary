"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("666520"),
  i = n("246946"),
  r = n("5192"),
  o = n("785717"),
  u = n("741308"),
  d = n("588822"),
  c = n("483517"),
  f = n("681837"),
  h = n("900927"),
  m = n("678738"),
  p = n("502762"),
  E = n("530"),
  g = n("580512"),
  C = n("228168"),
  S = n("689938"),
  _ = n("181456");

function T(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: T,
    isHovering: I,
    onOpenProfile: A
  } = e, {
    trackUserProfileAction: v
  } = (0, o.useUserProfileAnalyticsContext)(), x = (0, l.useStateFromStores)([i.default], () => i.default.hidePersonalInformation);
  return (0, a.jsxs)("div", {
    className: _.body,
    children: [(0, a.jsx)(E.default, {
      user: t,
      profileType: C.UserProfileTypes.PANEL,
      nickname: r.default.getName(null, T, t),
      pronouns: null == n ? void 0 : n.pronouns,
      onOpenProfile: A,
      tags: (0, a.jsx)(u.default, {
        displayProfile: n,
        profileType: C.UserProfileTypes.PANEL
      }),
      nicknameIcons: (0, a.jsx)(f.default, {
        userId: t.id
      })
    }), (0, a.jsx)(g.default, {
      user: t,
      channelId: T
    }), (0, a.jsxs)(p.default.Overlay, {
      className: _.overlay,
      children: [!x && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, a.jsx)(m.default, {
        title: S.default.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, a.jsx)(d.default, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: I,
          userId: t.id
        })
      }), (0, a.jsx)(m.default, {
        title: S.default.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, a.jsx)(h.default, {
          userId: t.id
        })
      }), (0, a.jsx)(c.default, {}), (0, a.jsx)(m.default, {
        title: S.default.Messages.NOTE,
        headingColor: "header-primary",
        children: (0, a.jsx)(s.default, {
          userId: t.id,
          className: _.note,
          onUpdate: () => v({
            action: "SET_NOTE"
          })
        }, "note")
      })]
    })]
  })
}