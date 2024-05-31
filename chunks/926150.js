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
  o = n("588822"),
  u = n("483517"),
  d = n("681837"),
  c = n("900927"),
  f = n("678738"),
  h = n("502762"),
  m = n("530"),
  p = n("894374"),
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
    children: [(0, a.jsx)(m.default, {
      user: t,
      profileType: C.UserProfileTypes.PANEL,
      pronouns: null == n ? void 0 : n.pronouns,
      tags: (0, a.jsx)(p.UserProfileBadgesTag, {
        displayProfile: n
      }),
      nicknameIcons: (0, a.jsx)(d.default, {
        userId: t.id
      })
    }), (0, a.jsx)(E.default, {
      user: t,
      channelId: _
    }), (0, a.jsxs)(h.default.Overlay, {
      className: S.overlay,
      children: [!A && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, a.jsx)(f.default, {
        title: g.default.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: "header-primary",
        children: (0, a.jsx)(o.default, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: T,
          userId: t.id
        })
      }), (0, a.jsx)(f.default, {
        title: g.default.Messages.USER_PROFILE_MEMBER_SINCE,
        headingColor: "header-primary",
        children: (0, a.jsx)(c.default, {
          userId: t.id
        })
      }), (0, a.jsx)(u.default, {}), (0, a.jsx)(f.default, {
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