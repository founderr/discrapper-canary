"use strict";
r.r(t), r.d(t, {
  default: function() {
    return k
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("392711"),
  s = r.n(o),
  c = r("876215"),
  d = r("442837"),
  u = r("481060"),
  h = r("570140"),
  m = r("681619"),
  p = r("146282"),
  g = r("206583"),
  f = r("475549"),
  y = r("277513");
let b = [{
  key: "type",
  cellClassName: n()(f.cell, f.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(u.Text, {
      variant: "text-md/semibold",
      children: c.ContentInventoryEntryType[t]
    })
  }
}, {
  key: "count",
  cellClassName: n()(f.cell, f.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return (0, a.jsx)("div", {
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: t.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: f.cell,
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(x, {
      type: t
    })
  }
}];

function x(e) {
  var t, r;
  let {
    type: i
  } = e, l = (0, d.useStateFromStores)([p.default], () => p.default.getFilters()), n = null !== (r = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(i)) && void 0 !== r && r;
  return (0, a.jsx)(u.Checkbox, {
    value: n,
    onClick: function() {
      n ? h.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : h.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([i])
        }
      })
    }
  })
}

function k() {
  var e;
  let t = (0, d.useStateFromStores)([p.default], () => p.default.getFeed(g.ContentInventoryFeedKey.GLOBAL_FEED)),
    r = function(e) {
      let t = s().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let r = t[e];
        return {
          key: "".concat(e),
          type: r[0].content_type,
          entries: r
        }
      })
    }(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
    [l, o] = i.useState(void 0),
    c = null != l && l === t;
  return (0, a.jsx)("div", {
    className: n()(y.panel),
    children: (0, a.jsxs)(u.ScrollerThin, {
      className: f.content,
      children: [(0, a.jsx)("div", {
        className: f.refreshContainer,
        children: (0, a.jsx)(u.Button, {
          onClick: function() {
            o(t), h.default.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH"
            })
          },
          submitting: c,
          children: "Refresh"
        })
      }), r.length > 0 && (0, a.jsx)(m.default, {
        columns: b,
        data: r
      })]
    })
  })
}