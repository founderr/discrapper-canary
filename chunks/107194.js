n.d(i, {
  Z: function() {
    return I
  }
}), n(653041), n(627341);
var s = n(278074),
  l = n(442837),
  t = n(199902),
  o = n(158776),
  r = n(726059),
  a = n(162267),
  d = n(228168),
  u = n(981631),
  c = n(689938);

function I(e) {
  var i, n;
  let {
    user: I,
    currentUser: E
  } = e, Z = (0, l.e7)([t.Z], () => t.Z.getAnyStreamForUser(I.id)), _ = (0, l.e7)([o.Z], () => o.Z.findActivity(I.id, e => {
    let {
      type: i
    } = e;
    return i !== u.IIU.CUSTOM_STATUS
  })), f = null === (i = (0, r.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualFriends) || void 0 === i ? void 0 : i.length, S = null === (n = (0, a.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualGuilds) || void 0 === n ? void 0 : n.length, v = [{
    section: d.oh.USER_INFO,
    text: c.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != Z || null != _) && v.push({
    section: d.oh.ACTIVITY,
    text: c.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == E ? void 0 : E.id) && (v.push({
    section: d.oh.MUTUAL_FRIENDS,
    text: (0, s.EQ)(f).with(void 0, () => c.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => c.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => c.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), v.push({
    section: d.oh.MUTUAL_GUILDS,
    text: (0, s.EQ)(S).with(void 0, () => c.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => c.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => c.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), v
}