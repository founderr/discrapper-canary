n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(272423),
  r = n(378788);

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = (0, i.kf)(e);
  if (null != n)
return [
  n.params.guildId,
  n.params.channelId
];
  if ((0, r.z)() && !t)
return [
  void 0,
  void 0
];
  let a = (0, i.B3)(e);
  if (null != a) {
var o, s;
return [
  null === (o = a.params) || void 0 === o ? void 0 : o.guildId,
  null === (s = a.params) || void 0 === s ? void 0 : s.channelId
];
  }
  return [
void 0,
void 0
  ];
}