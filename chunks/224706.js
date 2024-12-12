var i = r(47120);
var a = r(411104);
var s = r(664751),
    o = r(990547),
    l = r(243814),
    u = r(544891),
    c = r(283693),
    d = r(570140),
    f = r(638880),
    _ = r(812206),
    h = r(439849),
    p = r(669764),
    m = r(706454),
    g = r(757266),
    E = r(77498),
    v = r(283595),
    I = r(417363),
    T = r(626135),
    b = r(630388),
    y = r(877481),
    S = r(358085),
    A = r(573261),
    N = r(278323),
    C = r(58642),
    R = r(254854),
    O = r(981631),
    D = r(701488),
    L = r(388032);
let x = 3,
    w = 20;
function P(e) {
    let { applicationId: n, secret: r, channelId: i, intent: a = D.Ws.PLAY, embedded: s = !1, source: o, partyId: l, locationObject: u, analyticsLocations: c } = e;
    U({
        applicationId: n,
        channelId: i,
        embedded: s,
        source: o,
        partyId: l,
        locationObject: u,
        analyticsLocations: c
    })
        .then(() => y.Z.waitConnected(n))
        .then(() => Promise.race([y.Z.waitSubscribed(n, O.zMe.ACTIVITY_JOIN)]))
        .then(() => {
            d.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: n,
                secret: r,
                intent: a,
                embedded: s
            });
        })
        .catch(() =>
            d.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: n
            })
        );
}
function M(e, n) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: n
          };
}
function k(e) {
    return u.tn
        .post({
            url: O.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: 'token',
                scope: [l.x.IDENTIFY].join(' ')
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let n = e.body.location.split(/#|\?/),
                    r = s.parse(n[n.length - 1]);
                if ('invalid_request' === r.error) return null;
                if (null != r.error) {
                    var i;
                    throw Error('OAuth2 Error: '.concat(r.error, ': ').concat(null !== (i = r.error_description) && void 0 !== i ? i : 'unknown error'));
                }
                return r.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function U(e) {
    let { applicationId: n, branchId: r, channelId: i, embedded: a = !1, source: s, partyId: o, locationObject: l = {}, analyticsLocations: u = [] } = e;
    if (a)
        return null == i
            ? Promise.reject(Error('Invalid channel ID'))
            : (await (0, f.Z)({
                  applicationId: n,
                  activityChannelId: i,
                  source: s,
                  partyId: o,
                  locationObject: l,
                  analyticsLocations: u
              }),
              Promise.resolve());
    if (g.Z.isConnected(n)) return Promise.resolve();
    let c = null;
    if (null == r) {
        let e = v.Z.getActiveLibraryApplication(n);
        r = null != e ? e.branchId : n;
    }
    if (I.Z.isLaunchable(n, r)) {
        let e = I.Z.getState(n, r),
            i = v.Z.getActiveLaunchOptionId(n, r);
        if (null == e) throw Error('Missing dispatch game when launching');
        let a = v.Z.getLibraryApplication(n, r);
        if (null == a) throw Error('Missing library application when launching');
        c = k(n).then((n) => y.Z.launchDispatchApplication(e, n, m.default.locale, a.getBranchName(), i));
    } else {
        let e = _.Z.getApplication(n);
        c = null != e ? y.Z.launch(e) : y.Z.launchGame(n);
    }
    let h = Error('game not found');
    return null != c
        ? (d.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: n,
              branchId: r
          }),
          d.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: n
          }),
          c
              .then((e) => {
                  d.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: n,
                      pids: e
                  });
              })
              .catch((e) => {
                  R.Z.show(O.kVF.LAUNCH_GAME_FAILURE, L.intl.string(L.t.YZEBdn)),
                      d.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: n,
                          error: h
                      });
              }))
        : (d.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: n,
              error: h
          }),
          Promise.reject(h));
}
n.Z = {
    addGame(e, n) {
        d.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            T.default.track(O.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: n });
    },
    toggleOverlay(e, n) {
        let r = E.Z.getGameByName(e.name);
        if (null != r) {
            let e = v.Z.getActiveLibraryApplication(r.id);
            if (null != e) {
                let n = b.x9(e.getFlags(), O.eHb.OVERLAY_DISABLED);
                C.h(e.id, e.branchId, n);
                return;
            }
        }
        d.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newEnabledValue: n
        });
    },
    toggleDetection(e) {
        d.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, n) {
        d.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: n
        });
    },
    identifyGame: (e, n) =>
        (0, h.Z)().then(
            (n) =>
                new Promise((r, i) => {
                    if (null == n) {
                        i(Error('Game utils module not loaded'));
                        return;
                    }
                    n.identifyGame(e, (n, a) => {
                        if (0 !== n) {
                            i(Error('Error '.concat(n, ' when fetching info on ').concat(e)));
                            return;
                        }
                        if (null == a.icon || '' === a.icon || null == a.name || '' === a.name) {
                            i(Error('Did not find data on '.concat(e)));
                            return;
                        }
                        d.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: a.name,
                            icon: 'data:image/png;base64,'.concat(a.icon)
                        }),
                            r(a);
                    });
                })
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
            r = n ? e : e.filter(p.Z.canFetch);
        if (0 === r.length) return;
        d.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: r
        });
        let i = async (e) => {
            try {
                let n = await u.tn.get({
                    url: O.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e },
                    rejectWithError: !0
                });
                d.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: n.body.supplemental_game_data
                });
            } catch {
                d.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; r.length > 0; ) i(r.splice(0, w));
    },
    getDetectableGames() {
        if (E.Z.fetching || null != E.Z.lastFetched) return;
        let e = E.Z.detectableGamesEtag;
        d.Z.wait(() => {
            d.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                A.Z.get({
                    url: O.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: o.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (n) => {
                            var r;
                            return (0, c.iG)({
                                sent_etag: e,
                                received_etag: null == n ? void 0 : null === (r = n.headers) || void 0 === r ? void 0 : r.etag
                            });
                        }
                    },
                    rejectWithError: !1
                }).then(
                    (e) => {
                        let {
                            body: n,
                            headers: { etag: r }
                        } = e;
                        d.Z.dispatch({
                            type: 'GAMES_DATABASE_UPDATE',
                            games: n,
                            etag: r
                        });
                    },
                    (e) => {
                        let { status: n } = e;
                        304 === n
                            ? d.Z.dispatch({
                                  type: 'GAMES_DATABASE_UPDATE',
                                  games: [],
                                  etag: E.Z.detectableGamesEtag
                              })
                            : d.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                    }
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: n, iconHash: r, publisher: i, distributor: a, sku: s, executableName: o } = e,
            l = (0, h.F)(o);
        if (null != l)
            u.tn
                .post({
                    url: O.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: n,
                        os: (0, S.getPlatformName)(),
                        icon: r,
                        distributor_application: M(a, s),
                        executable: l,
                        publisher: i,
                        report_version: x
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((e) => {
                    let {
                        body: { name: n, hash: r, missing_data: i }
                    } = e;
                    d.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: n,
                        hash: r,
                        missingData: i
                    });
                });
    },
    uploadIcon(e, n, r) {
        u.tn.post({
            url: O.ANM.UNVERIFIED_APPLICATIONS_ICONS,
            body: {
                application_name: e,
                application_hash: n,
                icon: r
            },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    deleteEntry(e) {
        d.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: U,
    async join(e) {
        let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: s, intent: o = D.Ws.PLAY, embedded: l = !1, source: u, partyId: c, locationObject: f, analyticsLocations: _ } = e;
        if (__OVERLAY__)
            return (
                d.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: n,
                    sessionId: r,
                    applicationId: i,
                    channelId: a,
                    messageId: s
                }),
                Promise.resolve(!0)
            );
        d.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: i
        });
        try {
            let e = await N.Z.getJoinSecret(n, r, i, a, s);
            return (
                P({
                    applicationId: i,
                    secret: e,
                    channelId: a,
                    intent: o,
                    embedded: l,
                    partyId: c,
                    source: u,
                    locationObject: f,
                    analyticsLocations: _
                }),
                !0
            );
        } catch (e) {
            return (
                d.Z.dispatch({
                    type: 'ACTIVITY_JOIN_FAILED',
                    applicationId: i
                }),
                !1
            );
        }
    },
    joinWithSecret: P
};
