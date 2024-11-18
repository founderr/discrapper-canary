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
    p = n(981631);
function _(e, t, n) {
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
let E = {},
    g = 0,
    h = {},
    m = {},
    S = (e, t) => {
        let n = (0, o.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        (E[n] = i), g++;
    },
    I = (e) => E[e],
    v = (e) => {
        null != E[e] && delete E[e], g++;
    };
function C(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return S(t, n), !0;
}
function T(e) {
    var t;
    let { channelId: n, messages: i } = e,
        r = null === (t = a.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == r) return !1;
    let l = m[r],
        o = i.reduce((e, t) => {
            var n;
            return t.type === p.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === p.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === c.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, l);
    return null != o && m[r] !== o && ((m[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((E = e.automodFailedMessages), (h = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: E,
            mentionRaidDetectionByGuild: h,
            lastIncidentAlertMessage: m
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = I(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return g;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : null;
    }
}
_(N, 'displayName', 'GuildAutomodMessageStore'),
    _(N, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new N(l.Z, {
        CONNECTION_OPEN: function (e) {
            return (E = {}), g++, !0;
        },
        LOAD_MESSAGES_SUCCESS: T,
        LOCAL_MESSAGES_LOADED: T,
        MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== p.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((m[t] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: C,
        MESSAGE_EDIT_FAILED_AUTOMOD: C,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return v(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if ((null == t ? void 0 : t.body) == null || t.body.code === p.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = t.body.id;
            if (null == n) return !1;
            v(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
            return (
                (h[t] = {
                    guildId: t,
                    decisionId: n,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete h[t], !0;
        }
    }));
