n(47120);
var r = n(192379),
    i = n(399606),
    a = n(544891),
    o = n(570140),
    s = n(367907),
    l = n(430824),
    c = n(496675),
    u = n(626135),
    d = n(70956),
    _ = n(997787),
    m = n(981631);
let h = 1 * d.Z.Millis.DAY,
    p = new Map();
t.Z = {
    useShouldShowChannelNotice(e) {
        let t = (0, i.e7)([l.Z, c.Z], () => {
            let t = l.Z.getGuild(e);
            return null != t && c.Z.can(m.Plq.ADMINISTRATOR, t);
        });
        r.useEffect(() => {
            t &&
                !(function (e) {
                    var t;
                    let n = Date.now(),
                        r = null !== (t = p.get(e)) && void 0 !== t ? t : 0;
                    if (!(n < r + h))
                        p.set(e, n),
                            a.tn
                                .post({
                                    url: m.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !0
                                })
                                .then(
                                    (t) => {
                                        var n, r;
                                        o.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null !== (r = null === (n = t.body) || void 0 === n ? void 0 : n.integration_ids_with_app_commands) && void 0 !== r ? r : []
                                        });
                                    },
                                    () => {
                                        p.set(e, r);
                                    }
                                );
                })(e);
        }, [e, t]);
        let n = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
        return t && n;
    },
    dismissNotice(e) {
        o.Z.dispatch({
            type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
            guildId: e
        });
    },
    dismissOverviewTooltip(e, t) {
        var n;
        o.Z.dispatch({
            type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
            guildId: e,
            integrationId: t.id
        }),
            u.default.track(m.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, s.hH)(e),
                application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
                location: 'overview'
            });
    },
    dismissToggleTooltip(e, t) {
        var n;
        if (void 0 !== t)
            o.Z.dispatch({
                type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                integrationId: t.id
            }),
                u.default.track(m.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, s.hH)(e),
                    application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
                    location: 'toggle'
                });
    }
};
