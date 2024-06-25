n.d(t, {
  H: function() {
    return p
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
  m = n(594174),
  N = n(938475),
  h = n(622116),
  C = n(5192),
  S = n(981631),
  A = n(689938),
  g = n(531878);

function p(e) {
  var t, n, i, p, f, R, O, M, x, v;
  let {
    message: L,
    channel: Z
  } = e, P = null === (i = L.embeds[0]) || void 0 === i ? void 0 : null === (n = i.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, D = null === (R = L.embeds[0]) || void 0 === R ? void 0 : null === (f = R.fields) || void 0 === f ? void 0 : null === (p = f.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === p ? void 0 : p.rawValue, j = (0, a.e7)([T.Z], () => T.Z.getGuild(P)), U = (0, a.e7)([I.Z], () => I.Z.getChannel(D)), b = (0, a.e7)([m.default], () => m.default.getCurrentUser()), y = (0, a.e7)([], () => L.author.id === (null == b ? void 0 : b.id)), B = null === (O = Z.recipients) || void 0 === O ? void 0 : O.find(e => e !== L.author.id), k = (0, a.e7)([m.default], () => null != B ? m.default.getUser(B) : null), G = (0, d.ZP)(L), F = (0, C._T)(Z.getGuildId(), Z.id, k), V = (0, a.Wu)([N.ZP], () => null != U ? N.ZP.getVoiceStatesForChannel(U) : [], [U]), w = V.some(e => e.user.id === (null == b ? void 0 : b.id)), H = null === (v = L.embeds[0]) || void 0 === v ? void 0 : null === (x = v.fields) || void 0 === x ? void 0 : null === (M = x.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === M ? void 0 : M.rawValue, Y = null != H ? H.split(",") : [], W = (0, a.Wu)([m.default], () => Y.map(e => m.default.getUser(e)).filter(Boolean)), K = y && null != k ? A.Z.Messages.WAVED_AT_USER.format({
    username: F
  }) : A.Z.Messages.WAVED_AT_YOU.format({
    username: G.nick
  }), z = null != j && null != U, Q = null;
  Q = z ? y || w ? A.Z.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(h.Z, {
      channel: null != U ? U : void 0
    }, t)
  }) : A.Z.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(h.Z, {
      channel: null != U ? U : void 0
    }, t)
  }) : A.Z.Messages.CANNOT_ACCESS_HANGOUT, 0 === V.length && (Q = y ? A.Z.Messages.HANGOUT_OVER_SENDER : A.Z.Messages.HANGOUT_OVER_RECEIVER);
  let X = y ? A.Z.Messages.WAVE_AGAIN : A.Z.Messages.WAVE_BACK;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: g.card,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: K
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Q
      }), V.length > 0 ? (0, s.jsx)("div", {
        className: g.participants,
        children: (0, s.jsx)(E.Z, {
          guildId: P,
          partySize: {
            knownSize: V.length,
            unknownSize: 0,
            totalSize: V.length
          },
          members: V.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, s.jsx)("div", {
        className: l()(g.participants, g.disabled),
        children: (0, s.jsx)(E.Z, {
          guildId: P,
          partySize: {
            knownSize: W.length,
            unknownSize: Y.length - W.length,
            totalSize: Y.length
          },
          members: W,
          maxAvatarsShown: 5
        })
      })]
    }), (0, s.jsxs)("div", {
      className: g.actions,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != D && null != P && ((0, _.uL)(S.Z5c.CHANNEL(P, D)), c.default.selectVoiceChannel(D))
        },
        className: g.button,
        innerClassName: g.buttonInner,
        disabled: w || !z,
        children: [(0, s.jsx)(r.VoiceNormalIcon, {
          size: "md",
          color: "currentColor"
        }), A.Z.Messages.JOIN_HANGOUT]
      }), (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.Z.sendMessage(Z.id, u.ZP.parse(Z, "\uD83D\uDC4B"))
        },
        className: g.button,
        children: X
      })]
    })]
  })
}