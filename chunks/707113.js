l.d(n, {
  Z: function() {
    return C
  }
});
var t = l(735250),
  s = l(470079),
  i = l(120356),
  a = l.n(i),
  o = l(920906),
  r = l(399606),
  d = l(481060),
  c = l(201070),
  u = l(893966),
  _ = l(472596),
  E = l(598948),
  I = l(428936),
  N = l(41586),
  x = l(976723);

function h(e) {
  let {
    guild: n
  } = e, l = (0, c.$j)(n.id), s = (0, o.useSpring)({
    height: l ? 3 : 0,
    config: o.config.stiff
  });
  return (0, t.jsx)("div", {
    className: x.loaderContainer,
    children: (0, t.jsx)(o.animated.div, {
      className: x.loaderBar,
      style: s
    })
  })
}

function C(e) {
  let {
    guild: n,
    className: l,
    onPageChange: i,
    onMemberSelect: o
  } = e, C = n.id, A = (0, r.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(C), [C]), S = (0, c.$j)(C), T = (0, c.M3)(C), M = s.useCallback(e => {
    if (null != e) null == o || o(e)
  }, [o]), g = (0, _.xb)(T, S, A), D = s.useRef(null), L = s.useRef(null), R = s.useCallback(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, t.jsx)("div", {
    className: a()(x.mainTableContainer, l),
    children: (0, t.jsxs)(d.AdvancedScroller, {
      className: a()(x.horizatonalScroller),
      ref: L,
      orientation: "horizontal",
      children: [(0, t.jsx)(N.Z, {
        guild: n,
        ref: D
      }), (0, t.jsx)(h, {
        guild: n
      }), (0, t.jsx)(E.Z, {
        guild: n,
        onSelectRow: M,
        searchState: g,
        onResetForNewMembers: R
      }), g !== _.po.SUCCESS_STILL_INDEXING && (0, t.jsx)(I.Z, {
        guildId: n.id,
        onPageChange: i
      })]
    })
  })
}