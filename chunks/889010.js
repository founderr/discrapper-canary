"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("40146"),
  l = n("619271"),
  i = n("104259"),
  r = n("541561"),
  o = n("520030"),
  u = n("600394"),
  d = n("170039"),
  c = n("199202"),
  f = n("360048"),
  E = n("823379"),
  _ = n("731455"),
  h = n("228726");
let C = e => {
    switch (e) {
      case _.CategoryIcons.Activity:
        return (0, a.jsx)(l.default, {});
      case _.CategoryIcons.Discover:
        return (0, a.jsx)(i.default, {});
      case _.CategoryIcons.Education:
        return (0, a.jsx)(r.default, {});
      case _.CategoryIcons.Music:
        return (0, a.jsx)(o.default, {});
      case _.CategoryIcons.Science:
        return (0, a.jsx)(u.default, {});
      case _.CategoryIcons.Stage:
        return (0, a.jsx)(d.default, {
          height: 22,
          width: 22
        });
      case _.CategoryIcons.Television:
        return (0, a.jsx)(c.default, {});
      case _.CategoryIcons.Server:
        return (0, a.jsx)(s.ServerIcon, {});
      default:
        (0, E.assertNever)(e)
    }
  },
  m = e => {
    let {
      categories: t,
      currentCategoryId: n,
      handleCategorySelect: s,
      shouldDisplaySelectedCategory: l = !0
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(f.default, {
        avatar: C(e.icon),
        name: e.name,
        focusProps: {
          offset: {
            right: 4,
            top: 1,
            bottom: 1
          }
        },
        onClick: () => s(e.categoryId),
        wrapContent: !0,
        selected: l && e.categoryId === n,
        className: h.categoryItem,
        selectedClassName: h.selectedCategoryItem,
        innerClassName: h.itemInner
      }, e.categoryId))
    })
  };
m.Icons = _.CategoryIcons, t.default = m