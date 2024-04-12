"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("206017"),
  l = a("360048"),
  i = a("731455"),
  r = a("689938"),
  o = a("228726");
t.default = e => {
  let {
    handleCategorySelect: t,
    shouldDisplaySelectedCategory: a,
    currentCategoryId: u
  } = e;
  return (0, n.jsx)(l.default, {
    avatar: (0, n.jsx)(s.default, {}),
    name: r.default.Messages.HUB_SCHOOL_HUBS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => {
      t(i.DISCORD_HUB_ID)
    },
    wrapContent: !0,
    selected: a && i.DISCORD_HUB_ID === u,
    className: o.categoryItem,
    selectedClassName: o.selectedCategoryItem,
    innerClassName: o.itemInner
  }, i.DISCORD_HUB_ID)
}