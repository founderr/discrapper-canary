i.d(a, {
  Z: function() {
    return h
  }
});
var n = i(735250);
i(470079);
var l = i(442837),
  r = i(954138),
  t = i(979264),
  s = i(741308),
  o = i(530),
  u = i(790711),
  d = i(67152),
  c = i(271383),
  v = i(246946),
  m = i(654904),
  f = i(228168),
  p = i(472375);

function h(e) {
  var a;
  let {
    user: i,
    displayProfile: h,
    guild: g,
    pendingAvatar: I,
    pendingNickname: Z,
    pendingGlobalName: x,
    pendingBio: P,
    pendingPronouns: T,
    isTryItOutFlow: S,
    hideBioSection: A
  } = e, E = (0, l.e7)([c.ZP], () => null == g ? null : c.ZP.getMember(g.id, i.id)), N = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation), j = (0, r.Z)("SimplifiedProfileCustomizationPreviewBody"), C = null == h ? void 0 : null === (a = h.getPreviewBio(P)) || void 0 === a ? void 0 : a.value, y = null != T ? T : null == h ? void 0 : h.pronouns, U = (0, m.Ly)({
    pendingNickname: Z,
    pendingGlobalName: x,
    user: i,
    guildMember: E
  });
  return (0, n.jsxs)("div", {
    inert: "",
    className: p.body,
    children: [(0, n.jsx)(o.Z, {
      user: i,
      profileType: f.y0.BITE_SIZE,
      usernameIcon: (() => {
        if (!(null != E)) return;
        if (null !== I && !!(null != E.avatar || null != I)) return (0, n.jsx)(u.Z, {
          user: i,
          nickname: U
        })
      })(),
      nickname: U,
      pronouns: y,
      isTryItOut: S,
      tags: (0, n.jsx)(s.Z, {
        displayProfile: h,
        profileType: f.y0.BITE_SIZE
      })
    }), j && (0, n.jsx)(t.ZP, {
      userId: i.id,
      inline: !1
    }), !A && null != C && "" !== C && (0, n.jsx)(d.Z, {
      user: i,
      bio: C,
      hidePersonalInformation: N
    })]
  })
}