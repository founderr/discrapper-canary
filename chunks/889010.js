"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("844099"),
  l = n("40146"),
  i = n("619271"),
  r = n("104259"),
  o = n("541561"),
  u = n("520030"),
  d = n("600394"),
  c = n("170039"),
  f = n("199202"),
  E = n("360048"),
  h = n("823379"),
  C = n("731455"),
  _ = n("84051");
let m = e => {
    switch (e) {
      case C.CategoryIcons.Activity:
        return (0, a.jsx)(i.default, {});
      case C.CategoryIcons.Discover:
        return (0, a.jsx)(r.default, {});
      case C.CategoryIcons.Education:
        return (0, a.jsx)(o.default, {});
      case C.CategoryIcons.Music:
        return (0, a.jsx)(u.default, {});
      case C.CategoryIcons.Science:
        return (0, a.jsx)(d.default, {});
      case C.CategoryIcons.Stage:
        return (0, a.jsx)(c.default, {
          height: 22,
          width: 22
        });
      case C.CategoryIcons.Television:
        return (0, a.jsx)(f.default, {});
      case C.CategoryIcons.Server:
        return (0, a.jsx)(l.ServerIcon, {});
      case C.CategoryIcons.Quest:
        return (0, a.jsx)(s.QuestsIcon, {});
      default:
        (0, h.assertNever)(e)
    }
  },
  S = e => {
    let {
      categories: t,
      currentCategoryId: n,
      handleCategorySelect: s,
      shouldDisplaySelectedCategory: l = !0
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(E.default, {
        avatar: m(e.icon),
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
        className: _.categoryItem,
        selectedClassName: _.selectedCategoryItem,
        innerClassName: _.itemInner
      }, e.categoryId))
    })
  };
S.Icons = C.CategoryIcons, t.default = S