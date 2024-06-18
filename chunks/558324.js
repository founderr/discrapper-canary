"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(981631),
  c = t(432359);
s.Z = e => {
  let {
    className: s,
    tags: t,
    value: l,
    onRemoveTag: d,
    onAddTag: u,
    maxTaxLength: E,
    maxTags: _,
    disabled: I,
    placeholder: T,
    ...N
  } = e, [m, S] = i.useState(null != l ? l : ""), h = t.map((e, s) => (0, n.jsxs)("span", {
    className: a()(c.tag, {
      [c.__invalid_disabledTag]: I
    }),
    children: [e, !I && (0, n.jsx)(r.Clickable, {
      className: c.closeWrapper,
      onClick: () => d(s),
      children: (0, n.jsx)(r.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: c.close
      })
    })]
  }, s)), g = i.useCallback(() => {
    let e = m.trim();
    if (0 !== e.length)(null == _ || !(t.length >= _)) && (u(e), S(""))
  }, [m, _, u, t.length]), C = i.useCallback(e => {
    switch (e.keyCode) {
      case o.yXg.BACKSPACE:
        0 === m.length && t.length > 0 && (e.preventDefault(), e.stopPropagation(), d(t.length - 1));
        break;
      case o.yXg.ENTER:
      case o.yXg.TAB:
      case o.yXg.COMMA:
        e.preventDefault(), e.stopPropagation(), g()
    }
  }, [g, m.length, d, t.length]);
  return (0, n.jsxs)("div", {
    className: a()(s, c.inputWrapper, {
      [c.disabled]: I
    }),
    children: [h, (0, n.jsx)(r.TextInput, {
      className: c.inputOuter,
      inputClassName: c.inputInner,
      ...N,
      value: m,
      onKeyDown: C,
      onChange: S,
      maxLength: E,
      disabled: I,
      onBlur: g,
      placeholder: T
    })]
  })
}