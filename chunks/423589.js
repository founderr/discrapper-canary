n.d(t, {
  Mn: function() {
return f;
  },
  OD: function() {
return m;
  },
  W9: function() {
return g;
  }
}), n(47120), n(789020);
var i = n(442837),
  o = n(798140),
  a = n(9156),
  r = n(630388),
  c = n(709054),
  l = n(312400),
  s = n(981631),
  u = n(969943),
  d = n(526761),
  _ = n(689938);

function g() {
  return [{
  label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
  value: u.Oe.MINUTES_15
},
{
  label: _.Z.Messages.MUTE_DURATION_1_HOUR,
  value: u.Oe.HOURS_1
},
{
  label: _.Z.Messages.MUTE_DURATION_3_HOURS,
  value: u.Oe.HOURS_3
},
{
  label: _.Z.Messages.MUTE_DURATION_8_HOURS,
  value: u.Oe.HOURS_8
},
{
  label: _.Z.Messages.MUTE_DURATION_24_HOURS,
  value: u.Oe.HOURS_24
},
{
  label: _.Z.Messages.MUTE_DURATION_ALWAYS,
  value: u.Oe.ALWAYS
}
  ];
}
let b = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
  return c.default.keys(e).filter(n => {
var i, a;
let c = e[n].message_notifications !== s.bL.NULL,
  l = r.yE(null !== (i = e[n].flags) && void 0 !== i ? i : 0, d.ic.UNREADS_ALL_MESSAGES) || r.yE(null !== (a = e[n].flags) && void 0 !== a ? a : 0, d.ic.UNREADS_ONLY_MENTIONS);
return !t.ignoreUnreadSetting && l || !t.ignoreNotificationSetting && c || !t.ignoreMute && (0, o.m$)(e[n]);
  });
}

function f(e) {
  let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
  return l.xT.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  }).enabled && t;
}