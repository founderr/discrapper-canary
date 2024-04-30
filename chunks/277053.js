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
let p = new Set,
  I = m.FormStates.CLOSED,
  T = !1,
  g = null,
  A = null,
  N = null,
  v = null,
  L = null,
  R = null,
  O = f.Storage.get(S.ADVANCED_MODE_ON_KEY) || !1;

function M(e) {
  let t = e.getGuildId(),
    a = {
      ...e.permissionOverwrites
    };
  return null != t && null == a[t] && (a[t] = h.makeEveryoneOverwrite(t)), a
}

function P() {
  if (N = _.default.getChannel(), v = _.default.getCategory(), null == N) return !1;
  let e = N.getGuildId();
  A = g = M(N), null == g[L] && (L = e), s = null != v, n = h.areChannelsLocked(N, v), R = null, T = !1, I = m.FormStates.CLOSED, p.clear()
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
    return Array.from(p)
  }
  get permissionOverwrites() {
    return g
  }
  get selectedOverwriteId() {
    return L
  }
  get formState() {
    return I
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
    P()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: P,
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
    }, p.add(t), I = m.FormStates.OPEN, T = !d().isEqual(g, A), n = h.areChannelsLocked(N, v)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != g && null != g[t]) L = t;
    else {
      if (null == N) return !1;
      R = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    I = m.FormStates.CLOSED, g = null, A = null, N = null, v = null, T = !1, p.clear(), L = null, R = null
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
      A = M(N);
      let a = {};
      return p.forEach(e => {
        null != g && (a[e] = g[e])
      }), null == a[t] && null == N.permissionOverwrites[t] && (a[t] = h.makeEveryoneOverwrite(t)), null == (g = {
        ...N.permissionOverwrites,
        ...a
      })[L] ? L = t : null != R && null != g[R] && (L = R, R = null), n = h.areChannelsLocked(N, v), !0
    }(e.id) && (a = !0);
    return a
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    I = m.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? I = m.FormStates.OPEN : (I = m.FormStates.CLOSED, P())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    O = t, f.Storage.set(S.ADVANCED_MODE_ON_KEY, t)
  }
})