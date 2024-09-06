t(724458);
var r,
    i = t(442837),
    o = t(570140),
    l = t(673750),
    u = t(786761),
    s = t(592125),
    a = t(375954),
    c = t(709054),
    d = t(539573),
    _ = t(825829),
    f = t(981631);
function E(e, n, t) {
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
    g = {},
    T = {},
    p = (e, n) => {
        let t = (0, l.hc)(e),
            r = {
                id: t,
                isBlockedEdit: (0, l.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, n)
            };
        (I[t] = r), S++;
    },
    C = (e) => I[e],
    m = (e) => {
        null != I[e] && delete I[e], S++;
    };
function A(e) {
    let { messageData: n, errorResponseBody: t } = e;
    return p(n, t), !0;
}
function N(e) {
    var n;
    let { channelId: t, messages: r } = e,
        i = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
    if (null == i) return !1;
    let o = T[i],
        l = r.reduce((e, n) => {
            var t;
            return n.type === f.uaV.AUTO_MODERATION_ACTION &&
                (null === (t = n.embeds) || void 0 === t
                    ? void 0
                    : t.some((e) => {
                          let { type: n } = e;
                          return n === f.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, n.id)
                    ? n.id
                    : void 0
                : e;
        }, o);
    return null != l && T[i] !== l && ((T[i] = l), !0);
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((I = e.automodFailedMessages), (g = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: T
        };
    }
    getMessage(e) {
        var n;
        return null == e ? null : null !== (n = C(e)) && void 0 !== n ? n : null;
    }
    getMessagesVersion() {
        return S;
    }
    getMentionRaidDetected(e) {
        var n;
        return null !== (n = g[e]) && void 0 !== n ? n : null;
    }
    getLastIncidentAlertMessage(e) {
        var n;
        return null !== (n = T[e]) && void 0 !== n ? n : null;
    }
}
E(h, 'displayName', 'GuildAutomodMessageStore'),
    E(h, 'persistKey', 'GuildAutomodMessages'),
    (n.Z = new h(o.Z, {
        CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
        },
        LOAD_MESSAGES_SUCCESS: N,
        LOCAL_MESSAGES_LOADED: N,
        MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, u.e5)(t);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((T[n] = r.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: A,
        MESSAGE_EDIT_FAILED_AUTOMOD: A,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return m(n), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if ((null == n ? void 0 : n.body) == null || n.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let t = n.body.id;
            if (null == t) return !1;
            m(t);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: n, decisionId: t, suspiciousMentionActivityUntil: r } = e;
            return (
                (g[n] = {
                    guildId: n,
                    decisionId: t,
                    suspiciousMentionActivityUntil: r
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete g[n], !0;
        }
    }));
