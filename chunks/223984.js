"use strict";
s.r(t), s.d(t, {
  MessageBlockColors: function() {
    return i
  },
  default: function() {
    return u
  }
});
var n = s("37983");
s("884691");
var l = s("414456"),
  o = s.n(l),
  r = s("77078"),
  a = s("754908");
let i = {
  RED: a.redMessageBlock,
  YELLOW: a.yellowMessageBlock,
  BROWN: a.brownMessageBlock
};

function u(e) {
  let {
    color: t,
    icon: s,
    children: l,
    className: i
  } = e;
  return (0, n.jsx)(r.FormErrorBlock, {
    icon: e => (0, n.jsx)(s, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: a.messageBlockIcon,
    className: o(t, i),
    children: l
  })
}