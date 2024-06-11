"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("442837"),
  i = s("481060"),
  l = s("536442"),
  r = s("263704"),
  o = s("465670"),
  d = s("524393");

function u(e) {
  let {
    hotspotLocation: t
  } = e, [s, u] = (0, n.useStateFromStoresArray)([l.HotspotStore], () => [l.HotspotStore.hasHotspot(t, !0), l.HotspotStore.getHotspotOverride(t)]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.FormItem, {
      title: t,
      className: d.hotspotSwitch,
      children: [s ? (0, a.jsx)(i.TooltipContainer, {
        className: d.iconContainer,
        element: "span",
        text: "Active",
        children: (0, a.jsx)(r.default, {
          className: d.checkmark
        })
      }) : (0, a.jsx)(i.TooltipContainer, {
        className: d.iconContainer,
        element: "span",
        text: "Inactive",
        children: (0, a.jsx)(o.default, {
          className: d.xmark
        })
      }), (0, a.jsx)(i.SingleSelect, {
        className: d.overrideSelect,
        value: u,
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
        onChange: e => null != e ? (0, l.setHotspotOverride)(t, e) : (0, l.clearHotspotOverride)(t)
      })]
    }), (0, a.jsx)(i.FormDivider, {})]
  })
}

function c(e) {
  let {
    className: t
  } = e;
  return (0, a.jsxs)(i.FormSection, {
    title: "Hotspots",
    tag: i.FormTitleTags.H1,
    className: t,
    children: [(0, a.jsx)(i.Text, {
      className: d.helpText,
      tag: "p",
      variant: "text-sm/normal",
      children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
    }), Object.keys(l.HotspotLocations).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(u, {
      hotspotLocation: e
    }, e))]
  })
}