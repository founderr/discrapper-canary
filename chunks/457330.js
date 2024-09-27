var r = n(610138);
var i = n(216116);
var a = n(78328);
var o = n(815648);
var s = n(47120);
var l = n(990547),
    u = n(544891),
    c = n(570140),
    d = n(275759),
    _ = n(185669),
    E = n(710845),
    f = n(314897),
    h = n(553795),
    p = n(626135),
    m = n(573261),
    I = n(981631);
let T = new E.Z('ConnectedAccounts');
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u.tn.post({
        url: I.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: I.BFP.has(e)
        },
        oldFormErrors: !0
    });
}
function S(e, t, n, r) {
    return u.tn.post({
        url: I.ANM.CONNECTIONS_SESSION_HANDOFF(e),
        body: {
            state: t,
            code: n,
            openid_params: r
        },
        oldFormErrors: !0
    });
}
function A(e, t) {
    let n = new URLSearchParams();
    n.append('state', t);
    let r = ''.concat(I.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
    return u.tn.get({
        url: r,
        body: { state: t }
    });
}
t.Z = {
    fetch: () =>
        u.tn
            .get({
                url: I.ANM.CONNECTIONS,
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    c.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    c.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        var t;
        let { location: n, twoWayLinkType: r, userCode: i, twoWayLink: a, successRedirect: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        p.default.track(I.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let s = I.ANM.CONNECTIONS_AUTHORIZE(e),
            l = new URLSearchParams();
        null != i && l.append('two_way_user_code', i), null != o && l.append('success_redirect', o), null != r ? (l.append('two_way_link_type', r), l.append('two_way_link', 'true')) : null != a && l.append('two_way_link', String(a));
        let { enabled: c } = _.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (c) {
            let e = f.default.getSessionId();
            null != e && l.append('session_id', e);
        }
        s = s + '?' + l.toString();
        let E = await u.tn.get({
                url: s,
                oldFormErrors: !0
            }),
            { state: m } = (0, d.xp)(null !== (t = E.body.url) && void 0 !== t ? t : '');
        return null != m && h.Z.addPendingAuthorizedState(m), E;
    },
    callback: g,
    connect(e, t, n, r, i) {
        var a;
        return m.Z.put({
            url: I.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (a = null == i ? void 0 : i.friend_sync) && void 0 !== a ? a : I.BFP.has(e)
            },
            context: { location: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: I.BFP.has(e)
                }
            }
        });
    },
    disconnect: (e, t) =>
        u.tn.del({
            url: I.ANM.CONNECTION(e, t),
            oldFormErrors: !0
        }),
    refresh: (e, t) =>
        u.tn.post({
            url: I.ANM.CONNECTION_REFRESH(e, t),
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
        m.Z.patch({
            url: I.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { ...n }
            }
        }),
    joinServer(e, t) {
        c.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            u.tn.post(
                {
                    url: I.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0
                },
                (n) => {
                    c.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        !n.ok &&
                            (c.Z.dispatch({
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
            } = await u.tn.get({
                url: I.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0
            });
            return (
                c.Z.dispatch({
                    type: 'USER_CONNECTION_UPDATE',
                    platformType: e,
                    id: t,
                    accessToken: n
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === I.evJ.CONNECTION_REVOKED &&
                    c.Z.dispatch({
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
        u.tn.post({
            url: I.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) {
            T.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: s } = (0, d.xp)(t);
        if (null != o) {
            T.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: s
            });
            return;
        }
        return await g(e, {
            code: n,
            state: r,
            two_way_link_code: a,
            token_redirect_uri: i
        });
    },
    sessionHandoff: S,
    getHandoffStatus: A
};
