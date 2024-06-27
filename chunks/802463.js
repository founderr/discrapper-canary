"use strict";
n(47120);
var i, r, s, o, a = n(873011),
  l = n(442837),
  u = n(570140),
  _ = n(70956);
let c = [],
  d = new Set,
  E = 0;
class I extends(i = l.ZP.Store) {
  initialize() {
    setInterval(() => {
      this.emitChange()
    }, 1 * _.Z.Millis.MINUTE)
  }
  getMessageReminders() {
    return c
  }
  isMessageReminder(e) {
    let t = c.find(t => t.messageId === e);
    return null != t && !t.complete
  }
  getOverdueMessageReminderCount() {
    return c.filter(e => null == e.dueAt || new Date > e.dueAt).length
  }
  recentlyFetched() {
    return new Date().getTime() - E < 1 * _.Z.Millis.MINUTE
  }
  hasSentNotification(e) {
    return d.has(e)
  }
  getState() {
    return {
      messages: c
    }
  }
}
o = "MessageRemindersStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new I(u.Z, {
  SAVED_MESSAGES_UPDATE: function(e) {
    let {
      messages: t
    } = e;
    E = new Date().getTime(), c = t.filter(e => e.type === a.J.REMINDER).map(e => ({
      ...e,
      complete: !1
    })), t.forEach(e => {
      null != e.dueAt && e.dueAt > new Date && d.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && d.add(e.messageId)
    })
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
    let {
      messageId: t,
      complete: n
    } = e, i = c.findIndex(e => e.messageId === t);
    if (-1 === i) return !1;
    c[i] = {
      ...c[i],
      complete: n
    }
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
    let {
      messageId: t
    } = e;
    d.add(t)
  }
})