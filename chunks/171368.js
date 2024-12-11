n.r(t),
    n.d(t, {
        closeUserProfileModal: function () {
            return g;
        },
        openUserProfileModal: function () {
            return m;
        }
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    s = n(232567),
    o = n(911284),
    l = n(314897),
    u = n(594174),
    c = n(9161),
    d = n(456644),
    f = n(484459);
let _ = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
    p = new r.Yd('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, c.x)({ location: 'UserProfileModalActionCreators' }),
            { recentActivityEnabled: r } = (0, d.G)({
                location: 'UserProfileModalActionCreators',
                autoTrackExposure: !1
            });
        if (!!n || !!r || !!t)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: o, sessionId: l, joinRequestId: c, section: d, subsection: p, friendToken: m, showGuildProfile: g, analyticsLocation: E, sourceAnalyticsLocations: v } = e,
        I = u.default.getUser(t);
    h(t),
        null == I
            ? await (0, s.In)(t, {
                  guildId: g && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              })
            : (0, f.Z)(I.id, I.getAvatarURL(void 0, _), {
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
            section: d,
            subsection: p,
            friendToken: m,
            showGuildProfile: g,
            analyticsLocation: E,
            sourceAnalyticsLocations: v
        });
}
function g() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
