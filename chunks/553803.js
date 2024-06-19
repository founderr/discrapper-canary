n.d(t, {
  A: function() {
    return l
  }
});
var s = n(735250);
n(470079);
var i = n(481060);

function l(e) {
  let {
    message: t,
    initialAnswerId: l
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("74590")]).then(n.bind(n, 651081));
    return n => (0, s.jsx)(e, {
      ...n,
      message: t,
      initialAnswerId: l
    })
  })
}