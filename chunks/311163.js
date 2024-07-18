n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(272423),
  o = n(378788);

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = (0, i.kf)(e);
  if (null != n)
return [
  n.params.guildId,
  n.params.channelId
];
  if ((0, o.z)() && !t)
return [
  void 0,
  void 0
];
  let r = (0, i.B3)(e);
  if (null != r) {
var a, s;
return [
  null === (a = r.params) || void 0 === a ? void 0 : a.guildId,
  null === (s = r.params) || void 0 === s ? void 0 : s.channelId
];
  }
  return [
void 0,
void 0
  ];
}