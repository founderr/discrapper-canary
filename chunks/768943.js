n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(759174),
    u = n(570140),
    c = n(786761),
    d = n(594174),
    f = n(686478);
let _ = new l.h(
        (e) => {
            let { saveData: t } = e;
            return [f._l.ALL, null != t.dueAt ? f._l.REMINDER : f._l.BOOKMARK];
        },
        (e) => {
            var t, n, r;
            let { saveData: i } = e;
            return null !== (r = null === (n = (t = i).dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 10000000000000 - t.savedAt.getTime();
        }
    ),
    p = !0,
    h = 0,
    m = new Set(),
    g = new Set(),
    E = new Map();
function v(e) {
    let t = E.get(e);
    return null != t && t.size > 0;
}
function b(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function I(e) {
    var t;
    let n = b(e.saveData);
    null == _.get(n) && (h = Date.now()), _.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null !== (t = E.get(i)) && void 0 !== t ? t : new Set();
    a.add(r), E.set(i, a), null == e.message && g.add(r), null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? m.add(r) : m.delete(r);
}
function S(e) {
    let { messageId: t, channelId: n } = e,
        r = b({
            messageId: t,
            channelId: n
        }),
        i = _.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), _.set(r, a), !0;
}
function T() {
    if (0 === g.size || p) return !1;
    p = !0;
}
class y extends (r = o.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return _.values(f._l.ALL);
    }
    getSavedMessage(e, t) {
        return _.get(
            b({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return _.values(f._l.BOOKMARK);
    }
    getMessageReminders() {
        return _.values(f._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return m.size;
    }
    hasOverdueReminder() {
        return m.size > 0;
    }
    getSavedMessageCount() {
        return _.size();
    }
    getIsStale() {
        return p;
    }
    getLastChanged() {
        return h;
    }
    isMessageBookmarked(e, t) {
        let n = _.get(
            b({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = _.get(
            b({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
}
(s = 'SavedMessagesStore'),
    (a = 'displayName') in (i = y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new y(u.Z, {
        POST_CONNECTION_OPEN: function () {
            p = !0;
        },
        LOGOUT: function () {
            (p = !0), _.clear(), E.clear(), g.clear();
        },
        SAVED_MESSAGES_UPDATE: function (e) {
            let { savedMessages: t } = e;
            for (let e of ((p = !1), _.clear(), E.clear(), g.clear(), t)) I(e);
        },
        SAVED_MESSAGE_CREATE: function (e) {
            let { savedMessage: t } = e;
            I(t);
        },
        SAVED_MESSAGE_DELETE: function (e) {
            let { savedMessageData: t } = e;
            return (function (e) {
                var t;
                let n = b(e),
                    r = _.get(n);
                if (null == r) return !1;
                _.delete(n);
                let i = e.messageId;
                null === (t = E.get(r.saveData.channelId)) || void 0 === t || t.delete(i), g.delete(i), m.delete(i), (h = Date.now());
            })(t);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e;
            return S({
                messageId: t,
                channelId: n
            });
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e;
            for (let e of t)
                S({
                    messageId: e,
                    channelId: n
                });
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || null == t.channel_id) return !1;
            let n = b({
                    messageId: t.id,
                    channelId: t.channel_id
                }),
                r = _.get(n);
            if ((null == r ? void 0 : r.message) == null) return !1;
            let i = { ...r };
            (i.message = (0, c.wi)(r.message, t)), _.set(n, i);
        },
        GUILD_CREATE: T,
        GUILD_UPDATE: T,
        GUILD_DELETE: T,
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (0 === g.size || p || !v(t.id)) return !1;
            p = !0;
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (0 === g.size || p) return !1;
            let n = !1;
            for (let e of t) {
                if (!!v(e.id)) (p = !0), (n = !0);
            }
            return n;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (0 === g.size || p || !v(t.id)) return !1;
            p = !0;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { user: n } = e;
            if (0 === g.size || p || n.id !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            p = !0;
        },
        GUILD_ROLE_CREATE: T,
        GUILD_ROLE_UPDATE: T,
        GUILD_ROLE_DELETE: T,
        MESSAGE_REMINDER_DUE: function (e) {
            let { savedMessage: t } = e;
            m.add(t.saveData.messageId);
        }
    }));
