"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("917351"),
  a = n("446674"),
  s = n("913144");
let r = [],
  o = !1;
let u = r,
  d = {},
  c = null,
  f = e => {
    u = (0, i.cloneDeep)(e);
    let t = {};
    u.forEach(e => {
      t[e.id] = e
    }), d = t
  };
class p extends a.default.Store {
  get isFetching() {
    return o
  }
  get fetchError() {
    return l
  }
  get profileEffects() {
    return u
  }
  get tryItOutId() {
    return c
  }
  getProfileEffectById(e) {
    return null != e ? d[e] : void 0
  }
}
p.displayName = "ProfileEffectStore";
var m = new p(s.default, {
  USER_PROFILE_EFFECTS_FETCH: () => {
    o = !0
  },
  USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
    let {
      profileEffects: t
    } = e;
    o = !1, f(0 === t.length ? r : t)
  },
  USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    o = !1, l = t, f(r)
  },
  PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
    let {
      id: t
    } = e;
    c = t
  },
  LOGOUT: e => {
    o = !1, f(r), c = null
  }
})