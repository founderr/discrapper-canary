n.d(t, {
    L_: function () {
        return r;
    },
    nj: function () {
        return c;
    },
    sE: function () {
        return s;
    }
});
var i = n(544891),
    o = n(570140),
    a = n(480608),
    l = n(981631);
function s(e, t) {
    i.tn
        .get({ url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t) })
        .then((e) => {
            let n = [];
            e.body.length > 0 &&
                (n = e.body.map((e) =>
                    e.map((e) => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    }))
                )),
                o.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
                    roleId: t,
                    roleConnectionConfigurations: n
                });
        })
        .catch(() => {});
}
async function r(e, t, n) {
    let s = n.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value
            }))
        ),
        r = await i.tn
            .put({
                url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                body: 0 === s.length ? [] : s,
                oldFormErrors: !0
            })
            .then((e) => {
                let t = [];
                return (
                    e.body.length > 0 &&
                        (t = e.body.map((e) =>
                            e.map((e) => ({
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }))
                        )),
                    t
                );
            }),
        c = await (0, a.H)(e, t, !1);
    null != c &&
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
            guildId: e,
            roleId: t,
            count: c
        }),
        o.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: t,
            roleConnectionConfigurations: r
        });
}
async function c() {
    return (await i.tn.get({ url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS })).body;
}
