n.d(s, {
  W: function() {
    return r
  },
  Z: function() {
    return c
  }
});
var t = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  o = n(481060),
  i = n(26866);
let r = {
  RED: i.redMessageBlock,
  YELLOW: i.yellowMessageBlock,
  BROWN: i.brownMessageBlock
};

function c(e) {
  let {
    color: s,
    icon: n,
    children: a,
    className: r
  } = e;
  return (0, t.jsx)(o.FormErrorBlock, {
    icon: e => (0, t.jsx)(n, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: i.messageBlockIcon,
    className: l()(s, r),
    children: a
  })
}