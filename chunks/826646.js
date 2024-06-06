"use strict";
t.r(a), t.d(a, {
  default: function() {
    return S
  }
});
var l = t("735250");
t("470079");
var i = t("442837"),
  r = t("954138"),
  n = t("979264"),
  s = t("741308"),
  o = t("530"),
  u = t("993409"),
  d = t("790711"),
  c = t("67152"),
  f = t("271383"),
  m = t("246946"),
  v = t("654904"),
  p = t("228168"),
  h = t("689938"),
  g = t("493069");

function S(e) {
  var a;
  let {
    user: t,
    displayProfile: S,
    guild: I,
    pendingAvatar: T,
    pendingNickname: A,
    pendingGlobalName: E,
    pendingBio: P,
    pendingPronouns: x,
    isTryItOutFlow: y,
    hideBioSection: N,
    hideExampleButton: j
  } = e, C = (0, i.useStateFromStores)([f.default], () => null == I ? null : f.default.getMember(I.id, t.id)), U = (0, i.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), b = (0, r.default)("SimplifiedProfileCustomizationPreviewBody"), _ = null == S ? void 0 : null === (a = S.getPreviewBio(P)) || void 0 === a ? void 0 : a.value, M = null != x ? x : null == S ? void 0 : S.pronouns, w = (0, v.getPreviewName)({
    pendingNickname: A,
    pendingGlobalName: E,
    user: t,
    guildMember: C
  });
  return (0, l.jsxs)("div", {
    className: g.body,
    children: [(0, l.jsxs)("div", {
      className: g.content,
      children: [(0, l.jsx)(o.default, {
        user: t,
        profileType: p.UserProfileTypes.BITE_SIZE,
        usernameIcon: (() => {
          if (!(null != C)) return;
          if (null !== T) {
            if (!(null == C.avatar && null == T)) return (0, l.jsx)(d.default, {
              user: t,
              nickname: w
            })
          }
        })(),
        nickname: w,
        pronouns: M,
        isTryItOut: y,
        tags: (0, l.jsx)(s.default, {
          displayProfile: S,
          profileType: p.UserProfileTypes.BITE_SIZE
        })
      }), b && (0, l.jsx)(n.default, {
        userId: t.id,
        inline: !1
      }), !N && null != _ && "" !== _ && (0, l.jsx)(c.default, {
        user: t,
        bio: _,
        hidePersonalInformation: U
      })]
    }), !j && (0, l.jsx)(u.default, {
      text: h.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
}