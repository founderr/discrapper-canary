s.d(t, {
  T: function() {
return o;
  },
  v: function() {
return i;
  }
});
var n = s(735250);
s(470079);
var r = s(481060);
let a = 'collectibles shop product details modal',
  o = e => {
let {
  product: t,
  category: o,
  analyticsSource: i,
  analyticsLocations: l,
  returnRef: c
} = e;
(0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await s.e('2026').then(s.bind(s, 702370));
  return s => (0, n.jsx)(e, {
    ...s,
    product: t,
    category: o,
    analyticsSource: i,
    analyticsLocations: l,
    returnRef: c
  });
}, {
  modalKey: a
});
  },
  i = () => {
(0, r.closeModal)(a);
  };