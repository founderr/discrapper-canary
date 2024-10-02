n.d(t, {
    F6: function () {
        return k;
    },
    _Y: function () {
        return X;
    },
    cG: function () {
        return B;
    },
    ly: function () {
        return F;
    },
    oL: function () {
        return Q;
    },
    vo: function () {
        return H;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(724458);
var o = n(411104);
var s = n(470079),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(433517),
    _ = n(570140),
    E = n(668781),
    f = n(87051),
    h = n(181945),
    p = n(149071),
    m = n(516373),
    I = n(480294),
    T = n(650774),
    g = n(888369),
    S = n(430824),
    A = n(771845),
    v = n(9156),
    N = n(626135),
    O = n(630388),
    R = n(823379),
    C = n(960048),
    y = n(709054),
    L = n(223683),
    b = n(630114),
    D = n(506712),
    M = n(468788),
    P = n(789662),
    U = n(981631),
    w = n(490897),
    x = n(526761),
    G = n(689938);
function k(e, t) {
    let [n, r] = s.useState(P.nf),
        [i, a] = s.useState({});
    (0, m.D)();
    let o = (0, c.Wu)([S.Z], () => Object.values(S.Z.getGuilds())),
        l = s.useCallback(() => {
            let r = {};
            for (let a of o) r[a.id] = Z(a, n, e, t, i[a.id]);
            return r;
        }, [o, n, e, t, i]),
        [u, d] = s.useState(() => l());
    return (
        s.useEffect(() => d(l()), [l]),
        {
            guildPlans: u,
            overrideGuild: s.useCallback((e, t) => {
                a((n) => ({
                    ...n,
                    [e]: t
                }));
            }, []),
            setThresholds: r,
            getDebug: () => V(Object.values(u), t)
        }
    );
}
function B(e, t) {
    return Object.values(S.Z.getGuilds()).some((n) => {
        let [r] = I.Z.hasConsented(U.pjP.PERSONALIZATION) ? (0, D.q)(n, P.nf, e, t, !1) : (0, D.A)(n, e);
        return r === P.AR.UseGreyDot;
    });
}
function F() {
    let e = Object.values(S.Z.getGuilds()),
        t = {};
    for (let i of e) {
        var n, r;
        let e = null !== (r = (null !== (n = v.ZP.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {}).flags) && void 0 !== r ? r : 0;
        (e = (0, O.mB)(e, x.vc.UNREADS_ALL_MESSAGES, !0)), (e = (0, O.mB)(e, x.vc.UNREADS_ONLY_MENTIONS, !1)), (t[i.id] = { flags: e });
    }
    W(t),
        N.default.track(U.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter((e) => g.default.hasUnread(e.id)).length
        });
}
function Z(e, t, n, r, i) {
    var a;
    let [o, s, l] = I.Z.hasConsented(U.pjP.PERSONALIZATION) ? (0, D.q)(e, t, n, r, !0) : (0, D.A)(e, n),
        u = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
        c = (0, b.Z)(e, null != i ? i : o, u, r, t);
    return {
        guildId: e.id,
        mode: o,
        debugReason: l,
        actions: c,
        overrideMode: i,
        messagePain: u.messages === P.XR.High,
        visitsALot: s,
        muted: v.ZP.isMuted(e.id) && !v.ZP.isTemporarilyMuted(e.id)
    };
}
function V(e, t) {
    let n = t.reduce((e, t) => {
            var n;
            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
        }, 0),
        r = t.reduce((e, t) => {
            var n;
            return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0);
        }, 0),
        i = A.ZP.getFlattenedGuildIds(),
        a = u().sortBy(Object.values(e), (e) => {
            let t = i.indexOf(e.guildId);
            return -1 === t ? i.length : t;
        }),
        o = [
            ['Use Grey Dot', new Set([P.AR.UseGreyDot])],
            ['Keep As Is', new Set([P.AR.KeepAsIs])]
        ].map((e) => {
            let [t, n] = e,
                r = a
                    .filter((e) => {
                        var t;
                        return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode);
                    })
                    .map((e) => {
                        let t = S.Z.getGuild(e.guildId),
                            n = e.actions
                                .map((e) => {
                                    var t;
                                    return '- '.concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : '');
                                })
                                .join('\n');
                        return '### '.concat(t.name, '\n**Reasoning**: ').concat(e.debugReason, '**ActionPlan**:\n').concat(n);
                    });
            return '# '.concat(t, '\n\n').concat(r.join('\n\n'));
        });
    return '\n# Basic Stats\n- Total channel visits (yr): '.concat(n, '\n- Total channel visits (month): ').concat(r, '\n\n').concat(o.join('\n\n'));
}
function H(e) {
    let [t, n] = s.useState(!1),
        [r, i] = s.useState(!1),
        a = s.useCallback(
            async (t) => {
                if (r) throw Error('Already submitted notifications migration');
                n(!0);
                try {
                    await Y(t, e), i(!0);
                } finally {
                    n(!1);
                }
            },
            [r, e]
        );
    return {
        submitting: t,
        submitted: r,
        saveSettings: a
    };
}
async function Y(e, t) {
    if (v.ZP.useNewNotifications) {
        E.Z.show({
            title: 'Info',
            body: 'It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!'
        });
        return;
    }
    let n = j(e);
    try {
        let t = {};
        for (let n of Object.values(e)) {
            var r, i;
            let e = null !== (r = v.ZP.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== r ? r : {},
                a = {};
            for (let t of n.actions) null === (i = t.apply) || void 0 === i || i.call(t, a, e);
            t[n.guildId] = a;
        }
        await W(t);
        let a = Object.values(e)
            .filter((e) => e.actions.some((e) => e.needsMarkedAsRead))
            .map((e) => e.guildId);
        if (a.length > 0) {
            let e = setTimeout(n, 5000);
            (0, h.Z)(a, void 0, () => {
                _.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' }), clearTimeout(e), n();
            });
        } else n();
    } catch (e) {
        C.Z.captureException(e),
            E.Z.show({
                title: G.Z.Messages.ERROR,
                body: G.Z.Messages.NOTIF_MIGRATION_ERROR,
                onConfirm: t
            });
    }
}
function j(e) {
    let t = Object.values(e)
            .filter((e) => {
                var t;
                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === P.AR.UseGreyDot;
            })
            .map((e) => {
                var t;
                return {
                    plan: e,
                    memberCount: null !== (t = T.Z.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                };
            }),
        n = {
            num_unread_guilds_before: y.default.keys(e).filter((e) => g.default.hasUnread(e)).length,
            unmuted_server_ids: t.filter((e) => v.ZP.isMuted(e.plan.guildId)).map((e) => e.plan.guildId)
        };
    return () => {
        N.default.track(U.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            ...n,
            auto_migrated: !0,
            pre_selected_server_ids: Object.values(e)
                .filter((e) => e.mode === P.AR.UseGreyDot)
                .map((e) => e.guildId),
            final_selected_server_ids: t.map((e) => e.plan.guildId),
            num_unread_guids_after: y.default.keys(e).filter((e) => g.default.hasUnread(e)).length,
            num_tiny_servers_selected: t.filter((e) => e.memberCount <= 20).length,
            num_small_servers_selected: t.filter((e) => e.memberCount > 20 && e.memberCount <= 200).length,
            num_medium_servers_selected: t.filter((e) => e.memberCount > 200 && e.memberCount <= 1000).length,
            num_large_servers_selected: t.filter((e) => e.memberCount > 1000).length,
            num_quiet_servers_selected: t.filter((e) => !e.plan.messagePain).length,
            num_busy_servers_selected: t.filter((e) => e.plan.messagePain).length,
            num_frequent_visited_servers_selected: t.filter((e) => e.plan.visitsALot).length,
            num_infrequent_visited_servers_selected: t.filter((e) => !e.plan.visitsALot).length
        });
    };
}
async function W(e) {
    await K(() => z()), await K(() => f.Z.setAccountFlag(M.c.USE_NEW_NOTIFICATIONS, !0));
    let t = await K(() => p.Z.saveUserGuildSettingsBulk(e));
    _.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
        userGuildSettings: t
    }),
        _.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' });
}
async function K(e) {
    for (let t = 0; t < 3; t++)
        try {
            return await e();
        } catch (e) {
            await new Promise((e) => setTimeout(e, 1000 * (t + 1)));
        }
    return await e();
}
async function z() {
    let e = await (0, L.Tn)();
    e.length > 0 ? (await q()) && (0, L.dt)(e) : (0, L.$U)('Backup from '.concat(new Date().toLocaleDateString()));
}
function q() {
    return new Promise((e) => {
        E.Z.show({
            title: 'Create new Backup?',
            body: 'It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?',
            confirmText: 'Take New Backup',
            cancelText: 'Skip Backup',
            onConfirm: () => e(!0),
            onCancel: () => e(!1)
        });
    });
}
async function Q() {
    d.K.set('turnedOffNewNotifications', !0), N.default.track(U.rMx.NOTIFICATION_MIGRATION_OPTOUT, { num_guilds_with_new_setting: Object.values(S.Z.getGuilds()).filter((e) => v.ZP.resolveGuildUnreadSetting(e) === w.i.ONLY_MENTIONS).length });
    let e = await (0, L.Tn)(),
        t = u().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    if (t.length > 0) {
        let e = t[t.length - 1];
        await new Promise((t) =>
            E.Z.show({
                title: 'Please Confirm',
                body: 'This will turn off the new notification system and restore your ' + 'notification settings to a backup created on '.concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: 'Cancel',
                onCancel: () => {}
            })
        ),
            await (0, L.xx)(e.id),
            await f.Z.setAccountFlag(M.c.USE_NEW_NOTIFICATIONS, !1);
    } else await f.Z.setAccountFlag(M.c.USE_NEW_NOTIFICATIONS, !1);
}
function X(e) {
    var t, n, r;
    if (null == e) return [];
    let i = u().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], 'channel_id'),
        a = u().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], 'channel_id');
    return (null !== (r = e.channel_opens) && void 0 !== r ? r : [])
        .map((e) => {
            var t, n, r, o, s, l, u, c, d, _, E;
            let f = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
                h = null !== (n = a[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (r = e.year_opens) && void 0 !== r ? r : 0),
                num_month_opens: Number(null !== (o = e.one_month_opens) && void 0 !== o ? o : 0),
                num_three_month_opens: Number(null !== (s = e.three_month_opens) && void 0 !== s ? s : 0),
                num_six_month_opens: Number(null !== (l = e.six_month_opens) && void 0 !== l ? l : 0),
                num_messages: Number(null !== (u = null == h ? void 0 : h.num_messages) && void 0 !== u ? u : 0),
                num_year_voice_joins: Number(null !== (c = null == f ? void 0 : f.year_opens) && void 0 !== c ? c : 0),
                num_month_voice_joins: Number(null !== (d = null == f ? void 0 : f.one_month_opens) && void 0 !== d ? d : 0),
                num_three_month_voice_joins: Number(null !== (_ = null == f ? void 0 : f.three_month_opens) && void 0 !== _ ? _ : 0),
                num_six_month_voice_joins: Number(null !== (E = null == f ? void 0 : f.six_month_opens) && void 0 !== E ? E : 0)
            };
        })
        .filter(R.lm);
}
