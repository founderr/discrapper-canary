"use strict";
t.r(a), t.d(a, {
  default: function() {
    return I
  }
});
var l = t("735250");
t("470079");
var i = t("442837"),
  r = t("954138"),
  n = t("979264"),
  s = t("741308"),
  o = t("724593"),
  u = t("530"),
  d = t("993409"),
  c = t("790711"),
  f = t("67152"),
  m = t("271383"),
  v = t("246946"),
  p = t("654904"),
  g = t("228168"),
  h = t("689938"),
  S = t("493069");

function I(e) {
  var a;
  let {
    user: t,
    displayProfile: I,
    guild: T,
    pendingAvatar: P,
    pendingNickname: A,
    pendingGlobalName: E,
    pendingBio: y,
    pendingPronouns: x,
    isTryItOutFlow: j,
    hideBioSection: U,
    hideExampleButton: N
  } = e, C = (0, i.useStateFromStores)([m.default], () => null == T ? null : m.default.getMember(T.id, t.id)), b = (0, i.useStateFromStores)([v.default], () => v.default.hidePersonalInformation), _ = (0, r.default)("SimplifiedProfileCustomizationPreviewBody"), w = null == I ? void 0 : null === (a = I.getPreviewBio(y)) || void 0 === a ? void 0 : a.value, M = null != x ? x : null == I ? void 0 : I.pronouns, B = (0, p.getPreviewName)({
    pendingNickname: A,
    pendingGlobalName: E,
    user: t,
    guildMember: C
  });
  return (0, l.jsxs)("div", {
    className: S.body,
    children: [(0, l.jsx)(u.default, {
      user: t,
      profileType: g.UserProfileTypes.BITE_SIZE,
      usernameIcon: (() => {
        if (!(null != C)) return;
        if (null !== P) {
          if (!(null == C.avatar && null == P)) return (0, l.jsx)(c.default, {
            user: t,
            nickname: B
          })
        }
      })(),
      nickname: B,
      pronouns: M,
      isTryItOut: j,
      tags: (0, l.jsx)(s.default, {
        displayProfile: I,
        profileType: g.UserProfileTypes.BITE_SIZE
      }),
      nicknameIcons: (0, l.jsx)(o.default, {
        user: t,
        isHovering: !0,
        disabled: !0
      })
    }), _ && (0, l.jsx)(n.default, {
      userId: t.id,
      inline: !1
    }), !U && null != w && "" !== w && (0, l.jsx)(f.default, {
      user: t,
      bio: w,
      hidePersonalInformation: b,
      disableViewFullBio: !0
    }), !N && (0, l.jsx)(d.default, {
      text: h.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
}