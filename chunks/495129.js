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
  f = n("599706"),
  E = n("703656"),
  _ = n("592125"),
  T = n("430824"),
  m = n("594174"),
  I = n("938475"),
  N = n("632184"),
  p = n("622116"),
  h = n("5192"),
  S = n("981631"),
  C = n("689938"),
  A = n("737847");

function g(e) {
  var t, n, a, g, M, R, O, v, x, L;
  let {
    message: P,
    channel: D
  } = e, y = null === (a = P.embeds[0]) || void 0 === a ? void 0 : null === (n = a.fields) || void 0 === n ? void 0 : null === (t = n.find(e => {
    let {
      rawName: t
    } = e;
    return "guild_id" === t
  })) || void 0 === t ? void 0 : t.rawValue, U = null === (R = P.embeds[0]) || void 0 === R ? void 0 : null === (M = R.fields) || void 0 === M ? void 0 : null === (g = M.find(e => {
    let {
      rawName: t
    } = e;
    return "channel_id" === t
  })) || void 0 === g ? void 0 : g.rawValue, j = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(y)), b = (0, i.useStateFromStores)([_.default], () => _.default.getChannel(U)), G = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()), F = (0, i.useStateFromStores)([], () => P.author.id === (null == G ? void 0 : G.id)), B = null === (O = D.recipients) || void 0 === O ? void 0 : O.find(e => e !== P.author.id), k = (0, i.useStateFromStores)([m.default], () => null != B ? m.default.getUser(B) : null), w = (0, c.default)(P), H = (0, h.useName)(D.getGuildId(), D.id, k), V = (0, i.useStateFromStoresArray)([I.default], () => null != b ? I.default.getVoiceStatesForChannel(b) : [], [b]), Y = V.some(e => e.user.id === (null == G ? void 0 : G.id)), K = null === (L = P.embeds[0]) || void 0 === L ? void 0 : null === (x = L.fields) || void 0 === x ? void 0 : null === (v = x.find(e => {
    let {
      rawName: t
    } = e;
    return "voice_user_ids" === t
  })) || void 0 === v ? void 0 : v.rawValue, W = null != K ? K.split(",") : [], z = (0, i.useStateFromStoresArray)([m.default], () => W.map(e => m.default.getUser(e)).filter(Boolean)), Q = F && null != k ? C.default.Messages.WAVED_AT_USER.format({
    username: H
  }) : C.default.Messages.WAVED_AT_YOU.format({
    username: w.nick
  }), q = null != j && null != b, X = null;
  X = q ? F || Y ? C.default.Messages.YOU_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : C.default.Messages.THEY_ARE_IN_CHANNEL.format({
    channelHook: (e, t) => (0, s.jsx)(p.default, {
      channel: null != b ? b : void 0
    }, t)
  }) : C.default.Messages.CANNOT_ACCESS_HANGOUT, 0 === V.length && (X = F ? C.default.Messages.HANGOUT_OVER_SENDER : C.default.Messages.HANGOUT_OVER_RECEIVER);
  let Z = F ? C.default.Messages.WAVE_AGAIN : C.default.Messages.WAVE_BACK;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: A.card,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: Q
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: X
      }), V.length > 0 ? (0, s.jsx)("div", {
        className: A.participants,
        children: (0, s.jsx)(f.default, {
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
        className: l()(A.participants, A.disabled),
        children: (0, s.jsx)(f.default, {
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
      className: A.actions,
      children: [(0, s.jsxs)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: () => {
          null != U && null != y && ((0, E.transitionTo)(S.Routes.CHANNEL(y, U)), u.default.selectVoiceChannel(U))
        },
        className: A.button,
        innerClassName: A.buttonInner,
        disabled: Y || !q,
        children: [(0, s.jsx)(N.default, {}), C.default.Messages.JOIN_HANGOUT]
      }), (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          o.default.sendMessage(D.id, d.default.parse(D, "\uD83D\uDC4B"))
        },
        className: A.button,
        children: Z
      })]
    })]
  })
}