n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(275759),
    o = n(185669),
    l = n(710845),
    u = n(314897),
    c = n(626135),
    d = n(573261),
    _ = n(981631);
let E = new l.Z('ConnectedAccounts');
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: _.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: _.BFP.has(e)
        },
        oldFormErrors: !0
    });
}
t.Z = {
    fetch: () =>
        i.tn
            .get({
                url: _.ANM.CONNECTIONS,
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        let { location: t, twoWayLinkType: n, userCode: r, twoWayLink: a, successRedirect: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c.default.track(_.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: t
        });
        let l = _.ANM.CONNECTIONS_AUTHORIZE(e),
            d = new URLSearchParams();
        null != r && d.append('two_way_user_code', r), null != s && d.append('success_redirect', s), null != n ? (d.append('two_way_link_type', n), d.append('two_way_link', 'true')) : null != a && d.append('two_way_link', String(a));
        let { enabled: E } = o.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (E) {
            let e = u.default.getSessionId();
            null != e && d.append('session_id', e);
        }
        return (
            (l = l + '?' + d.toString()),
            await i.tn.get({
                url: l,
                oldFormErrors: !0
            })
        );
    },
    callback: f,
    connect(e, t, n, i, a) {
        var s;
        return d.Z.put({
            url: _.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (s = null == a ? void 0 : a.friend_sync) && void 0 !== s ? s : _.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: _.BFP.has(e)
                }
            }
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: _.ANM.CONNECTION(e, t),
            oldFormErrors: !0
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: _.ANM.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
    setVisibility(e, t, n) {
        return this.update(e, t, { visibility: 1 === n });
    },
    setMetadataVisibility(e, t, n) {
        return this.update(e, t, { metadata_visibility: 1 === n });
    },
    setFriendSync(e, t, n) {
        return this.update(e, t, { friend_sync: n });
    },
    setShowActivity(e, t, n) {
        return this.update(e, t, { show_activity: n });
    },
    update: (e, t, n) =>
        d.Z.patch({
            url: _.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { ...n }
            }
        }),
    joinServer(e, t) {
        a.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            i.tn.post(
                {
                    url: _.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0
                },
                (n) => {
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        !n.ok &&
                            (a.Z.dispatch({
                                type: 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR',
                                integrationId: e,
                                error: n.hasErr ? void 0 : n.body.message
                            }),
                            null == t || t());
                }
            );
    },
    async refreshAccessToken(e, t) {
        try {
            let {
                body: { access_token: n }
            } = await i.tn.get({
                url: _.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0
            });
            return (
                a.Z.dispatch({
                    type: 'USER_CONNECTION_UPDATE',
                    platformType: e,
                    id: t,
                    accessToken: n
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === _.evJ.CONNECTION_REVOKED &&
                    a.Z.dispatch({
                        type: 'USER_CONNECTION_UPDATE',
                        platformType: e,
                        id: t,
                        revoked: !0
                    }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        i.tn.post({
            url: _.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) {
            E.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: l } = (0, s.xp)(t);
        if (null != o) {
            E.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: l
            });
            return;
        }
        return await f(e, {
            code: n,
            state: r,
            two_way_link_code: a,
            token_redirect_uri: i
        });
    },
    sessionHandoff: function (e, t, n, r) {
        return i.tn.post({
            url: _.ANM.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: r
            },
            oldFormErrors: !0
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append('state', t);
        let r = ''.concat(_.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
        return i.tn.get({
            url: r,
            body: { state: t }
        });
    }
};
