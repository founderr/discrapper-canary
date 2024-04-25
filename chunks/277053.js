"use strict";
let n, s;
a.r(t), a("47120");
var l, i, r, o, u = a("392711"),
  d = a.n(u),
  c = a("442837"),
  f = a("433517"),
  E = a("570140"),
  h = a("700785"),
  _ = a("388610"),
  C = a("592125"),
  m = a("981631"),
  S = a("71080");
let I = new Set,
  p = m.FormStates.CLOSED,
  T = !1,
  g = null,
  A = null,
  N = null,
  v = null,
  R = null,
  L = null,
  O = f.Storage.get(S.ADVANCED_MODE_ON_KEY) || !1;

function P(e) {
  let t = e.getGuildId(),
    a = {
      ...e.permissionOverwrites
    };
  return null != t && null == a[t] && (a[t] = h.makeEveryoneOverwrite(t)), a
}

function M() {
  if (N = _.default.getChannel(), v = _.default.getCategory(), null == N) return !1;
  let e = N.getGuildId();
  A = g = P(N), null == g[R] && (R = e), s = null != v, n = h.areChannelsLocked(N, v), L = null, T = !1, p = m.FormStates.CLOSED, I.clear()
}
class x extends(l = c.default.Store) {
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
    return R
  }
  get formState() {
    return p
  }
  get isLockable() {
    return s
  }
  get locked() {
    return n
  }
  get channel() {
    return N
  }
  get category() {
    return v
  }
  get advancedMode() {
    return O
  }
}
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(i = x) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o, t.default = new x(E.default, {
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
      allow: a,
      deny: s
    } = e, l = null == g ? void 0 : g[t];
    if (null == l || null == N) return !1;
    l = {
      ...l,
      allow: a,
      deny: s
    }, g = {
      ...g,
      [t]: l
    }, I.add(t), p = m.FormStates.OPEN, T = !d().isEqual(g, A), n = h.areChannelsLocked(N, v)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != g && null != g[t]) R = t;
    else {
      if (null == N) return !1;
      L = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    p = m.FormStates.CLOSED, g = null, A = null, N = null, v = null, T = !1, I.clear(), R = null, L = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == N) return !1;
    let a = !1;
    for (let e of t) !1 !== function(e) {
      if (null == N || N.id !== e || null == (N = C.default.getChannel(e))) return !1;
      v = _.default.getCategory();
      let t = N.getGuildId();
      if (null == t) return !1;
      A = P(N);
      let a = {};
      return I.forEach(e => {
        null != g && (a[e] = g[e])
      }), null == a[t] && null == N.permissionOverwrites[t] && (a[t] = h.makeEveryoneOverwrite(t)), null == (g = {
        ...N.permissionOverwrites,
        ...a
      })[R] ? R = t : null != L && null != g[L] && (R = L, L = null), n = h.areChannelsLocked(N, v), !0
    }(e.id) && (a = !0);
    return a
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
    O = t, f.Storage.set(S.ADVANCED_MODE_ON_KEY, t)
  }
})