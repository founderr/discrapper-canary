n.d(t, {
    I: function () {
        return p;
    }
});
var r = n(789020);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(442837),
    c = n(544891),
    d = n(570140),
    _ = n(630388),
    E = n(812206),
    f = n(981631);
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    d.Z.dispatch({
        type: 'APPLICATION_FETCH',
        applicationId: e
    });
    try {
        let r = await c.tn.get({
            url: f.ANM.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n
        });
        return (
            d.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: r.body
            }),
            r.body
        );
    } catch (t) {
        throw (
            (d.Z.dispatch({
                type: 'APPLICATION_FETCH_FAIL',
                applicationId: e
            }),
            t)
        );
    }
}
t.Z = {
    async createApplication(e) {
        let { name: t, guildId: n, type: r, teamId: i } = e,
            a = (
                await c.tn.post({
                    url: f.ANM.APPLICATIONS,
                    body: {
                        name: t,
                        type: r,
                        guild_id: n,
                        team_id: i
                    }
                })
            ).body;
        return (
            null != n &&
                null != r &&
                d.Z.dispatch({
                    type: 'APPLICATION_FETCH_SUCCESS',
                    application: a
                }),
            a
        );
    },
    async getApplicationsForGuild(e) {
        let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = (
                await c.tn.get({
                    url: f.ANM.GUILD_APPLICATIONS(e),
                    query: {
                        ...n,
                        include_team: t
                    }
                })
            ).body;
        return (
            d.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: r
            }),
            r
        );
    },
    async transferApplication(e) {
        let { applicationId: t, teamId: n } = e,
            r = (
                await c.tn.post({
                    url: f.ANM.APPLICATION_OWNER_TRANSFER(t),
                    body: { team_id: n }
                })
            ).body;
        return (
            d.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: r
            }),
            r
        );
    },
    async fetchApplications(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e;
        if (!t) {
            let t = (e) => {
                var t, n;
                let r = E.Z.getApplication(e),
                    i = (0, _.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, f.udG.EMBEDDED) && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                return !(null != r && !i) && !E.Z.isFetchingApplication(e) && !E.Z.didFetchingApplicationFail(e) && e.length > 0;
            };
            n = e.filter(t);
        }
        if (n.length > 0) {
            let e;
            d.Z.dispatch({
                type: 'APPLICATIONS_FETCH',
                applicationIds: n
            });
            try {
                e = await c.tn.get({
                    url: f.ANM.APPLICATIONS_PUBLIC,
                    query: new URLSearchParams(n.map((e) => ['application_ids', e])).toString(),
                    oldFormErrors: !0
                });
            } catch (e) {
                throw (
                    (d.Z.dispatch({
                        type: 'APPLICATIONS_FETCH_FAIL',
                        applicationIds: n
                    }),
                    e)
                );
            }
            d.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: e.body
            });
        }
    },
    fetchApplication: h
};
let p = (0, u.Kb)(E.Z, {
    queryId: (e) => (null != e ? ['applications', e] : null),
    get: (e) => (null != e ? E.Z.getApplication(e) : null),
    load: (e, t) => (null != t ? h(t, !1, e).then(f.dG4) : Promise.resolve()),
    useStateHook: u.e7
});
