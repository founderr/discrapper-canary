t.d(n, {
  $Z: function() {
    return O
  },
  B8: function() {
    return N
  },
  F4: function() {
    return p
  },
  HH: function() {
    return j
  },
  Hd: function() {
    return R
  },
  W1: function() {
    return D
  },
  Xl: function() {
    return C
  },
  fB: function() {
    return T
  },
  gK: function() {
    return y
  },
  l9: function() {
    return L
  },
  mG: function() {
    return P
  },
  qe: function() {
    return b
  },
  rY: function() {
    return x
  },
  ts: function() {
    return G
  },
  zW: function() {
    return h
  }
}), t(735250), t(470079), t(481060);
var i = t(332148),
  a = t(904245),
  l = t(257559),
  r = t(143740),
  o = t(912332),
  u = t(434404);
t(726521);
var s = t(822893),
  c = t(623292),
  d = t(488131),
  E = t(314897),
  f = t(592125),
  M = t(626135),
  g = t(934415),
  m = t(572004),
  I = t(585483),
  Z = t(709054),
  _ = t(111618),
  v = t(50284),
  S = t(730954),
  A = t(981631);

function h(e) {
  let n = e.getGuildId();
  null != n && u.Z.open(n, A.pNK.OVERVIEW)
}

function p(e, n, t) {
  (0, m.JG)(t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id)
}

function T(e, n) {
  M.default.track(A.rMx.MESSAGE_LINK_COPIED, {
    message_id: n.id,
    channel: n.channel_id
  }), (0, m.JG)((0, g.wR)(e.guild_id, e.id, n.id))
}

function O(e, n, t) {
  n.state === A.yb.SEND_FAILED || t.shiftKey ? a.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : l.Z.confirmDelete(e, n)
}

function R(e, n) {
  a.Z.startEditMessage(e.id, n.id, n.content)
}

function N(e, n) {
  (0, v.Z)(e.id, n.id)
}

function x(e, n, t) {
  if (!1 === n.pinned) {
    t.shiftKey ? i.Z.pinMessage(e, n.id) : l.Z.confirmPin(e, n);
    return
  }
  t.shiftKey ? i.Z.unpinMessage(e, n.id) : l.Z.confirmUnpin(e, n)
}

function C(e, n) {
  (0, r.Z)(e.id, n.id)
}

function P(e, n) {
  (0, S.Z)(e, n, void 0, _.Z.getOptions(n.id))
}

function j(e, n, t) {
  let i = e.isPrivate(),
    a = n.author.id === E.default.getId();
  (0, c.fE)({
    channel: e,
    message: n,
    shouldMention: !t.shiftKey && !a,
    showMentionToggle: !i && !a
  }), I.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS)
}

function y(e, n) {
  (0, d.R6)(e, n, "Message")
}

function b(e, n) {
  let t = f.Z.getChannel(Z.default.castMessageIdAsChannelId(n.id));
  null != t && (0, d.ok)(t)
}

function D(e, n) {
  (0, s.BW)(n)
}

function L(e, n) {
  (0, s.Kp)(n.id)
}

function G(e, n) {
  (0, o.l8)({
    channelId: e.id,
    messageId: n.id,
    source: "message-actions"
  })
}