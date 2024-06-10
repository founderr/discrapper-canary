"use strict";
n.r(t), n.d(t, {
  configureJoin: function() {
    return A
  },
  copyId: function() {
    return _
  },
  copyLink: function() {
    return T
  },
  createThread: function() {
    return b
  },
  deleteMessage: function() {
    return C
  },
  editMessage: function() {
    return R
  },
  goToThread: function() {
    return P
  },
  markMessageAsReminder: function() {
    return D
  },
  markMessageRemindersAsComplete: function() {
    return L
  },
  markMessageUnread: function() {
    return O
  },
  pinMessage: function() {
    return x
  },
  publishMessage: function() {
    return y
  },
  replyToMessage: function() {
    return j
  },
  retrySendMessage: function() {
    return N
  }
}), n("735250"), n("470079"), n("481060");
var a = n("332148"),
  i = n("904245"),
  l = n("257559"),
  s = n("143740"),
  u = n("434404");
n("726521");
var r = n("822893"),
  o = n("623292"),
  d = n("488131"),
  c = n("314897"),
  f = n("592125"),
  E = n("626135"),
  M = n("934415"),
  g = n("572004"),
  m = n("585483"),
  v = n("709054"),
  p = n("111618"),
  S = n("50284"),
  h = n("730954"),
  I = n("981631");

function A(e) {
  let t = e.getGuildId();
  null != t && u.default.open(t, I.GuildSettingsSections.OVERVIEW)
}

function _(e, t, n) {
  (0, g.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function T(e, t) {
  E.default.track(I.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, g.copy)((0, M.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function C(e, t, n) {
  t.state === I.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === I.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function R(e, t) {
  i.default.startEditMessage(e.id, t.id, t.content)
}

function O(e, t) {
  (0, S.default)(e.id, t.id)
}

function x(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function y(e, t) {
  (0, s.default)(e.id, t.id)
}

function N(e, t) {
  (0, h.default)(e, t, void 0, p.default.getOptions(t.id))
}

function j(e, t, n) {
  let a = e.isPrivate(),
    i = t.author.id === c.default.getId();
  (0, o.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !a && !i
  }), m.ComponentDispatch.dispatchToLastSubscribed(I.ComponentActions.TEXTAREA_FOCUS)
}

function b(e, t) {
  (0, d.openThreadSidebarForCreating)(e, t, "Message")
}

function P(e, t) {
  let n = f.default.getChannel(v.default.castMessageIdAsChannelId(t.id));
  null != n && (0, d.openThreadSidebarForViewing)(n)
}

function D(e, t) {
  (0, r.addMessageReminders)(t)
}

function L(e, t) {
  (0, r.completeMessageReminders)(t.id)
}