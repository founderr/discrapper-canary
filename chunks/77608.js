n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(63063),
  c = n(113434),
  d = n(981631),
  u = n(689938),
  _ = n(770884);

function E(e) {
  let {
    setSelectedFilter: t,
    selectedFilter: n
  } = e, a = [{
    id: c.W6.UNCLAIMED,
    label: u.Z.Messages.QUESTS_ALL
  }, {
    id: c.W6.CLAIMED,
    label: u.Z.Messages.QUESTS_CLAIMED
  }], E = s.useCallback(() => {
    window.open(o.Z.getArticleURL(d.BhN.QUESTS_LEARN_MORE))
  }, []), h = s.useCallback(e => {
    t(e)
  }, [t]);
  return (0, i.jsxs)(l.TabBar, {
    className: r()(_.container),
    selectedItem: n,
    onItemSelect: e => h(e),
    type: "top",
    "aria-label": u.Z.Messages.QUESTS,
    orientation: "horizontal",
    children: [a.map(e => {
      let t = e.id === n;
      return (0, i.jsx)(l.TabBar.Item, {
        id: e.id,
        className: r()(_.tab, {
          [_.selected]: t
        }),
        "aria-label": e.label,
        disableItemStyles: !0,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: t ? "text-brand" : "text-primary",
          children: e.label
        })
      }, e.id)
    }), (0, i.jsxs)(l.Button, {
      onClick: E,
      className: _.button,
      innerClassName: _.innerButton,
      children: [(0, i.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "text-muted",
        className: _.externalLinkText,
        children: u.Z.Messages.LEARN_MORE
      }), (0, i.jsx)(l.LinkExternalSmallIcon, {
        className: _.icon,
        color: "var(--text-muted)"
      })]
    })]
  })
}