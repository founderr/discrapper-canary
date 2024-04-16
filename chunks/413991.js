"use strict";
n.r(l), n.d(l, {
  default: function() {
    return d
  }
}), n("47120");
var t = n("735250"),
  a = n("470079"),
  s = n("481060"),
  u = n("911969"),
  i = n("970184"),
  o = n("293979"),
  r = n("561684");

function d(e) {
  let l;
  let {
    type: n,
    style: d,
    label: c,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: S,
    value: C
  } = e, [E, v] = a.useState(null != C ? C : ""), {
    state: N,
    executeStateUpdate: h,
    error: T
  } = (0, i.useComponentState)(e, null != C ? {
    type: n,
    value: C
  } : void 0), y = (0, o.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === n && v(N.value)
  }, [n, N]);
  let x = {
    name: c,
    value: E,
    placeholder: m,
    minLength: p,
    maxLength: f,
    required: S,
    onChange: e => {
      v(e), h({
        type: n,
        value: e
      })
    },
    autoFocus: y
  };
  switch (d) {
    case u.TextComponentStyle.SMALL:
      l = (0, t.jsx)(s.TextInput, {
        ...x
      });
      break;
    case u.TextComponentStyle.PARAGRAPH:
      l = (0, t.jsx)(s.TextArea, {
        ...x
      })
  }
  return (0, t.jsx)(s.FormItem, {
    title: c,
    required: S,
    className: r.formItem,
    error: T,
    children: l
  })
}