"use strict";
l.r(a), l.d(a, {
  default: function() {
    return I
  }
});
var t = l("735250");
l("470079");
var i = l("442837"),
  r = l("954138"),
  n = l("979264"),
  s = l("741308"),
  o = l("724593"),
  u = l("530"),
  d = l("993409"),
  c = l("790711"),
  f = l("67152"),
  m = l("271383"),
  v = l("246946"),
  p = l("654904"),
  g = l("228168"),
  h = l("689938"),
  S = l("493069");

function I(e) {
  var a;
  let {
    user: l,
    displayProfile: I,
    guild: T,
    pendingAvatar: A,
    pendingNickname: E,
    pendingGlobalName: y,
    pendingBio: P,
    pendingPronouns: x,
    isTryItOutFlow: j,
    hideBioSection: U,
    hideExampleButton: C
  } = e, N = (0, i.useStateFromStores)([m.default], () => null == T ? null : m.default.getMember(T.id, l.id)), b = (0, i.useStateFromStores)([v.default], () => v.default.hidePersonalInformation), w = (0, r.default)("SimplifiedProfileCustomizationPreviewBody"), _ = null == I ? void 0 : null === (a = I.getPreviewBio(P)) || void 0 === a ? void 0 : a.value, M = null != x ? x : null == I ? void 0 : I.pronouns, B = (0, p.getPreviewName)({
    pendingNickname: E,
    pendingGlobalName: y,
    user: l,
    guildMember: N
  });
  return (0, t.jsxs)("div", {
    className: S.body,
    children: [(0, t.jsx)(u.default, {
      user: l,
      profileType: g.UserProfileTypes.BITE_SIZE,
      usernameIcon: (() => {
        if (!(null != N)) return;
        if (null !== A) {
          if (!(null == N.avatar && null == A)) return (0, t.jsx)(c.default, {
            user: l,
            nickname: B
          })
        }
      })(),
      nickname: B,
      pronouns: M,
      isTryItOut: j,
      tags: (0, t.jsx)(s.default, {
        displayProfile: I,
        profileType: g.UserProfileTypes.BITE_SIZE
      }),
      nicknameIcons: (0, t.jsx)(o.default, {
        user: l,
        isHovering: !0,
        disabled: !0
      })
    }), w && (0, t.jsx)(n.default, {
      userId: l.id,
      inline: !1
    }), !U && null != _ && "" !== _ && (0, t.jsx)(f.default, {
      user: l,
      bio: _,
      hidePersonalInformation: b,
      disableViewFullBio: !0
    }), !C && (0, t.jsx)(d.default, {
      text: h.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
}