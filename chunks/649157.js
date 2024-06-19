t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(153867),
  o = t(706454),
  c = t(689938),
  E = t(968910),
  d = t(444675);
s.Z = a.ZP.connectStores([o.default], () => ({
  currentLocale: o.default.locale
}))(function(e) {
  let [s, a] = i.useState(e.currentLocale), [o] = i.useState(() => c.Z.getAvailableLocales().map(e => {
    let s;
    try {
      s = t(621287)("./".concat(e.value, ".png"))
    } catch (e) {
      s = t(1474)
    }
    return {
      ...e,
      name: (0, n.jsxs)("div", {
        className: E.option,
        children: [(0, n.jsx)("span", {
          className: E.localeName,
          children: e.name
        }), (0, n.jsx)("span", {
          className: E.localizedName,
          children: e.localizedName
        }), (0, n.jsx)("div", {
          className: E.flag,
          "aria-hidden": !0,
          children: (0, n.jsx)("img", {
            alt: "",
            src: s,
            className: E.flagImage
          })
        })]
      })
    }
  })), _ = i.useCallback(e => {
    let {
      value: s
    } = e;
    a(s), d.nextTick(() => r.ZP.updateLocale(s))
  }, []);
  return (0, n.jsx)(l.FormSection, {
    tag: l.FormTitleTags.H1,
    title: c.Z.Messages.LANGUAGE,
    children: (0, n.jsx)(l.FormSection, {
      children: (0, n.jsx)(l.FormItem, {
        title: c.Z.Messages.LANGUAGE_SELECT,
        children: (0, n.jsx)(l.RadioGroup, {
          onChange: _,
          options: o,
          value: s
        })
      })
    })
  })
})