t.d(n, {
  W: function() {
    return i
  },
  Z: function() {
    return c
  }
});
var s = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  o = t(481060),
  l = t(26866);
let i = {
  RED: l.redMessageBlock,
  YELLOW: l.yellowMessageBlock,
  BROWN: l.brownMessageBlock
};

function c(e) {
  let {
    color: n,
    icon: t,
    children: a,
    className: i
  } = e;
  return (0, s.jsx)(o.FormErrorBlock, {
    icon: e => (0, s.jsx)(t, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: l.messageBlockIcon,
    className: r()(n, i),
    children: a
  })
}