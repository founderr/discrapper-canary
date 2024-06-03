"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("666520"),
  i = n("246946"),
  r = n("785717"),
  o = n("741308"),
  u = n("588822"),
  d = n("483517"),
  c = n("681837"),
  f = n("900927"),
  h = n("678738"),
  m = n("502762"),
  p = n("530"),
  E = n("580512"),
  C = n("228168"),
  g = n("689938"),
  S = n("181456");

function _(e) {
  let {
    user: t,
    displayProfile: n,
    channelId: _,
    isHovering: T
  } = e, {
    trackUserProfileAction: I
  } = (0, r.useUserProfileAnalyticsContext)(), A = (0, l.useStateFromStores)([i.default], () => i.default.hidePersonalInformation);
  return (0, a.jsxs)("div", {
    className: S.body,
    children: [(0, a.jsx)(p.default, {
      user: t,
      profileType: C.UserProfileTypes.PANEL,
      pronouns: null == n ? void 0 : n.pronouns,
      tags: (0, a.jsx)(o.default, {
        displayProfile: n,
        profileType: C.UserProfileTypes.PANEL
      }),
      nicknameIcons: (0, a.jsx)(c.default, {
        userId: t.id
      })
    }), (0, a.jsx)(E.default, {
      user: t,
      channelId: _
    }), (0, a.jsxs)(m.default.Overlay, {
      className: S.overlay,
      children: [!A && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, a.jsx)(h.default, {
        title: g.default.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, a.jsx)(u.default, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: T,
          userId: t.id
        })
      }), (0, a.jsx)(h.default, {
        title: g.default.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, a.jsx)(f.default, {
          userId: t.id
        })
      }), (0, a.jsx)(d.default, {}), (0, a.jsx)(h.default, {
        title: g.default.Messages.NOTE,
        headingColor: "header-primary",
        children: (0, a.jsx)(s.default, {
          userId: t.id,
          className: S.note,
          onUpdate: () => I({
            action: "SET_NOTE"
          })
        }, "note")
      })]
    })]
  })
}