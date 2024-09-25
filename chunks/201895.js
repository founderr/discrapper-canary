t.d(n, {
    ZP: function () {
        return c;
    }
}),
    t(653041);
var i = t(131704),
    r = t(699516),
    l = t(594174),
    s = t(933557),
    o = t(981631),
    u = t(689938);
function a(e) {
    let { isSubscriptionGated: n, needSubscriptionToAccess: t } = e;
    if (n) return t ? u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED;
}
function c(e) {
    let n,
        { channel: t, unread: c = !1, mentionCount: _ = 0, userCount: d, embeddedActivitiesCount: f, isSubscriptionGated: E, needSubscriptionToAccess: A } = e,
        I = (0, s.F6)(t, l.default, r.Z);
    switch (t.type) {
        case o.d4z.DM:
            n = c ? u.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
            break;
        case o.d4z.GROUP_DM:
            n = c ? u.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
            break;
        case o.d4z.GUILD_STORE:
            n = u.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
            break;
        case o.d4z.GUILD_DIRECTORY:
            n = u.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
            break;
        case o.d4z.GUILD_ANNOUNCEMENT:
            n = _ > 0 ? u.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? u.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
            break;
        case o.d4z.GUILD_VOICE:
            let v = [u.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({ channelName: t.name })];
            if ((_ > 0 && v.push(u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: _ })), c && v.push(u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != d)) {
                let e = t.userLimit;
                null != e && e > 0
                    ? v.push(
                          u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                              userCount: d,
                              limit: e
                          })
                      )
                    : v.push(u.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({ userCount: d }));
            }
            null != f && f > 0 && v.push(u.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({ activitiesCount: f }));
            let L = a({
                isSubscriptionGated: E,
                needSubscriptionToAccess: A
            });
            return null != L && v.push(L), v.join(', ');
        case o.d4z.GUILD_STAGE_VOICE:
            n = u.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
            break;
        default:
            n = i.Ec.has(t.type) ? (_ > 0 ? u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : c ? u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : u.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL) : _ > 0 ? u.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? u.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL;
    }
    let m = [
            n.format({
                channelName: I,
                mentionCount: _
            })
        ],
        S = a({
            isSubscriptionGated: E,
            needSubscriptionToAccess: A
        });
    return null != S && m.push(S), m.join(', ');
}
