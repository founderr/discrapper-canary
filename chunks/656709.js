n.d(t, {
  p: function() {
return l;
  }
});
var i = n(904245),
  a = n(957730);

function l(e) {
  let {
channel: t,
content: n,
entry: l
  } = e, s = a.ZP.parse(t, n);
  return i.Z.sendMessage(t.id, s, void 0, {
contentInventoryEntry: {
  content: l
}
  });
}