"use strict";
s.r(t), s.d(t, {
  MessageBlockColors: function() {
    return a
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
  i = s("754908");
let a = {
  RED: i.redMessageBlock,
  YELLOW: i.yellowMessageBlock,
  BROWN: i.brownMessageBlock
};

function u(e) {
  let {
    color: t,
    icon: s,
    children: l,
    className: a
  } = e;
  return (0, n.jsx)(r.FormErrorBlock, {
    icon: e => (0, n.jsx)(s, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: i.messageBlockIcon,
    className: o(t, a),
    children: l
  })
}