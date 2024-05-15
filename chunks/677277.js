"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("206017"),
  i = n("360048"),
  l = n("731455"),
  r = n("689938"),
  o = n("84051");
t.default = e => {
  let {
    handleCategorySelect: t,
    shouldDisplaySelectedCategory: n,
    currentCategoryId: u
  } = e;
  return (0, a.jsx)(i.default, {
    avatar: (0, a.jsx)(s.default, {}),
    name: r.default.Messages.HUB_SCHOOL_HUBS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => {
      t(l.DISCORD_HUB_ID)
    },
    wrapContent: !0,
    selected: n && l.DISCORD_HUB_ID === u,
    className: o.categoryItem,
    selectedClassName: o.selectedCategoryItem,
    innerClassName: o.itemInner
  }, l.DISCORD_HUB_ID)
}