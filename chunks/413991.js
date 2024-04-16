"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
}), t("47120");
var l = t("735250"),
  a = t("470079"),
  s = t("481060"),
  u = t("911969"),
  i = t("970184"),
  o = t("293979"),
  r = t("561684");

function d(e) {
  let n;
  let {
    type: t,
    style: d,
    label: c,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: S,
    value: C
  } = e, [E, N] = a.useState(null != C ? C : ""), {
    state: v,
    executeStateUpdate: T,
    error: h
  } = (0, i.useComponentState)(e, null != C ? {
    type: t,
    value: C
  } : void 0), x = (0, o.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == v ? void 0 : v.type) === t && N(v.value)
  }, [t, v]);
  let y = {
    name: c,
    value: E,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: S,
    onChange: e => {
      N(e), T({
        type: t,
        value: e
      })
    },
    autoFocus: x
  };
  switch (d) {
    case u.TextComponentStyle.SMALL:
      n = (0, l.jsx)(s.TextInput, {
        ...y
      });
      break;
    case u.TextComponentStyle.PARAGRAPH:
      n = (0, l.jsx)(s.TextArea, {
        ...y
      })
  }
  return (0, l.jsx)(s.FormItem, {
    title: c,
    required: S,
    className: r.formItem,
    error: h,
    children: n
  })
}