n(47120);
var r = n(192379),
    i = n(399606),
    o = n(544891),
    a = n(570140),
    l = n(367907),
    s = n(430824),
    c = n(496675),
    u = n(626135),
    d = n(70956),
    _ = n(997787),
    m = n(981631);
let h = 1 * d.Z.Millis.DAY,
    E = new Map();
t.Z = {
    useShouldShowChannelNotice(e) {
        let t = (0, i.e7)([s.Z, c.Z], () => {
            let t = s.Z.getGuild(e);
            return null != t && c.Z.can(m.Plq.ADMINISTRATOR, t);
        });
        r.useEffect(() => {
            t &&
                !(function (e) {
                    var t;
                    let n = Date.now(),
                        r = null !== (t = E.get(e)) && void 0 !== t ? t : 0;
                    if (!(n < r + h))
                        E.set(e, n),
                            o.tn
                                .post({
                                    url: m.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !1
                                })
                                .then(
                                    (t) => {
                                        var n, r;
                                        a.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null !== (r = null === (n = t.body) || void 0 === n ? void 0 : n.integration_ids_with_app_commands) && void 0 !== r ? r : []
                                        });
                                    },
                                    () => {
                                        E.set(e, r);
                                    }
                                );
                })(e);
        }, [e, t]);
        let n = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
        return t && n;
    },
    dismissNotice(e) {
        a.Z.dispatch({
            type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
            guildId: e
        });
    },
    dismissOverviewTooltip(e, t) {
        var n;
        a.Z.dispatch({
            type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
            guildId: e,
            integrationId: t.id
        }),
            u.default.track(m.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, l.hH)(e),
                application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
                location: 'overview'
            });
    },
    dismissToggleTooltip(e, t) {
        var n;
        if (void 0 !== t)
            a.Z.dispatch({
                type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                integrationId: t.id
            }),
                u.default.track(m.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, l.hH)(e),
                    application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
                    location: 'toggle'
                });
    }
};
