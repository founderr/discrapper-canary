l.d(n, {
  W: function() {
    return d
  }
});
var t = l(735250);
l(470079);
var i = l(399606),
  a = l(481060),
  s = l(337682),
  r = l(115130),
  o = l(689938),
  c = l(545661);

function d() {
  let {
    activityUrlOverride: e,
    useActivityUrlOverride: n,
    filter: l
  } = (0, i.cj)([r.Z], () => ({
    activityUrlOverride: r.Z.getActivityUrlOverride(),
    useActivityUrlOverride: r.Z.getUseActivityUrlOverride(),
    filter: r.Z.getFilter()
  }), []);
  return (0, t.jsxs)("div", {
    className: c.container,
    children: [(0, t.jsx)(a.Checkbox, {
      type: a.Checkbox.Types.INVERTED,
      className: c.__invalid_checkbox,
      value: n,
      onClick: s.Y$,
      children: (0, t.jsx)(a.Text, {
        variant: "text-md/semibold",
        children: o.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
      })
    }), (0, t.jsx)(a.FormItem, {
      className: c.__invalid_urlOverride,
      title: o.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
      children: (0, t.jsx)(a.TextInput, {
        disabled: !n,
        value: null != e ? e : void 0,
        onChange: s.jS,
        placeholder: "http://localhost:3000"
      })
    }), (0, t.jsx)("div", {
      children: (0, t.jsx)(a.SearchBar, {
        className: c.searchBar,
        query: l,
        onChange: s.a8,
        onClear: function() {
          s.a8("")
        }
      })
    })]
  })
}