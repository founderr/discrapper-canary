"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("47120");
var a = r("735250");
r("470079");
var n = r("120356"),
  i = r.n(n),
  l = r("392711"),
  o = r.n(l),
  s = r("876215"),
  c = r("442837"),
  d = r("481060"),
  u = r("570140"),
  h = r("681619"),
  p = r("682864"),
  m = r("71585"),
  g = r("146282"),
  f = r("789086"),
  y = r("206583"),
  b = r("475549"),
  x = r("277513");
let k = [{
  key: "type",
  cellClassName: i()(b.cell, b.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(d.Text, {
      variant: "text-md/semibold",
      children: s.ContentInventoryEntryType[t]
    })
  }
}, {
  key: "count",
  cellClassName: i()(b.cell, b.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return (0, a.jsx)("div", {
      children: (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        children: t.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: b.cell,
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(v, {
      type: t
    })
  }
}];

function v(e) {
  var t, r;
  let {
    type: n
  } = e, i = (0, c.useStateFromStores)([g.default], () => g.default.getFilters()), l = null !== (r = null == i ? void 0 : null === (t = i.types) || void 0 === t ? void 0 : t.has(n)) && void 0 !== r && r;
  return (0, a.jsx)(d.Checkbox, {
    value: l,
    onClick: function() {
      l ? u.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : u.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([n])
        }
      })
    }
  })
}

function C() {
  var e;
  let t = (0, c.useStateFromStores)([g.default], () => g.default.getFeed(y.ContentInventoryFeedKey.GLOBAL_FEED)),
    r = (0, c.useStateFromStores)([g.default], () => g.default.getDebugImpressionCappingDisabled()),
    n = (0, c.useStateFromStores)([m.default], () => m.default.getDebugFastImpressionCappingEnabled()),
    l = function(e) {
      let t = o().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let r = t[e];
        return {
          key: "".concat(e),
          type: r[0].content_type,
          entries: r
        }
      })
    }(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
    s = (0, c.useStateFromStores)([g.default], () => {
      var e;
      return (null === (e = g.default.getFeedState(y.ContentInventoryFeedKey.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0
    });
  return (0, a.jsx)("div", {
    className: i()(x.panel),
    children: (0, a.jsxs)(d.ScrollerThin, {
      className: b.content,
      children: [(0, a.jsxs)(d.FormSection, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: "Inventory"
        }), l.length > 0 && (0, a.jsx)(h.default, {
          columns: k,
          data: l
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(f.default, {}), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH"
            })
          },
          submitting: s,
          children: "Refresh Now"
        })]
      }), (0, a.jsxs)(d.FormSection, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: "Impression Capping"
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          },
          children: "Clear Impressions"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          },
          children: "Log Impressions"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          },
          children: r ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: n ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      }), false]
    })
  })
}