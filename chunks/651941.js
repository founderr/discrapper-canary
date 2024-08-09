n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r, i = n(442837),
  a = n(253135),
  s = n(570140),
  o = n(709054);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = {};
class c extends(r = i.ZP.PersistedStore) {
  initialize(e) {
var t;
u = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
  }
  getState() {
return {
  users: u
};
  }
  getKeyTrustedAt(e, t) {
var n;
let r = (0, a.MK)(t);
return null === (n = u[e]) || void 0 === n ? void 0 : n[r];
  }
  isKeyVerified(e, t) {
return null != this.getKeyTrustedAt(e, t);
  }
  getUserIds() {
return o.default.keys(u);
  }
  getUserVerifiedKeys(e) {
return u[e];
  }
}
E(c, 'displayName', 'VerifiedKeyStore'), E(c, 'persistKey', 'VerifiedKeyStore'), t.Z = new c(s.Z, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
let {
  userId: t,
  key: n
} = e, r = function(e) {
  var t;
  let n = null !== (t = u[e]) && void 0 !== t ? t : {};
  return u[e] = n, n;
}(t), i = new Uint8Array(n);
r[(0, a.MK)(i)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
let {
  userId: t,
  serializedKey: n
} = e, r = u[t];
if (null == r)
  return !1;
let i = delete r[n],
  a = !1;
return 0 === Object.keys(r).length && (delete u[t], a = !0), i || a;
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
let {
  userId: t
} = e;
return null != u[t] && delete u[t];
  },
  SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: function() {
u = {};
  }
});