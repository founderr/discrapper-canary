"use strict";
l.r(t), l.d(t, {
  DeveloperShelfControls: function() {
    return u
  }
});
var i = l("735250");
l("470079");
var a = l("399606"),
  n = l("481060"),
  s = l("6048"),
  r = l("337682"),
  c = l("115130"),
  d = l("689938"),
  o = l("757879");

function u() {
  let {
    activityUrlOverride: e,
    useActivityUrlOverride: t,
    filter: l
  } = (0, a.useStateFromStoresObject)([c.default], () => ({
    activityUrlOverride: c.default.getActivityUrlOverride(),
    useActivityUrlOverride: c.default.getUseActivityUrlOverride(),
    filter: c.default.getFilter()
  }), []);
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [(0, i.jsx)(n.Checkbox, {
      type: n.Checkbox.Types.INVERTED,
      className: o.__invalid_checkbox,
      value: t,
      onClick: r.toggleUseActivityUrlOverride,
      children: (0, i.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: d.default.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
      })
    }), (0, i.jsx)(n.FormItem, {
      className: o.__invalid_urlOverride,
      title: d.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
      children: (0, i.jsx)(n.TextInput, {
        disabled: !t,
        value: null != e ? e : void 0,
        onChange: r.setActivityUrlOverride,
        placeholder: "http://localhost:3000"
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(s.default, {
        className: o.searchBar,
        query: l,
        onChange: r.updateFilter,
        onClear: function() {
          r.updateFilter("")
        }
      })
    })]
  })
}