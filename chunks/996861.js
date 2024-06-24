t.d(n, {
  $Z: function() {
    return O
  },
  B8: function() {
    return N
  },
  F4: function() {
    return h
  },
  HH: function() {
    return P
  },
  Hd: function() {
    return R
  },
  W1: function() {
    return y
  },
  Xl: function() {
    return C
  },
  fB: function() {
    return p
  },
  gK: function() {
    return b
  },
  l9: function() {
    return D
  },
  mG: function() {
    return j
  },
  qe: function() {
    return L
  },
  rY: function() {
    return x
  },
  ts: function() {
    return G
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
  u = t(434404);
t(726521);
var s = t(822893),
  d = t(623292),
  c = t(488131),
  E = t(314897),
  f = t(592125),
  I = t(626135),
  M = t(934415),
  g = t(572004),
  m = t(585483),
  Z = t(709054),
  _ = t(111618),
  v = t(50284),
  S = t(730954),
  A = t(981631);

function T(e) {
  let n = e.getGuildId();
  null != n && u.Z.open(n, A.pNK.OVERVIEW)
}

function h(e, n, t) {
  (0, g.JG)(t.shiftKey ? "".concat(n.channel_id, "-").concat(n.id) : n.id)
}

function p(e, n) {
  I.default.track(A.rMx.MESSAGE_LINK_COPIED, {
    message_id: n.id,
    channel: n.channel_id
  }), (0, g.JG)((0, M.wR)(e.guild_id, e.id, n.id))
}

function O(e, n, t) {
  n.state === A.yb.SEND_FAILED || t.shiftKey ? a.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : r.Z.confirmDelete(e, n)
}

function R(e, n) {
  a.Z.startEditMessage(e.id, n.id, n.content)
}

function N(e, n) {
  (0, v.Z)(e.id, n.id)
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

function j(e, n) {
  (0, S.Z)(e, n, void 0, _.Z.getOptions(n.id))
}

function P(e, n, t) {
  let i = e.isPrivate(),
    a = n.author.id === E.default.getId();
  (0, d.fE)({
    channel: e,
    message: n,
    shouldMention: !t.shiftKey && !a,
    showMentionToggle: !i && !a
  }), m.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS)
}

function b(e, n) {
  (0, c.R6)(e, n, "Message")
}

function L(e, n) {
  let t = f.Z.getChannel(Z.default.castMessageIdAsChannelId(n.id));
  null != t && (0, c.ok)(t)
}

function y(e, n) {
  (0, s.BW)(n)
}

function D(e, n) {
  (0, s.Kp)(n.id)
}

function G(e, n) {
  (0, o.l8)({
    channelId: e.id,
    messageId: n.id,
    source: "message-actions"
  })
}