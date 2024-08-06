t.d(n, {
  Z: function() {
return u;
  }
}), t(47120);
var l = t(735250),
  r = t(470079),
  i = t(481060),
  a = t(911969),
  o = t(970184),
  s = t(293979),
  c = t(93248);

function u(e) {
  let n;
  let {
type: t,
style: u,
label: d,
placeholder: m,
minLength: f,
maxLength: _,
required: p,
value: C
  } = e, [v, h] = r.useState(null != C ? C : ''), {
state: E,
executeStateUpdate: x,
error: I
  } = (0, o.Ee)(e, null != C ? {
type: t,
value: C
  } : void 0), T = (0, s.hz)(e.id);
  r.useEffect(() => {
(null == E ? void 0 : E.type) === t && h(E.value);
  }, [
t,
E
  ]);
  let N = {
name: d,
value: v,
placeholder: m,
minLength: f,
maxLength: _,
required: p,
onChange: e => {
  h(e), x({
    type: t,
    value: e
  });
},
autoFocus: T
  };
  switch (u) {
case a.FO.SMALL:
  n = (0, l.jsx)(i.TextInput, {
    ...N
  });
  break;
case a.FO.PARAGRAPH:
  n = (0, l.jsx)(i.TextArea, {
    ...N
  });
  }
  return (0, l.jsx)(i.FormItem, {
title: d,
required: p,
className: c.formItem,
error: I,
children: n
  });
}