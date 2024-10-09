E.d(_, {
    OY: function () {
        return l;
    },
    ZX: function () {
        return o;
    },
    bY: function () {
        return I;
    },
    gV: function () {
        return i;
    },
    uo: function () {
        return A;
    }
});
var s = E(544891),
    n = E(570140),
    t = E(987707),
    r = E(981631);
function T() {
    return t.Z.isLoading || t.Z.isLoadingNextPage;
}
function a(e, _) {
    let E = (function (e) {
        let { before: _, userId: E, targetId: s, action: n } = e,
            T = null != E ? E : t.Z.userIdFilter,
            a = null != n ? n : t.Z.actionFilter,
            I = null != s ? s : t.Z.targetIdFilter,
            l = { limit: r.Rg9 };
        return null != _ && (l.before = _), null != T && (l.user_id = T), null != a && (l.action_type = a), null != I && (l.target_id = I), l;
    })(_);
    return s.tn.get({
        url: r.ANM.GUILD_AUDIT_LOG(e),
        query: E,
        oldFormErrors: !0
    });
}
function I(e, _, E, s) {
    if (!T() && null != e)
        return (
            n.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
            a(e, {
                userId: _,
                action: s,
                targetId: E
            }).then(
                (e) => {
                    let { audit_log_entries: _, integrations: E, users: s, webhooks: t, guild_scheduled_events: r, auto_moderation_rules: T, threads: a, application_commands: I } = e.body;
                    n.Z.dispatch({
                        type: 'AUDIT_LOG_FETCH_SUCCESS',
                        logs: _,
                        integrations: E,
                        users: s,
                        webhooks: t,
                        guildScheduledEvents: r,
                        automodRules: T,
                        threads: a,
                        applicationCommands: I
                    });
                },
                () => n.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
            )
        );
}
function l(e) {
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!t.Z.hasOlderLogs || T() || null == e) return;
    let E = t.Z.logs,
        s = E[E.length - 1],
        r = null;
    return (
        null != s && (r = s.id),
        n.Z.dispatch({
            type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
            before: r,
            isGroupedFetch: _
        }),
        a(e, { before: r }).then(
            (e) => {
                let { audit_log_entries: _, integrations: E, users: s, webhooks: t, guild_scheduled_events: r, auto_moderation_rules: T, threads: a, application_commands: I } = e.body;
                n.Z.dispatch({
                    type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
                    logs: _,
                    integrations: E,
                    users: s,
                    webhooks: t,
                    guildScheduledEvents: r,
                    automodRules: T,
                    threads: a,
                    applicationCommands: I
                });
            },
            () => n.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
        )
    );
}
function o(e, _) {
    if (!T() && null != _)
        return (
            n.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_ACTION',
                action: e
            }),
            I(_, null, null, e)
        );
}
function A(e, _) {
    if (!T() && null != _)
        return (
            n.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_USER',
                userId: e
            }),
            I(_, e)
        );
}
function i(e, _) {
    if (!T() && null != _)
        return (
            n.Z.dispatch({
                type: 'AUDIT_LOG_FILTER_BY_TARGET',
                targetId: e
            }),
            I(_, null, e)
        );
}
