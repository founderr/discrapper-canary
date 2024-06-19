n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(26151),
  a = n(871499),
  r = n(689938);

function o(e) {
  let {
    channel: t,
    ...n
  } = e;
  return (0, l.jsx)(a.d, {
    ...n,
    iconComponent: i.CloseSmallIcon,
    label: r.Z.Messages.DISMISS,
    onClick: () => s.Z.stopRinging(t.id)
  })
}