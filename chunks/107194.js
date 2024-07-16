n.d(i, {
  Z: function() {
return I;
  }
}), n(653041), n(627341);
var s = n(278074),
  l = n(442837),
  o = n(199902),
  t = n(158776),
  r = n(726059),
  a = n(162267),
  d = n(228168),
  c = n(981631),
  u = n(689938);

function I(e) {
  var i, n;
  let {
user: I,
currentUser: f
  } = e, _ = (0, l.e7)([o.Z], () => o.Z.getAnyStreamForUser(I.id)), E = (0, l.e7)([t.Z], () => t.Z.findActivity(I.id, e => {
let {
  type: i
} = e;
return i !== c.IIU.CUSTOM_STATUS;
  })), m = null === (i = (0, r.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualFriends) || void 0 === i ? void 0 : i.length, S = null === (n = (0, a.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualGuilds) || void 0 === n ? void 0 : n.length, Z = [{
section: d.oh.USER_INFO,
text: u.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != _ || null != E) && Z.push({
section: d.oh.ACTIVITY,
text: u.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == f ? void 0 : f.id) && (Z.push({
section: d.oh.MUTUAL_FRIENDS,
text: (0, s.EQ)(m).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
  count: e
}))
  }), Z.push({
section: d.oh.MUTUAL_GUILDS,
text: (0, s.EQ)(S).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
  count: e
}))
  })), Z;
}