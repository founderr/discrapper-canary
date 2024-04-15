"use strict";
n.r(t), n.d(t, {
  VoiceChannelInviteEmbed: function() {
    return g
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("904245"),
  u = n("287734"),
  d = n("957730"),
  c = n("739566"),
  E = n("599706"),
  f = n("703656"),
  _ = n("592125"),
  T = n("430824"),
  I = n("594174"),
  m = n("938475"),
  N = n("632184"),
  p = n("622116"),
  S = n("5192"),
  C = n("981631"),
  A = n("689938"),
  h = n("478151");

function g(e) {
  var t, n, a, g, M, O, R, v, L, P;
  let {
    message: D,
    channel: x
  } = e, y = null === (a = D.embeds[0]) || void 0 === a ? void 0 : null === (n = a.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, U = null === (O = D.embeds[0]) || void 0 === O ? void 0 : null === (M = O.fields) || void 0 === M ? void 0 : null === (g = M.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === g ? void 0 : g.rawValue, j = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(y)), b = (0, i.useStateFromStores)([_.default], () => _.default.getChannel(U)), G = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), B = (0, i.useStateFromStores)([], () => D.author.id === (null == G ? void 0 : G.id)), F = null === (R = x.recipients) || void 0 === R ? void 0 : R.find(e => e !== D.author.id), k = (0, i.useStateFromStores)([I.default], () => null != F ? I.default.getUser(F) : null), w = (0, c.default)(D), H = (0, S.useName)(x.getGuildId(), x.id, k), V = (0, i.useStateFromStoresArray)([m.default], () => null != b ? m.default.getVoiceStatesForChannel(b) : [], [b]), Y = V.some(e => e.user.id === (null == G ? void 0 : G.id)), K = null === (P = D.embeds[0]) || void 0 === P ? void 0 : null === (L = P.fields) || void 0 === L ? void 0 : null === (v = L.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === v ? void 0 : v.rawValue, W = null != K ? K.split(",") : [], z = (0, i.useStateFromStoresArray)([I.default], () => W.map(e => I.default.getUser(e)).filter(Boolean)), Q = B && null != k ? A.default.Messages.WAVED_AT_USER.format({
    username: H
  }) : A.default.Messages.WAVED_AT_YOU.format({
    username: w.nick
  }), q = null != j && null != b, J = null;
  J = q ? B || Y ? A.default.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : A.default.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : A.default.Messages.CANNOT_ACCESS_HANGOUT, 0 === V.length && (J = B ? A.default.Messages.HANGOUT_OVER_SENDER : A.default.Messages.HANGOUT_OVER_RECEIVER);
  let Z = B ? A.default.Messages.WAVE_AGAIN : A.default.Messages.WAVE_BACK;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: h.card,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: Q
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: J
      }), V.length > 0 ? (0, s.jsx)("div", {
        className: h.participants,
        children: (0, s.jsx)(E.default, {
          guildId: y,
          partySize: {
            knownSize: V.length,
            unknownSize: 0,
            totalSize: V.length
          },
          members: V.map(e => e.user),
          maxAvatarsShown: 5
        })
      }) : (0, s.jsx)("div", {
        className: l()(h.participants, h.disabled),
        children: (0, s.jsx)(E.default, {
          guildId: y,
          partySize: {
            knownSize: z.length,
            unknownSize: W.length - z.length,
            totalSize: W.length
          },
          members: z,
          maxAvatarsShown: 5
        })
      })]
    }), (0, s.jsxs)("div", {
      className: h.actions,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != U && null != y && ((0, f.transitionTo)(C.Routes.CHANNEL(y, U)), u.default.selectVoiceChannel(U))
        },
        className: h.button,
        innerClassName: h.buttonInner,
        disabled: Y || !q,
        children: [(0, s.jsx)(N.default, {}), A.default.Messages.JOIN_HANGOUT]
      }), (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.default.sendMessage(x.id, d.default.parse(x, "\uD83D\uDC4B"))
        },
        className: h.button,
        children: Z
      })]
    })]
  })
}