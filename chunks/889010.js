"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("40146"),
  l = a("619271"),
  i = a("104259"),
  r = a("541561"),
  o = a("520030"),
  u = a("600394"),
  d = a("170039"),
  c = a("199202"),
  f = a("360048"),
  E = a("823379"),
  h = a("731455"),
  _ = a("84051");
let C = e => {
    switch (e) {
      case h.CategoryIcons.Activity:
        return (0, n.jsx)(l.default, {});
      case h.CategoryIcons.Discover:
        return (0, n.jsx)(i.default, {});
      case h.CategoryIcons.Education:
        return (0, n.jsx)(r.default, {});
      case h.CategoryIcons.Music:
        return (0, n.jsx)(o.default, {});
      case h.CategoryIcons.Science:
        return (0, n.jsx)(u.default, {});
      case h.CategoryIcons.Stage:
        return (0, n.jsx)(d.default, {
          height: 22,
          width: 22
        });
      case h.CategoryIcons.Television:
        return (0, n.jsx)(c.default, {});
      case h.CategoryIcons.Server:
        return (0, n.jsx)(s.ServerIcon, {});
      default:
        (0, E.assertNever)(e)
    }
  },
  m = e => {
    let {
      categories: t,
      currentCategoryId: a,
      handleCategorySelect: s,
      shouldDisplaySelectedCategory: l = !0
    } = e;
    return (0, n.jsx)(n.Fragment, {
      children: t.map(e => (0, n.jsx)(f.default, {
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
        selected: l && e.categoryId === a,
        className: _.categoryItem,
        selectedClassName: _.selectedCategoryItem,
        innerClassName: _.itemInner
      }, e.categoryId))
    })
  };
m.Icons = h.CategoryIcons, t.default = m