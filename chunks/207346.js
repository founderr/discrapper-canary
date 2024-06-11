"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("547972"),
  i = l("529653"),
  o = l("937482"),
  r = l("703288"),
  u = l("332325"),
  c = l("689938"),
  d = l("904411");

function f(e) {
  let {
    filterQuery: t,
    setFilterQuery: l,
    onClose: f,
    sortOrder: m,
    setSortOrder: p
  } = e;
  return (0, a.jsxs)(n.ModalHeader, {
    className: d.root,
    separator: !1,
    children: [(0, a.jsx)(i.default, {
      className: d.icon
    }), (0, a.jsx)(n.Heading, {
      className: d.title,
      variant: "heading-xxl/bold",
      children: c.default.Messages.CLIPS
    }), (0, a.jsx)("div", {
      className: d.betaTag,
      children: (0, a.jsx)(r.default, {})
    }), (0, a.jsx)(n.SearchBar, {
      autoFocus: !0,
      size: n.SearchBar.Sizes.MEDIUM,
      placeholder: c.default.Messages.SEARCH,
      className: d.queryInput,
      query: t,
      onChange: l,
      onClear: () => l("")
    }), (0, a.jsx)(n.Select, {
      placeholder: c.default.Messages.CLIPS_SORT_PLACEHOLDER,
      className: d.sortInput,
      options: [{
        value: "descending",
        label: c.default.Messages.CLIPS_SORT_RECENT
      }, {
        value: "ascending",
        label: c.default.Messages.CLIPS_SORT_OLDEST
      }],
      isSelected: e => e === m,
      select: p,
      serialize: e => e
    }), (0, a.jsx)(n.Button, {
      color: n.ButtonColors.TRANSPARENT,
      size: n.Button.Sizes.NONE,
      className: d.settingsButton,
      look: n.Button.Looks.FILLED,
      onClick: () => {
        (0, s.default)(u.GameSettingsTab.CLIPS), f()
      },
      children: (0, a.jsx)(o.default, {})
    }), (0, a.jsx)(n.ModalCloseButton, {
      className: d.button,
      onClick: f
    })]
  })
}