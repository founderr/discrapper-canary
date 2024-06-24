t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(481060),
  o = t(442837),
  c = t(314897),
  d = t(353093),
  u = t(214715),
  m = t(18100),
  h = t(308083),
  C = t(689938),
  x = t(360884);
n.Z = e => {
  let {
    guildId: n,
    handleUpdate: t,
    progress: s,
    error: f
  } = e, {
    interests: E
  } = s, [T, _] = r.useState(""), I = (0, o.e7)([c.default], () => c.default.getId()), g = r.useMemo(() => (0, d.SS)(h.i6, I), [I]), p = r.useMemo(() => Array.from(E), [E]), N = r.useMemo(() => p.filter(h.O6), [p]), v = r.useMemo(() => [...g, ...N], [N, g]), y = r.useMemo(() => p.filter(e => !h.WZ.has(e) && !h.gh.has(e)), [p]), S = e => {
    let n = new Set(E);
    n.delete(e), t({
      interests: n
    })
  }, A = r.useCallback(e => {
    if (E.size === h.c4) return;
    let n = null != e ? e : T.trim();
    if (0 === n.length) return;
    let a = new Set(E);
    a.add(n), t({
      interests: a
    }), _("")
  }, [t, T, E]), M = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), A()
    }
  }, [A]);
  return (0, a.jsxs)("div", {
    className: x.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: x.title,
      children: C.Z.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: x.subtitle,
      children: C.Z.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != f && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: x.errorText,
      children: f
    }), (0, a.jsxs)("div", {
      className: x.content,
      children: [(0, a.jsxs)("div", {
        className: x.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: x.inputContainer,
          children: [(0, a.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: x.contentLabel,
            children: C.Z.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, a.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: x.input,
            value: T,
            onKeyDown: M,
            onChange: _,
            placeholder: C.Z.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: h.Sq,
            disabled: E.size === h.c4
          }), T.length > 0 && (0, a.jsx)(l.Clickable, {
            onClick: () => A(T.trim()),
            className: i()(x.plusIcon, x.clickable),
            children: (0, a.jsx)(l.PlusSmallIcon, {
              size: "md",
              color: "currentColor",
              className: x.icon
            })
          }), T.length > 0 && (0, a.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: x.enterToSearchText,
            children: C.Z.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(l.Text, {
          className: x.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: C.Z.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: x.interestsCategory,
          children: v.map(e => {
            let n = E.has(e);
            return (0, a.jsx)(u.Z, {
              variant: "text-xs/semibold",
              color: "interactive-normal",
              text: e,
              selected: n,
              onClick: n ? S : A
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: x.fixedWidthSidebar,
        children: p.length > 0 && (0, a.jsx)(m.Z, {
          guildId: n,
          progress: s,
          traitsToHighlight: y,
          maskDescription: !0,
          onTraitClick: S
        })
      })]
    })]
  })
}