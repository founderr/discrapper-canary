"use strict";
n.r(t), n.d(t, {
  usePopper: function() {
    return c
  }
});
var r = n("884691"),
  a = n("817736"),
  o = n("796420"),
  i = n("153543"),
  u = n.n(i),
  s = n("84075"),
  l = [],
  c = function(e, t, n) {
    void 0 === n && (n = {});
    var i = r.useRef(null),
      c = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || "bottom",
        strategy: n.strategy || "absolute",
        modifiers: n.modifiers || l
      },
      f = r.useState({
        styles: {
          popper: {
            position: c.strategy,
            left: "0",
            top: "0"
          },
          arrow: {
            position: "absolute"
          }
        },
        attributes: {}
      }),
      d = f[0],
      p = f[1],
      h = r.useMemo(function() {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function(e) {
            var t = e.state,
              n = Object.keys(t.elements);
            a.flushSync(function() {
              p({
                styles: (0, s.fromEntries)(n.map(function(e) {
                  return [e, t.styles[e] || {}]
                })),
                attributes: (0, s.fromEntries)(n.map(function(e) {
                  return [e, t.attributes[e]]
                }))
              })
            })
          },
          requires: ["computeStyles"]
        }
      }, []),
      m = r.useMemo(function() {
        var e = {
          onFirstUpdate: c.onFirstUpdate,
          placement: c.placement,
          strategy: c.strategy,
          modifiers: [].concat(c.modifiers, [h, {
            name: "applyStyles",
            enabled: !1
          }])
        };
        return u(i.current, e) ? i.current || e : (i.current = e, e)
      }, [c.onFirstUpdate, c.placement, c.strategy, c.modifiers, h]),
      _ = r.useRef();
    return (0, s.useIsomorphicLayoutEffect)(function() {
      _.current && _.current.setOptions(m)
    }, [m]), (0, s.useIsomorphicLayoutEffect)(function() {
      if (null != e && null != t) {
        var r = (n.createPopper || o.createPopper)(e, t, m);
        return _.current = r,
          function() {
            r.destroy(), _.current = null
          }
      }
    }, [e, t, n.createPopper]), {
      state: _.current ? _.current.state : null,
      styles: d.styles,
      attributes: d.attributes,
      update: _.current ? _.current.update : null,
      forceUpdate: _.current ? _.current.forceUpdate : null
    }
  }