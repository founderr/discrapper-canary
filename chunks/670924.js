"use strict";
n.r(t), n.d(t, {
  showModal: function() {
    return l
  },
  updateModalProps: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var s = n("551042"),
  o = n("920636");
let a = (e, t, n) => function(s) {
  return (0, r.jsx)(o.default, {
    handleSubmit: e,
    handleEarlyClose: t,
    ...n,
    ...s
  })
};

function l(e, t, n) {
  return (0, s.openModal)(a(e, t, n), {
    onCloseCallback: t
  })
}

function u(e, t, n, r) {
  return (0, s.updateModal)(e, a(t, n, r))
}