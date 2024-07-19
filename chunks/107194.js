s.d(n, {
  Z: function() {
return I;
  }
}), s(653041), s(627341);
var i = s(278074),
  l = s(442837),
  o = s(199902),
  t = s(158776),
  r = s(726059),
  a = s(162267),
  d = s(228168),
  c = s(981631),
  u = s(689938);

function I(e) {
  var n, s;
  let {
user: I,
currentUser: _
  } = e, f = (0, l.e7)([o.Z], () => o.Z.getAnyStreamForUser(I.id)), E = (0, l.e7)([t.Z], () => t.Z.findActivity(I.id, e => {
let {
  type: n
} = e;
return n !== c.IIU.CUSTOM_STATUS;
  })), m = null === (n = (0, r.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualFriends) || void 0 === n ? void 0 : n.length, S = null === (s = (0, a.Z)(I.id, I.id !== (null == _ ? void 0 : _.id)).mutualGuilds) || void 0 === s ? void 0 : s.length, Z = [{
section: d.oh.USER_INFO,
text: u.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != f || null != E) && Z.push({
section: d.oh.ACTIVITY,
text: u.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == _ ? void 0 : _.id) && (Z.push({
section: d.oh.MUTUAL_FRIENDS,
text: (0, i.EQ)(m).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
  count: e
}))
  }), Z.push({
section: d.oh.MUTUAL_GUILDS,
text: (0, i.EQ)(S).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
  count: e
}))
  })), Z;
}