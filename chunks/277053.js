"use strict";
let a, s;
n.r(t), n("47120");
var l, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("433517"),
  E = n("570140"),
  C = n("700785"),
  h = n("388610"),
  _ = n("592125"),
  S = n("981631"),
  m = n("71080");
let p = new Set,
  I = S.FormStates.CLOSED,
  g = !1,
  T = null,
  A = null,
  N = null,
  v = null,
  R = null,
  O = null,
  L = f.Storage.get(m.ADVANCED_MODE_ON_KEY) || !1;

function P(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = C.makeEveryoneOverwrite(t)), n
}

function y() {
  if (N = h.default.getChannel(), v = h.default.getCategory(), null == N) return !1;
  let e = N.getGuildId();
  A = T = P(N), null == T[R] && (R = e), s = null != v, a = C.areChannelsLocked(N, v), O = null, g = !1, I = S.FormStates.CLOSED, p.clear()
}
class M extends(l = c.default.Store) {
  initialize() {
    this.waitFor(h.default, _.default)
  }
  hasChanges() {
    return g
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == T ? void 0 : T[e]
  }
  get editedPermissionIds() {
    return Array.from(p)
  }
  get permissionOverwrites() {
    return T
  }
  get selectedOverwriteId() {
    return R
  }
  get formState() {
    return I
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
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(i = M) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o, t.default = new M(E.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != N || t !== S.ChannelSettingsSections.PERMISSIONS) return !1;
    y()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: y,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == T ? void 0 : T[t];
    if (null == l || null == N) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, T = {
      ...T,
      [t]: l
    }, p.add(t), I = S.FormStates.OPEN, g = !d().isEqual(T, A), a = C.areChannelsLocked(N, v)
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
    I = S.FormStates.CLOSED, T = null, A = null, N = null, v = null, g = !1, p.clear(), R = null, O = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == N) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == N || N.id !== e || null == (N = _.default.getChannel(e))) return !1;
      v = h.default.getCategory();
      let t = N.getGuildId();
      if (null == t) return !1;
      A = P(N);
      let n = {};
      return p.forEach(e => {
        null != T && (n[e] = T[e])
      }), null == n[t] && null == N.permissionOverwrites[t] && (n[t] = C.makeEveryoneOverwrite(t)), null == (T = {
        ...N.permissionOverwrites,
        ...n
      })[R] ? R = t : null != O && null != T[O] && (R = O, O = null), a = C.areChannelsLocked(N, v), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    I = S.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? I = S.FormStates.OPEN : (I = S.FormStates.CLOSED, y())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    L = t, f.Storage.set(m.ADVANCED_MODE_ON_KEY, t)
  }
})