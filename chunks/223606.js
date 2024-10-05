n(724458);
var r,
    i = n(442837),
    o = n(570140),
    u = n(673750),
    l = n(786761),
    s = n(592125),
    a = n(375954),
    c = n(709054),
    d = n(539573),
    _ = n(825829),
    E = n(981631);
function f(e, t, n) {
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
let I = {},
    S = 0,
    T = {},
    C = {},
    p = (e, t) => {
        let n = (0, u.hc)(e),
            r = {
                id: n,
                isBlockedEdit: (0, u.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        (I[n] = r), S++;
    },
    N = (e) => I[e],
    O = (e) => {
        null != I[e] && delete I[e], S++;
    };
function g(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return p(t, n), !0;
}
function m(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null === (t = s.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let o = C[i],
        u = r.reduce((e, t) => {
            var n;
            return t.type === E.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === E.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, o);
    return null != u && C[i] !== u && ((C[i] = u), !0);
}
class R extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((I = e.automodFailedMessages), (T = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: T,
            lastIncidentAlertMessage: C
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = N(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return S;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : null;
    }
}
f(R, 'displayName', 'GuildAutomodMessageStore'),
    f(R, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new R(o.Z, {
        CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
        },
        LOAD_MESSAGES_SUCCESS: m,
        LOCAL_MESSAGES_LOADED: m,
        MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== E.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, l.e5)(n);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((C[t] = r.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: g,
        MESSAGE_EDIT_FAILED_AUTOMOD: g,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return O(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if ((null == t ? void 0 : t.body) == null || t.body.code === E.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = t.body.id;
            if (null == n) return !1;
            O(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
            return (
                (T[t] = {
                    guildId: t,
                    decisionId: n,
                    suspiciousMentionActivityUntil: r
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete T[t], !0;
        }
    }));
