"use strict";
n.r(t), n("47120"), n("411104");
var i = n("664751"),
  r = n("243814"),
  s = n("544891"),
  a = n("570140"),
  o = n("566620"),
  l = n("812206"),
  u = n("439849"),
  d = n("669764"),
  _ = n("706454"),
  c = n("757266"),
  E = n("77498"),
  I = n("283595"),
  T = n("417363"),
  f = n("626135"),
  S = n("630388"),
  h = n("877481"),
  A = n("358085"),
  m = n("278323"),
  N = n("58642"),
  p = n("254854"),
  O = n("981631"),
  C = n("701488"),
  R = n("689938");

function g(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: i,
    intent: r = C.ActivityIntent.PLAY,
    embedded: s = !1,
    analyticsLocations: o = []
  } = e;
  L(t, null, i, s, o).then(() => h.default.waitConnected(t)).then(() => Promise.race([h.default.waitSubscribed(t, O.RPCEvents.ACTIVITY_JOIN)])).then(() => {
    a.default.dispatch({
      type: "ACTIVITY_JOIN",
      applicationId: t,
      secret: n,
      intent: r,
      embedded: s
    })
  }).catch(() => a.default.dispatch({
    type: "ACTIVITY_JOIN_FAILED",
    applicationId: t
  }))
}

function L(e, t, n) {
  let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
  if (u) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, o.startEmbeddedActivity)(n, e, d), Promise.resolve());
  if (c.default.isConnected(e)) return Promise.resolve();
  let E = null;
  if (null == t) {
    let n = I.default.getActiveLibraryApplication(e);
    t = null != n ? n.branchId : e
  }
  if (T.default.isLaunchable(e, t)) {
    var f;
    let n = T.default.getState(e, t),
      a = I.default.getActiveLaunchOptionId(e, t);
    if (null == n) throw Error("Missing dispatch game when launching");
    let o = I.default.getLibraryApplication(e, t);
    if (null == o) throw Error("Missing library application when launching");
    E = (f = e, s.HTTP.post({
      url: O.Endpoints.OAUTH2_AUTHORIZE,
      query: {
        client_id: f,
        response_type: "token",
        scope: [r.OAuth2Scopes.IDENTIFY].join(" ")
      },
      retries: 3,
      body: {
        authorize: !0
      },
      oldFormErrors: !0
    }).then(e => {
      let t = e.body.location.split(/#|\?/),
        n = i.parse(t[t.length - 1]);
      if ("invalid_request" === n.error) return null;
      if (null != n.error) {
        var r;
        throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (r = n.error_description) && void 0 !== r ? r : "unknown error"))
      }
      return n.access_token
    }, e => {
      if (404 === e.status) return null;
      throw e
    })).then(e => h.default.launchDispatchApplication(n, e, _.default.locale, o.getBranchName(), a))
  } else {
    let t = l.default.getApplication(e);
    E = null != t ? h.default.launch(t) : h.default.launchGame(e)
  }
  let S = Error("game not found");
  return null != E ? (a.default.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: e,
    branchId: t
  }), a.default.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: e
  }), E.then(t => {
    a.default.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: e,
      pids: t
    })
  }).catch(t => {
    p.default.show(O.NoticeTypes.LAUNCH_GAME_FAILURE, R.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), a.default.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: e,
      error: S
    })
  })) : (a.default.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: e,
    error: S
  }), Promise.reject(S))
}
t.default = {
  addGame(e, t) {
    a.default.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), f.default.track(O.AnalyticEvents.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t) {
    let n = E.default.getGameByName(e.name);
    if (null != n) {
      let e = I.default.getActiveLibraryApplication(n.id);
      if (null != e) {
        let t = S.toggleFlag(e.getFlags(), O.LibraryApplicationFlags.OVERLAY_DISABLED);
        N.updateFlags(e.id, e.branchId, t);
        return
      }
    }
    a.default.dispatch({
      type: "RUNNING_GAME_TOGGLE_OVERLAY",
      game: e,
      newEnabledValue: t
    })
  },
  toggleDetection(e) {
    a.default.dispatch({
      type: "RUNNING_GAME_TOGGLE_DETECTION",
      game: e
    })
  },
  editName(e, t) {
    a.default.dispatch({
      type: "RUNNING_GAME_EDIT_NAME",
      game: e,
      newName: t
    })
  },
  identifyGame: (e, t) => (0, u.default)().then(t => new Promise((n, i) => {
    if (null == t) {
      i(Error("Game utils module not loaded"));
      return
    }
    t.identifyGame(e, (t, r) => {
      if (0 !== t) {
        i(Error("Error ".concat(t, " when fetching info on ").concat(e)));
        return
      }
      if (null == r.icon || "" === r.icon || null == r.name || "" === r.name) {
        i(Error("Did not find data on ".concat(e)));
        return
      }
      a.default.dispatch({
        type: "GAME_ICON_UPDATE",
        gameName: r.name,
        icon: "data:image/png;base64,".concat(r.icon)
      }), n(r)
    })
  })),
  async getDetectableGamesSupplemental(e) {
    let t = e.filter(d.default.canFetch);
    if (0 !== t.length) {
      a.default.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
        applicationIds: t
      });
      try {
        let e = await s.HTTP.get({
          url: O.Endpoints.APPLICATIONS_GAMES_SUPPLEMENTAL,
          query: {
            application_ids: t
          }
        });
        a.default.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
          applicationIds: t,
          supplementalGameData: e.body.supplemental_game_data
        })
      } catch {
        a.default.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
          applicationIds: t
        })
      }
    }
  },
  getDetectableGames() {
    !E.default.fetching && null == E.default.lastFetched && a.default.wait(() => {
      a.default.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), s.HTTP.get({
        url: O.Endpoints.APPLICATIONS_DETECTABLE,
        headers: {
          "If-None-Match": E.default.detectableGamesEtag
        },
        retries: 1,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t,
          headers: {
            etag: n
          }
        } = e;
        a.default.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? a.default.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: [],
          etag: E.default.detectableGamesEtag
        }) : a.default.dispatch({
          type: "GAMES_DATABASE_FETCH_FAIL"
        })
      })
    })
  },
  reportUnverifiedGame(e) {
    let {
      name: t,
      iconHash: n,
      publisher: i,
      distributor: r,
      sku: o,
      executableName: l
    } = e, d = (0, u.cleanExecutablePath)(l);
    if (null != d) {
      var _, c;
      s.HTTP.post({
        url: O.Endpoints.UNVERIFIED_APPLICATIONS,
        body: {
          name: t,
          os: (0, A.getPlatformName)(),
          icon: n,
          distributor_application: (_ = r, c = o, null == _ || "" === _ ? null : {
            distributor: _,
            sku: c
          }),
          executable: d,
          publisher: i,
          report_version: 3
        },
        retries: 1,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: {
            name: t,
            hash: n,
            missing_data: i
          }
        } = e;
        a.default.dispatch({
          type: "UNVERIFIED_GAME_UPDATE",
          name: t,
          hash: n,
          missingData: i
        })
      })
    }
  },
  uploadIcon(e, t, n) {
    s.HTTP.post({
      url: O.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
      body: {
        application_name: e,
        application_hash: t,
        icon: n
      },
      retries: 1,
      oldFormErrors: !0
    })
  },
  deleteEntry(e) {
    a.default.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: L,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: i,
      channelId: r,
      messageId: s,
      intent: o = C.ActivityIntent.PLAY,
      embedded: l = !1
    } = e;
    if (__OVERLAY__) return a.default.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: i,
      channelId: r,
      messageId: s
    }), Promise.resolve(!0);
    a.default.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: i
    });
    try {
      let e = await m.default.getJoinSecret(t, n, i, r, s);
      return g({
        applicationId: i,
        secret: e,
        channelId: r,
        intent: o,
        embedded: l
      }), !0
    } catch (e) {
      return a.default.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: i
      }), !1
    }
  },
  joinWithSecret: g
}