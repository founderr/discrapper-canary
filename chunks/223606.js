var r,
    i = n(724458);
var a = n(442837),
    o = n(570140),
    s = n(673750),
    l = n(786761),
    u = n(592125),
    c = n(375954),
    d = n(709054),
    _ = n(539573),
    E = n(825829),
    f = n(981631);
function h(e, t, n) {
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
let p = {},
    m = 0,
    I = {},
    T = {},
    g = (e, t) => {
        let n = (0, s.hc)(e),
            r = {
                id: n,
                isBlockedEdit: (0, s.Bz)(e),
                messageData: e,
                errorMessage: (0, _.uF)(e, t)
            };
        (p[n] = r), m++;
    },
    S = (e) => p[e],
    A = (e) => {
        null != p[e] && delete p[e], m++;
    };
function v(e) {
    return (p = {}), m++, !0;
}
function N(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return g(t, n), !0;
}
function O(e) {
    let { messageId: t } = e;
    return A(t), !0;
}
function R(e) {
    let { response: t } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    A(n);
}
function C(e) {
    let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
    return (
        (I[t] = {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: r
        }),
        !0
    );
}
function y(e) {
    let { guildId: t } = e;
    return delete I[t], !0;
}
function b(e) {
    let { guildId: t, message: n } = e;
    if (null == t || n.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
    let r = (0, l.e5)(n);
    return !!(0, E.nY)(r) && !!(0, E.OP)(r) && ((T[t] = r.id), !0);
}
function L(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null === (t = u.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let a = T[i],
        o = r.reduce((e, t) => {
            var n;
            return t.type === f.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === d.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, a);
    return null != o && T[i] !== o && ((T[i] = o), !0);
}
class D extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(c.Z), null != e && ((p = e.automodFailedMessages), (I = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: p,
            mentionRaidDetectionByGuild: I,
            lastIncidentAlertMessage: T
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = S(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return m;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : null;
    }
}
h(D, 'displayName', 'GuildAutomodMessageStore'),
    h(D, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new D(o.Z, {
        CONNECTION_OPEN: v,
        LOAD_MESSAGES_SUCCESS: L,
        LOCAL_MESSAGES_LOADED: L,
        MESSAGE_CREATE: b,
        MESSAGE_SEND_FAILED_AUTOMOD: N,
        MESSAGE_EDIT_FAILED_AUTOMOD: N,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: O,
        MESSAGE_END_EDIT: R,
        AUTO_MODERATION_MENTION_RAID_DETECTION: C,
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: y
    }));
