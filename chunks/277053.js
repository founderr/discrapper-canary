let i, s;
n(47120);
var l, a, r, o, c = n(392711),
  u = n.n(c),
  d = n(442837),
  E = n(433517),
  h = n(570140),
  _ = n(700785),
  I = n(388610),
  m = n(592125),
  g = n(981631),
  p = n(71080);
let T = new Set,
  N = g.QZA.CLOSED,
  S = !1,
  C = null,
  A = null,
  f = null,
  Z = null,
  v = null,
  L = null,
  O = E.K.get(p.kf) || !1;

function R(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = _.we(t)), n
}

function x() {
  if (f = I.Z.getChannel(), Z = I.Z.getCategory(), null == f) return !1;
  let e = f.getGuildId();
  A = C = R(f), null == C[v] && (v = e), s = null != Z, i = _.o4(f, Z), L = null, S = !1, N = g.QZA.CLOSED, T.clear()
}
class M extends(l = d.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, m.Z)
  }
  hasChanges() {
    return S
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == C ? void 0 : C[e]
  }
  get editedPermissionIds() {
    return Array.from(T)
  }
  get permissionOverwrites() {
    return C
  }
  get selectedOverwriteId() {
    return v
  }
  get formState() {
    return N
  }
  get isLockable() {
    return s
  }
  get locked() {
    return i
  }
  get channel() {
    return f
  }
  get category() {
    return Z
  }
  get advancedMode() {
    return O
  }
}
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(a = M) ? Object.defineProperty(a, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = o, t.Z = new M(h.Z, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != f || t !== g.CoT.PERMISSIONS) return !1;
    x()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == C ? void 0 : C[t];
    if (null == l || null == f) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, C = {
      ...C,
      [t]: l
    }, T.add(t), N = g.QZA.OPEN, S = !u().isEqual(C, A), i = _.o4(f, Z)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != C && null != C[t]) v = t;
    else {
      if (null == f) return !1;
      L = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    N = g.QZA.CLOSED, C = null, A = null, f = null, Z = null, S = !1, T.clear(), v = null, L = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == f) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == f || f.id !== e || null == (f = m.Z.getChannel(e))) return !1;
      Z = I.Z.getCategory();
      let t = f.getGuildId();
      if (null == t) return !1;
      A = R(f);
      let n = {};
      return T.forEach(e => {
        null != C && (n[e] = C[e])
      }), null == n[t] && null == f.permissionOverwrites[t] && (n[t] = _.we(t)), null == (C = {
        ...f.permissionOverwrites,
        ...n
      })[v] ? v = t : null != L && null != C[L] && (v = L, L = null), i = _.o4(f, Z), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    N = g.QZA.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? N = g.QZA.OPEN : (N = g.QZA.CLOSED, x())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    O = t, E.K.set(p.kf, t)
  }
})