n.r(t),
    n.d(t, {
        closeUserProfileModal: function () {
            return m;
        },
        openUserProfileModal: function () {
            return h;
        }
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    s = n(232567),
    o = n(911284),
    l = n(314897),
    u = n(594174),
    c = n(456644),
    d = n(484459);
let f = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
    _ = new r.Yd('UserProfileModalActionCreators'),
    p = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityEnabled: n } = (0, c.G)({
                location: 'UserProfileModalActionCreators',
                autoTrackExposure: !1
            });
        if (!!n || !!t)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function h(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: o, sessionId: l, joinRequestId: c, section: _, subsection: h, friendToken: m, showGuildProfile: g, analyticsLocation: E, sourceAnalyticsLocations: v } = e,
        I = u.default.getUser(t);
    p(t),
        null == I
            ? await (0, s.In)(t, {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              })
            : (0, d.Z)(I.id, I.getAvatarURL(void 0, f), {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != o ? o : void 0,
            sessionId: null != l ? l : void 0,
            section: _,
            subsection: h,
            friendToken: m,
            showGuildProfile: g,
            analyticsLocation: E,
            sourceAnalyticsLocations: v
        });
}
function m() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
