var r,
    i = n(47120);
var a = n(442837),
    o = n(759174),
    s = n(570140),
    l = n(786761),
    u = n(594174),
    c = n(686478);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    var t, n;
    let r = 10000000000000;
    return null !== (n = null === (t = e.dueAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : r - e.savedAt.getTime();
}
let E = new o.h(
        (e) => {
            let { saveData: t } = e;
            return [c._l.ALL, null != t.dueAt ? c._l.REMINDER : c._l.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return _(t);
        }
    ),
    f = !0,
    h = new Set(),
    p = new Map();
function m(e) {
    let t = p.get(e);
    return null != t && t.size > 0;
}
function I(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function T(e) {
    var t;
    E.set(I(e.saveData), e);
    let n = e.saveData.messageId,
        r = e.saveData.channelId,
        i = null !== (t = p.get(r)) && void 0 !== t ? t : new Set();
    i.add(n), p.set(r, i), null == e.message && h.add(n);
}
function g(e) {
    var t;
    let n = I(e),
        r = E.get(n);
    if (null == r) return !1;
    E.delete(n);
    let i = e.messageId;
    null === (t = p.get(r.saveData.channelId)) || void 0 === t || t.delete(i), h.delete(i);
}
function S() {
    f = !0;
}
function A() {
    (f = !0), E.clear(), p.clear(), h.clear();
}
function v(e) {
    let { savedMessages: t } = e;
    for (let e of ((f = !1), E.clear(), p.clear(), h.clear(), t)) T(e);
}
function N(e) {
    let { savedMessage: t } = e;
    T(t);
}
function O(e) {
    let { savedMessageData: t } = e;
    return g(t);
}
function R(e) {
    let { messageId: t, channelId: n } = e,
        r = I({
            messageId: t,
            channelId: n
        }),
        i = E.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), E.set(r, a), !0;
}
function C(e) {
    let { id: t, channelId: n } = e;
    return R({
        messageId: t,
        channelId: n
    });
}
function y(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        R({
            messageId: e,
            channelId: n
        });
}
function b(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = I({
            messageId: t.id,
            channelId: t.channel_id
        }),
        r = E.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = { ...r };
    (i.message = (0, l.wi)(r.message, t)), E.set(n, i);
}
function L() {
    if (0 === h.size || f) return !1;
    f = !0;
}
function D(e) {
    let { channel: t } = e;
    if (0 === h.size || f || !m(t.id)) return !1;
    f = !0;
}
function M(e) {
    let { channels: t } = e;
    if (0 === h.size || f) return !1;
    let n = !1;
    for (let e of t) {
        if (!!m(e.id)) (f = !0), (n = !0);
    }
    return n;
}
function P(e) {
    let { channel: t } = e;
    if (0 === h.size || f || !m(t.id)) return !1;
    f = !0;
}
function U(e) {
    var t;
    let { user: n } = e;
    if (0 === h.size || f || n.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    f = !0;
}
class w extends (r = a.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return E.values(c._l.ALL);
    }
    getSavedMessage(e, t) {
        return E.get(
            I({
                channelId: e,
                messageId: t
            })
        );
    }
    getMessageBookmarks() {
        return E.values(c._l.BOOKMARK);
    }
    getMessageReminders() {
        return E.values(c._l.REMINDER);
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
            I({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = E.get(
            I({
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
d(w, 'displayName', 'SavedMessagesStore'),
    (t.Z = new w(s.Z, {
        POST_CONNECTION_OPEN: S,
        LOGOUT: A,
        SAVED_MESSAGES_UPDATE: v,
        SAVED_MESSAGE_CREATE: N,
        SAVED_MESSAGE_DELETE: O,
        MESSAGE_DELETE: C,
        MESSAGE_DELETE_BULK: y,
        MESSAGE_UPDATE: b,
        GUILD_CREATE: L,
        GUILD_UPDATE: L,
        GUILD_DELETE: L,
        CHANNEL_CREATE: D,
        CHANNEL_UPDATES: M,
        CHANNEL_DELETE: P,
        GUILD_MEMBER_UPDATE: U,
        GUILD_ROLE_CREATE: L,
        GUILD_ROLE_UPDATE: L,
        GUILD_ROLE_DELETE: L
    }));
