var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(442837),
  a = n(481060),
  o = n(717881),
  u = n(503438),
  c = n(850827),
  d = n(952164),
  h = n(131704),
  p = n(314897),
  g = n(594174),
  m = n(409216),
  C = n(768581),
  E = n(51144),
  f = n(754231),
  _ = n(421097);

function I(e) {
  let {
    guildId: t,
    member: n,
    className: i
  } = e, r = null != n.member ? (0, C.CA)(n.member) : null;
  return (0, l.jsx)(a.Tooltip, {
    text: n.nick,
    position: "bottom",
    children: e => {
      var o;
      return (0, l.jsx)(a.Avatar, {
        src: null != r ? r : n.user.getAvatarURL(t, 16),
        size: a.AvatarSizes.SIZE_16,
        className: s()(i, _.partyAvatar),
        "aria-label": null !== (o = n.nick) && void 0 !== o ? o : E.ZP.getName(n.user),
        ...e
      })
    }
  })
}

function N(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, l.jsx)(m.Z, {
    className: _.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, l.jsx)(I, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
      className: s()(_.morePartyMembers, t),
      children: e
    }, n)
  })
}
t.Z = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: s,
    onAction: a
  } = e, m = null != s, C = m ? Array.from(s.embeddedActivity.userIds) : [], E = (0, r.e7)([g.default, p.default], () => {
    if (m) return g.default.getUser(C[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null !== (t = null === (e = i.find(e => e.user.id !== p.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : i[0].user
    }
  });
  if (null == E) return null;
  let I = m || (0, u.Z)(n),
    Z = (0, h.vd)(t.type);
  return (0, l.jsxs)("div", {
    className: _.activity,
    children: [(0, l.jsx)("div", {
      className: _.channelActivityContainer,
      children: I ? (0, l.jsx)(f.Z, {
        activity: n,
        embeddedApp: s,
        user: E,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: Z ? d.aG : void 0,
        onOpenSpotifyArtist: Z ? d.d$ : void 0,
        onOpenSpotifyAlbum: Z ? d.Z5 : void 0
      }) : (0, l.jsx)(o.Z, {
        type: o.P.VOICE_CHANNEL,
        activity: n,
        user: E,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, l.jsx)(N, {
          guildId: t.guild_id,
          members: i
        }) : void 0,
        isEmbedded: m
      })
    }), (0, l.jsx)("div", {
      className: _.activityActionsContainer,
      children: (0, l.jsx)(c.Z, {
        type: o.P.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == s ? void 0 : s.embeddedActivity,
        user: E,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: _.button,
        onAction: a,
        isEmbedded: m
      })
    })]
  })
}