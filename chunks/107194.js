n.d(i, {
    Z: function () {
        return I;
    }
}), n(653041), n(627341);
var l = n(278074), s = n(442837), t = n(199902), o = n(158776), a = n(726059), r = n(162267), d = n(228168), c = n(981631), u = n(689938);
function I(e) {
    var i, n;
    let {
            user: I,
            currentUser: f
        } = e, _ = (0, s.e7)([t.Z], () => t.Z.getAnyStreamForUser(I.id)), E = (0, s.e7)([o.Z], () => o.Z.findActivity(I.id, e => {
            let {type: i} = e;
            return i !== c.IIU.CUSTOM_STATUS;
        })), m = null === (i = (0, a.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualFriends) || void 0 === i ? void 0 : i.length, Z = null === (n = (0, r.Z)(I.id, I.id !== (null == f ? void 0 : f.id)).mutualGuilds) || void 0 === n ? void 0 : n.length, v = [{
                section: d.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }];
    return (null != _ || null != E) && v.push({
        section: d.oh.ACTIVITY,
        text: u.Z.Messages.USER_PROFILE_ACTIVITY
    }), I.id !== (null == f ? void 0 : f.id) && (v.push({
        section: d.oh.MUTUAL_FRIENDS,
        text: (0, l.EQ)(m).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
    }), v.push({
        section: d.oh.MUTUAL_GUILDS,
        text: (0, l.EQ)(Z).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
    })), v;
}
