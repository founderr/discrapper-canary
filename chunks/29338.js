"use strict";
r.r(t), r.d(t, {
  default: function() {
    return j
  }
}), r("47120");
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("392711"),
  o = r.n(n),
  s = r("876215"),
  c = r("442837"),
  d = r("481060"),
  u = r("570140"),
  h = r("681619"),
  m = r("682864"),
  p = r("71585"),
  g = r("146282"),
  f = r("789086"),
  y = r("206583"),
  b = r("475549"),
  x = r("277513");
let k = [{
  key: "type",
  cellClassName: l()(b.cell, b.cellType),
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
  cellClassName: l()(b.cell, b.cellCount),
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
    type: i
  } = e, l = (0, c.useStateFromStores)([g.default], () => g.default.getFilters()), n = null !== (r = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(i)) && void 0 !== r && r;
  return (0, a.jsx)(d.Checkbox, {
    value: n,
    onClick: function() {
      n ? u.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : u.default.dispatch({
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
  let t = (0, c.useStateFromStores)([g.default], () => g.default.getFeed(y.ContentInventoryFeedKey.GLOBAL_FEED)),
    r = (0, c.useStateFromStores)([g.default], () => g.default.getDebugImpressionCappingDisabled()),
    i = (0, c.useStateFromStores)([p.default], () => p.default.getDebugFastImpressionCappingEnabled()),
    n = function(e) {
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
    className: l()(x.panel),
    children: (0, a.jsxs)(d.ScrollerThin, {
      className: b.content,
      children: [(0, a.jsxs)(d.FormSection, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: "Inventory"
        }), n.length > 0 && (0, a.jsx)(h.default, {
          columns: k,
          data: n
        }), (0, a.jsx)(m.default, {
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
        }), (0, a.jsx)(m.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          },
          children: "Log Impressions"
        }), (0, a.jsx)(m.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          },
          children: r ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, a.jsx)(m.default, {
          size: 8
        }), (0, a.jsx)(d.Button, {
          fullWidth: !0,
          onClick: function() {
            u.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: i ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      }), false]
    })
  })
}