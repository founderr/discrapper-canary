t(724458);
var i,
    r = t(442837),
    l = t(570140),
    o = t(673750),
    u = t(786761),
    a = t(592125),
    s = t(375954),
    c = t(709054),
    d = t(539573),
    f = t(825829),
    p = t(981631);
function _(e, n, t) {
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
let E = {},
    g = 0,
    m = {},
    h = {},
    I = (e, n) => {
        let t = (0, o.hc)(e),
            i = {
                id: t,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, n)
            };
        (E[t] = i), g++;
    },
    S = (e) => E[e],
    v = (e) => {
        null != E[e] && delete E[e], g++;
    };
function C(e) {
    let { messageData: n, errorResponseBody: t } = e;
    return I(n, t), !0;
}
function T(e) {
    var n;
    let { channelId: t, messages: i } = e,
        r = null === (n = a.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId();
    if (null == r) return !1;
    let l = h[r],
        o = i.reduce((e, n) => {
            var t;
            return n.type === p.uaV.AUTO_MODERATION_ACTION &&
                (null === (t = n.embeds) || void 0 === t
                    ? void 0
                    : t.some((e) => {
                          let { type: n } = e;
                          return n === p.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, n.id)
                    ? n.id
                    : void 0
                : e;
        }, l);
    return null != o && h[r] !== o && ((h[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((E = e.automodFailedMessages), (m = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: E,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: h
        };
    }
    getMessage(e) {
        var n;
        return null == e ? null : null !== (n = S(e)) && void 0 !== n ? n : null;
    }
    getMessagesVersion() {
        return g;
    }
    getMentionRaidDetected(e) {
        var n;
        return null !== (n = m[e]) && void 0 !== n ? n : null;
    }
    getLastIncidentAlertMessage(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : null;
    }
}
_(N, 'displayName', 'GuildAutomodMessageStore'),
    _(N, 'persistKey', 'GuildAutomodMessages'),
    (n.Z = new N(l.Z, {
        CONNECTION_OPEN: function (e) {
            return (E = {}), g++, !0;
        },
        LOAD_MESSAGES_SUCCESS: T,
        LOCAL_MESSAGES_LOADED: T,
        MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== p.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(t);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[n] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: C,
        MESSAGE_EDIT_FAILED_AUTOMOD: C,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return v(n), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if ((null == n ? void 0 : n.body) == null || n.body.code === p.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let t = n.body.id;
            if (null == t) return !1;
            v(t);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: n, decisionId: t, suspiciousMentionActivityUntil: i } = e;
            return (
                (m[n] = {
                    guildId: n,
                    decisionId: t,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete m[n], !0;
        }
    }));
