s.d(n, {
  Z: function() {
    return p
  }
});
var l = s(735250);
s(470079);
var t = s(442837),
  i = s(954138),
  r = s(979264),
  a = s(741308),
  o = s(530),
  c = s(790711),
  u = s(67152),
  d = s(271383),
  E = s(246946),
  m = s(654904),
  f = s(228168),
  h = s(472375);

function p(e) {
  var n;
  let {
    user: s,
    displayProfile: p,
    guild: v,
    pendingAvatar: I,
    pendingNickname: g,
    pendingGlobalName: C,
    pendingBio: _,
    pendingPronouns: Z,
    isTryItOutFlow: P,
    hideBioSection: x
  } = e, A = (0, t.e7)([d.ZP], () => null == v ? null : d.ZP.getMember(v.id, s.id)), T = (0, t.e7)([E.Z], () => E.Z.hidePersonalInformation), S = (0, i.Z)("SimplifiedProfileCustomizationPreviewBody"), N = null == p ? void 0 : null === (n = p.getPreviewBio(_)) || void 0 === n ? void 0 : n.value, j = null != Z ? Z : null == p ? void 0 : p.pronouns, R = (0, m.Ly)({
    pendingNickname: g,
    pendingGlobalName: C,
    user: s,
    guildMember: A
  });
  return (0, l.jsxs)("div", {
    inert: "",
    className: h.body,
    children: [(0, l.jsx)(o.Z, {
      user: s,
      profileType: f.y0.BITE_SIZE,
      usernameIcon: (() => {
        if (!(null != A)) return;
        if (null !== I && !!(null != A.avatar || null != I)) return (0, l.jsx)(c.Z, {
          user: s,
          nickname: R
        })
      })(),
      nickname: R,
      pronouns: j,
      isTryItOut: P,
      tags: (0, l.jsx)(a.Z, {
        displayProfile: p,
        profileType: f.y0.BITE_SIZE
      })
    }), S && (0, l.jsx)(r.ZP, {
      userId: s.id,
      inline: !1
    }), !x && null != N && "" !== N && (0, l.jsx)(u.Z, {
      user: s,
      bio: N,
      hidePersonalInformation: T
    })]
  })
}