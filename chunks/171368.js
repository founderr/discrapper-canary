n.r(t),
    n.d(t, {
        closeUserProfileModal: function () {
            return m;
        },
        openUserProfileModal: function () {
            return p;
        }
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    o = n(232567),
    s = n(911284),
    l = n(314897),
    u = n(594174),
    c = n(27144),
    d = n(484459),
    _ = n(981631);
let E = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
    f = new r.Y('UserProfileModalActionCreators'),
    h = async (e) => {
        let { pastActivityEnabled: t } = (0, c.L)({
            location: 'UserProfileModalActionCreators',
            autoTrackExposure: !1
        });
        if (!!(t || l.default.getId() === e))
            try {
                await (0, s.Z)(e);
            } catch (t) {
                f.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function p(e) {
    let { userId: t, guildId: n = _.ME, channelId: r, messageId: i, roleId: s, sessionId: l, joinRequestId: c, section: f, subsection: p, friendToken: m, showGuildProfile: I, analyticsLocation: T, sourceAnalyticsLocations: g } = e,
        S = null != n && n !== _.ME ? n : void 0,
        A = u.default.getUser(t);
    h(t),
        null == A
            ? await (0, o.In)(t, {
                  guildId: I ? S : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: m,
                  joinRequestId: c
              })
            : (0, d.Z)(A.id, A.getAvatarURL(void 0, E), {
                  guildId: I ? S : void 0,
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
            roleId: null != s ? s : void 0,
            sessionId: null != l ? l : void 0,
            section: f,
            subsection: p,
            friendToken: m,
            showGuildProfile: I,
            analyticsLocation: T,
            sourceAnalyticsLocations: g
        });
}
function m() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
