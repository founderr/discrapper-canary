"use strict";
e.r(t), e.d(t, {
  default: function() {
    return u
  }
});
var n = e("37983");
e("884691");
var i = e("77078"),
  a = e("281240"),
  u = s => {
    let {
      onClose: t,
      transitionState: e
    } = s;
    return (0, n.jsx)(i.ModalRoot, {
      transitionState: e,
      children: (0, n.jsx)(a.default, {
        onClose: t
      })
    })
  }