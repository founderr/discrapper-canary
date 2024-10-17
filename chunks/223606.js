t(724458);
var r,
    i = t(442837),
    l = t(570140),
    o = t(673750),
    u = t(786761),
    s = t(592125),
    a = t(375954),
    c = t(709054),
    d = t(539573),
    _ = t(825829),
    E = t(981631);
function f(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let I = {},
    S = 0,
    p = {},
    T = {},
    C = (e, n) => {
        let t = (0, o.hc)(e),
            r = {
                id: t,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, n)
            };
        (I[t] = r), S++;
    },
    g = (e) => I[e],
    N = (e) => {
        null != I[e] && delete I[e], S++;
    };
function m(e) {
    let { messageData: n, errorResponseBody: t } = e;
    return C(n, t), !0;
}
function A(e) {
    var n;
    let { channelId: t, messages: r } = e,
        i = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
    if (null == i) return !1;
    let l = T[i],
        o = r.reduce((e, n) => {
            var t;
            return n.type === E.uaV.AUTO_MODERATION_ACTION &&
                (null === (t = n.embeds) || void 0 === t
                    ? void 0
                    : t.some((e) => {
                          let { type: n } = e;
                          return n === E.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, n.id)
                    ? n.id
                    : void 0
                : e;
        }, l);
    return null != o && T[i] !== o && ((T[i] = o), !0);
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((I = e.automodFailedMessages), (p = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: p,
            lastIncidentAlertMessage: T
        };
    }
    getMessage(e) {
        var n;
        return null == e ? null : null !== (n = g(e)) && void 0 !== n ? n : null;
    }
    getMessagesVersion() {
        return S;
    }
    getMentionRaidDetected(e) {
        var n;
        return null !== (n = p[e]) && void 0 !== n ? n : null;
    }
    getLastIncidentAlertMessage(e) {
        var n;
        return null !== (n = T[e]) && void 0 !== n ? n : null;
    }
}
f(h, 'displayName', 'GuildAutomodMessageStore'),
    f(h, 'persistKey', 'GuildAutomodMessages'),
    (n.Z = new h(l.Z, {
        CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
        },
        LOAD_MESSAGES_SUCCESS: A,
        LOCAL_MESSAGES_LOADED: A,
        MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== E.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, u.e5)(t);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((T[n] = r.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: m,
        MESSAGE_EDIT_FAILED_AUTOMOD: m,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return N(n), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if ((null == n ? void 0 : n.body) == null || n.body.code === E.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let t = n.body.id;
            if (null == t) return !1;
            N(t);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: n, decisionId: t, suspiciousMentionActivityUntil: r } = e;
            return (
                (p[n] = {
                    guildId: n,
                    decisionId: t,
                    suspiciousMentionActivityUntil: r
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete p[n], !0;
        }
    }));
