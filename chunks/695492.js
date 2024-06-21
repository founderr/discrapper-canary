n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(607187),
  a = n(112560),
  r = n(981631),
  o = n(689938),
  c = n(299993),
  u = n(800350);

function d(e) {
  let {
    channel: t,
    guild: d,
    width: h,
    inPopout: m
  } = e;
  return (0, l.jsx)(s.Z, {
    className: c.root,
    children: (0, l.jsx)(a.Z, {
      artURL: u,
      size: (0, a.L)(h),
      header: o.Z.Messages.STREAM_SINGLE_PERSON_BODY,
      onCTAClick: () => (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("1425")]).then(n.bind(n, 560114));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: d,
          channel: t,
          source: r.t4x.CHANNEL_CALL
        })
      }, {
        contextKey: m ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
      }),
      callToAction: o.Z.Messages.INSTANT_INVITE
    })
  })
}