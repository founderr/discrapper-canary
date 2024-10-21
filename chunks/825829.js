n.d(t, {
    FL: function () {
        return R;
    },
    Mq: function () {
        return A;
    },
    NK: function () {
        return C;
    },
    OP: function () {
        return S;
    },
    Sw: function () {
        return D;
    },
    ZP: function () {
        return v;
    },
    ge: function () {
        return L;
    },
    hU: function () {
        return N;
    },
    nY: function () {
        return T;
    },
    nj: function () {
        return y;
    }
}),
    n(47120);
var r = n(192379),
    i = n(462382),
    a = n(259346),
    s = n(436817),
    o = n(189722),
    l = n(721355),
    u = n(999923),
    c = n(729917),
    d = n(932019),
    _ = n(442837),
    E = n(592125),
    f = n(496675);
n(594174);
var h = n(313889),
    p = n(177862),
    I = n(981631),
    m = n(689938);
function T(e) {
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
function g(e, t) {
    var n, r, i, a, s;
    let [o] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    if (null != o) {
        if (o.type === I.hBH.AUTO_MODERATION_MESSAGE)
            return null == o
                ? void 0
                : null === (i = o.fields) || void 0 === i
                  ? void 0
                  : null ===
                          (r = i.find((e) => {
                              let { rawName: n } = e;
                              return n === t;
                          })) || void 0 === r
                    ? void 0
                    : r.rawValue;
        if (o.type === I.hBH.AUTO_MODERATION_NOTIFICATION)
            return null == o
                ? void 0
                : null === (s = o.fields) || void 0 === s
                  ? void 0
                  : null ===
                          (a = s.find((e) => {
                              let { rawName: n } = e;
                              return n === t;
                          })) || void 0 === a
                    ? void 0
                    : a.rawValue;
    }
}
function A(e, t) {
    var n, r;
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.VqG,
        d = arguments.length > 3 ? arguments[3] : void 0,
        _ = arguments.length > 4 ? arguments[4] : void 0,
        E = (function (e) {
            let t = g(e, o.G.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        h = (function (e) {
            let t = g(e, o.G.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        p = (function (e) {
            let t = g(e, o.G.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        T = (function (e) {
            let t = g(e, o.G.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        S = (function (e) {
            let t = g(e, o.G.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        A = g(e, o.G.INTERACTION_CALLBACK_TYPE),
        N = g(e, o.G.APPLICATION_NAME);
    if (null != T) {
        let e = (function (e, t, n) {
            switch (t) {
                case c.z.BLOCK_PROFILE_UPDATE:
                    return (function (e) {
                        switch (e) {
                            case i.J.NICKNAME_UPDATE:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                            case i.J.NICKNAME_RESET:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                            default:
                                return;
                        }
                    })(e);
                case c.z.QUARANTINE_USER:
                    return (function (e) {
                        switch (e) {
                            case u.B.MESSAGE_SEND:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                            case u.B.GUILD_JOIN:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                            case u.B.USERNAME_UPDATE:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                            case u.B.CLAN_TAG_UPDATE:
                                return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
                            default:
                                return;
                        }
                    })(n);
                case c.z.BLOCK_GUEST_JOIN:
                    return (function () {
                        return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN;
                    })();
            }
        })(E, h, p);
        if (null != e) return e;
    }
    let R = f.Z.can(I.Plq.VIEW_CHANNEL, t);
    let O = ((n = t), R ? (null !== (r = null == n ? void 0 : n.name) && void 0 !== r ? r : m.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : m.Z.Messages.NO_ACCESS),
        v = null != t && R ? l : I.VqG,
        C = (function (e, t, n) {
            let r = g(e, o.G.VOICE_CHANNEL_STATUS_OUTCOME);
            return null == r
                ? null
                : ('blocked' === r ? m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
                      channelName: t,
                      channelHook: n
                  });
        })(e, O, l);
    if (null != C) return C;
    if (null != N)
        return A === s.y.MODAL && null != _
            ? S !== a.P.BLOCKED
                ? m.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_FLAGGED.format({
                      applicationName: N,
                      interactionUserHook: _,
                      integrationOwnerHook: d
                  })
                : m.Z.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_BLOCKED.format({
                      applicationName: N,
                      interactionUserHook: _,
                      integrationOwnerHook: d
                  })
            : S !== a.P.BLOCKED
              ? m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
                    applicationName: N,
                    channelName: O,
                    channelHook: v,
                    integrationOwnerHook: d
                })
              : m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
                    applicationName: N,
                    channelName: O,
                    channelHook: v,
                    integrationOwnerHook: d
                });
    return S !== a.P.BLOCKED
        ? m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
              channelName: O,
              channelHook: v
          })
        : m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
              channelName: O,
              channelHook: v
          });
}
function N(e) {
    switch (e) {
        case d.i.NICKNAME:
            return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
        case d.i.USERNAME:
            return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
        case d.i.GLOBAL_NAME:
            return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
        case d.i.CLAN_TAG:
            return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
        default:
            return m.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    }
}
function R(e) {
    var t, n;
    let r = g(e, l.D.NOTIFICATION_TYPE),
        i = g(e, l.D.JOIN_ATTEMPTS),
        a = g(e, l.D.RAID_DATETIME),
        s = g(e, l.D.DMS_SENT),
        o = g(e, l.D.RAID_TYPE),
        u = g(e, l.D.RESOLVED_REASON),
        c = g(e, l.D.DECISION_ID),
        d = g(e, l.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: null !== (t = null == (n = r) ? null : n) && void 0 !== t ? t : void 0,
        joinAttempts: null != i ? parseInt(i) : void 0,
        raidDatetime: null != a ? new Date(a) : void 0,
        dmsSent: null != s ? parseInt(s) : void 0,
        raidType: null != o ? o : void 0,
        resolvedReason: null != u ? u : void 0,
        decisionId: null != c ? c : void 0,
        suspiciousMentionActivityUntil: null != d ? new Date(d) : void 0
    };
}
function O(e) {
    let t = g(e, o.G.CHANNEL_ID),
        n = g(e, o.G.ALERT_ACTIONS_EXECUTION),
        r = (0, h.t)(n);
    return {
        content: (function (e) {
            var t, n;
            let [r] = null !== (t = e.embeds) && void 0 !== t ? t : [];
            return null !== (n = null == r ? void 0 : r.rawDescription) && void 0 !== n ? n : '';
        })(e),
        ruleName: g(e, o.G.RULE_NAME),
        decisionId: g(e, o.G.DECISION_ID),
        keyword: g(e, o.G.KEYWORD),
        keywordMatchedContent: g(e, o.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: g(e, o.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: g(e, o.G.TIMEOUT_DURATION),
        quarantineType: g(e, o.G.QUARANTINE_USER),
        quarantineAction: g(e, o.G.QUARANTINE_USER_ACTION),
        decisionReason: g(e, o.G.DECISION_REASON),
        applicationName: g(e, o.G.APPLICATION_NAME),
        interactionUserId: g(e, o.G.INTERACTION_USER_ID),
        interactionCallbackType: g(e, o.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: E.Z.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != r ? r : void 0
    };
}
function v(e) {
    let t = r.useMemo(() => O(e), [e]),
        n = (0, _.e7)([E.Z], () => E.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
    return {
        ...t,
        embedChannel: n
    };
}
function C(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = O(e);
    return null != t ? t : null;
}
function L(e) {
    if (null == e) return m.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
    switch (e) {
        case p.$l.LEGITIMATE_ACTIVITY:
            return m.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
        case p.$l.DM_SPAM:
            return m.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
        case p.$l.JOIN_RAID:
            return m.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
        default:
            return m.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER;
    }
}
function D(e) {
    return g(e, l.D.ACTION_BY_USER_ID);
}
let y = void 0;
