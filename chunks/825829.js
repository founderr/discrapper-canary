n.d(t, {
    FL: function () {
        return y;
    },
    Mq: function () {
        return b;
    },
    NK: function () {
        return C;
    },
    OP: function () {
        return I;
    },
    Sw: function () {
        return O;
    },
    ZP: function () {
        return N;
    },
    ge: function () {
        return R;
    },
    hU: function () {
        return S;
    },
    nY: function () {
        return v;
    },
    nj: function () {
        return D;
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
    f = n(442837),
    _ = n(592125),
    p = n(496675);
n(594174);
var h = n(313889),
    m = n(177862),
    g = n(981631),
    E = n(388032);
function v(e) {
    return e.type === g.uaV.AUTO_MODERATION_ACTION;
}
function I(e) {
    var t;
    return null === (t = e.embeds) || void 0 === t
        ? void 0
        : t.some((e) => {
              let { type: t } = e;
              return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
          });
}
function T(e, t) {
    var n, r, i, a, s;
    let [o] = null !== (n = e.embeds) && void 0 !== n ? n : [];
    if (null != o) {
        if (o.type === g.hBH.AUTO_MODERATION_MESSAGE)
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
        if (o.type === g.hBH.AUTO_MODERATION_NOTIFICATION)
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
function b(e, t) {
    var n, r;
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.VqG,
        d = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0,
        _ = (function (e) {
            let t = T(e, o.G.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        h = (function (e) {
            let t = T(e, o.G.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        m = (function (e) {
            let t = T(e, o.G.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        v = (function (e) {
            let t = T(e, o.G.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        I = (function (e) {
            let t = T(e, o.G.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        b = T(e, o.G.INTERACTION_CALLBACK_TYPE),
        S = T(e, o.G.APPLICATION_NAME);
    if (null != v) {
        let e = (function (e, t, n) {
            switch (t) {
                case c.z.BLOCK_PROFILE_UPDATE:
                    return (function (e) {
                        switch (e) {
                            case i.J.NICKNAME_UPDATE:
                                return E.intl.string(E.t.t98DPT);
                            case i.J.NICKNAME_RESET:
                                return E.intl.string(E.t['7u/rlZ']);
                            default:
                                return;
                        }
                    })(e);
                case c.z.QUARANTINE_USER:
                    return (function (e) {
                        switch (e) {
                            case u.B.MESSAGE_SEND:
                                return E.intl.string(E.t.PmSMMT);
                            case u.B.GUILD_JOIN:
                                return E.intl.string(E.t.m9wWzs);
                            case u.B.USERNAME_UPDATE:
                                return E.intl.string(E.t.KNSkCw);
                            case u.B.CLAN_TAG_UPDATE:
                                return E.intl.string(E.t.qV4K6u);
                            default:
                                return;
                        }
                    })(n);
                case c.z.BLOCK_GUEST_JOIN:
                    return (function () {
                        return E.intl.string(E.t.MrYeyc);
                    })();
            }
        })(_, h, m);
        if (null != e) return e;
    }
    let y = p.Z.can(g.Plq.VIEW_CHANNEL, t);
    let A = ((n = t), y ? (null !== (r = null == n ? void 0 : n.name) && void 0 !== r ? r : E.intl.string(E.t.J90oLS)) : E.intl.string(E.t['/YzI6+'])),
        N = null != t && y ? l : g.VqG,
        C = (function (e, t, n) {
            let r = T(e, o.G.VOICE_CHANNEL_STATUS_OUTCOME);
            if (null == r) return null;
            let i = 'blocked' === r ? E.t.cLQrq6 : E.t.bma6cn;
            return E.intl.format(i, {
                channelName: t,
                channelHook: n
            });
        })(e, A, l);
    if (null != C) return C;
    if (null != S)
        return b === s.y.MODAL && null != f
            ? I !== a.P.BLOCKED
                ? E.intl.format(E.t['4xL9Sk'], {
                      applicationName: S,
                      interactionUserHook: f,
                      integrationOwnerHook: d
                  })
                : E.intl.format(E.t.S3lNIS, {
                      applicationName: S,
                      interactionUserHook: f,
                      integrationOwnerHook: d
                  })
            : I !== a.P.BLOCKED
              ? E.intl.format(E.t.AXQufH, {
                    applicationName: S,
                    channelName: A,
                    channelHook: N,
                    integrationOwnerHook: d
                })
              : E.intl.format(E.t.s3tjMD, {
                    applicationName: S,
                    channelName: A,
                    channelHook: N,
                    integrationOwnerHook: d
                });
    return I !== a.P.BLOCKED
        ? E.intl.format(E.t.IZg0VV, {
              channelName: A,
              channelHook: N
          })
        : E.intl.format(E.t.lOIOSE, {
              channelName: A,
              channelHook: N
          });
}
function S(e) {
    switch (e) {
        case d.i.NICKNAME:
            return E.intl.string(E.t.fkBQa2);
        case d.i.USERNAME:
            return E.intl.string(E.t.pJQVnp);
        case d.i.GLOBAL_NAME:
            return E.intl.string(E.t['V9eJ8/']);
        case d.i.CLAN_TAG:
            return E.intl.string(E.t.Rtum09);
        default:
            return E.intl.string(E.t.pJQVnp);
    }
}
function y(e) {
    var t, n;
    let r = T(e, l.D.NOTIFICATION_TYPE),
        i = T(e, l.D.JOIN_ATTEMPTS),
        a = T(e, l.D.RAID_DATETIME),
        s = T(e, l.D.DMS_SENT),
        o = T(e, l.D.RAID_TYPE),
        u = T(e, l.D.RESOLVED_REASON),
        c = T(e, l.D.DECISION_ID),
        d = T(e, l.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
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
function A(e) {
    let t = T(e, o.G.CHANNEL_ID),
        n = T(e, o.G.ALERT_ACTIONS_EXECUTION),
        r = (0, h.t)(n);
    return {
        content: (function (e) {
            var t, n;
            let [r] = null !== (t = e.embeds) && void 0 !== t ? t : [];
            return null !== (n = null == r ? void 0 : r.rawDescription) && void 0 !== n ? n : '';
        })(e),
        ruleName: T(e, o.G.RULE_NAME),
        decisionId: T(e, o.G.DECISION_ID),
        keyword: T(e, o.G.KEYWORD),
        keywordMatchedContent: T(e, o.G.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: T(e, o.G.FLAGGED_MESSAGE_ID),
        timeoutDuration: T(e, o.G.TIMEOUT_DURATION),
        quarantineType: T(e, o.G.QUARANTINE_USER),
        quarantineAction: T(e, o.G.QUARANTINE_USER_ACTION),
        decisionReason: T(e, o.G.DECISION_REASON),
        applicationName: T(e, o.G.APPLICATION_NAME),
        interactionUserId: T(e, o.G.INTERACTION_USER_ID),
        interactionCallbackType: T(e, o.G.INTERACTION_CALLBACK_TYPE),
        embedChannel: _.Z.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: null != r ? r : void 0
    };
}
function N(e) {
    let t = r.useMemo(() => A(e), [e]),
        n = (0, f.e7)([_.Z], () => _.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
    return {
        ...t,
        embedChannel: n
    };
}
function C(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = A(e);
    return null != t ? t : null;
}
function R(e) {
    if (null == e) return E.intl.string(E.t.Gh3A0N);
    switch (e) {
        case m.$l.LEGITIMATE_ACTIVITY:
            return E.intl.string(E.t['riQ+HB']);
        case m.$l.DM_SPAM:
            return E.intl.string(E.t.j5V0io);
        case m.$l.JOIN_RAID:
            return E.intl.string(E.t.qhaRbG);
        default:
            return E.intl.string(E.t.GPg6JC);
    }
}
function O(e) {
    return T(e, l.D.ACTION_BY_USER_ID);
}
let D = void 0;
