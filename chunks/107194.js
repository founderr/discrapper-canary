i.d(n, {
  Z: function() {
    return I
  }
}), i(653041), i(627341);
var t = i(278074),
  s = i(442837),
  o = i(199902),
  l = i(158776),
  a = i(726059),
  r = i(162267),
  d = i(228168),
  c = i(981631),
  u = i(689938);

function I(e) {
  var n, i;
  let {
    user: I,
    currentUser: f
  } = e, E = (0, s.e7)([o.Z], () => o.Z.getAnyStreamForUser(I.id)), _ = (0, s.e7)([l.Z], () => l.Z.findActivity(I.id, e => {
    let {
      type: n
    } = e;
    return n !== c.IIU.CUSTOM_STATUS
  })), Z = null === (n = (0, a.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualFriends) || void 0 === n ? void 0 : n.length, S = null === (i = (0, r.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualGuilds) || void 0 === i ? void 0 : i.length, m = [{
    section: d.oh.USER_INFO,
    text: u.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != E || null != _) && m.push({
    section: d.oh.ACTIVITY,
    text: u.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == f ? void 0 : f.id) && (m.push({
    section: d.oh.MUTUAL_FRIENDS,
    text: (0, t.EQ)(Z).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), m.push({
    section: d.oh.MUTUAL_GUILDS,
    text: (0, t.EQ)(S).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), m
}