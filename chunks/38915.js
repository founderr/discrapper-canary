t.d(s, {
  Z: function() {
    return c
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(536442),
  r = t(650434);

function o(e) {
  let {
    hotspotLocation: s
  } = e, [t, o] = (0, i.Wu)([l.qc], () => [l.qc.hasHotspot(s, !0), l.qc.getHotspotOverride(s)]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.FormItem, {
      title: s,
      className: r.hotspotSwitch,
      children: [t ? (0, n.jsx)(a.TooltipContainer, {
        className: r.iconContainer,
        element: "span",
        text: "Active",
        children: (0, n.jsx)(a.CheckmarkLargeIcon, {
          size: "md",
          color: "currentColor",
          className: r.checkmark
        })
      }) : (0, n.jsx)(a.TooltipContainer, {
        className: r.iconContainer,
        element: "span",
        text: "Inactive",
        children: (0, n.jsx)(a.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: r.xmark
        })
      }), (0, n.jsx)(a.SingleSelect, {
        className: r.overrideSelect,
        value: o,
        options: [{
          value: void 0,
          label: "No Override"
        }, {
          value: !0,
          label: "Force Active"
        }, {
          value: !1,
          label: "Force Inactive"
        }],
        onChange: e => null != e ? (0, l.hv)(s, e) : (0, l.Po)(s)
      })]
    }), (0, n.jsx)(a.FormDivider, {})]
  })
}

function c(e) {
  let {
    className: s
  } = e;
  return (0, n.jsxs)(a.FormSection, {
    title: "Hotspots",
    tag: a.FormTitleTags.H1,
    className: s,
    children: [(0, n.jsx)(a.Text, {
      className: r.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(l.v6).sort((e, s) => e.localeCompare(s)).map(e => (0, n.jsx)(o, {
      hotspotLocation: e
    }, e))]
  })
}