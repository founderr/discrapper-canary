"use strict";
let a, s;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("95410"),
  u = n("913144"),
  d = n("991170"),
  c = n("492114"),
  f = n("42203"),
  E = n("49111"),
  h = n("606762");
let _ = new Set,
  C = E.FormStates.CLOSED,
  I = !1,
  S = null,
  m = null,
  p = null,
  T = null,
  g = null,
  A = null,
  N = o.default.get(h.ADVANCED_MODE_ON_KEY) || !1;

function R(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), n
}

function v() {
  if (p = c.default.getChannel(), T = c.default.getCategory(), null == p) return !1;
  let e = p.getGuildId();
  m = S = R(p), null == S[g] && (g = e), s = null != T, a = d.default.areChannelsLocked(p, T), A = null, I = !1, C = E.FormStates.CLOSED, _.clear()
}
class O extends r.default.Store {
  initialize() {
    this.waitFor(c.default, f.default)
  }
  hasChanges() {
    return I
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == S ? void 0 : S[e]
  }
  get editedPermissionIds() {
    return Array.from(_)
  }
  get permissionOverwrites() {
    return S
  }
  get selectedOverwriteId() {
    return g
  }
  get formState() {
    return C
  }
  get isLockable() {
    return s
  }
  get locked() {
    return a
  }
  get channel() {
    return p
  }
  get category() {
    return T
  }
  get advancedMode() {
    return N
  }
}
O.displayName = "ChannelSettingsPermissionsStore";
var L = new O(u.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != p || t !== E.ChannelSettingsSections.PERMISSIONS) return !1;
    v()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: v,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == S ? void 0 : S[t];
    if (null == l || null == p) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, S = {
      ...S,
      [t]: l
    }, _.add(t), C = E.FormStates.OPEN, I = !i.isEqual(S, m), a = d.default.areChannelsLocked(p, T)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != S && null != S[t]) g = t;
    else {
      if (null == p) return !1;
      A = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    C = E.FormStates.CLOSED, S = null, m = null, p = null, T = null, I = !1, _.clear(), g = null, A = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == p) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == p || p.id !== e || null == (p = f.default.getChannel(e))) return !1;
      T = c.default.getCategory();
      let t = p.getGuildId();
      if (null == t) return !1;
      m = R(p);
      let n = {};
      return _.forEach(e => {
        null != S && (n[e] = S[e])
      }), null == n[t] && null == p.permissionOverwrites[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), null == (S = {
        ...p.permissionOverwrites,
        ...n
      })[g] ? g = t : null != A && null != S[A] && (g = A, A = null), a = d.default.areChannelsLocked(p, T), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    C = E.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? C = E.FormStates.OPEN : (C = E.FormStates.CLOSED, v())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    N = t, o.default.set(h.ADVANCED_MODE_ON_KEY, t)
  }
})