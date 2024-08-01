n.d(t, {
  $Z: function() {
return O;
  },
  B8: function() {
return v;
  },
  F4: function() {
return M;
  },
  HH: function() {
return D;
  },
  Hd: function() {
return x;
  },
  W1: function() {
return B;
  },
  Xl: function() {
return L;
  },
  dF: function() {
return U;
  },
  eM: function() {
return y;
  },
  fB: function() {
return R;
  },
  gK: function() {
return b;
  },
  l9: function() {
return k;
  },
  mG: function() {
return P;
  },
  qe: function() {
return j;
  },
  rY: function() {
return Z;
  },
  ts: function() {
return G;
  },
  zW: function() {
return A;
  }
}), n(735250), n(470079), n(481060);
var i = n(332148),
  s = n(904245),
  a = n(257559),
  r = n(143740),
  l = n(912332),
  o = n(434404);
n(726521);
var c = n(623292),
  u = n(43690),
  d = n(962796),
  _ = n(488131),
  E = n(314897),
  I = n(592125),
  m = n(626135),
  T = n(934415),
  h = n(572004),
  N = n(585483),
  f = n(709054),
  C = n(111618),
  p = n(50284),
  g = n(730954),
  S = n(981631);

function A(e) {
  let t = e.getGuildId();
  null != t && o.Z.open(t, S.pNK.OVERVIEW);
}

function M(e, t, n) {
  (0, h.JG)(n.shiftKey ? ''.concat(t.channel_id, '-').concat(t.id) : t.id);
}

function R(e, t) {
  m.default.track(S.rMx.MESSAGE_LINK_COPIED, {
message_id: t.id,
channel: t.channel_id
  }), (0, h.JG)((0, T.wR)(e.guild_id, e.id, t.id));
}

function O(e, t, n) {
  t.state === S.yb.SEND_FAILED || n.shiftKey ? s.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : a.Z.confirmDelete(e, t);
}

function x(e, t) {
  s.Z.startEditMessage(e.id, t.id, t.content);
}

function v(e, t) {
  (0, p.Z)(e.id, t.id);
}

function Z(e, t, n) {
  if (!1 === t.pinned) {
n.shiftKey ? i.Z.pinMessage(e, t.id) : a.Z.confirmPin(e, t);
return;
  }
  n.shiftKey ? i.Z.unpinMessage(e, t.id) : a.Z.confirmUnpin(e, t);
}

function L(e, t) {
  (0, r.Z)(e.id, t.id);
}

function P(e, t) {
  (0, g.Z)(e, t, void 0, C.Z.getOptions(t.id));
}

function D(e, t, n) {
  let i = e.isPrivate(),
s = t.author.id === E.default.getId();
  (0, c.fE)({
channel: e,
message: t,
shouldMention: !n.shiftKey && !s,
showMentionToggle: !i && !s
  }), N.S.dispatchToLastSubscribed(S.CkL.TEXTAREA_FOCUS);
}

function b(e, t) {
  (0, _.R6)(e, t, 'Message');
}

function j(e, t) {
  let n = I.Z.getChannel(f.default.castMessageIdAsChannelId(t.id));
  null != n && (0, _.ok)(n);
}

function U(e, t) {
  (0, u.D)({
channelId: e.id,
messageId: t.id
  });
}

function y(e, t) {
  (0, u.h)({
channelId: e.id,
messageId: t.id
  });
}

function B(e, t) {
  (0, d.HG)({
channelId: e.id,
messageId: t.id
  });
}

function k(e, t) {
  (0, d.bn)({
channelId: e.id,
messageId: t.id
  });
}

function G(e, t) {
  (0, l.l8)({
channelId: e.id,
messageId: t.id,
source: 'message-actions'
  });
}