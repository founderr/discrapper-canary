n(724458);
var i,
    r = n(442837),
    l = n(570140),
    o = n(673750),
    u = n(786761),
    a = n(592125),
    s = n(375954),
    c = n(709054),
    d = n(539573),
    f = n(825829),
    _ = n(981631);
function E(e, t, n) {
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
    g = {},
    h = {},
    I = (e, t) => {
        let n = (0, o.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        (p[n] = i), m++;
    },
    S = (e) => p[e],
    C = (e) => {
        null != p[e] && delete p[e], m++;
    };
function T(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return I(t, n), !0;
}
function v(e) {
    var t;
    let { channelId: n, messages: i } = e,
        r = null === (t = a.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == r) return !1;
    let l = h[r],
        o = i.reduce((e, t) => {
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
        }, l);
    return null != o && h[r] !== o && ((h[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((p = e.automodFailedMessages), (g = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: p,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: h
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
        return null !== (t = g[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : null;
    }
}
E(N, 'displayName', 'GuildAutomodMessageStore'),
    E(N, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new N(l.Z, {
        CONNECTION_OPEN: function (e) {
            return (p = {}), m++, !0;
        },
        LOAD_MESSAGES_SUCCESS: v,
        LOCAL_MESSAGES_LOADED: v,
        MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[t] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: T,
        MESSAGE_EDIT_FAILED_AUTOMOD: T,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return C(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if ((null == t ? void 0 : t.body) == null || t.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = t.body.id;
            if (null == n) return !1;
            C(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
            return (
                (g[t] = {
                    guildId: t,
                    decisionId: n,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete g[t], !0;
        }
    }));
