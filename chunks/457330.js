var r = n(610138);
var i = n(216116);
var a = n(78328);
var o = n(815648);
var s = n(47120);
var l = n(990547),
    u = n(544891),
    c = n(570140),
    d = n(275759),
    _ = n(710845),
    E = n(314897),
    f = n(553795),
    h = n(626135),
    p = n(573261),
    m = n(981631);
let I = new _.Z('ConnectedAccounts');
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u.tn.post({
        url: m.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: m.BFP.has(e)
        },
        oldFormErrors: !0
    });
}
t.Z = {
    fetch: () =>
        u.tn
            .get({
                url: m.ANM.CONNECTIONS,
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
        h.default.track(m.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let s = m.ANM.CONNECTIONS_AUTHORIZE(e),
            l = new URLSearchParams();
        null != i && l.append('two_way_user_code', i), null != o && l.append('success_redirect', o), null != r ? (l.append('two_way_link_type', r), l.append('two_way_link', 'true')) : null != a && l.append('two_way_link', String(a));
        let c = E.default.getSessionId();
        null != c && l.append('session_id', c), (s = s + '?' + l.toString());
        let _ = await u.tn.get({
                url: s,
                oldFormErrors: !0
            }),
            { state: p } = (0, d.xp)(null !== (t = _.body.url) && void 0 !== t ? t : '');
        return null != p && f.Z.addPendingAuthorizedState(p), _;
    },
    callback: T,
    connect(e, t, n, r, i) {
        var a;
        return p.Z.put({
            url: m.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (a = null == i ? void 0 : i.friend_sync) && void 0 !== a ? a : m.BFP.has(e)
            },
            context: { location: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: m.BFP.has(e)
                }
            }
        });
    },
    disconnect: (e, t) =>
        u.tn.del({
            url: m.ANM.CONNECTION(e, t),
            oldFormErrors: !0
        }),
    refresh: (e, t) =>
        u.tn.post({
            url: m.ANM.CONNECTION_REFRESH(e, t),
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
        p.Z.patch({
            url: m.ANM.CONNECTION(e, t),
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
                    url: m.ANM.INTEGRATION_JOIN(e),
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
                url: m.ANM.CONNECTION_ACCESS_TOKEN(e, t),
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
                (n.body.code === m.evJ.CONNECTION_REVOKED &&
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
            url: m.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) {
            I.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: s } = (0, d.xp)(t);
        if (null != o) {
            I.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: s
            });
            return;
        }
        return await T(e, {
            code: n,
            state: r,
            two_way_link_code: a,
            token_redirect_uri: i
        });
    }
};
