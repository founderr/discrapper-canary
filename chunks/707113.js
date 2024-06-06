"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  d = n("920906"),
  o = n("399606"),
  r = n("481060"),
  u = n("201070"),
  c = n("893966"),
  f = n("472596"),
  E = n("598948"),
  _ = n("428936"),
  h = n("41586"),
  I = n("464004");

function S(e) {
  let {
    guild: t
  } = e, n = (0, u.useIsMakingRequest)(t.id), l = (0, d.useSpring)({
    height: n ? 3 : 0,
    config: d.config.stiff
  });
  return (0, a.jsx)("div", {
    className: I.loaderContainer,
    children: (0, a.jsx)(d.animated.div, {
      className: I.loaderBar,
      style: l
    })
  })
}

function T(e) {
  let {
    guild: t,
    className: n,
    onPageChange: s,
    onMemberSelect: d
  } = e, T = t.id, A = (0, o.useStateFromStores)([c.default], () => c.default.getEstimatedMemberSearchCountByGuildId(T), [T]), N = (0, u.useIsMakingRequest)(T), x = (0, u.useIsStillIndexing)(T), m = l.useCallback(e => {
    null != e && (null == d || d(e))
  }, [d]), g = (0, f.getSearchState)(x, N, A), C = l.useRef(null), R = l.useRef(null), M = l.useCallback(() => {
    var e;
    null === (e = C.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, a.jsx)("div", {
    className: i()(I.mainTableContainer, n),
    children: (0, a.jsxs)(r.AdvancedScroller, {
      className: i()(I.horizatonalScroller),
      ref: R,
      orientation: "horizontal",
      children: [(0, a.jsx)(h.default, {
        guild: t,
        ref: C
      }), (0, a.jsx)(S, {
        guild: t
      }), (0, a.jsx)(E.default, {
        guild: t,
        onSelectRow: m,
        searchState: g,
        onResetForNewMembers: M
      }), g !== f.SearchState.SUCCESS_STILL_INDEXING && (0, a.jsx)(_.default, {
        guildId: t.id,
        onPageChange: s
      })]
    })
  })
}