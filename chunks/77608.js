"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("257182"),
  o = n("481060"),
  u = n("63063"),
  d = n("113434"),
  c = n("981631"),
  f = n("689938"),
  E = n("774473");

function C(e) {
  let {
    setSelectedFilter: t,
    selectedFilter: n
  } = e, l = [{
    id: d.QuestFilters.INCOMPLETE,
    label: f.default.Messages.QUESTS_ALL
  }, {
    id: d.QuestFilters.COMPLETE,
    label: f.default.Messages.QUESTS_COMPLETED
  }], C = s.useCallback(() => {
    window.open(u.default.getArticleURL(c.HelpdeskArticles.QUESTS_LEARN_MORE))
  }, []), h = s.useCallback(e => {
    t(e)
  }, [t]);
  return (0, a.jsxs)(o.TabBar, {
    className: i()(E.container),
    selectedItem: n,
    onItemSelect: e => h(e),
    type: "top",
    "aria-label": f.default.Messages.QUESTS,
    orientation: "horizontal",
    children: [l.map(e => {
      let t = e.id === n;
      return (0, a.jsx)(o.TabBar.Item, {
        id: e.id,
        className: i()(E.tab, {
          [E.selected]: t
        }),
        "aria-label": e.label,
        disableItemStyles: !0,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: t ? "text-brand" : "text-primary",
          children: e.label
        })
      }, e.id)
    }), (0, a.jsxs)(o.Button, {
      onClick: C,
      className: E.button,
      innerClassName: E.innerButton,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "text-muted",
        className: E.externalLinkText,
        children: f.default.Messages.LEARN_MORE
      }), (0, a.jsx)(r.LinkExternalSmallIcon, {
        className: E.icon,
        color: "var(--text-muted)"
      })]
    })]
  })
}