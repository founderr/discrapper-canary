"use strict";
let a, s;
n.r(t), n("47120");
var i, l, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("433517"),
  E = n("570140"),
  h = n("700785"),
  _ = n("388610"),
  C = n("592125"),
  m = n("981631"),
  p = n("71080");
let S = new Set,
  g = m.FormStates.CLOSED,
  I = !1,
  T = null,
  A = null,
  N = null,
  v = null,
  R = null,
  O = null,
  L = f.Storage.get(p.ADVANCED_MODE_ON_KEY) || !1;

function M(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = h.makeEveryoneOverwrite(t)), n
}

function y() {
  if (N = _.default.getChannel(), v = _.default.getCategory(), null == N) return !1;
  let e = N.getGuildId();
  A = T = M(N), null == T[R] && (R = e), s = null != v, a = h.areChannelsLocked(N, v), O = null, I = !1, g = m.FormStates.CLOSED, S.clear()
}
class P extends(i = c.default.Store) {
  initialize() {
    this.waitFor(_.default, C.default)
  }
  hasChanges() {
    return I
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == T ? void 0 : T[e]
  }
  get editedPermissionIds() {
    return Array.from(S)
  }
  get permissionOverwrites() {
    return T
  }
  get selectedOverwriteId() {
    return R
  }
  get formState() {
    return g
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
    return v
  }
  get advancedMode() {
    return L
  }
}
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(l = P) ? Object.defineProperty(l, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = o, t.default = new P(E.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != N || t !== m.ChannelSettingsSections.PERMISSIONS) return !1;
    y()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: y,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, i = null == T ? void 0 : T[t];
    if (null == i || null == N) return !1;
    i = {
      ...i,
      allow: n,
      deny: s
    }, T = {
      ...T,
      [t]: i
    }, S.add(t), g = m.FormStates.OPEN, I = !d().isEqual(T, A), a = h.areChannelsLocked(N, v)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != T && null != T[t]) R = t;
    else {
      if (null == N) return !1;
      O = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    g = m.FormStates.CLOSED, T = null, A = null, N = null, v = null, I = !1, S.clear(), R = null, O = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == N) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == N || N.id !== e || null == (N = C.default.getChannel(e))) return !1;
      v = _.default.getCategory();
      let t = N.getGuildId();
      if (null == t) return !1;
      A = M(N);
      let n = {};
      return S.forEach(e => {
        null != T && (n[e] = T[e])
      }), null == n[t] && null == N.permissionOverwrites[t] && (n[t] = h.makeEveryoneOverwrite(t)), null == (T = {
        ...N.permissionOverwrites,
        ...n
      })[R] ? R = t : null != O && null != T[O] && (R = O, O = null), a = h.areChannelsLocked(N, v), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    g = m.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? g = m.FormStates.OPEN : (g = m.FormStates.CLOSED, y())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    L = t, f.Storage.set(p.ADVANCED_MODE_ON_KEY, t)
  }
})