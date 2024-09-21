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
    _ = n(686478);
let E = new l.h(
        (e) => {
            let { saveData: t } = e;
            return [_._l.ALL, null != t.dueAt ? _._l.REMINDER : _._l.BOOKMARK];
        },
        (e) => {
            var t, n, r;
            let { saveData: i } = e;
            return null !== (r = null === (n = (t = i).dueAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 10000000000000 - t.savedAt.getTime();
        }
    ),
    f = !0,
    h = new Set(),
    p = new Map();
function I(e) {
    let t = p.get(e);
    return null != t && t.size > 0;
}
function m(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function T(e) {
    var t;
    E.set(m(e.saveData), e);
    let n = e.saveData.messageId,
        r = e.saveData.channelId,
        i = null !== (t = p.get(r)) && void 0 !== t ? t : new Set();
    i.add(n), p.set(r, i), null == e.message && h.add(n);
}
function S(e) {
    let { messageId: t, channelId: n } = e,
        r = m({
            messageId: t,
            channelId: n
        }),
        i = E.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), E.set(r, a), !0;
}
function g() {
    if (0 === h.size || f) return !1;
    f = !0;
}
class A extends (r = o.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return E.values(_._l.ALL);
    }
    getSavedMessage(e, t) {
        return E.get(
            m({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return E.values(_._l.BOOKMARK);
    }
    getMessageReminders() {
        return E.values(_._l.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return this.getMessageReminders().filter((e) => {
            let { saveData: t } = e;
            return null == t.dueAt || new Date() > t.dueAt;
        }).length;
    }
    getSavedMessageCount() {
        return E.size();
    }
    getIsStale() {
        return f;
    }
    isMessageBookmarked(e, t) {
        let n = E.get(
            m({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = E.get(
            m({
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
}
(s = 'SavedMessagesStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new A(u.Z, {
        POST_CONNECTION_OPEN: function () {
            f = !0;
        },
        LOGOUT: function () {
            (f = !0), E.clear(), p.clear(), h.clear();
        },
        SAVED_MESSAGES_UPDATE: function (e) {
            let { savedMessages: t } = e;
            for (let e of ((f = !1), E.clear(), p.clear(), h.clear(), t)) T(e);
        },
        SAVED_MESSAGE_CREATE: function (e) {
            let { savedMessage: t } = e;
            T(t);
        },
        SAVED_MESSAGE_DELETE: function (e) {
            let { savedMessageData: t } = e;
            return (function (e) {
                var t;
                let n = m(e),
                    r = E.get(n);
                if (null == r) return !1;
                E.delete(n);
                let i = e.messageId;
                null === (t = p.get(r.saveData.channelId)) || void 0 === t || t.delete(i), h.delete(i);
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
            let n = m({
                    messageId: t.id,
                    channelId: t.channel_id
                }),
                r = E.get(n);
            if ((null == r ? void 0 : r.message) == null) return !1;
            let i = { ...r };
            (i.message = (0, c.wi)(r.message, t)), E.set(n, i);
        },
        GUILD_CREATE: g,
        GUILD_UPDATE: g,
        GUILD_DELETE: g,
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (0 === h.size || f || !I(t.id)) return !1;
            f = !0;
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (0 === h.size || f) return !1;
            let n = !1;
            for (let e of t) {
                if (!!I(e.id)) (f = !0), (n = !0);
            }
            return n;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (0 === h.size || f || !I(t.id)) return !1;
            f = !0;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { user: n } = e;
            if (0 === h.size || f || n.id !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            f = !0;
        },
        GUILD_ROLE_CREATE: g,
        GUILD_ROLE_UPDATE: g,
        GUILD_ROLE_DELETE: g
    }));
