"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(594174),
  d = n(981631);
let E = d.QZA.CLOSED,
  I = null,
  T = null,
  h = {},
  f = {},
  S = {},
  N = null,
  A = null,
  m = !1,
  O = !1,
  p = null,
  R = null,
  g = null,
  C = [],
  v = null,
  L = null;

function D(e) {
  var t, n, i, r, s, o;
  let a = c.default.getCurrentUser();
  if (null == a) return M();
  T = null !== (t = e.section) && void 0 !== t ? t : T, v = null !== (n = e.section) && void 0 !== n ? n : T, null != e.subsection && null != T && (h[T] = e.subsection), null != e.scrollPosition && null != T && (f[T] = e.scrollPosition), O = !!e.openWithoutBackstack, E = d.QZA.OPEN, S = {}, A = {
    ...N = {
      [d.oAB.ACCOUNT]: {
        userId: a.id,
        username: a.username,
        discriminator: a.discriminator,
        email: a.email,
        avatar: a.avatar,
        password: "",
        newPassword: null,
        claimed: a.isClaimed()
      }
    }
  }, R = null !== (i = e.onClose) && void 0 !== i ? i : null, g = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, C = null !== (s = e.analyticsLocations) && void 0 !== s ? s : [], L = null !== (o = e.impressionSource) && void 0 !== o ? o : null
}

function M() {
  E = d.QZA.CLOSED, m = !1, N = null, v = null, A = null, I = null, T = null, h = {}, f = {}, R = null, g = null, C = [], L = null
}

function P() {
  E = d.QZA.OPEN, S = {}
}
class y extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  hasChanges() {
    return null != A && null != N && (!!this.isOpen() || p === d.cII.USER_SETTINGS) && !l().isEqual(A, N)
  }
  isOpen() {
    return m
  }
  getPreviousSection() {
    return I
  }
  getSection() {
    return T
  }
  getSubsection() {
    return null != T ? h[T] : null
  }
  getScrollPosition() {
    return null != T ? f[T] : null
  }
  shouldOpenWithoutBackstack() {
    return O
  }
  getProps() {
    return {
      submitting: E === d.QZA.SUBMITTING,
      section: T,
      subsection: null != T ? h[T] : null,
      scrollPosition: null != T ? f[T] : null,
      settings: A,
      errors: S,
      hasChanges: this.hasChanges(),
      openWithoutBackstack: O,
      analyticsLocation: g,
      analyticsLocations: C,
      initialSection: v,
      impressionSource: L
    }
  }
  get onClose() {
    return R
  }
}
s = "UserSettingsModalStore", (r = "displayName") in(i = y) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new y(_.Z, {
  USER_SETTINGS_MODAL_OPEN: function(e) {
    m = !0, D(e)
  },
  USER_SETTINGS_MODAL_INIT: D,
  USER_SETTINGS_MODAL_CLOSE: M,
  LOGOUT: M,
  USER_SETTINGS_MODAL_SUBMIT: function() {
    E = d.QZA.SUBMITTING
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
    var t;
    if (E !== d.QZA.SUBMITTING) return !1;
    E = d.QZA.OPEN, T = d.oAB.ACCOUNT, S = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    var t;
    I = T, T = e.section, g = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (h[T] = e.subsection)
  },
  USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
    let {
      forSection: t
    } = e;
    null != t ? delete h[t] : null != T && delete h[T]
  },
  USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
    let {
      forSection: t
    } = e;
    null != t ? delete f[t] : null != T && delete f[T]
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
    let {
      settings: t
    } = e;
    null == A && (A = {});
    let n = A[d.oAB.ACCOUNT];
    A[d.oAB.ACCOUNT] = {
      ...n,
      ...t
    }
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: P,
  USER_SETTINGS_MODAL_RESET: function() {
    let e = c.default.getCurrentUser();
    P(), null != e && (A = {
      ...N = {
        [d.oAB.ACCOUNT]: {
          userId: e.id,
          username: e.username,
          discriminator: e.discriminator,
          email: e.email,
          avatar: e.avatar,
          password: "",
          newPassword: null,
          claimed: e.isClaimed()
        }
      }
    })
  },
  DRAWER_SELECT_TAB: function(e) {
    return p = e.tab, null == T && p === d.cII.USER_SETTINGS && D({
      type: "USER_SETTINGS_MODAL_INIT",
      section: null,
      subsection: null,
      scrollPosition: null,
      openWithoutBackstack: !1
    })
  }
})