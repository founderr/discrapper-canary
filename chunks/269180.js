"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("70102"), n("222007");
var i = n("157552"),
  r = n("605250"),
  s = n("831610"),
  a = n("261131"),
  o = n("271938"),
  l = n("86878"),
  u = n("368694"),
  c = n("560733"),
  d = n("152723"),
  p = n("773336"),
  h = n("253981"),
  f = n("50885"),
  E = n("49111");
let _ = new r.default("Games"),
  m = {},
  S = 0,
  g = null;

function T() {
  return null != g ? Promise.resolve(g) : (0, p.isDesktop)() ? f.default.ensureModule("discord_game_utils").then(() => {
    let e = f.default.getGameUtils();
    return null != e && null != e.findLaunchable ? (g = e, e) : Promise.reject(Error("game utils not found"))
  }) : Promise.reject(Error("not desktop client"))
}

function I(e) {
  let t = {
      id: e.id,
      name: e.name,
      thirdPartySkus: e.thirdPartySkus,
      executables: e.executables.filter(e => e.os === (0, p.getPlatformName)()).map(e => e.name)
    },
    n = e.aliases.map(e => ({
      ...t,
      name: e
    }));
  return [t, ...n]
}

function v(e) {
  return {
    id: e
  }
}
async function C(e) {
  if (!Array.isArray(e) && (e = [e]), !u.default.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
      let {
        distributor: t
      } = e;
      return t === E.Distributors.BATTLENET
    }))), 0 === e.length) throw Error("No remaining launchable queries");
  let t = Date.now();
  t > S && (S = t + 36e5, m = {});
  let n = await T();
  for (let t of e) {
    let e = m[t.id];
    if (null != e) return e;
    let i = await new Promise(e => n.findLaunchable(t, e));
    if (null != i) return m[t.id] = i, i
  }
  throw Error("could not find launchable")
}

function A(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
  if (e()) {
    t();
    return
  }
  setTimeout(() => {
    250 * i <= 12e4 ? A(e, t, n, i + 1) : n()
  }, 250)
}

function R(e) {
  return _.info("launch", e), new Promise((t, n) => {
    let i = h.default.safeParseWithQuery(e.launchTarget);
    null == i ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
  })
}
var N = {
  waitSubscribed: (e, t) => new Promise((n, i) => A(() => a.default.isSubscribed(e, t), n, i)),
  waitConnected(e) {
    return new Promise(A.bind(this, () => l.default.isConnected(e)))
  },
  isLaunchable: e => C(I(e)).then(e => null != e).catch(() => !1),
  launch: e => C(I(e)).then(R),
  launchDispatchApplication(e, t, n, r, a) {
    let {
      launchOptions: l,
      defaultLaunchOptionId: u,
      installPath: p,
      applicationId: h,
      branchId: f,
      buildId: _,
      shouldPatch: m
    } = e;
    if (null == l || null == u || null == p) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
    null == a && (a = u);
    let S = l[a];
    if (null == S) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
    return (0, i.fetchBranches)([f]).then(e => {
      let t = e[0];
      if (null == t) return Promise.reject(Error("branch is null"));
      let {
        liveBuildId: n
      } = t;
      if (m && n !== _) return Promise.reject(Error("live build id changed"))
    }).then(() => d.default.runLaunchSetup(h, f)).then(() => {
      let e = (0, s.default)(p),
        i = {
          DISCORD_INSTANCE_ID: c.default.getId().toString(),
          DISCORD_ACCESS_TOKEN: null != t ? t : "",
          DISCORD_CURRENT_LOCALE: n,
          DISCORD_CURRENT_BRANCH: r,
          DISCORD_STORAGE_PATH: E.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(e, o.default.getId())
        };
      return d.default.launch(h, f, S.name, i)
    })
  },
  removeShortcuts: e => (0, p.isWindows)() ? T().then(t => {
    var n, i;
    return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
  }) : Promise.resolve(!1),
  createShortcuts(e, t, n, i, r) {
    if (null == r || !(0, p.isWindows)()) return Promise.resolve(!1);
    let s = "discord:///library/".concat(i, "/launch"),
      a = "".concat(r, "\\icon.ico");
    return T().then(i => {
      var r, o;
      return null !== (o = null === (r = i.createShortcuts) || void 0 === r ? void 0 : r.call(i, e, t, n, s, a)) && void 0 !== o && o
    })
  },
  isGameLaunchable: e => C({
    id: e
  }).then(e => null != e).catch(() => !1),
  launchGame(e) {
    if (l.default.isConnected(e)) return Promise.resolve();
    return C({
      id: e
    }).then(R)
  },
  isProtocolRegistered: e => T().then(t => {
    var n, i;
    return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
  }),
  setRecentGames(e) {
    T().then(t => {
      var n;
      return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
    }).catch(() => {})
  }
}