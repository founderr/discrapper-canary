t.d(r, {
  Z: function() {
    return j
  }
}), t(47120);
var a = t(735250);
t(470079);
var i = t(120356),
  n = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(876215),
  s = t(442837),
  d = t(481060),
  u = t(570140),
  h = t(681619),
  m = t(71585),
  g = t(146282),
  p = t(650613),
  b = t(789086),
  y = t(206583),
  x = t(659247),
  f = t(719556);
let k = [{
  key: "type",
  cellClassName: n()(x.cell, x.cellType),
  render(e) {
    let {
      type: r
    } = e;
    return (0, a.jsx)(d.Text, {
      variant: "text-md/semibold",
      children: c.s[r]
    })
  }
}, {
  key: "count",
  cellClassName: n()(x.cell, x.cellCount),
  render(e) {
    let {
      entries: r
    } = e;
    return (0, a.jsx)("div", {
      children: (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        children: r.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: x.cell,
  render(e) {
    let {
      type: r
    } = e;
    return (0, a.jsx)(v, {
      type: r
    })
  }
}];

function v(e) {
  var r, t;
  let {
    type: i
  } = e, n = (0, s.e7)([g.Z], () => g.Z.getFilters()), o = null !== (t = null == n ? void 0 : null === (r = n.types) || void 0 === r ? void 0 : r.has(i)) && void 0 !== t && t;
  return (0, a.jsx)(d.Checkbox, {
    value: o,
    onClick: function() {
      o ? u.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : u.Z.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([i])
        }
      })
    }
  })
}

function j() {
  var e;
  let r = (0, s.e7)([g.Z], () => g.Z.getFeed(y.YN.GLOBAL_FEED)),
    t = (0, s.e7)([g.Z], () => g.Z.getDebugImpressionCappingDisabled()),
    i = (0, s.e7)([m.Z], () => m.Z.getDebugFastImpressionCappingEnabled()),
    o = function(e) {
      let r = l().groupBy(e, e => e.content_type);
      return Object.keys(r).map(e => {
        let t = r[e];
        return {
          key: "".concat(e),
          type: t[0].content_type,
          entries: t
        }
      })
    }(null == r ? void 0 : null === (e = r.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
    c = (0, s.e7)([g.Z], () => {
      var e;
      return (null === (e = g.Z.getFeedState(y.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0
    });
  return (0, a.jsx)("div", {
    className: n()(f.panel),
    children: (0, a.jsxs)(d.ScrollerThin, {
      className: x.content,
      children: [(0, a.jsxs)(d.FormSection, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: "Inventory"
        }), o.length > 0 && (0, a.jsx)(h.Z, {
          columns: k,
          data: o
        }), (0, a.jsx)(d.Spacer, {
          size: 8
        }), (0, a.jsx)(b.Z, {}), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.Z.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH"
            })
          },
          submitting: c,
          children: "Refresh Now"
        })]
      }), (0, a.jsxs)(d.FormSection, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: "Impression Capping"
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          },
          children: "Clear Impressions"
        }), (0, a.jsx)(d.Spacer, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          },
          children: "Log Impressions"
        }), (0, a.jsx)(d.Spacer, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          },
          children: t ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, a.jsx)(d.Spacer, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.Z.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      }), false, (0, a.jsx)(p.Z, {})]
    })
  })
}