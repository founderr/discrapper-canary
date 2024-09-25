n.d(t, {
    FL: function () {
        return G;
    },
    Mq: function () {
        return U;
    },
    NK: function () {
        return F;
    },
    OP: function () {
        return S;
    },
    Sw: function () {
        return V;
    },
    ZP: function () {
        return B;
    },
    ge: function () {
        return Z;
    },
    hU: function () {
        return w;
    },
    nY: function () {
        return g;
    },
    nj: function () {
        return H;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(462382),
    o = n(259346),
    s = n(436817),
    l = n(189722),
    u = n(721355),
    c = n(999923),
    d = n(729917),
    _ = n(932019),
    E = n(442837),
    f = n(592125),
    h = n(496675);
n(594174);
var p = n(313889),
    m = n(177862),
    I = n(981631),
    T = n(689938);
function g(e) {
    return e.type === I.uaV.AUTO_MODERATION_ACTION;
}
function S(e) {
    var t;
    return null === (t = e.embeds) || void 0 === t
        ? void 0
        : t.some((e) => {
              let { type: t } = e;
              return t === I.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function A(e) {
    return e.type === I.hBH.AUTO_MODERATION_NOTIFICATION;
}
function v(e) {
    return e.type === I.hBH.AUTO_MODERATION_MESSAGE;
}
function N(e, t) {
    var n, r, i, a, o;
    let [s] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    return null == s
        ? void 0
        : v(s)
          ? null == s
              ? void 0
              : null === (i = s.fields) || void 0 === i
                ? void 0
                : null ===
                        (r = i.find((e) => {
                            let { rawName: n } = e;
                            return n === t;
                        })) || void 0 === r
                  ? void 0
                  : r.rawValue
          : A(s)
            ? null == s
                ? void 0
                : null === (o = s.fields) || void 0 === o
                  ? void 0
                  : null ===
                          (a = o.find((e) => {
                              let { rawName: n } = e;
                              return n === t;
                          })) || void 0 === a
                    ? void 0
                    : a.rawValue
            : void 0;
}
function O(e) {
    var t, n;
    let [r] = null !== (t = e.embeds) && void 0 !== t ? t : [];
    return null !== (n = null == r ? void 0 : r.rawDescription) && void 0 !== n ? n : '';
}
function R(e) {
    let t = N(e, l.G.DECISION_OUTCOME);
    if (null != t) return t;
}
function C(e) {
    let t = N(e, l.G.QUARANTINE_USER);
    if (null != t) return t;
}
function y(e) {
    let t = N(e, l.G.QUARANTINE_USER_ACTION);
    if (null != t) return t;
}
function b(e) {
    let t = N(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
    if (null != t) return t;
}
function L(e) {
    let t = N(e, l.G.QUARANTINE_EVENT);
    if (null != t) return t;
}
function D(e, t, n) {
    switch (t) {
        case d.z.BLOCK_PROFILE_UPDATE:
            return r(e);
        case d.z.QUARANTINE_USER:
            return o(n);
        case d.z.BLOCK_GUEST_JOIN:
            return i();
    }
    function r(e) {
        switch (e) {
            case a.J.NICKNAME_UPDATE:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
            case a.J.NICKNAME_RESET:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
            default:
                return;
        }
    }
    function i() {
        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN;
    }
    function o(e) {
        switch (e) {
            case c.B.MESSAGE_SEND:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
            case c.B.GUILD_JOIN:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
            case c.B.USERNAME_UPDATE:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
            case c.B.CLAN_TAG_UPDATE:
                return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
            default:
                return;
        }
    }
}
function M(e, t) {
    var n;
    return t ? (null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : T.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : T.Z.Messages.NO_ACCESS;
}
function P(e, t, n) {
    let r = N(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
    return null == r
        ? null
        : ('blocked' === r ? T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
              channelName: t,
              channelHook: n
          });
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.VqG,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0,
        a = b(e),
        u = y(e),
        c = L(e),
        d = C(e),
        _ = R(e),
        E = N(e, l.G.INTERACTION_CALLBACK_TYPE),
        f = N(e, l.G.APPLICATION_NAME);
    if (null != d) {
        let e = D(a, u, c);
        if (null != e) return e;
    }
    let p = h.Z.can(I.Plq.VIEW_CHANNEL, t),
        m = M(t, p),
        g = null != t && p ? n : I.VqG,
        S = P(e, m, n);
    if (null != S) return S;
    if (null != f)
        return E === s.y.MODAL && null != i
            ? _ !== o.P.BLOCKED
                ? T.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_FLAGGED.format({
                      applicationName: f,
                      interactionUserHook: i,
                      integrationOwnerHook: r
                  })
                : T.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_BLOCKED.format({
                      applicationName: f,
                      interactionUserHook: i,
                      integrationOwnerHook: r
                  })
            : _ !== o.P.BLOCKED
              ? T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
                    applicationName: f,
                    channelName: m,
                    channelHook: g,
                    integrationOwnerHook: r
                })
              : T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
                    applicationName: f,
                    channelName: m,
                    channelHook: g,
                    integrationOwnerHook: r
                });
    return _ !== o.P.BLOCKED
        ? T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
              channelName: m,
              channelHook: g
          })
        : T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
              channelName: m,
              channelHook: g
          });
}
function w(e) {
    switch (e) {
        case _.i.NICKNAME:
            return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
        case _.i.USERNAME:
            return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
        case _.i.GLOBAL_NAME:
            return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
        case _.i.CLAN_TAG:
            return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
        default:
            return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    }
}
function x(e) {
    return null == e ? null : e;
}
function G(e) {
    var t;
    let n = N(e, u.D.NOTIFICATION_TYPE),
        r = N(e, u.D.JOIN_ATTEMPTS),
        i = N(e, u.D.RAID_DATETIME),
        a = N(e, u.D.DMS_SENT),
        o = N(e, u.D.RAID_TYPE),
        s = N(e, u.D.RESOLVED_REASON),
        l = N(e, u.D.DECISION_ID),
        c = N(e, u.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (t = x(n)) && void 0 !== t ? t : void 0,
        joinAttempts: null != r ? parseInt(r) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != a ? parseInt(a) : void 0,
        raidType: null != o ? o : void 0,
        resolvedReason: null != s ? s : void 0,
        decisionId: null != l ? l : void 0,
        suspiciousMentionActivityUntil: null != c ? new Date(c) : void 0
    };
}
function k(e) {
    let t = N(e, l.G.CHANNEL_ID),
        n = N(e, l.G.ALERT_ACTIONS_EXECUTION),
        r = (0, p.t)(n);
    return {
        content: O(e),
        ruleName: N(e, l.G.RULE_NAME),
        decisionId: N(e, l.G.DECISION_ID),
        keyword: N(e, l.G.KEYWORD),
        keywordMatchedContent: N(e, l.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: N(e, l.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: N(e, l.G.TIMEOUT_DURATION),
        quarantineType: N(e, l.G.QUARANTINE_USER),
        quarantineAction: N(e, l.G.QUARANTINE_USER_ACTION),
        decisionReason: N(e, l.G.DECISION_REASON),
        applicationName: N(e, l.G.APPLICATION_NAME),
        interactionUserId: N(e, l.G.INTERACTION_USER_ID),
        interactionCallbackType: N(e, l.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: f.Z.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != r ? r : void 0
    };
}
function B(e) {
    let t = i.useMemo(() => k(e), [e]),
        n = (0, E.e7)([f.Z], () => f.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
    return {
        ...t,
        embedChannel: n
    };
}
function F(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = k(e);
    return null != t ? t : null;
}
function Z(e) {
    if (null == e) return T.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
    switch (e) {
        case m.$l.LEGITIMATE_ACTIVITY:
            return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
        case m.$l.DM_SPAM:
            return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
        case m.$l.JOIN_RAID:
            return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
        default:
            return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER;
    }
}
function V(e) {
    return N(e, u.D.ACTION_BY_USER_ID);
}
let H = void 0;
