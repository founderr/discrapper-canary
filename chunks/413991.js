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
  o = t("970184"),
  r = t("293979"),
  i = t("561684");

function d(e) {
  let n;
  let {
    type: t,
    style: d,
    label: c,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: C,
    value: S
  } = e, [E, v] = a.useState(null != S ? S : ""), {
    state: N,
    executeStateUpdate: h,
    error: T
  } = (0, o.useComponentState)(e, null != S ? {
    type: t,
    value: S
  } : void 0), x = (0, r.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === t && v(N.value)
  }, [t, N]);
  let y = {
    name: c,
    value: E,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: C,
    onChange: e => {
      v(e), h({
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
    required: C,
    className: i.formItem,
    error: T,
    children: n
  })
}