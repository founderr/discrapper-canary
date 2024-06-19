n.d(t, {
  H: function() {
    return g
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(904245),
  c = n(287734),
  u = n(957730),
  d = n(739566),
  E = n(599706),
  _ = n(703656),
  I = n(592125),
  T = n(430824),
  N = n(594174),
  m = n(938475),
  h = n(622116),
  C = n(5192),
  S = n(981631),
  A = n(689938),
  p = n(531878);

function g(e) {
  var t, n, i, g, f, O, R, M, x, v;
  let {
    message: L,
    channel: Z
  } = e, P = null === (i = L.embeds[0]) || void 0 === i ? void 0 : null === (n = i.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, D = null === (O = L.embeds[0]) || void 0 === O ? void 0 : null === (f = O.fields) || void 0 === f ? void 0 : null === (g = f.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === g ? void 0 : g.rawValue, j = (0, a.e7)([T.Z], () => T.Z.getGuild(P)), U = (0, a.e7)([I.Z], () => I.Z.getChannel(D)), b = (0, a.e7)([N.default], () => N.default.getCurrentUser()), y = (0, a.e7)([], () => L.author.id === (null == b ? void 0 : b.id)), B = null === (R = Z.recipients) || void 0 === R ? void 0 : R.find(e => e !== L.author.id), k = (0, a.e7)([N.default], () => null != B ? N.default.getUser(B) : null), G = (0, d.ZP)(L), F = (0, C._T)(Z.getGuildId(), Z.id, k), w = (0, a.Wu)([m.ZP], () => null != U ? m.ZP.getVoiceStatesForChannel(U) : [], [U]), V = w.some(e => e.user.id === (null == b ? void 0 : b.id)), H = null === (v = L.embeds[0]) || void 0 === v ? void 0 : null === (x = v.fields) || void 0 === x ? void 0 : null === (M = x.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === M ? void 0 : M.rawValue, Y = null != H ? H.split(",") : [], K = (0, a.Wu)([N.default], () => Y.map(e => N.default.getUser(e)).filter(Boolean)), W = y && null != k ? A.Z.Messages.WAVED_AT_USER.format({
    username: F
  }) : A.Z.Messages.WAVED_AT_YOU.format({
    username: G.nick
  }), z = null != j && null != U, Q = null;
  Q = z ? y || V ? A.Z.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(h.Z, {
      channel: null != U ? U : void 0
    }, t)
  }) : A.Z.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(h.Z, {
      channel: null != U ? U : void 0
    }, t)
  }) : A.Z.Messages.CANNOT_ACCESS_HANGOUT, 0 === w.length && (Q = y ? A.Z.Messages.HANGOUT_OVER_SENDER : A.Z.Messages.HANGOUT_OVER_RECEIVER);
  let q = y ? A.Z.Messages.WAVE_AGAIN : A.Z.Messages.WAVE_BACK;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: p.card,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: W
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Q
      }), w.length > 0 ? (0, s.jsx)("div", {
        className: p.participants,
        children: (0, s.jsx)(E.Z, {
          guildId: P,
          partySize: {
            knownSize: w.length,
            unknownSize: 0,
            totalSize: w.length
          },
          members: w.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, s.jsx)("div", {
        className: l()(p.participants, p.disabled),
        children: (0, s.jsx)(E.Z, {
          guildId: P,
          partySize: {
            knownSize: K.length,
            unknownSize: Y.length - K.length,
            totalSize: Y.length
          },
          members: K,
          maxAvatarsShown: 5
        })
      })]
    }), (0, s.jsxs)("div", {
      className: p.actions,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != D && null != P && ((0, _.uL)(S.Z5c.CHANNEL(P, D)), c.default.selectVoiceChannel(D))
        },
        className: p.button,
        innerClassName: p.buttonInner,
        disabled: V || !z,
        children: [(0, s.jsx)(r.VoiceNormalIcon, {
          size: "md",
          color: "currentColor"
        }), A.Z.Messages.JOIN_HANGOUT]
      }), (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.Z.sendMessage(Z.id, u.ZP.parse(Z, "\uD83D\uDC4B"))
        },
        className: p.button,
        children: q
      })]
    })]
  })
}