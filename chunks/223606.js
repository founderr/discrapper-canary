n(724458);
var i,
    r = n(442837),
    o = n(570140),
    l = n(673750),
    u = n(786761),
    a = n(592125),
    s = n(375954),
    c = n(709054),
    d = n(539573),
    f = n(825829),
    _ = n(981631);
function p(e, t, n) {
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
let g = {},
    E = 0,
    m = {},
    I = {},
    h = (e, t) => {
        let n = (0, l.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, l.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        (g[n] = i), E++;
    },
    C = (e) => g[e],
    S = (e) => {
        null != g[e] && delete g[e], E++;
    };
function T(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return h(t, n), !0;
}
function v(e) {
    var t;
    let { channelId: n, messages: i } = e,
        r = null === (t = a.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == r) return !1;
    let o = I[r],
        l = i.reduce((e, t) => {
            var n;
            return t.type === _.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === _.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, o);
    return null != l && I[r] !== l && ((I[r] = l), !0);
}
class b extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((g = e.automodFailedMessages), (m = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: g,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: I
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = C(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return E;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : null;
    }
}
p(b, 'displayName', 'GuildAutomodMessageStore'),
    p(b, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new b(o.Z, {
        CONNECTION_OPEN: function (e) {
            return (g = {}), E++, !0;
        },
        LOAD_MESSAGES_SUCCESS: v,
        LOCAL_MESSAGES_LOADED: v,
        MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((I[t] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: T,
        MESSAGE_EDIT_FAILED_AUTOMOD: T,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return S(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if ((null == t ? void 0 : t.body) == null || t.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = t.body.id;
            if (null == n) return !1;
            S(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
            return (
                (m[t] = {
                    guildId: t,
                    decisionId: n,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete m[t], !0;
        }
    }));
