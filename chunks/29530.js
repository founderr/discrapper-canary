n.d(s, {
  Z: function() {
return r;
  }
}), n(627341);
var i = n(278074),
  l = n(162267),
  o = n(228168),
  t = n(689938);

function r(e) {
  var s;
  let n = null === (s = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === s ? void 0 : s.length;
  return [{
  section: o.oh.BOT_INFO,
  text: t.Z.Messages.USER_PROFILE_ABOUT_ME
},
{
  section: o.oh.MUTUAL_GUILDS,
  text: (0, i.EQ)(n).with(void 0, () => t.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => t.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => t.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
    count: e
  }))
},
{
  section: o.oh.BOT_DATA_ACCESS,
  text: t.Z.Messages.BOTS_DATA_ACCESS_TAB
}
  ];
}