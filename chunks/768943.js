n(47120);
var r, i, a, s, o = n(873011),
  l = n(442837),
  u = n(759174),
  c = n(570140);
let d = new u.h(e => {
let {
  saveData: t
} = e;
return [t.type.toString()];
  }, e => {
let {
  saveData: t
} = e;
return -t.savedAt.getTime();
  }),
  _ = 0,
  E = new Set();

function f(e) {
  let {
channelId: t,
messageId: n
  } = e;
  return ''.concat(t, '-').concat(n);
}
class h extends(r = l.ZP.Store) {
  initialize() {}
  getSavedMessages() {
return d.values();
  }
  getMessageBookmarks() {
return d.values(o.J.BOOKMARK.toString());
  }
  getMessageReminders() {
return d.values(o.J.REMINDER.toString());
  }
  getOverdueMessageReminderCount() {
return this.getMessageReminders().filter(e => {
  let {
    saveData: t
  } = e;
  return null == t.dueAt || new Date() > t.dueAt;
}).length;
  }
  getLastFetched() {
return _;
  }
  isMessageBookmarked(e, t) {
let n = d.get(f({
  channelId: e,
  messageId: t
}));
return (null == n ? void 0 : n.saveData.type) === o.J.BOOKMARK;
  }
  isMessageReminder(e, t) {
let n = d.get(f({
  channelId: e,
  messageId: t
}));
return (null == n ? void 0 : n.saveData.type) === o.J.REMINDER;
  }
  hasSentNotification(e) {
return E.has(e);
  }
  getVersion() {
return d.version;
  }
  getState() {
return {
  savedMessages: d
};
  }
}
s = 'SavedMessagesStore', (a = 'displayName') in(i = h) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new h(c.Z, {
  SAVED_MESSAGES_UPDATE: function(e) {
let {
  savedMessages: t
} = e;
for (let e of (_ = new Date().getTime(), d.clear(), t))
  d.set(f(e.saveData), e.saveData.type === o.J.REMINDER ? {
    ...e,
    complete: !1
  } : e);
t.forEach(e => {
  e.saveData.type === o.J.REMINDER && (null != e.saveData.dueAt && e.saveData.dueAt > new Date() && E.delete(e.saveData.messageId), null != e.saveData.dueAt && e.saveData.dueAt < new Date() && E.add(e.saveData.messageId));
});
  },
  SAVED_MESSAGE_CREATE: function(e) {
let {
  savedMessage: t
} = e;
d.set(f(t.saveData), t.saveData.type === o.J.REMINDER ? {
  ...t,
  complete: !1
} : t);
  },
  SAVED_MESSAGE_DELETE: function(e) {
let {
  savedMessageData: t
} = e;
d.delete(f(t));
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
let {
  savedMessageData: t,
  complete: n
} = e, r = f(t), i = d.get(r);
if (null == i)
  return !1;
d.set(r, {
  ...i,
  complete: n
});
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
let {
  messageId: t
} = e;
E.add(t);
  }
});