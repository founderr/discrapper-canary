"use strict";
n.r(t), n.d(t, {
  configureJoin: function() {
    return S
  },
  copyId: function() {
    return I
  },
  copyLink: function() {
    return A
  },
  deleteMessage: function() {
    return T
  },
  editMessage: function() {
    return x
  },
  markMessageUnread: function() {
    return D
  },
  pinMessage: function() {
    return C
  },
  publishMessage: function() {
    return L
  },
  retrySendMessage: function() {
    return O
  },
  replyToMessage: function() {
    return v
  },
  createThread: function() {
    return R
  },
  goToThread: function() {
    return P
  },
  markMessageAsReminder: function() {
    return U
  },
  markMessageRemindersAsComplete: function() {
    return y
  }
}), n("37983"), n("884691"), n("77078");
var s = n("828986"),
  a = n("819689"),
  l = n("249561"),
  i = n("550762"),
  r = n("592407");
n("377114");
var d = n("931318"),
  u = n("529805"),
  o = n("967241"),
  c = n("271938"),
  f = n("42203"),
  E = n("599110"),
  g = n("404008"),
  m = n("306160"),
  M = n("659500"),
  h = n("613387"),
  _ = n("456936"),
  N = n("409058"),
  p = n("49111");

function S(e) {
  let t = e.getGuildId();
  null != t && r.default.open(t, p.GuildSettingsSections.OVERVIEW)
}

function I(e, t, n) {
  (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function A(e, t) {
  E.default.track(p.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, m.copy)((0, g.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function T(e, t, n) {
  t.state === p.MessageStates.SEND_FAILED || n.shiftKey ? a.default.deleteMessage(e.id, t.id, t.state === p.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function x(e, t) {
  a.default.startEditMessage(e.id, t.id, t.content)
}

function D(e, t) {
  (0, _.default)(e.id, t.id)
}

function C(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? s.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? s.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function L(e, t) {
  (0, i.default)(e.id, t.id)
}

function O(e, t) {
  (0, N.default)(e, t, void 0, h.default.getOptions(t.id))
}

function v(e, t, n) {
  let s = e.isPrivate(),
    a = t.author.id === c.default.getId();
  (0, u.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !a,
    showMentionToggle: !s && !a
  }), M.ComponentDispatch.dispatchToLastSubscribed(p.ComponentActions.TEXTAREA_FOCUS)
}

function R(e, t) {
  (0, o.openThreadSidebarForCreating)(e, t, "Message")
}

function P(e, t) {
  let n = f.default.getChannel(t.id);
  null != n && (0, o.openThreadSidebarForViewing)(n)
}

function U(e, t) {
  (0, d.addMessageReminders)(t)
}

function y(e, t) {
  (0, d.completeMessageReminders)(t.id)
}