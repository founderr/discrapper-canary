E(653041), E(47120), E(733860);
var s,
    n,
    t,
    r,
    T = E(392711),
    a = E.n(T),
    I = E(149765),
    l = E(442837),
    A = E(570140),
    o = E(387667),
    i = E(131704),
    N = E(271383),
    D = E(430824),
    L = E(981631);
let S = [L.Plq.KICK_MEMBERS, L.Plq.BAN_MEMBERS, L.Plq.ADMINISTRATOR, L.Plq.MANAGE_CHANNELS, L.Plq.MANAGE_GUILD, L.Plq.MANAGE_MESSAGES, L.Plq.MANAGE_NICKNAMES, L.Plq.MANAGE_ROLES, L.Plq.MANAGE_WEBHOOKS, L.Plq.MANAGE_GUILD_EXPRESSIONS, L.Plq.MOVE_MEMBERS, L.Plq.MUTE_MEMBERS, L.Plq.DEAFEN_MEMBERS],
    u = null,
    O = [],
    U = [],
    c = [],
    G = [],
    d = [],
    R = [],
    M = [],
    g = [],
    C = !0,
    f = !1,
    p = !1,
    h = !0,
    m = !1,
    P = null,
    Z = L.rsA.ALL,
    v = null,
    H = {},
    b = 0;
function F(e) {
    let _ = [],
        E = 0;
    return (
        e.reverse().forEach((e) => {
            var s, n, t;
            let r = [],
                T = null,
                I = null,
                l = null;
            if ((null != e.reason && r.push(new o.ms(L.zUn.REASON, null, e.reason)), null != e.changes))
                for (let _ of e.changes) {
                    let e = new o.ms(_.key, _.old_value, _.new_value);
                    r.push(e), e.key === L.zUn.NAME ? (T = e) : e.key === L.zUn.TYPE ? (l = e) : e.key === L.zUn.TITLE && (I = e);
                }
            if (e.action_type === L.rsA.MEMBER_PRUNE) {
                let _ = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    E = new o.ms(L.zUn.PRUNE_DELETE_DAYS, null, _);
                r.push(E);
            }
            e.action_type === L.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (n = e.options) || void 0 === n ? void 0 : n.auto_moderation_rule_name) != null && r.push(new o.ms(L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === L.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (s = e.options) || void 0 === s ? void 0 : s.status) != null && r.push(new o.ms(L.zUn.STATUS, null, e.options.status));
            let A = new o.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: r,
                    options: e.options
                }),
                N = _[0];
            if (
                (function (e, _, E) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return null != e && e.action === _.action && e.targetId === _.targetId && e.userId === _.userId && a().isEqual(e.options, _.options) && _.timestampStart.diff(e.timestampStart, 'minutes') < s && E < n && _.targetType !== L.KFR.INVITE && _.action !== L.rsA.MESSAGE_DELETE && _.action !== L.rsA.MESSAGE_BULK_DELETE && _.action !== L.rsA.MESSAGE_PIN && _.action !== L.rsA.MESSAGE_UNPIN && _.action !== L.rsA.MEMBER_MOVE && _.action !== L.rsA.MEMBER_DISCONNECT && _.action !== L.rsA.BOT_ADD && _.action !== L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && _.action !== L.rsA.MEMBER_PRUNE;
                })(N, A, E)
            ) {
                (_[0] = N.merge({
                    changes: [...N.changes, ...A.changes],
                    timestampEnd: A.timestampStart
                })),
                    E++;
                return;
            }
            if (A.actionType === L.vB8.DELETE && (null != T || null != I)) {
                let e = null !== (t = null == T ? void 0 : T.oldValue) && void 0 !== t ? t : null == I ? void 0 : I.oldValue;
                (A.targetType === L.KFR.CHANNEL || A.targetType === L.KFR.CHANNEL_OVERWRITE) && null !== l && (0, i.r8)(l.oldValue) && (e = '#'.concat(e)), null == H[A.targetType] ? (H[A.targetType] = { [A.targetId]: e }) : (H[A.targetType][A.targetId] = e);
            }
            (E = 0), _.unshift(A);
        }),
        _
    );
}
function B(e) {
    let { section: _ } = e;
    if (_ !== L.pNK.AUDIT_LOG) return !1;
    let E = N.ZP.getMembers(u),
        s = D.Z.getGuild(u),
        n = null != u ? D.Z.getRoles(u) : void 0;
    c = a()(E)
        .filter((e) =>
            e.roles.some((_) => {
                if (null != s) {
                    if (e.userId === s.ownerId) return !0;
                    let E = null == n ? void 0 : n[_];
                    return null != E && S.some((e) => I.e$(E.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class x extends (s = l.ZP.Store) {
    get logs() {
        return O;
    }
    get integrations() {
        return U;
    }
    get webhooks() {
        return G;
    }
    get guildScheduledEvents() {
        return d;
    }
    get automodRules() {
        return R;
    }
    get threads() {
        return M;
    }
    get applicationCommands() {
        return g;
    }
    get isInitialLoading() {
        return C;
    }
    get isLoading() {
        return f;
    }
    get isLoadingNextPage() {
        return p;
    }
    get hasOlderLogs() {
        return h;
    }
    get hasError() {
        return m;
    }
    get userIds() {
        return c;
    }
    get userIdFilter() {
        return P;
    }
    get targetIdFilter() {
        return v;
    }
    get actionFilter() {
        return Z;
    }
    get deletedTargets() {
        return H;
    }
    get groupedFetchCount() {
        return b;
    }
}
(r = 'GuildSettingsAuditLogStore'),
    (t = 'displayName') in (n = x)
        ? Object.defineProperty(n, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[t] = r),
    (_.Z = new x(A.Z, {
        AUDIT_LOG_FETCH_START: function () {
            f = !0;
        },
        AUDIT_LOG_FETCH_SUCCESS: function (e) {
            var _;
            (b = 0), (C = !1), (f = !1), (h = !0), (m = !1), (O = F(e.logs)), (U = e.integrations), (G = e.webhooks), (d = e.guildScheduledEvents), (R = null !== (_ = e.automodRules) && void 0 !== _ ? _ : []), (M = e.threads), (g = e.applicationCommands), e.logs.length < L.Rg9 && (h = !1);
        },
        AUDIT_LOG_FETCH_FAIL: function () {
            (f = !1), (m = !0), (O = []);
        },
        AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
            let { isGroupedFetch: _ } = e;
            (p = !0), _ && b++;
        },
        AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
            let { logs: _, integrations: E, webhooks: s, guildScheduledEvents: n, automodRules: t, threads: r, applicationCommands: T } = e;
            if (((p = !1), (U = E), (G = s), (d = n), (R = t), (M = r), (g = T), (0 === _.length || _.length < L.Rg9) && (h = !1), _.length > 0)) {
                let e = F(_);
                O = [...O, ...e];
            }
        },
        AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
            p = !1;
        },
        AUDIT_LOG_FILTER_BY_ACTION: function (e) {
            let { action: _ } = e;
            Z = _;
        },
        AUDIT_LOG_FILTER_BY_USER: function (e) {
            let { userId: _ } = e;
            P = _;
        },
        AUDIT_LOG_FILTER_BY_TARGET: function (e) {
            let { targetId: _ } = e;
            v = _;
        },
        GUILD_SETTINGS_SET_SECTION: B,
        GUILD_SETTINGS_INIT: function (e) {
            let { guildId: _, section: E } = e;
            return (u = _), (v = null), B({ section: E });
        },
        GUILD_SETTINGS_CLOSE: function () {
            (O = []), (c = []), (Z = L.rsA.ALL), (P = null), (v = null), (H = {}), (b = 0), (C = !0), (U = []), (G = []), (d = []), (R = []), (M = []);
        }
    }));
