"use strict";
s.r(t), s.d(t, {
  MessageBlockColors: function() {
    return r
  },
  default: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var l = s("803997"),
  a = s.n(l),
  i = s("481060"),
  o = s("789718");
let r = {
  RED: o.redMessageBlock,
  YELLOW: o.yellowMessageBlock,
  BROWN: o.brownMessageBlock
};

function u(e) {
  let {
    color: t,
    icon: s,
    children: l,
    className: r
  } = e;
  return (0, n.jsx)(i.FormErrorBlock, {
    icon: e => (0, n.jsx)(s, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: o.messageBlockIcon,
    className: a()(t, r),
    children: l
  })
}