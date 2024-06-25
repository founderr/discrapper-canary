n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(82950),
  a = n(981631),
  r = n(921944),
  o = n(689938),
  c = n(524094);

function u(e) {
  let {
    guild: t,
    markAsDismissed: u
  } = e;
  return (0, s.jsx)(l.Z, {
    guild: t,
    onDismissed: () => u(r.L.UNKNOWN),
    onClick: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 650233));
        return t => (0, s.jsx)(e, {
          ...t
        })
      })
    },
    message: o.Z.Messages.HUB_LINK_CHANNEL_NOTICE_BODY,
    cta: o.Z.Messages.LEARN_MORE,
    trackingSource: a.PsQ.HUB_LINK_NOTICE,
    type: a.vID.HUB_LINK,
    image: c
  })
}