"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("990547"),
  i = n("924826"),
  r = n("481060"),
  o = n("724757"),
  u = n("213609"),
  d = n("441358"),
  c = n("426521"),
  f = n("198751");

function h(e) {
  let {
    initialized: t,
    items: n,
    loading: h,
    loadMore: E
  } = e, m = l.useRef(null), p = (0, o.default)("for-you", m);
  (0, u.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let S = () => {
    var e;
    let t = null === (e = m.current) || void 0 === e ? void 0 : e.getScrollerState();
    if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && E()
  };
  return t ? 0 === n.length ? (0, a.jsx)(d.ForYouEmptyState, {}) : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.ListNavigatorProvider, {
      navigator: p,
      children: (0, a.jsx)(i.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...l
          } = e;
          return (0, a.jsxs)(r.AdvancedScroller, {
            className: f.container,
            ref: e => {
              var n;
              m.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...l,
            onScroll: S,
            children: [(0, a.jsx)(c.ForYouItems, {
              items: n
            }), h ? (0, a.jsx)(r.Spinner, {
              className: f.spinner
            }) : null]
          })
        }
      })
    })
  }) : (0, a.jsx)(r.Spinner, {
    className: f.loadingPlaceholder
  })
}