"use strict";
let a, s;
n.r(t), n("47120");
var l, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("433517"),
  E = n("570140"),
  h = n("700785"),
  _ = n("388610"),
  C = n("592125"),
  m = n("981631"),
  S = n("71080");
let I = new Set,
  p = m.FormStates.CLOSED,
  T = !1,
  g = null,
  A = null,
  N = null,
  O = null,
  v = null,
  R = null,
  L = f.Storage.get(S.ADVANCED_MODE_ON_KEY) || !1;

function P(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = h.makeEveryoneOverwrite(t)), n
}

function M() {
  if (N = _.default.getChannel(), O = _.default.getCategory(), null == N) return !1;
  let e = N.getGuildId();
  A = g = P(N), null == g[v] && (v = e), s = null != O, a = h.areChannelsLocked(N, O), R = null, T = !1, p = m.FormStates.CLOSED, I.clear()
}
class y extends(l = c.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default)
  }
  hasChanges() {
    return T
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == g ? void 0 : g[e]
  }
  get editedPermissionIds() {
    return Array.from(I)
  }
  get permissionOverwrites() {
    return g
  }
  get selectedOverwriteId() {
    return v
  }
  get formState() {
    return p
  }
  get isLockable() {
    return s
  }
  get locked() {
    return a
  }
  get channel() {
    return N
  }
  get category() {
    return O
  }
  get advancedMode() {
    return L
  }
}
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(i = y) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o, t.default = new y(E.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != N || t !== m.ChannelSettingsSections.PERMISSIONS) return !1;
    M()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: M,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == g ? void 0 : g[t];
    if (null == l || null == N) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, g = {
      ...g,
      [t]: l
    }, I.add(t), p = m.FormStates.OPEN, T = !d().isEqual(g, A), a = h.areChannelsLocked(N, O)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != g && null != g[t]) v = t;
    else {
      if (null == N) return !1;
      R = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    p = m.FormStates.CLOSED, g = null, A = null, N = null, O = null, T = !1, I.clear(), v = null, R = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == N) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == N || N.id !== e || null == (N = C.default.getChannel(e))) return !1;
      O = _.default.getCategory();
      let t = N.getGuildId();
      if (null == t) return !1;
      A = P(N);
      let n = {};
      return I.forEach(e => {
        null != g && (n[e] = g[e])
      }), null == n[t] && null == N.permissionOverwrites[t] && (n[t] = h.makeEveryoneOverwrite(t)), null == (g = {
        ...N.permissionOverwrites,
        ...n
      })[v] ? v = t : null != R && null != g[R] && (v = R, R = null), a = h.areChannelsLocked(N, O), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    p = m.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? p = m.FormStates.OPEN : (p = m.FormStates.CLOSED, M())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    L = t, f.Storage.set(S.ADVANCED_MODE_ON_KEY, t)
  }
})