n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(776862),
  l = n(499254),
  r = n(827498),
  o = n(314734),
  c = n(981631);

function d(e) {
  let {
    channel: t,
    openInPopout: d
  } = e;
  d && (0, s.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let u = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, l.y)(), (0, l._)(r._b.VOICE), (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("81056").then(n.bind(n, 743161));
    return n => (0, i.jsx)(e, {
      channel: t,
      ...n
    })
  }, {
    modalKey: o.e9,
    contextKey: u
  })
}