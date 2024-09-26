var r = n(47120);
var i = n(411104);
var a = n(664751),
    o = n(990547),
    s = n(243814),
    l = n(544891),
    u = n(283693),
    c = n(570140),
    d = n(638880),
    _ = n(812206),
    E = n(439849),
    f = n(669764),
    h = n(706454),
    p = n(757266),
    m = n(77498),
    I = n(283595),
    T = n(417363),
    g = n(626135),
    S = n(630388),
    A = n(877481),
    v = n(358085),
    N = n(573261),
    O = n(278323),
    R = n(58642),
    C = n(254854),
    y = n(981631),
    L = n(701488),
    b = n(689938);
let D = 3,
    M = 20;
function P(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = L.Ws.PLAY, embedded: a = !1, source: o, partyId: s, locationObject: l, analyticsLocations: u } = e;
    x({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: o,
        partyId: s,
        locationObject: l,
        analyticsLocations: u
    })
        .then(() => A.Z.waitConnected(t))
        .then(() => Promise.race([A.Z.waitSubscribed(t, y.zMe.ACTIVITY_JOIN)]))
        .then(() => {
            c.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a
            });
        })
        .catch(() =>
            c.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: t
            })
        );
}
function U(e, t) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: t
          };
}
function w(e) {
    return l.tn
        .post({
            url: y.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: 'token',
                scope: [s.x.IDENTIFY].join(' ')
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0
        })
        .then(
            (e) => {
                let t = e.body.location.split(/#|\?/),
                    n = a.parse(t[t.length - 1]);
                if ('invalid_request' === n.error) return null;
                if (null != n.error) {
                    var r;
                    throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null !== (r = n.error_description) && void 0 !== r ? r : 'unknown error'));
                }
                return n.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function x(e) {
    let { applicationId: t, branchId: n, channelId: r, embedded: i = !1, source: a, partyId: o, locationObject: s = {}, analyticsLocations: l = [] } = e;
    if (i)
        return null == r
            ? Promise.reject(Error('Invalid channel ID'))
            : (await (0, d.Z)({
                  applicationId: t,
                  activityChannelId: r,
                  source: a,
                  partyId: o,
                  locationObject: s,
                  analyticsLocations: l
              }),
              Promise.resolve());
    if (p.Z.isConnected(t)) return Promise.resolve();
    let u = null;
    if (null == n) {
        let e = I.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (T.Z.isLaunchable(t, n)) {
        let e = T.Z.getState(t, n),
            r = I.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let i = I.Z.getLibraryApplication(t, n);
        if (null == i) throw Error('Missing library application when launching');
        u = w(t).then((t) => A.Z.launchDispatchApplication(e, t, h.default.locale, i.getBranchName(), r));
    } else {
        let e = _.Z.getApplication(t);
        u = null != e ? A.Z.launch(e) : A.Z.launchGame(t);
    }
    let E = Error('game not found');
    return null != u
        ? (c.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          c.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          u
              .then((e) => {
                  c.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: t,
                      pids: e
                  });
              })
              .catch((e) => {
                  C.Z.show(y.kVF.LAUNCH_GAME_FAILURE, b.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND),
                      c.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: E
                      });
              }))
        : (c.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: E
          }),
          Promise.reject(E));
}
t.Z = {
    addGame(e, t) {
        c.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            g.default.track(y.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t) {
        let n = m.Z.getGameByName(e.name);
        if (null != n) {
            let e = I.Z.getActiveLibraryApplication(n.id);
            if (null != e) {
                let t = S.x9(e.getFlags(), y.eHb.OVERLAY_DISABLED);
                R.h(e.id, e.branchId, t);
                return;
            }
        }
        c.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newEnabledValue: t
        });
    },
    toggleDetection(e) {
        c.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, t) {
        c.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: t
        });
    },
    identifyGame: (e, t) =>
        (0, E.Z)().then(
            (t) =>
                new Promise((n, r) => {
                    if (null == t) {
                        r(Error('Game utils module not loaded'));
                        return;
                    }
                    t.identifyGame(e, (t, i) => {
                        if (0 !== t) {
                            r(Error('Error '.concat(t, ' when fetching info on ').concat(e)));
                            return;
                        }
                        if (null == i.icon || '' === i.icon || null == i.name || '' === i.name) {
                            r(Error('Did not find data on '.concat(e)));
                            return;
                        }
                        c.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: i.name,
                            icon: 'data:image/png;base64,'.concat(i.icon)
                        }),
                            n(i);
                    });
                })
        ),
    getDetectableGamesSupplemental(e) {
        let t = e.filter(f.Z.canFetch);
        if (0 === t.length) return;
        c.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: t
        });
        let n = async (e) => {
            try {
                let t = await l.tn.get({
                    url: y.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e }
                });
                c.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch {
                c.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; t.length > 0; ) n(t.splice(0, M));
    },
    getDetectableGames() {
        if (m.Z.fetching || null != m.Z.lastFetched) return;
        let e = m.Z.detectableGamesEtag;
        c.Z.wait(() => {
            c.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                N.Z.get({
                    url: y.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: o.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, u.iG)({
                                sent_etag: e,
                                received_etag: null == t ? void 0 : null === (n = t.headers) || void 0 === n ? void 0 : n.etag
                            });
                        }
                    }
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n }
                        } = e;
                        c.Z.dispatch({
                            type: 'GAMES_DATABASE_UPDATE',
                            games: t,
                            etag: n
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? c.Z.dispatch({
                                  type: 'GAMES_DATABASE_UPDATE',
                                  games: [],
                                  etag: m.Z.detectableGamesEtag
                              })
                            : c.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                    }
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: a, executableName: o } = e,
            s = (0, E.F)(o);
        if (null != s)
            l.tn
                .post({
                    url: y.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, v.getPlatformName)(),
                        icon: n,
                        distributor_application: U(i, a),
                        executable: s,
                        publisher: r,
                        report_version: D
                    },
                    retries: 1,
                    oldFormErrors: !0
                })
                .then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r }
                    } = e;
                    c.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: t,
                        hash: n,
                        missingData: r
                    });
                });
    },
    uploadIcon(e, t, n) {
        l.tn.post({
            url: y.ANM.UNVERIFIED_APPLICATIONS_ICONS,
            body: {
                application_name: e,
                application_hash: t,
                icon: n
            },
            retries: 1,
            oldFormErrors: !0
        });
    },
    deleteEntry(e) {
        c.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: x,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: o = L.Ws.PLAY, embedded: s = !1, source: l, partyId: u, locationObject: d, analyticsLocations: _ } = e;
        if (__OVERLAY__)
            return (
                c.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a
                }),
                Promise.resolve(!0)
            );
        c.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await O.Z.getJoinSecret(t, n, r, i, a);
            return (
                P({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: o,
                    embedded: s,
                    partyId: u,
                    source: l,
                    locationObject: d,
                    analyticsLocations: _
                }),
                !0
            );
        } catch (e) {
            return (
                c.Z.dispatch({
                    type: 'ACTIVITY_JOIN_FAILED',
                    applicationId: r
                }),
                !1
            );
        }
    },
    joinWithSecret: P
};
