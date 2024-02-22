"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("446674"),
  s = n("913144"),
  l = n("718517");
let u = [],
  i = new Set,
  r = 0;
class d extends a.default.Store {
  initialize() {
    setInterval(() => {
      this.emitChange()
    }, 1 * l.default.Millis.MINUTE)
  }
  getMessageReminders() {
    return u
  }
  isMessageReminder(e) {
    let t = u.find(t => t.messageId === e);
    return null != t && !t.complete
  }
  getOverdueMessageReminderCount() {
    return u.filter(e => null == e.dueAt || new Date > e.dueAt).length
  }
  recentlyFetched() {
    return new Date().getTime() - r < 1 * l.default.Millis.MINUTE
  }
  hasSentNotification(e) {
    return i.has(e)
  }
  getState() {
    return {
      messages: u
    }
  }
}
d.displayName = "MessageRemindersStore";
var o = new d(s.default, {
  SAVED_MESSAGES_UPDATE: function(e) {
    let {
      messages: t
    } = e;
    r = new Date().getTime(), u = t.map(e => ({
      ...e,
      complete: !1
    })), t.forEach(e => {
      null != e.dueAt && e.dueAt > new Date && i.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && i.add(e.messageId)
    })
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
    let {
      messageId: t,
      complete: n
    } = e, a = u.findIndex(e => e.messageId === t);
    if (-1 === a) return !1;
    u[a] = {
      ...u[a],
      complete: n
    }
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
    let {
      messageId: t
    } = e;
    i.add(t)
  }
})