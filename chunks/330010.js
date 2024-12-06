n.d(t, {
    i: function () {
        return l;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(973616),
    s = n(598077),
    o = n(981631);
function l(e) {
    return r.tn
        .get({
            url: o.ANM.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then((t) => {
            let n = t.body.map((e) => ({
                ...e,
                application: 'application' in e && null != e.application ? a.Z.createFromServer(e.application) : void 0,
                user: 'user' in e && null != e.user ? new s.Z(e.user) : void 0
            }));
            return (
                i.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INTEGRATIONS',
                    guildId: e,
                    integrations: n
                }),
                n
            );
        })
        .catch(() => {});
}
