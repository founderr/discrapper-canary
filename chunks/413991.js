"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  r = n("481060"),
  s = n("911969"),
  u = n("970184"),
  o = n("293979"),
  i = n("410896");

function d(e) {
  let t;
  let {
    type: n,
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
  } = (0, u.useComponentState)(e, null != S ? {
    type: n,
    value: S
  } : void 0), x = (0, o.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === n && v(N.value)
  }, [n, N]);
  let y = {
    name: c,
    value: E,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: C,
    onChange: e => {
      v(e), h({
        type: n,
        value: e
      })
    },
    autoFocus: x
  };
  switch (d) {
    case s.TextComponentStyle.SMALL:
      t = (0, l.jsx)(r.TextInput, {
        ...y
      });
      break;
    case s.TextComponentStyle.PARAGRAPH:
      t = (0, l.jsx)(r.TextArea, {
        ...y
      })
  }
  return (0, l.jsx)(r.FormItem, {
    title: c,
    required: C,
    className: i.formItem,
    error: T,
    children: t
  })
}