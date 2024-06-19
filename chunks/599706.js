n(653041);
var s = n(735250);
n(470079);
var i = n(392711),
  l = n.n(i),
  a = n(481060),
  r = n(730749),
  o = n(100527),
  c = n(484459),
  u = n(103575),
  d = n(463618),
  E = n(823379),
  _ = n(981631),
  I = n(147522);
let T = (0, r.Z)(e => {
  let {
    member: t,
    empty: n,
    analyticsContext: i,
    guildId: l
  } = e;
  if (n) return (0, s.jsx)("div", {
    className: I.partyMemberEmpty
  });
  if (null == t) return (0, s.jsx)("div", {
    className: I.partyMemberUnknown,
    children: (0, s.jsx)(d.Z, {
      className: I.partyMemberUnknownIcon
    })
  });
  let r = {
    location: {
      ...i.location,
      object: _.qAy.AVATAR
    }
  };
  return (0, s.jsx)("div", {
    className: I.partyMemberKnown,
    children: (0, s.jsx)(a.Popout, {
      preload: () => (0, c.W)(t.id, t.getAvatarURL(l, 80), {
        guildId: l
      }),
      renderPopout: e => (0, s.jsx)(u.Z, {
        ...e,
        location: "PartyAvatars",
        userId: t.id,
        guildId: l,
        analyticsParams: r,
        newAnalyticsLocations: [o.Z.AVATAR]
      }),
      position: "left",
      children: e => (0, s.jsx)(a.Avatar, {
        ...e,
        src: t.getAvatarURL(l, 24),
        "aria-label": t.username,
        size: a.AvatarSizes.SIZE_24,
        className: I.partyMember
      })
    })
  })
});
t.Z = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: i = 1,
    maxAvatarsShown: a = 2,
    guildId: r
  } = e, {
    unknownSize: o,
    totalSize: c,
    knownSize: u
  } = t;
  if (c < i) return null;
  let d = l()(n).filter(E.lm).take(a).map(e => (0, s.jsx)(T, {
    member: e,
    guildId: r
  }, e.id)).value();
  for (let e = 0; e < o && d.length < a; e++) d.push((0, s.jsx)(T, {
    guildId: r
  }, "unknown-member-".concat(e)));
  let _ = c - u - o;
  for (let e = 0; e < _ && d.length < a; e++) d.push((0, s.jsx)(T, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let N = Math.max(Math.min(c - d.length, 99), 0);
  if (1 === N) {
    let e = n[a];
    d.push((0, s.jsx)(T, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, s.jsx)("div", {
    className: I.wrapper,
    children: (0, s.jsxs)("div", {
      className: I.partyMembers,
      children: [d, N > 1 ? (0, s.jsxs)("div", {
        className: I.partyMemberOverflow,
        children: ["+", N]
      }) : null]
    })
  })
}