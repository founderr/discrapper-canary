n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(776862),
  a = n(499254),
  r = n(827498),
  o = n(314734),
  c = n(981631);

function u(e) {
  let {
    channel: t,
    openInPopout: u,
    analyticsLocation: d
  } = e;
  u && (0, l.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let E = u ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
  return (0, a.y)(), (0, a._)(r._.VOICE), (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("81056")]).then(n.bind(n, 743161));
    return n => (0, s.jsx)(e, {
      channel: t,
      analyticsLocation: d,
      ...n
    })
  }, {
    modalKey: o.e9,
    contextKey: E
  })
}