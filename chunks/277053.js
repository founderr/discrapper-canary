let s, i;
n(47120);
var l, a, r, o, c = n(392711),
  u = n.n(c),
  d = n(442837),
  E = n(433517),
  h = n(570140),
  _ = n(700785),
  I = n(388610),
  m = n(592125),
  T = n(981631),
  g = n(71080);
let p = new Set,
  N = T.QZA.CLOSED,
  S = !1,
  C = null,
  A = null,
  f = null,
  Z = null,
  L = null,
  O = null,
  v = E.K.get(g.kf) || !1;

function R(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = _.we(t)), n
}

function P() {
  if (f = I.Z.getChannel(), Z = I.Z.getCategory(), null == f) return !1;
  let e = f.getGuildId();
  A = C = R(f), null == C[L] && (L = e), i = null != Z, s = _.o4(f, Z), O = null, S = !1, N = T.QZA.CLOSED, p.clear()
}
class x extends(l = d.ZP.Store) {
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
    return Array.from(p)
  }
  get permissionOverwrites() {
    return C
  }
  get selectedOverwriteId() {
    return L
  }
  get formState() {
    return N
  }
  get isLockable() {
    return i
  }
  get locked() {
    return s
  }
  get channel() {
    return f
  }
  get category() {
    return Z
  }
  get advancedMode() {
    return v
  }
}
o = "ChannelSettingsPermissionsStore", (r = "displayName") in(a = x) ? Object.defineProperty(a, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = o, t.Z = new x(h.Z, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != f || t !== T.CoT.PERMISSIONS) return !1;
    P()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: P,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: i
    } = e, l = null == C ? void 0 : C[t];
    if (null == l || null == f) return !1;
    l = {
      ...l,
      allow: n,
      deny: i
    }, C = {
      ...C,
      [t]: l
    }, p.add(t), N = T.QZA.OPEN, S = !u().isEqual(C, A), s = _.o4(f, Z)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != C && null != C[t]) L = t;
    else {
      if (null == f) return !1;
      O = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    N = T.QZA.CLOSED, C = null, A = null, f = null, Z = null, S = !1, p.clear(), L = null, O = null
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
      return p.forEach(e => {
        null != C && (n[e] = C[e])
      }), null == n[t] && null == f.permissionOverwrites[t] && (n[t] = _.we(t)), null == (C = {
        ...f.permissionOverwrites,
        ...n
      })[L] ? L = t : null != O && null != C[O] && (L = O, O = null), s = _.o4(f, Z), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    N = T.QZA.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? N = T.QZA.OPEN : (N = T.QZA.CLOSED, P())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    v = t, E.K.set(g.kf, t)
  }
})