s.d(i, {
  Z: function() {
    return r
  }
}), s(627341);
var n = s(278074),
  l = s(162267),
  t = s(228168),
  o = s(689938);

function r(e) {
  var i;
  let s = null === (i = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return [{
    section: t.oh.USER_INFO,
    text: o.Z.Messages.USER_PROFILE_ABOUT_ME
  }, {
    section: t.oh.MUTUAL_GUILDS,
    text: (0, n.EQ)(s).with(void 0, () => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => o.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  }, {
    section: t.oh.BOT_DATA_ACCESS,
    text: o.Z.Messages.BOTS_DATA_ACCESS_TAB
  }]
}