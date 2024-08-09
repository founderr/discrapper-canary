var s = n(735250),
  o = n(470079),
  r = n(113434),
  a = n(308069),
  l = n(613087),
  i = n(457153),
  c = n(254197),
  d = n(321025),
  u = n(768545);
t.Z = function(e) {
  var t;
  let {
expandedContentRef: n,
expansionSpring: p,
isExpanded: m,
isExpansionAnimationComplete: x,
onCtxMenuOpened: g,
onCtxMenuClosed: f,
onCtxMenuSelection: C,
quest: _,
useReducedMotion: E,
collapsedHeight: h
  } = e, S = o.useRef(null), T = o.useRef(null), N = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, v = (0, r.Rf)(_);
  return (0, s.jsxs)(l.p, {
expandedContentRef: n,
collapsedContentRef: S,
expansionSpring: p,
children: [
  (0, s.jsx)(i.Z, {
    ref: S,
    className: u.content,
    expansionSpring: p,
    isExpanded: m,
    isExpansionAnimationComplete: x,
    quest: _,
    useReducedMotion: E,
    taskDetails: v
  }),
  (0, s.jsx)(c.Z, {
    expansionSpring: p,
    className: u.content,
    collapsedHeight: h,
    onCtxMenuOpen: g,
    onCtxMenuClose: f,
    onCtxMenuSelect: C,
    overlayRef: T,
    isExpanded: m,
    isExpansionAnimationComplete: x,
    quest: _,
    useReducedMotion: E,
    ref: n,
    taskDetails: v,
    children: (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(d.Z, {
          expansionSpring: p,
          isExpanded: m
        }),
        !N && (0, s.jsx)(a.Z, {
          quest: _,
          expansionSpring: p,
          useReducedMotion: E,
          isExpanded: m,
          isExpansionAnimationComplete: x,
          onCtxMenuOpen: g,
          onCtxMenuClose: f,
          onCtxMenuSelect: C
        })
      ]
    })
  }),
  (0, s.jsx)('div', {
    ref: T,
    className: u.overlay
  })
]
  });
};