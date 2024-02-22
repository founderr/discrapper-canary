"use strict";
E.r(t), E.d(t, {
  default: function() {
    return K
  }
}), E("808653"), E("222007"), E("424973");
var _ = E("249654"),
  T = E("988415"),
  n = E("455079"),
  I = E("697218"),
  s = E("544556"),
  a = E("138505"),
  A = E("117933"),
  i = E("922832");
let r = null,
  u = null,
  l = {},
  C = D(),
  d = f(),
  o = null,
  N = function() {
    var e, t, E, _;
    return (null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.pathname) === i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY ? i.FamilyCenterSubPages.REQUESTS : (null === (_ = window) || void 0 === _ ? void 0 : null === (E = _.location) || void 0 === E ? void 0 : E.pathname) === i.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? i.FamilyCenterSubPages.SETTINGS : i.FamilyCenterSubPages.ACTIVITY
  }(),
  R = !1,
  S = !1,
  M = null,
  L = null,
  c = {};

function D() {
  return {
    [i.TeenActionDisplayType.USER_ADD]: {},
    [i.TeenActionDisplayType.GUILD_ADD]: {},
    [i.TeenActionDisplayType.USER_INTERACTION]: {},
    [i.TeenActionDisplayType.GUILD_INTERACTION]: {},
    [i.TeenActionDisplayType.USER_CALLED]: {}
  }
}

function f() {
  return {
    [i.TeenActionDisplayType.USER_ADD]: 0,
    [i.TeenActionDisplayType.GUILD_ADD]: 0,
    [i.TeenActionDisplayType.USER_INTERACTION]: 0,
    [i.TeenActionDisplayType.GUILD_INTERACTION]: 0,
    [i.TeenActionDisplayType.USER_CALLED]: 0
  }
}

function Y() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 ? arguments[1] : void 0;
  return l = e.length > 0 ? e.reduce((e, t) => ({
    ...e,
    [t.user_id]: t
  }), {}) : {}
}

function O(e) {
  void 0 !== e && (d = e)
}

function y(e, t) {
  let E = t ? C : D();
  return C = e.reduce((e, t) => {
    let _ = t.display_type;
    return void 0 !== E[_] && void 0 === E[_][t.event_id] && (e[_][t.event_id] = t), e
  }, E)
}

function F(e) {
  c = e.reduce((e, t) => ({
    ...e,
    [t.id]: new a.FamilyCenterGuild(t)
  }), c)
}

function p() {
  S = !0
}

function U(e) {
  let {
    linkedUsers: t,
    familyCenterTeenActivity: E
  } = e, {
    actions: T,
    guilds: n,
    totals: I,
    teenId: s,
    rangeStartId: a
  } = E;
  r = s, u = a, y(T), O(I), F(n), Y(t), S = !1, M = _.default.fromTimestamp(Date.now()), R = !0
}

function g(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
}

function P(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
}

function V(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (void 0 === t) return;
  let {
    actions: E,
    totals: T,
    guilds: n,
    teenId: I,
    rangeStartId: s
  } = t;
  r = I, u = s, y(E), O(T), F(n), S = !1, M = _.default.fromTimestamp(Date.now())
}

function m(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    actions: E,
    guilds: _
  } = t;
  y(E, !0), F(_)
}

function v(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t)
}

function G(e) {
  let {
    linkedUsers: t
  } = e;
  Y(t, !0)
}

function h(e) {
  let {
    linkCode: t
  } = e;
  o = t
}

function H(e) {
  let {
    tab: t
  } = e;
  N = t
}

function k(e) {
  let {
    user: t
  } = e;
  if (void 0 === t.linked_users) return;
  let E = I.default.getUsers(),
    _ = t.linked_users.some(e => {
      let {
        user_id: t
      } = e;
      return void 0 === E[t]
    });
  _ && t.linked_users.length > Object.keys(l).length ? s.default.fetchLinkedUsers() : Y(t.linked_users)
}

function w(e) {
  var t;
  let {
    countryCode: E
  } = e;
  null != E && (L = null !== (t = (0, T.getCountryCodeByAlpha2)(E)) && void 0 !== t ? t : null)
}

function Q() {
  r = null, u = null, l = {}, C = D(), d = f(), c = {}, S = !1, M = null
}
class b extends n.default {
  takeSnapshot() {
    return {
      version: b.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(l),
        teenActivityTotals: Object.entries(d).map(e => {
          let [t, E] = e;
          return "".concat(t, ":").concat(E)
        }),
        teenActivity: function() {
          let e = [];
          return Object.entries(C).forEach(t => {
            let [E, _] = t;
            e.push(...Object.values(_))
          }), e
        }(),
        guilds: Object.values(c)
      }
    }
  }
  getSelectedTeenId() {
    return r
  }
  getLinkedUsers() {
    return l
  }
  getLinkTimestamp(e) {
    var t;
    let E = l[e];
    return null == E ? null : null !== (t = E.updated_at) && void 0 !== t ? t : E.created_at
  }
  getRangeStartTimestamp() {
    return null == u ? null : _.default.extractTimestamp(u)
  }
  getActionsForDisplayType(e) {
    return Object.values(C[e])
  }
  getTotalForDisplayType(e) {
    return d[e]
  }
  getLinkCode() {
    return o
  }
  getGuild(e) {
    return c[e]
  }
  getSelectedTab() {
    return N
  }
  getStartId() {
    return u
  }
  getIsInitialized() {
    return R
  }
  getUserCountry() {
    return L
  }
  isLoading() {
    return S
  }
  canRefetch() {
    return null === M || _.default.age(M) > i.FAMILY_CENTER_REFETCH_COOLDOWN
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(b.LATEST_SNAPSHOT_VERSION);
      if (null != e) Y(e.linkedUsers), F(e.guilds), y(e.teenActivity), d = e.teenActivityTotals.reduce((e, t) => {
        let [E, _] = t.split(":"), T = (0, A.displayTypeFromString)(E);
        return void 0 === T ? e : {
          ...e,
          [T]: parseInt(_, 10)
        }
      }, f())
    }, this.registerActionHandlers({
      CURRENT_USER_UPDATE: k,
      CACHE_LOADED_LAZY: this.loadCache,
      FAMILY_CENTER_INITIAL_LOAD: U,
      FAMILY_CENTER_FETCH_START: p,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: g,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: V,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: m,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: P,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: v,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: G,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: h,
      FAMILY_CENTER_HANDLE_TAB_SELECT: H,
      SET_LOCATION_METADATA: w,
      LOGOUT: Q
    }), this.waitFor(I.default)
  }
}
b.displayName = "FamilyCenterStore", b.LATEST_SNAPSHOT_VERSION = 3;
var K = new b