n.d(t, {
  Z: function() {
return u;
  }
}), n(411104);
var r = n(493683),
  i = n(904245),
  a = n(541716),
  s = n(957730),
  o = n(592125),
  l = n(838440);
let u = async e => {
  let {
userId: t,
content: n,
location: u
  } = e, {
valid: c,
failureReason: d
  } = await (0, l.v)({
type: a.I.NORMAL,
content: n,
channel: null
  });
  if (!c)
throw Error(d);
  let _ = await r.Z.openPrivateChannel(t, !1, !1, u),
E = o.Z.getChannel(_);
  if (null == E)
throw Error('Failed to open private channel');
  let f = s.ZP.parse(E, n);
  return i.Z.sendMessage(E.id, f);
};