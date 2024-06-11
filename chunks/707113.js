"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  d = n("920906"),
  o = n("399606"),
  u = n("481060"),
  r = n("201070"),
  c = n("893966"),
  E = n("472596"),
  _ = n("598948"),
  f = n("428936"),
  I = n("41586"),
  S = n("464004");

function h(e) {
  let {
    guild: t
  } = e, n = (0, r.useIsMakingRequest)(t.id), a = (0, d.useSpring)({
    height: n ? 3 : 0,
    config: d.config.stiff
  });
  return (0, l.jsx)("div", {
    className: S.loaderContainer,
    children: (0, l.jsx)(d.animated.div, {
      className: S.loaderBar,
      style: a
    })
  })
}

function A(e) {
  let {
    guild: t,
    className: n,
    onPageChange: s,
    onMemberSelect: d
  } = e, A = t.id, T = (0, o.useStateFromStores)([c.default], () => c.default.getEstimatedMemberSearchCountByGuildId(A), [A]), N = (0, r.useIsMakingRequest)(A), x = (0, r.useIsStillIndexing)(A), C = a.useCallback(e => {
    null != e && (null == d || d(e))
  }, [d]), M = (0, E.getSearchState)(x, N, T), R = a.useRef(null), g = a.useRef(null), m = a.useCallback(() => {
    var e;
    null === (e = R.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: i()(S.mainTableContainer, n),
    children: (0, l.jsxs)(u.AdvancedScroller, {
      className: i()(S.horizatonalScroller),
      ref: g,
      orientation: "horizontal",
      children: [(0, l.jsx)(I.default, {
        guild: t,
        ref: R
      }), (0, l.jsx)(h, {
        guild: t
      }), (0, l.jsx)(_.default, {
        guild: t,
        onSelectRow: C,
        searchState: M,
        onResetForNewMembers: m
      }), M !== E.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(f.default, {
        guildId: t.id,
        onPageChange: s
      })]
    })
  })
}