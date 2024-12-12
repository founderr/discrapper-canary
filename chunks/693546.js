var i = r(544891),
    a = r(570140),
    s = r(668781),
    o = r(287734),
    l = r(970606),
    u = r(131704),
    c = r(826581),
    d = r(246364),
    f = r(937111),
    _ = r(981631),
    h = r(388032);
let p = async (e) => {
        let n = await i.tn.get({
                url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(e),
                rejectWithError: !1
            }),
            r = (0, f.j)(n.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: r
            }),
            n
        );
    },
    m = async (e) => {
        let { guildId: n, status: r = d.wB.SUBMITTED, before: s, after: o, limit: l = d.tB, force: u = !1 } = e,
            h = u || !c.Z.hasFetched(n);
        if (!c.Z.isFetching() && h) {
            a.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var p;
                let e = await i.tn.get({
                        url: _.ANM.GUILD_JOIN_REQUESTS(n),
                        query: {
                            status: r,
                            limit: l,
                            before: s,
                            after: o
                        },
                        rejectWithError: !1
                    }),
                    u = e.body.total,
                    c = (null !== (p = e.body.guild_join_requests) && void 0 !== p ? p : []).map(f.j);
                return (
                    a.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: r,
                        requests: c,
                        total: u,
                        limit: l,
                        guildId: n
                    }),
                    e
                );
            } catch (e) {
                throw (a.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE' }), e);
            }
        }
    },
    g = async (e) => {
        try {
            let n = await i.tn.del({
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: null
                }),
                n
            );
        } catch (e) {
            throw e;
        }
    },
    E = async (e, n) => {
        try {
            return await i.tn.post({
                url: _.ANM.GUILD_JOIN_REQUEST_ACK(e, n),
                rejectWithError: !1
            });
        } catch (e) {
        } finally {
            a.Z.dispatch({
                type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
                id: n,
                guildId: e
            });
        }
    },
    v = async function (e, n, r) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.wB.APPROVED,
            u = arguments.length > 4 ? arguments[4] : void 0;
        (0, l.r2)({
            guildId: e,
            actionType: o,
            applicationUserId: n
        });
        let c = await i.tn
            .patch({
                url: _.ANM.GUILD_JOIN_REQUEST_ID(e, r),
                body: {
                    action: o,
                    rejection_reason: u
                },
                rejectWithError: !1
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === _.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        s.Z.show({
                            title: h.intl.string(h.t.DxJj4e),
                            body: h.intl.string(h.t.rSAOk5)
                        }),
                    Promise.reject(e)
                )
            );
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: c.body.application_status,
            request: c.body
        });
    },
    I = async (e, n) => {
        let r = await i.tn.patch({
            url: _.ANM.GUILD_JOIN_REQUESTS(e),
            body: { action: n },
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
                guildId: e,
                action: n
            }),
            r.body
        );
    },
    T = async (e) => {
        try {
            let { body: n } = await i.tn.post({
                url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: n
                }),
                n
            );
        } catch (e) {
            throw e;
        }
    },
    b = async () => {
        let e = await i.tn.get({
            url: _.ANM.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
            guilds: e.body
        });
    },
    y = (e, n) => {
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
            guildId: e,
            applicationTab: n
        });
    },
    S = (e, n) => {
        a.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
            guildId: e,
            sortOrder: n
        });
    },
    A = (e, n) => {
        null != n &&
            (0, l.bH)({
                guildId: e,
                applicationStatus: n.applicationStatus,
                applicationUserId: n.userId
            }),
            a.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: n
            });
    },
    N = async function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = await i.tn.post({
                url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e),
                rejectWithError: !1
            }),
            s = (0, u.q_)(r.body);
        return (
            a.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: s
            }),
            n && o.default.selectPrivateChannel(s.id),
            s.id
        );
    },
    C = async (e) => {
        try {
            let n = await i.tn.get({
                url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: n.body.cooldown
                }),
                n
            );
        } catch (n) {
            throw (
                (a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                n)
            );
        }
    };
n.Z = {
    fetchGuildJoinRequest: p,
    fetchGuildJoinRequests: m,
    ackUserGuildJoinRequest: E,
    removeGuildJoinRequest: g,
    updateGuildJoinRequest: v,
    actionAllPendingJoinRequests: I,
    resetGuildJoinRequest: T,
    fetchRequestToJoinGuilds: b,
    setSelectedApplicationTab: y,
    setSelectedSortOrder: S,
    setSelectedGuildJoinRequest: A,
    createOrEnterJoinRequestInterview: N,
    fetchJoinRequestCooldown: C
};
