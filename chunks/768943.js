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
    h = 0,
    p = new Set(),
    m = new Set(),
    I = new Map();
function T(e) {
    let t = I.get(e);
    return null != t && t.size > 0;
}
function g(e) {
    let { channelId: t, messageId: n } = e;
    return ''.concat(t, '-').concat(n);
}
function S(e) {
    var t;
    let n = g(e.saveData);
    null == E.get(n) && (h = Date.now()), E.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null !== (t = I.get(i)) && void 0 !== t ? t : new Set();
    a.add(r), I.set(i, a), null == e.message && m.add(r), null != e.saveData.dueAt && new Date() > e.saveData.dueAt && p.add(r);
}
function A(e) {
    var t;
    let n = g(e),
        r = E.get(n);
    if (null == r) return !1;
    E.delete(n);
    let i = e.messageId;
    null === (t = I.get(r.saveData.channelId)) || void 0 === t || t.delete(i), m.delete(i), p.delete(i), (h = Date.now());
}
function v() {
    f = !0;
}
function N() {
    (f = !0), E.clear(), I.clear(), m.clear();
}
function O(e) {
    let { savedMessages: t } = e;
    for (let e of ((f = !1), E.clear(), I.clear(), m.clear(), t)) S(e);
}
function R(e) {
    let { savedMessage: t } = e;
    S(t);
}
function C(e) {
    let { savedMessageData: t } = e;
    return A(t);
}
function y(e) {
    let { messageId: t, channelId: n } = e,
        r = g({
            messageId: t,
            channelId: n
        }),
        i = E.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = { ...i };
    return (a.message = null), E.set(r, a), !0;
}
function b(e) {
    let { id: t, channelId: n } = e;
    return y({
        messageId: t,
        channelId: n
    });
}
function L(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        y({
            messageId: e,
            channelId: n
        });
}
function D(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = g({
            messageId: t.id,
            channelId: t.channel_id
        }),
        r = E.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = { ...r };
    (i.message = (0, l.wi)(r.message, t)), E.set(n, i);
}
function M() {
    if (0 === m.size || f) return !1;
    f = !0;
}
function P(e) {
    let { channel: t } = e;
    if (0 === m.size || f || !T(t.id)) return !1;
    f = !0;
}
function U(e) {
    let { channels: t } = e;
    if (0 === m.size || f) return !1;
    let n = !1;
    for (let e of t) {
        if (!!T(e.id)) (f = !0), (n = !0);
    }
    return n;
}
function w(e) {
    let { channel: t } = e;
    if (0 === m.size || f || !T(t.id)) return !1;
    f = !0;
}
function x(e) {
    var t;
    let { user: n } = e;
    if (0 === m.size || f || n.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    f = !0;
}
function G(e) {
    let { savedMessage: t } = e;
    p.add(t.saveData.messageId);
}
class k extends (r = a.ZP.Store) {
    initialize() {}
    getSavedMessages() {
        return E.values(c._l.ALL);
    }
    getSavedMessage(e, t) {
        return E.get(
            g({
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
        return p.size;
    }
    hasOverdueReminder() {
        return p.size > 0;
    }
    getSavedMessageCount() {
        return E.size();
    }
    getIsStale() {
        return f;
    }
    getLastChanged() {
        return h;
    }
    isMessageBookmarked(e, t) {
        let n = E.get(
            g({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = E.get(
            g({
                channelId: e,
                messageId: t
            })
        );
        return null != n && null != n.saveData.dueAt;
    }
}
d(k, 'displayName', 'SavedMessagesStore'),
    (t.Z = new k(s.Z, {
        POST_CONNECTION_OPEN: v,
        LOGOUT: N,
        SAVED_MESSAGES_UPDATE: O,
        SAVED_MESSAGE_CREATE: R,
        SAVED_MESSAGE_DELETE: C,
        MESSAGE_DELETE: b,
        MESSAGE_DELETE_BULK: L,
        MESSAGE_UPDATE: D,
        GUILD_CREATE: M,
        GUILD_UPDATE: M,
        GUILD_DELETE: M,
        CHANNEL_CREATE: P,
        CHANNEL_UPDATES: U,
        CHANNEL_DELETE: w,
        GUILD_MEMBER_UPDATE: x,
        GUILD_ROLE_CREATE: M,
        GUILD_ROLE_UPDATE: M,
        GUILD_ROLE_DELETE: M,
        MESSAGE_REMINDER_DUE: G
    }));
