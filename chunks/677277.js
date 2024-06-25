var s = n(735250);
n(470079);
var i = n(481060),
  l = n(360048),
  a = n(731455),
  r = n(689938),
  o = n(356532);
t.Z = e => {
  let {
    handleCategorySelect: t,
    shouldDisplaySelectedCategory: n,
    currentCategoryId: c
  } = e;
  return (0, s.jsx)(l.Z, {
    avatar: (0, s.jsx)(i.HubIcon, {
      size: "md",
      color: "currentColor"
    }),
    name: r.Z.Messages.HUB_SCHOOL_HUBS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => {
      t(a.U)
    },
    wrapContent: !0,
    selected: n && a.U === c,
    className: o.categoryItem,
    selectedClassName: o.selectedCategoryItem,
    innerClassName: o.itemInner
  }, a.U)
}