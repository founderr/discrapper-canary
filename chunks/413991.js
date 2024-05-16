"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  u = n("481060"),
  i = n("911969"),
  o = n("970184"),
  s = n("293979"),
  r = n("834507");

function d(e) {
  let t;
  let {
    type: n,
    style: d,
    label: c,
    placeholder: p,
    minLength: m,
    maxLength: f,
    required: S,
    value: C
  } = e, [v, E] = a.useState(null != C ? C : ""), {
    state: N,
    executeStateUpdate: h,
    error: g
  } = (0, o.useComponentState)(e, null != C ? {
    type: n,
    value: C
  } : void 0), T = (0, s.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === n && E(N.value)
  }, [n, N]);
  let y = {
    name: c,
    value: v,
    placeholder: p,
    minLength: m,
    maxLength: f,
    required: S,
    onChange: e => {
      E(e), h({
        type: n,
        value: e
      })
    },
    autoFocus: T
  };
  switch (d) {
    case i.TextComponentStyle.SMALL:
      t = (0, l.jsx)(u.TextInput, {
        ...y
      });
      break;
    case i.TextComponentStyle.PARAGRAPH:
      t = (0, l.jsx)(u.TextArea, {
        ...y
      })
  }
  return (0, l.jsx)(u.FormItem, {
    title: c,
    required: S,
    className: r.formItem,
    error: g,
    children: t
  })
}