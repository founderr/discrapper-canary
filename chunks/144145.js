"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("653041"), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("278323"),
  o = a("287734"),
  u = a("230711"),
  d = a("726542"),
  c = a("620662"),
  f = a("841784"),
  E = a("802856"),
  h = a("594190"),
  _ = a("592745"),
  C = a("553795"),
  m = a("757266"),
  S = a("283595"),
  p = a("417363"),
  I = a("626135"),
  g = a("804739"),
  T = a("346329"),
  A = a("981631"),
  N = a("689938");
let v = d.default.get(A.PlatformTypes.XBOX).name;

function R(e) {
  let {
    currentActivities: t
  } = e, a = t.length > 1, R = function(e) {
    let {
      currentActivities: t
    } = e, a = (0, l.useStateFromStores)([C.default], () => C.default.getAccounts().some(e => e.type === d.default.get(A.PlatformTypes.XBOX).type)), s = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, E.default)(t)
    });
    return a || !s ? null : (0, n.jsx)(i.MenuItem, {
      id: "xbox-connect",
      action: () => u.default.open(A.UserSettingsSections.CONNECTIONS),
      label: N.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: v
      })
    })
  }(e), L = function(e) {
    let {
      currentActivities: t
    } = e, a = s.useContext(I.AnalyticsContext);
    return (0, l.useStateFromStoresArray)([h.default, S.default, _.default, p.default, m.default], () => t.filter(e => !(0, f.default)(e.activity)).map(e => {
      let {
        activity: t,
        game: n
      } = e, s = S.default.getActiveLibraryApplication(n.id);
      return {
        ...e,
        libraryApplication: s,
        canJoin: null != t && (0, c.default)(t, A.ActivityFlags.JOIN) && t.type === A.ActivityTypes.PLAYING,
        canPlay: (0, g.isLaunchable)({
          LibraryApplicationStore: S.default,
          LaunchableGameStore: _.default,
          DispatchApplicationStore: p.default,
          ConnectedAppsStore: m.default,
          applicationId: n.id,
          branchId: null != s ? s.branchId : null
        }),
        isLaunching: _.default.launchingGames.has(n.id),
        isRunning: h.default.getRunningVerifiedApplicationIds().includes(n.id),
        location: a.location
      }
    }), [a.location, t])
  }(e), O = [];
  for (let e of L) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && O.push(function(e, t) {
      let {
        canJoin: a,
        activity: s,
        activityUser: l
      } = e;
      if (!a || null == s) return null;
      async function u() {
        if (null == s) return;
        let e = await r.default.sendActivityInviteUser({
          type: A.ActivityActionTypes.JOIN_REQUEST,
          userId: l.id,
          activity: s,
          location: A.AnalyticsLocations.PROFILE_POPOUT
        });
        null != e && o.default.selectPrivateChannel(e.id)
      }
      return (0, n.jsx)(i.MenuItem, {
        id: "join-".concat(s.session_id),
        label: t ? N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({
          name: l.toString()
        }) : N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        action: u
      })
    }(e, a), function(e, t) {
      let {
        activity: a,
        game: s,
        libraryApplication: l,
        location: r,
        canPlay: o,
        isRunning: u,
        isLaunching: d
      } = e;
      if (!o || null == a) return null;
      let c = u ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({
        name: s.name
      }) : d ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({
        name: s.name
      }) : void 0;
      return (0, n.jsx)(i.MenuItem, {
        id: "play-".concat(a.session_id),
        action: function() {
          (0, T.playApplication)(s.id, l, {
            analyticsParams: {
              location: {
                ...r,
                object: A.AnalyticsObjects.LIST_ITEM
              }
            }
          })
        },
        label: t ? N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({
          name: s.name
        }) : N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
        subtext: c
      })
    }(e, a))
  }
  return [R, ...O]
}