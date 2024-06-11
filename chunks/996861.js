"use strict";
n.r(t), n.d(t, {
  configureJoin: function() {
    return _
  },
  copyId: function() {
    return T
  },
  copyLink: function() {
    return C
  },
  createThread: function() {
    return P
  },
  deleteMessage: function() {
    return R
  },
  editMessage: function() {
    return O
  },
  forwardMessage: function() {
    return U
  },
  goToThread: function() {
    return D
  },
  markMessageAsReminder: function() {
    return L
  },
  markMessageRemindersAsComplete: function() {
    return G
  },
  markMessageUnread: function() {
    return x
  },
  pinMessage: function() {
    return y
  },
  publishMessage: function() {
    return N
  },
  replyToMessage: function() {
    return b
  },
  retrySendMessage: function() {
    return j
  }
}), n("735250"), n("470079"), n("481060");
var a = n("332148"),
  i = n("904245"),
  l = n("257559"),
  s = n("143740"),
  u = n("912332"),
  r = n("434404");
n("726521");
var o = n("822893"),
  d = n("623292"),
  c = n("488131"),
  f = n("314897"),
  E = n("592125"),
  M = n("626135"),
  g = n("934415"),
  m = n("572004"),
  v = n("585483"),
  p = n("709054"),
  S = n("111618"),
  h = n("50284"),
  I = n("730954"),
  A = n("981631");

function _(e) {
  let t = e.getGuildId();
  null != t && r.default.open(t, A.GuildSettingsSections.OVERVIEW)
}

function T(e, t, n) {
  (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function C(e, t) {
  M.default.track(A.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, m.copy)((0, g.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function R(e, t, n) {
  t.state === A.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === A.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function O(e, t) {
  i.default.startEditMessage(e.id, t.id, t.content)
}

function x(e, t) {
  (0, h.default)(e.id, t.id)
}

function y(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function N(e, t) {
  (0, s.default)(e.id, t.id)
}

function j(e, t) {
  (0, I.default)(e, t, void 0, S.default.getOptions(t.id))
}

function b(e, t, n) {
  let a = e.isPrivate(),
    i = t.author.id === f.default.getId();
  (0, d.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !a && !i
  }), v.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.TEXTAREA_FOCUS)
}

function P(e, t) {
  (0, c.openThreadSidebarForCreating)(e, t, "Message")
}

function D(e, t) {
  let n = E.default.getChannel(p.default.castMessageIdAsChannelId(t.id));
  null != n && (0, c.openThreadSidebarForViewing)(n)
}

function L(e, t) {
  (0, o.addMessageReminders)(t)
}

function G(e, t) {
  (0, o.completeMessageReminders)(t.id)
}

function U(e, t) {
  (0, u.openForwardModal)({
    channelId: e.id,
    messageId: t.id,
    source: "message-actions"
  })
}