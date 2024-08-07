s.d(n, {
  Z: function() {
return d;
  }
}), s(653041), s(627341);
var i = s(278074),
  l = s(726059),
  o = s(162267),
  t = s(929498),
  r = s(228168),
  a = s(689938);

function d(e) {
  var n, s;
  let {
user: d,
currentUser: c
  } = e, {
live: u,
recent: I,
stream: _
  } = (0, t.Z)(d.id), f = null === (n = (0, l.Z)(d.id, d.id !== (null == c ? void 0 : c.id)).mutualFriends) || void 0 === n ? void 0 : n.length, E = null === (s = (0, o.Z)(d.id, d.id !== (null == c ? void 0 : c.id)).mutualGuilds) || void 0 === s ? void 0 : s.length, m = [{
section: r.oh.USER_INFO,
text: a.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (u.length > 0 || I.length > 0 || null != _) && m.push({
section: r.oh.ACTIVITY,
text: a.Z.Messages.USER_PROFILE_ACTIVITY
  }), d.id !== (null == c ? void 0 : c.id) && (m.push({
section: r.oh.MUTUAL_FRIENDS,
text: (0, i.EQ)(f).with(void 0, () => a.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => a.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => a.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
  count: e
}))
  }), m.push({
section: r.oh.MUTUAL_GUILDS,
text: (0, i.EQ)(E).with(void 0, () => a.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => a.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => a.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
  count: e
}))
  })), m;
}