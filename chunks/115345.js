n.d(t, {
    F6: function () {
        return M;
    },
    _Y: function () {
        return j;
    },
    cG: function () {
        return P;
    },
    ly: function () {
        return k;
    },
    oL: function () {
        return V;
    },
    vo: function () {
        return U;
    }
}),
    n(47120),
    n(789020),
    n(724458),
    n(411104);
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(668781),
    c = n(87051),
    d = n(181945),
    f = n(149071),
    _ = n(516373),
    p = n(480294),
    h = n(650774),
    m = n(888369),
    g = n(430824),
    E = n(771845),
    v = n(9156),
    b = n(626135),
    I = n(630388),
    T = n(823379),
    S = n(960048),
    y = n(709054),
    A = n(223683),
    N = n(630114),
    C = n(506712),
    R = n(468788),
    O = n(789662),
    D = n(981631),
    L = n(490897),
    x = n(526761),
    w = n(388032);
function M(e, t) {
    let [n, i] = r.useState(O.nf),
        [o, l] = r.useState({});
    (0, _.D)();
    let u = (0, s.Wu)([g.Z], () => Object.values(g.Z.getGuilds())),
        c = r.useCallback(() => {
            let r = {};
            for (let i of u)
                r[i.id] = (function (e, t, n, r, i) {
                    var a;
                    let [s, o, l] = p.Z.hasConsented(D.pjP.PERSONALIZATION) ? (0, C.q)(e, t, n, r, !0) : (0, C.A)(e, n),
                        u = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
                        c = (0, N.Z)(e, null != i ? i : s, u, r, t);
                    return {
                        guildId: e.id,
                        mode: s,
                        debugReason: l,
                        actions: c,
                        overrideMode: i,
                        messagePain: u.messages === O.XR.High,
                        visitsALot: o,
                        muted: v.ZP.isMuted(e.id) && !v.ZP.isTemporarilyMuted(e.id)
                    };
                })(i, n, e, t, o[i.id]);
            return r;
        }, [u, n, e, t, o]),
        [d, f] = r.useState(() => c());
    return (
        r.useEffect(() => f(c()), [c]),
        {
            guildPlans: d,
            overrideGuild: r.useCallback((e, t) => {
                l((n) => ({
                    ...n,
                    [e]: t
                }));
            }, []),
            setThresholds: i,
            getDebug: () =>
                (function (e, t) {
                    let n = t.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
                        }, 0),
                        r = t.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0);
                        }, 0),
                        i = E.ZP.getFlattenedGuildIds(),
                        s = a().sortBy(Object.values(e), (e) => {
                            let t = i.indexOf(e.guildId);
                            return -1 === t ? i.length : t;
                        }),
                        o = [
                            ['Use Grey Dot', new Set([O.AR.UseGreyDot])],
                            ['Keep As Is', new Set([O.AR.KeepAsIs])]
                        ].map((e) => {
                            let [t, n] = e,
                                r = s
                                    .filter((e) => {
                                        var t;
                                        return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode);
                                    })
                                    .map((e) => {
                                        let t = g.Z.getGuild(e.guildId),
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
                })(Object.values(d), t)
        }
    );
}
function P(e, t) {
    return Object.values(g.Z.getGuilds()).some((n) => {
        let [r] = p.Z.hasConsented(D.pjP.PERSONALIZATION) ? (0, C.q)(n, O.nf, e, t, !1) : (0, C.A)(n, e);
        return r === O.AR.UseGreyDot;
    });
}
function k() {
    let e = Object.values(g.Z.getGuilds()),
        t = {};
    for (let i of e) {
        var n, r;
        let e = null !== (r = (null !== (n = v.ZP.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {}).flags) && void 0 !== r ? r : 0;
        (e = (0, I.mB)(e, x.vc.UNREADS_ALL_MESSAGES, !0)), (e = (0, I.mB)(e, x.vc.UNREADS_ONLY_MENTIONS, !1)), (t[i.id] = { flags: e });
    }
    G(t),
        b.default.track(D.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter((e) => m.default.hasUnread(e.id)).length
        });
}
function U(e) {
    let [t, n] = r.useState(!1),
        [i, a] = r.useState(!1),
        s = r.useCallback(
            async (t) => {
                if (i) throw Error('Already submitted notifications migration');
                n(!0);
                try {
                    await B(t, e), a(!0);
                } finally {
                    n(!1);
                }
            },
            [i, e]
        );
    return {
        submitting: t,
        submitted: i,
        saveSettings: s
    };
}
async function B(e, t) {
    if (v.ZP.useNewNotifications) {
        u.Z.show({
            title: 'Info',
            body: 'It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!'
        });
        return;
    }
    let n = (function (e) {
        let t = Object.values(e)
                .filter((e) => {
                    var t;
                    return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === O.AR.UseGreyDot;
                })
                .map((e) => {
                    var t;
                    return {
                        plan: e,
                        memberCount: null !== (t = h.Z.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                    };
                }),
            n = {
                num_unread_guilds_before: y.default.keys(e).filter((e) => m.default.hasUnread(e)).length,
                unmuted_server_ids: t.filter((e) => v.ZP.isMuted(e.plan.guildId)).map((e) => e.plan.guildId)
            };
        return () => {
            b.default.track(D.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
                ...n,
                auto_migrated: !0,
                pre_selected_server_ids: Object.values(e)
                    .filter((e) => e.mode === O.AR.UseGreyDot)
                    .map((e) => e.guildId),
                final_selected_server_ids: t.map((e) => e.plan.guildId),
                num_unread_guids_after: y.default.keys(e).filter((e) => m.default.hasUnread(e)).length,
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
    })(e);
    try {
        let t = {};
        for (let n of Object.values(e)) {
            var r, i;
            let e = null !== (r = v.ZP.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== r ? r : {},
                a = {};
            for (let t of n.actions) null === (i = t.apply) || void 0 === i || i.call(t, a, e);
            t[n.guildId] = a;
        }
        await G(t);
        let a = Object.values(e)
            .filter((e) => e.actions.some((e) => e.needsMarkedAsRead))
            .map((e) => e.guildId);
        if (a.length > 0) {
            let e = setTimeout(n, 5000);
            (0, d.Z)(a, void 0, () => {
                l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' }), clearTimeout(e), n();
            });
        } else n();
    } catch (e) {
        S.Z.captureException(e),
            u.Z.show({
                title: w.intl.string(w.t.j2d6Ki),
                body: w.intl.string(w.t.mCjLAQ),
                onConfirm: t
            });
    }
}
async function G(e) {
    await Z(() => F()), await Z(() => c.Z.setAccountFlag(R.c.USE_NEW_NOTIFICATIONS, !0));
    let t = await Z(() => f.Z.saveUserGuildSettingsBulk(e));
    l.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
        userGuildSettings: t
    }),
        l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' });
}
async function Z(e) {
    for (let t = 0; t < 3; t++)
        try {
            return await e();
        } catch (e) {
            await new Promise((e) => setTimeout(e, 1000 * (t + 1)));
        }
    return await e();
}
async function F() {
    let e = await (0, A.Tn)();
    e.length > 0
        ? (await (function () {
              return new Promise((e) => {
                  u.Z.show({
                      title: 'Create new Backup?',
                      body: 'It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?',
                      confirmText: 'Take New Backup',
                      cancelText: 'Skip Backup',
                      onConfirm: () => e(!0),
                      onCancel: () => e(!1)
                  });
              });
          })()) && (0, A.dt)(e)
        : (0, A.$U)('Backup from '.concat(new Date().toLocaleDateString()));
}
async function V() {
    o.K.set('turnedOffNewNotifications', !0), b.default.track(D.rMx.NOTIFICATION_MIGRATION_OPTOUT, { num_guilds_with_new_setting: Object.values(g.Z.getGuilds()).filter((e) => v.ZP.resolveGuildUnreadSetting(e) === L.i.ONLY_MENTIONS).length });
    let e = await (0, A.Tn)(),
        t = a().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    if (t.length > 0) {
        let e = t[t.length - 1];
        await new Promise((t) =>
            u.Z.show({
                title: 'Please Confirm',
                body: 'This will turn off the new notification system and restore your ' + 'notification settings to a backup created on '.concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: 'Cancel',
                onCancel: () => {}
            })
        ),
            await (0, A.xx)(e.id),
            await c.Z.setAccountFlag(R.c.USE_NEW_NOTIFICATIONS, !1);
    } else await c.Z.setAccountFlag(R.c.USE_NEW_NOTIFICATIONS, !1);
}
function j(e) {
    var t, n, r;
    if (null == e) return [];
    let i = a().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], 'channel_id'),
        s = a().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], 'channel_id');
    return (null !== (r = e.channel_opens) && void 0 !== r ? r : [])
        .map((e) => {
            var t, n, r, a, o, l, u, c, d, f, _;
            let p = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
                h = null !== (n = s[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (r = e.year_opens) && void 0 !== r ? r : 0),
                num_month_opens: Number(null !== (a = e.one_month_opens) && void 0 !== a ? a : 0),
                num_three_month_opens: Number(null !== (o = e.three_month_opens) && void 0 !== o ? o : 0),
                num_six_month_opens: Number(null !== (l = e.six_month_opens) && void 0 !== l ? l : 0),
                num_messages: Number(null !== (u = null == h ? void 0 : h.num_messages) && void 0 !== u ? u : 0),
                num_year_voice_joins: Number(null !== (c = null == p ? void 0 : p.year_opens) && void 0 !== c ? c : 0),
                num_month_voice_joins: Number(null !== (d = null == p ? void 0 : p.one_month_opens) && void 0 !== d ? d : 0),
                num_three_month_voice_joins: Number(null !== (f = null == p ? void 0 : p.three_month_opens) && void 0 !== f ? f : 0),
                num_six_month_voice_joins: Number(null !== (_ = null == p ? void 0 : p.six_month_opens) && void 0 !== _ ? _ : 0)
            };
        })
        .filter(T.lm);
}
