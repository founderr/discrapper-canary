n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(689938),
  a = n(382862);

function r(e) {
  let {
    message: t
  } = e;
  return (0, s.jsxs)(i.Clickable, {
    onClick: () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("14021")]).then(n.bind(n, 910673));
        return n => (0, s.jsx)(e, {
          channelId: t.channel_id,
          messageId: t.id,
          ...n
        })
      })
    },
    className: a.accessory,
    children: [(0, s.jsx)(i.CircleInformationIcon, {
      size: "xs",
      color: "currentColor"
    }), (0, s.jsx)(i.Text, {
      variant: "text-xs/normal",
      className: a.accessoryText,
      children: l.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
    })]
  })
}