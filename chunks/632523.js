n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250),
  i = n(470079),
  l = n(990547),
  a = n(91192),
  r = n(481060),
  o = n(724757),
  c = n(213609),
  u = n(441358),
  d = n(426521),
  E = n(374986);

function _(e) {
  let {
    initialized: t,
    items: n,
    loading: _,
    loadMore: I
  } = e, T = i.useRef(null), N = (0, o.Z)("for-you", T);
  (0, c.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let m = () => {
    var e;
    let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
    if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && I()
  };
  return t ? 0 === n.length ? (0, s.jsx)(u.v, {}) : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(a.bG, {
      navigator: N,
      children: (0, s.jsx)(a.SJ, {
        children: e => {
          let {
            ref: t,
            ...i
          } = e;
          return (0, s.jsxs)(r.AdvancedScroller, {
            className: E.container,
            ref: e => {
              var n;
              T.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...i,
            onScroll: m,
            children: [(0, s.jsx)(d.U, {
              items: n
            }), _ ? (0, s.jsx)(r.Spinner, {
              className: E.spinner
            }) : null]
          })
        }
      })
    })
  }) : (0, s.jsx)(r.Spinner, {
    className: E.loadingPlaceholder
  })
}