"use strict";
n.d(t, {
  Iu: function() {
    return h
  },
  PG: function() {
    return _
  },
  RO: function() {
    return E
  },
  _Q: function() {
    return c
  },
  hr: function() {
    return I
  },
  j9: function() {
    return d
  },
  ql: function() {
    return T
  }
});
var i = n(97613),
  r = n.n(i),
  s = n(652874),
  o = n(868888),
  a = n(957825);
let l = Object.freeze({
    activeView: null,
    lastActiveView: null,
    activeViewType: null,
    searchQuery: "",
    isSearchSuggestion: !1,
    pickerId: function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
      return r()(e)
    }()
  }),
  u = (0, s.Z)((0, o.tJ)((e, t) => l, {
    name: "expression-picker-last-active-view",
    partialize: e => ({
      lastActiveView: e.lastActiveView
    })
  })),
  _ = (e, t) => {
    u.setState({
      activeView: e,
      activeViewType: t,
      lastActiveView: u.getState().activeView
    })
  },
  c = e => {
    let t = u.getState();
    if ((void 0 === e || e === t.activeViewType) && null !== t.activeView) u.setState({
      activeView: null,
      activeViewType: null,
      lastActiveView: t.activeView
    })
  },
  d = e => {
    let t = u.getState();
    if (null == t.activeView) {
      var n;
      _(null !== (n = t.lastActiveView) && void 0 !== n ? n : a.X1.EMOJI, e)
    } else c()
  },
  E = (e, t) => {
    u.getState().activeView === e ? c() : _(e, t)
  },
  I = e => {
    u.setState({
      activeView: e,
      lastActiveView: u.getState().activeView
    })
  },
  T = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    u.setState({
      searchQuery: e,
      isSearchSuggestion: t
    })
  },
  h = u