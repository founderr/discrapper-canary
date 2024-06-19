n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(322526);

function o(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: i
  } = e;
  return (0, l.jsx)(a.Text, {
    className: s()(r.unreadCount, i, {
      [r.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}