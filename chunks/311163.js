r.d(t, {
  Z: function() {
return i;
  }
});
var a = r(272423),
  n = r(378788);

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
r = (0, a.kf)(e);
  if (null != r)
return [
  r.params.guildId,
  r.params.channelId
];
  if ((0, n.z)() && !t)
return [
  void 0,
  void 0
];
  let i = (0, a.B3)(e);
  if (null != i) {
var o, l;
return [
  null === (o = i.params) || void 0 === o ? void 0 : o.guildId,
  null === (l = i.params) || void 0 === l ? void 0 : l.channelId
];
  }
  return [
void 0,
void 0
  ];
}