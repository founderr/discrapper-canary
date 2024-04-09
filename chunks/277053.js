"use strict";
let a, s;
n.r(t), n("47120");
var l, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("433517"),
  E = n("570140"),
  _ = n("700785"),
  h = n("388610"),
  C = n("592125"),
  m = n("981631"),
  S = n("71080");
let I = new Set,
  T = m.FormStates.CLOSED,
  p = !1,
  g = null,
  N = null,
  A = null,
  R = null,
  O = null,
  v = null,
  L = f.Storage.get(S.ADVANCED_MODE_ON_KEY) || !1;

function P(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = _.makeEveryoneOverwrite(t)), n
}

function M() {
  if (A = h.default.getChannel(), R = h.default.getCategory(), null == A) return !1;
  let e = A.getGuildId();
  N = g = P(A), null == g[O] && (O = e), s = null != R, a = _.areChannelsLocked(A, R), v = null, p = !1, T = m.FormStates.CLOSED, I.clear()
}
class y extends(l = c.default.Store) {
  initialize() {
    this.waitFor(h.default, C.default)
  }
  hasChanges() {
    return p
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
    return O
  }
  get formState() {
    return T
  }
  get isLockable() {
    return s
  }
  get locked() {
    return a
  }
  get channel() {
    return A
  }
  get category() {
    return R
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
    if (null != A || t !== m.ChannelSettingsSections.PERMISSIONS) return !1;
    M()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: M,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == g ? void 0 : g[t];
    if (null == l || null == A) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, g = {
      ...g,
      [t]: l
    }, I.add(t), T = m.FormStates.OPEN, p = !d().isEqual(g, N), a = _.areChannelsLocked(A, R)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != g && null != g[t]) O = t;
    else {
      if (null == A) return !1;
      v = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    T = m.FormStates.CLOSED, g = null, N = null, A = null, R = null, p = !1, I.clear(), O = null, v = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == A) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == A || A.id !== e || null == (A = C.default.getChannel(e))) return !1;
      R = h.default.getCategory();
      let t = A.getGuildId();
      if (null == t) return !1;
      N = P(A);
      let n = {};
      return I.forEach(e => {
        null != g && (n[e] = g[e])
      }), null == n[t] && null == A.permissionOverwrites[t] && (n[t] = _.makeEveryoneOverwrite(t)), null == (g = {
        ...A.permissionOverwrites,
        ...n
      })[O] ? O = t : null != v && null != g[v] && (O = v, v = null), a = _.areChannelsLocked(A, R), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    T = m.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? T = m.FormStates.OPEN : (T = m.FormStates.CLOSED, M())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    L = t, f.Storage.set(S.ADVANCED_MODE_ON_KEY, t)
  }
})