n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(759174),
    u = n(570140),
    c = n(686478);
let d = new l.h(
        (e) => {
            let { saveData: t } = e;
            return [c._l.ALL, null != t.dueAt ? c._l.REMINDER : c._l.BOOKMARK];
        },
        (e) => {
            var t, n, r;
            let { saveData: i } = e;
            return null !== (r = null === (n = (t = i).dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 10000000000000 - t.savedAt.getTime();
        }
    ),
    _ = 0,
    E = new Set();
function f(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
class h extends (r = o.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return d.values(c._l.ALL);
    }
    getMessageBookmarks() {
        return d.values(c._l.BOOKMARK);
    }
    getMessageReminders() {
        return d.values(c._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return this.getMessageReminders().filter((e) => {
            let { saveData: t } = e;
            return null == t.dueAt || new Date() > t.dueAt;
        }).length;
    }
    getLastFetched() {
        return _;
    }
    isMessageBookmarked(e, t) {
        let n = d.get(
            f({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = d.get(
            f({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
    hasOverdueReminder(e) {
        return this.getMessageReminders().some((t) => {
            let { saveData: n } = t;
            return null == n.dueAt || e > n.dueAt;
        });
    }
    hasSentNotification(e) {
        return E.has(e);
    }
    getState() {
        return { savedMessages: d };
    }
}
(s = 'SavedMessagesStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(u.Z, {
        SAVED_MESSAGES_UPDATE: function (e) {
            let { savedMessages: t } = e;
            for (let e of ((_ = new Date().getTime()), d.clear(), t)) d.set(f(e.saveData), e);
            t.forEach((e) => {
                null != e.saveData.dueAt && (null != e.saveData.dueAt && e.saveData.dueAt > new Date() && E.delete(e.saveData.messageId), null != e.saveData.dueAt && e.saveData.dueAt < new Date() && E.add(e.saveData.messageId));
            });
        },
        SAVED_MESSAGE_CREATE: function (e) {
            let { savedMessage: t } = e;
            d.set(f(t.saveData), t);
        },
        SAVED_MESSAGE_DELETE: function (e) {
            let { savedMessageData: t } = e;
            d.delete(f(t));
        },
        MESSAGE_REMINDER_NOTIFIED: function (e) {
            let { messageId: t } = e;
            E.add(t);
        }
    }));
