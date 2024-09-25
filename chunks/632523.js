n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(990547),
    o = n(91192),
    s = n(481060),
    l = n(724757),
    u = n(213609),
    c = n(441358),
    d = n(426521),
    _ = n(783891);
function E(e) {
    let { initialized: t, items: n, loading: E, loadMore: f } = e,
        h = i.useRef(null),
        p = (0, l.Z)('for-you', h);
    (0, u.Z)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length }
        },
        { disableTrack: !t },
        [t]
    );
    let m = () => {
        var e;
        let t = null === (e = h.current) || void 0 === e ? void 0 : e.getScrollerState();
        if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && f();
    };
    return t
        ? 0 === n.length
            ? (0, r.jsx)(c.v, {})
            : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(o.bG, {
                      navigator: p,
                      children: (0, r.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: t, ...i } = e;
                              return (0, r.jsxs)(s.AdvancedScroller, {
                                  className: _.container,
                                  ref: (e) => {
                                      var n;
                                      (h.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                  },
                                  ...i,
                                  onScroll: m,
                                  children: [(0, r.jsx)(d.U, { items: n }), E ? (0, r.jsx)(s.Spinner, { className: _.spinner }) : null]
                              });
                          }
                      })
                  })
              })
        : (0, r.jsx)(s.Spinner, { className: _.loadingPlaceholder });
}
