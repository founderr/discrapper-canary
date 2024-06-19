var i = n(735250);
n(470079);
var s = n(481060),
  l = n(360048),
  a = n(823379),
  r = n(731455),
  o = n(356532);
let c = e => {
    switch (e) {
      case r.fW.Activity:
        return (0, i.jsx)(s.GameControllerIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Discover:
        return (0, i.jsx)(s.CompassIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Education:
        return (0, i.jsx)(s.EducationIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Music:
        return (0, i.jsx)(s.MusicIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Science:
        return (0, i.jsx)(s.ScienceIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Stage:
        return (0, i.jsx)(s.StageIcon, {
          size: "custom",
          color: "currentColor",
          height: 22,
          width: 22
        });
      case r.fW.Television:
        return (0, i.jsx)(s.TvIcon, {
          size: "md",
          color: "currentColor"
        });
      case r.fW.Server:
        return (0, i.jsx)(s.ServerIcon, {});
      case r.fW.Quest:
        return (0, i.jsx)(s.QuestsIcon, {});
      default:
        (0, a.vE)(e)
    }
  },
  u = e => {
    let {
      categories: t,
      currentCategoryId: n,
      handleCategorySelect: s,
      shouldDisplaySelectedCategory: a = !0
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(l.Z, {
        avatar: c(e.icon),
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
        selected: a && e.categoryId === n,
        className: o.categoryItem,
        selectedClassName: o.selectedCategoryItem,
        innerClassName: o.itemInner
      }, e.categoryId))
    })
  };
u.Icons = r.fW, t.Z = u