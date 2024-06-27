t.d(n, {
  $Z: function() {
    return R
  },
  B8: function() {
    return N
  },
  F4: function() {
    return h
  },
  HH: function() {
    return j
  },
  Hd: function() {
    return p
  },
  W1: function() {
    return D
  },
  Xl: function() {
    return C
  },
  fB: function() {
    return O
  },
  gK: function() {
    return P
  },
  l9: function() {
    return G
  },
  mG: function() {
    return b
  },
  qe: function() {
    return L
  },
  rY: function() {
    return x
  },
  ts: function() {
    return y
  },
  zW: function() {
    return T
  }
}), t(735250), t(470079), t(481060);
var i = t(332148),
  a = t(904245),
  r = t(257559),
  l = t(143740),
  o = t(912332),
  s = t(434404);
t(726521);
var u = t(623292),
  d = t(962796),
  c = t(488131),
  E = t(314897),
  f = t(592125),
  M = t(626135),
  I = t(934415),
  g = t(572004),
  m = t(585483),
  _ = t(709054),
  Z = t(111618),
  S = t(50284),
  v = t(730954),
  A = t(981631);

function T(e) {
  let n = e.getGuildId();
  null != n && s.Z.open(n, A.pNK.OVERVIEW)
}

function h(e, n, t) {
  (0, g.JG)(t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id)
}

function O(e, n) {
  M.default.track(A.rMx.MESSAGE_LINK_COPIED, {
    message_id: n.id,
    channel: n.channel_id
  }), (0, g.JG)((0, I.wR)(e.guild_id, e.id, n.id))
}

function R(e, n, t) {
  n.state === A.yb.SEND_FAILED || t.shiftKey ? a.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : r.Z.confirmDelete(e, n)
}

function p(e, n) {
  a.Z.startEditMessage(e.id, n.id, n.content)
}

function N(e, n) {
  (0, S.Z)(e.id, n.id)
}

function x(e, n, t) {
  if (!1 === n.pinned) {
    t.shiftKey ? i.Z.pinMessage(e, n.id) : r.Z.confirmPin(e, n);
    return
  }
  t.shiftKey ? i.Z.unpinMessage(e, n.id) : r.Z.confirmUnpin(e, n)
}

function C(e, n) {
  (0, l.Z)(e.id, n.id)
}

function b(e, n) {
  (0, v.Z)(e, n, void 0, Z.Z.getOptions(n.id))
}

function j(e, n, t) {
  let i = e.isPrivate(),
    a = n.author.id === E.default.getId();
  (0, u.fE)({
    channel: e,
    message: n,
    shouldMention: !t.shiftKey && !a,
    showMentionToggle: !i && !a
  }), m.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS)
}

function P(e, n) {
  (0, c.R6)(e, n, "Message")
}

function L(e, n) {
  let t = f.Z.getChannel(_.default.castMessageIdAsChannelId(n.id));
  null != t && (0, c.ok)(t)
}

function D(e, n) {
  (0, d.BW)(n)
}

function G(e, n) {
  (0, d.Kp)(n.id)
}

function y(e, n) {
  (0, o.l8)({
    channelId: e.id,
    messageId: n.id,
    source: "message-actions"
  })
}