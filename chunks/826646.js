"use strict";
t.r(a), t.d(a, {
  default: function() {
    return h
  }
});
var l = t("735250");
t("470079");
var i = t("442837"),
  r = t("954138"),
  n = t("979264"),
  s = t("741308"),
  o = t("530"),
  u = t("790711"),
  d = t("67152"),
  c = t("271383"),
  f = t("246946"),
  m = t("654904"),
  v = t("228168"),
  p = t("493069");

function h(e) {
  var a;
  let {
    user: t,
    displayProfile: h,
    guild: g,
    pendingAvatar: S,
    pendingNickname: I,
    pendingGlobalName: T,
    pendingBio: A,
    pendingPronouns: E,
    isTryItOutFlow: x,
    hideBioSection: P
  } = e, y = (0, i.useStateFromStores)([c.default], () => null == g ? null : c.default.getMember(g.id, t.id)), N = (0, i.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), j = (0, r.default)("SimplifiedProfileCustomizationPreviewBody"), C = null == h ? void 0 : null === (a = h.getPreviewBio(A)) || void 0 === a ? void 0 : a.value, U = null != E ? E : null == h ? void 0 : h.pronouns, _ = (0, m.getPreviewName)({
    pendingNickname: I,
    pendingGlobalName: T,
    user: t,
    guildMember: y
  });
  return (0, l.jsxs)("div", {
    inert: "",
    className: p.body,
    children: [(0, l.jsx)(o.default, {
      user: t,
      profileType: v.UserProfileTypes.BITE_SIZE,
      usernameIcon: (() => {
        if (!(null != y)) return;
        if (null !== S) {
          if (!(null == y.avatar && null == S)) return (0, l.jsx)(u.default, {
            user: t,
            nickname: _
          })
        }
      })(),
      nickname: _,
      pronouns: U,
      isTryItOut: x,
      tags: (0, l.jsx)(s.default, {
        displayProfile: h,
        profileType: v.UserProfileTypes.BITE_SIZE
      })
    }), j && (0, l.jsx)(n.default, {
      userId: t.id,
      inline: !1
    }), !P && null != C && "" !== C && (0, l.jsx)(d.default, {
      user: t,
      bio: C,
      hidePersonalInformation: N
    })]
  })
}