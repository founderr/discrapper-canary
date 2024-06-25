n.d(t, {
  Z: function() {
    return L
  }
}), n(653041), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(278323),
  o = n(287734),
  c = n(230711),
  u = n(726542),
  d = n(620662),
  E = n(841784),
  h = n(802856),
  _ = n(594190),
  I = n(592745),
  m = n(553795),
  T = n(757266),
  g = n(283595),
  p = n(417363),
  N = n(626135),
  S = n(804739),
  C = n(346329),
  A = n(981631),
  f = n(689938);
let Z = u.Z.get(A.ABu.XBOX).name;

function L(e) {
  let {
    currentActivities: t
  } = e, n = t.length > 1, L = function(e) {
    let {
      currentActivities: t
    } = e, n = (0, l.e7)([m.Z], () => m.Z.getAccounts().some(e => e.type === u.Z.get(A.ABu.XBOX).type)), i = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, h.Z)(t)
    });
    return n || !i ? null : (0, s.jsx)(a.MenuItem, {
      id: "xbox-connect",
      action: () => c.Z.open(A.oAB.CONNECTIONS),
      label: f.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: Z
      })
    })
  }(e), O = function(e) {
    let {
      currentActivities: t
    } = e, n = i.useContext(N.AnalyticsContext);
    return (0, l.Wu)([_.ZP, g.Z, I.Z, p.Z, T.Z], () => t.filter(e => !(0, E.Z)(e.activity)).map(e => {
      let {
        activity: t,
        game: s
      } = e, i = g.Z.getActiveLibraryApplication(s.id);
      return {
        ...e,
        libraryApplication: i,
        canJoin: null != t && (0, d.Z)(t, A.xjy.JOIN) && t.type === A.IIU.PLAYING,
        canPlay: (0, S.t)({
          LibraryApplicationStore: g.Z,
          LaunchableGameStore: I.Z,
          DispatchApplicationStore: p.Z,
          ConnectedAppsStore: T.Z,
          applicationId: s.id,
          branchId: null != i ? i.branchId : null
        }),
        isLaunching: I.Z.launchingGames.has(s.id),
        isRunning: _.ZP.getRunningVerifiedApplicationIds().includes(s.id),
        location: n.location
      }
    }), [n.location, t])
  }(e), v = [];
  for (let e of O) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && v.push(function(e, t) {
      let {
        canJoin: n,
        activity: i,
        activityUser: l
      } = e;
      if (!n || null == i) return null;
      async function c() {
        if (null == i) return;
        let e = await r.Z.sendActivityInviteUser({
          type: A.mFx.JOIN_REQUEST,
          userId: l.id,
          activity: i,
          location: A.Sbl.PROFILE_POPOUT
        });
        null != e && o.default.selectPrivateChannel(e.id)
      }
      return (0, s.jsx)(a.MenuItem, {
        id: "join-".concat(i.session_id),
        label: t ? f.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({
          name: l.toString()
        }) : f.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        action: c
      })
    }(e, n), function(e, t) {
      let {
        activity: n,
        game: i,
        libraryApplication: l,
        location: r,
        canPlay: o,
        isRunning: c,
        isLaunching: u
      } = e;
      if (!o || null == n) return null;
      let d = c ? f.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({
        name: i.name
      }) : u ? f.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({
        name: i.name
      }) : void 0;
      return (0, s.jsx)(a.MenuItem, {
        id: "play-".concat(n.session_id),
        action: function() {
          (0, C.playApplication)(i.id, l, {
            analyticsParams: {
              location: {
                ...r,
                object: A.qAy.LIST_ITEM
              }
            }
          })
        },
        label: t ? f.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({
          name: i.name
        }) : f.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
        subtext: d
      })
    }(e, n))
  }
  return [L, ...v]
}