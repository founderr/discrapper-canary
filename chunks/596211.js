e.d(n, {
  Z: function() {
    return s
  }
});
var a = e(735250);
e(470079);
var i = e(481060),
  r = e(406877);

function s(t) {
  let {
    guildId: n,
    productId: e,
    attachmentId: s,
    ...l
  } = t, {
    isLoading: o,
    downloadAttachment: c
  } = (0, r.Z)(n, e);
  return (0, a.jsx)(i.Button, {
    ...l,
    submitting: o,
    onClick: function() {
      c(s)
    }
  })
}