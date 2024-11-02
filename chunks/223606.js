e(724458);
var i,
    r = e(442837),
    l = e(570140),
    o = e(673750),
    u = e(786761),
    a = e(592125),
    s = e(375954),
    c = e(709054),
    d = e(539573),
    f = e(825829),
    _ = e(981631);
function p(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
let E = {},
    g = 0,
    m = {},
    h = {},
    I = (t, n) => {
        let e = (0, o.hc)(t),
            i = {
                id: e,
                isBlockedEdit: (0, o.Bz)(t),
                messageData: t,
                errorMessage: (0, d.uF)(t, n)
            };
        (E[e] = i), g++;
    },
    S = (t) => E[t],
    v = (t) => {
        null != E[t] && delete E[t], g++;
    };
function C(t) {
    let { messageData: n, errorResponseBody: e } = t;
    return I(n, e), !0;
}
function T(t) {
    var n;
    let { channelId: e, messages: i } = t,
        r = null === (n = a.Z.getChannel(e)) || void 0 === n ? void 0 : n.getGuildId();
    if (null == r) return !1;
    let l = h[r],
        o = i.reduce((t, n) => {
            var e;
            return n.type === _.uaV.AUTO_MODERATION_ACTION &&
                (null === (e = n.embeds) || void 0 === e
                    ? void 0
                    : e.some((t) => {
                          let { type: n } = t;
                          return n === _.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == t || -1 === c.default.compare(t, n.id)
                    ? n.id
                    : void 0
                : t;
        }, l);
    return null != o && h[r] !== o && ((h[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(t) {
        this.waitFor(s.Z), null != t && ((E = t.automodFailedMessages), (m = t.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: E,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: h
        };
    }
    getMessage(t) {
        var n;
        return null == t ? null : null !== (n = S(t)) && void 0 !== n ? n : null;
    }
    getMessagesVersion() {
        return g;
    }
    getMentionRaidDetected(t) {
        var n;
        return null !== (n = m[t]) && void 0 !== n ? n : null;
    }
    getLastIncidentAlertMessage(t) {
        var n;
        return null !== (n = h[t]) && void 0 !== n ? n : null;
    }
}
p(N, 'displayName', 'GuildAutomodMessageStore'),
    p(N, 'persistKey', 'GuildAutomodMessages'),
    (n.Z = new N(l.Z, {
        CONNECTION_OPEN: function (t) {
            return (E = {}), g++, !0;
        },
        LOAD_MESSAGES_SUCCESS: T,
        LOCAL_MESSAGES_LOADED: T,
        MESSAGE_CREATE: function (t) {
            let { guildId: n, message: e } = t;
            if (null == n || e.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(e);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[n] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: C,
        MESSAGE_EDIT_FAILED_AUTOMOD: C,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
            let { messageId: n } = t;
            return v(n), !0;
        },
        MESSAGE_END_EDIT: function (t) {
            let { response: n } = t;
            if ((null == n ? void 0 : n.body) == null || n.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let e = n.body.id;
            if (null == e) return !1;
            v(e);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
            let { guildId: n, decisionId: e, suspiciousMentionActivityUntil: i } = t;
            return (
                (m[n] = {
                    guildId: n,
                    decisionId: e,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
            let { guildId: n } = t;
            return delete m[n], !0;
        }
    }));
