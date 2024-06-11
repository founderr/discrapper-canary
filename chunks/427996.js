"use strict";
l.r(t), l.d(t, {
  DeveloperShelfControls: function() {
    return c
  }
});
var i = l("735250");
l("470079");
var a = l("399606"),
  n = l("481060"),
  s = l("337682"),
  r = l("115130"),
  d = l("689938"),
  o = l("706961");

function c() {
  let {
    activityUrlOverride: e,
    useActivityUrlOverride: t,
    filter: l
  } = (0, a.useStateFromStoresObject)([r.default], () => ({
    activityUrlOverride: r.default.getActivityUrlOverride(),
    useActivityUrlOverride: r.default.getUseActivityUrlOverride(),
    filter: r.default.getFilter()
  }), []);
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [(0, i.jsx)(n.Checkbox, {
      type: n.Checkbox.Types.INVERTED,
      className: o.__invalid_checkbox,
      value: t,
      onClick: s.toggleUseActivityUrlOverride,
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
        onChange: s.setActivityUrlOverride,
        placeholder: "http://localhost:3000"
      })
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(n.SearchBar, {
        className: o.searchBar,
        query: l,
        onChange: s.updateFilter,
        onClear: function() {
          s.updateFilter("")
        }
      })
    })]
  })
}