s.d(n, {
  m: function() {
return N;
  }
});
var l = s(735250),
  t = s(470079),
  i = s(481060),
  a = s(474936),
  r = s(815642),
  c = s(426831),
  o = s(257510),
  u = s(74838),
  d = s(720834),
  _ = s(385925),
  m = s(588921),
  E = s(718720),
  I = s(721513);
let p = {
[a.Cj.STANDARD_BOX]: _,
[a.Cj.CAKE]: m,
[a.Cj.CHEST]: E,
[a.Cj.COFFEE]: I,
[a.Cj.SNOWGLOBE]: '',
[a.Cj.BOX]: '',
[a.Cj.CUP]: '',
[a.Cj.SEASONAL_CAKE]: o,
[a.Cj.SEASONAL_CHEST]: u,
[a.Cj.SEASONAL_COFFEE]: d,
[a.Cj.SEASONAL_STANDARD_BOX]: c
  },
  N = t.forwardRef(function(e, n) {
let {
  isSelected: s,
  giftStyle: t,
  setSelectedGiftStyle: a,
  onFocus: c,
  onBlur: o
} = e;
return (0, l.jsx)(i.Clickable, {
  innerRef: n,
  onClick: () => a(t),
  onFocus: c,
  onBlur: o,
  children: (0, l.jsx)('img', {
    style: {
      width: '100%',
      height: '100%'
    },
    alt: '',
    src: p[t],
    className: s ? r.customGiftBoxHighlighted : r.customGiftBox
  })
});
  });