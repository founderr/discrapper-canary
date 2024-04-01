"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("507893"),
  i = n("689938"),
  r = n("398559");

function o(e) {
  let {
    message: t
  } = e;
  return (0, s.jsxs)(l.Clickable, {
    onClick: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("14021")]).then(n.bind(n, "910673"));
        return n => (0, s.jsx)(e, {
          channelId: t.channel_id,
          messageId: t.id,
          ...n
        })
      })
    },
    className: r.accessory,
    children: [(0, s.jsx)(a.default, {
      width: 16,
      height: 16
    }), (0, s.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: r.accessoryText,
      children: i.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
    })]
  })
}