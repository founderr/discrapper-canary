s.d(i, {
  Z: function() {
    return I
  }
}), s(653041), s(627341);
var n = s(278074),
  l = s(442837),
  t = s(199902),
  o = s(158776),
  r = s(726059),
  a = s(162267),
  d = s(228168),
  c = s(981631),
  u = s(689938);

function I(e) {
  var i, s;
  let {
    user: I,
    currentUser: E
  } = e, Z = (0, l.e7)([t.Z], () => t.Z.getAnyStreamForUser(I.id)), f = (0, l.e7)([o.Z], () => o.Z.findActivity(I.id, e => {
    let {
      type: i
    } = e;
    return i !== c.IIU.CUSTOM_STATUS
  })), _ = null === (i = (0, r.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualFriends) || void 0 === i ? void 0 : i.length, S = null === (s = (0, a.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualGuilds) || void 0 === s ? void 0 : s.length, v = [{
    section: d.oh.USER_INFO,
    text: u.Z.Messages.USER_PROFILE_ABOUT_ME
  }];
  return (null != Z || null != f) && v.push({
    section: d.oh.ACTIVITY,
    text: u.Z.Messages.USER_PROFILE_ACTIVITY
  }), I.id !== (null == E ? void 0 : E.id) && (v.push({
    section: d.oh.MUTUAL_FRIENDS,
    text: (0, n.EQ)(_).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({
      count: e
    }))
  }), v.push({
    section: d.oh.MUTUAL_GUILDS,
    text: (0, n.EQ)(S).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
      count: e
    }))
  })), v
}