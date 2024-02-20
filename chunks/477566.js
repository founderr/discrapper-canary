"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("551042"),
  s = n("135230"),
  a = n("782340"),
  o = {
    show(e) {
      let {
        title: t,
        body: n,
        confirmColor: a,
        confirmText: o,
        cancelText: l,
        onConfirm: u,
        onCancel: c,
        onCloseCallback: d,
        secondaryConfirmText: p,
        onConfirmSecondary: h,
        className: f,
        titleClassName: E
      } = e;
      (0, r.openModal)(e => (0, i.jsx)(s.default, {
        ...e,
        title: t,
        body: n,
        confirmColor: a,
        confirmText: o,
        cancelText: l,
        onConfirm: u,
        onCancel: c,
        secondaryConfirmText: p,
        onConfirmSecondary: h,
        className: f,
        titleClassName: E
      }), {
        onCloseCallback: d
      })
    },
    close() {},
    confirm(e) {
      return new Promise(t => {
        this.show({
          onConfirm() {
            t(!0)
          },
          cancelText: a.default.Messages.CANCEL,
          onCancel() {
            t(!1)
          },
          ...e
        })
      })
    }
  }