t.d(n, {
  XN: function() {
return u;
  },
  af: function() {
return a;
  },
  gK: function() {
return l;
  }
});
var r = t(735250);
t(470079);
var i = t(481060);

function o(e) {
  return new Promise(n => {
(0, i.openModalLazy)(() => e(() => {
  n(!0);
}, e => (n(!1), e())));
  });
}
let l = e => o(async (n, i) => {
let {
  default: o
} = await t.e('44462').then(t.bind(t, 478472));
return t => (0, r.jsx)(o, {
  ...t,
  ruleName: e,
  onConfirm: n,
  onClose: () => i(t.onClose),
  onCancel: () => i(t.onClose)
});
  }),
  u = (e, n) => o(async (i, o) => {
let {
  default: l
} = await t.e('92575').then(t.bind(t, 601787));
return t => (0, r.jsx)(l, {
  ...t,
  ruleName: e,
  keyword: n,
  onConfirm: i,
  onClose: () => o(t.onClose),
  onCancel: () => o(t.onClose)
});
  }),
  a = e => n => o(async (i, o) => {
let {
  default: l
} = await t.e('83613').then(t.bind(t, 449675)), u = () => {
  n(), i();
};
return n => (0, r.jsx)(l, {
  ruleName: e,
  ...n,
  onConfirm: u,
  onClose: () => o(n.onClose),
  onCancel: () => o(n.onClose)
});
  });