"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("990547"),
  i = n("924826"),
  r = n("481060"),
  o = n("724757"),
  u = n("213609"),
  d = n("441358"),
  c = n("426521"),
  f = n("198751");

function E(e) {
  let {
    initialized: t,
    items: n,
    loading: E,
    loadMore: _
  } = e, m = l.useRef(null), T = (0, o.default)("for-you", m);
  (0, u.default)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let I = () => {
    var e;
    let t = null === (e = m.current) || void 0 === e ? void 0 : e.getScrollerState();
    if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && _()
  };
  return t ? 0 === n.length ? (0, s.jsx)(d.ForYouEmptyState, {}) : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(i.ListNavigatorProvider, {
      navigator: T,
      children: (0, s.jsx)(i.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...l
          } = e;
          return (0, s.jsxs)(r.AdvancedScroller, {
            className: f.container,
            ref: e => {
              var n;
              m.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...l,
            onScroll: I,
            children: [(0, s.jsx)(c.ForYouItems, {
              items: n
            }), E ? (0, s.jsx)(r.Spinner, {
              className: f.spinner
            }) : null]
          })
        }
      })
    })
  }) : (0, s.jsx)(r.Spinner, {
    className: f.loadingPlaceholder
  })
}