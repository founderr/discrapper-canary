r(47120);
var n = r(192379),
    i = r(399606),
    a = r(544891),
    o = r(570140),
    l = r(367907),
    s = r(430824),
    c = r(496675),
    u = r(626135),
    d = r(70956),
    _ = r(997787),
    E = r(981631);
let I = 1 * d.Z.Millis.DAY,
    p = new Map();
t.Z = {
    useShouldShowChannelNotice(e) {
        let t = (0, i.e7)([s.Z, c.Z], () => {
            let t = s.Z.getGuild(e);
            return null != t && c.Z.can(E.Plq.ADMINISTRATOR, t);
        });
        n.useEffect(() => {
            t &&
                !(function (e) {
                    var t;
                    let r = Date.now(),
                        n = null !== (t = p.get(e)) && void 0 !== t ? t : 0;
                    if (!(r < n + I))
                        p.set(e, r),
                            a.tn
                                .post({
                                    url: E.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
                                    rejectWithError: !0
                                })
                                .then(
                                    (t) => {
                                        var r, n;
                                        o.Z.dispatch({
                                            type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                            guildId: e,
                                            integrationIdsWithAppCommands: null !== (n = null === (r = t.body) || void 0 === r ? void 0 : r.integration_ids_with_app_commands) && void 0 !== n ? n : []
                                        });
                                    },
                                    () => {
                                        p.set(e, n);
                                    }
                                );
                })(e);
        }, [e, t]);
        let r = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
        return t && r;
    },
    dismissNotice(e) {
        o.Z.dispatch({
            type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
            guildId: e
        });
    },
    dismissOverviewTooltip(e, t) {
        var r;
        o.Z.dispatch({
            type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
            guildId: e,
            integrationId: t.id
        }),
            u.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, l.hH)(e),
                application_id: null === (r = t.application) || void 0 === r ? void 0 : r.id,
                location: 'overview'
            });
    },
    dismissToggleTooltip(e, t) {
        var r;
        if (void 0 !== t)
            o.Z.dispatch({
                type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                integrationId: t.id
            }),
                u.default.track(E.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, l.hH)(e),
                    application_id: null === (r = t.application) || void 0 === r ? void 0 : r.id,
                    location: 'toggle'
                });
    }
};
