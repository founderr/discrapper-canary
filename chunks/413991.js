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
    state: h,
    executeStateUpdate: N,
    error: g
  } = (0, o.useComponentState)(e, null != C ? {
    type: n,
    value: C
  } : void 0), y = (0, s.useIsFirstTextInputInModal)(e.id);
  a.useEffect(() => {
    (null == h ? void 0 : h.type) === n && E(h.value)
  }, [n, h]);
  let T = {
    name: c,
    value: v,
    placeholder: p,
    minLength: m,
    maxLength: f,
    required: S,
    onChange: e => {
      E(e), N({
        type: n,
        value: e
      })
    },
    autoFocus: y
  };
  switch (d) {
    case i.TextComponentStyle.SMALL:
      t = (0, l.jsx)(u.TextInput, {
        ...T
      });
      break;
    case i.TextComponentStyle.PARAGRAPH:
      t = (0, l.jsx)(u.TextArea, {
        ...T
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