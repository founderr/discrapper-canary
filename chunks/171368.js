n.r(t),
    n.d(t, {
        closeUserProfileModal: function () {
            return h;
        },
        openUserProfileModal: function () {
            return f;
        }
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    s = n(232567),
    o = n(911284),
    l = n(314897),
    u = n(594174),
    c = n(484459);
let d = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
    _ = new r.Y('UserProfileModalActionCreators'),
    E = async (e) => {
        if (l.default.getId() === e)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function f(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: o, sessionId: l, joinRequestId: _, section: f, subsection: h, friendToken: p, showGuildProfile: I, analyticsLocation: m, sourceAnalyticsLocations: T } = e,
        S = u.default.getUser(t);
    E(t),
        null == S
            ? await (0, s.In)(t, {
                  guildId: I && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: p,
                  joinRequestId: _
              })
            : (0, c.Z)(S.id, S.getAvatarURL(void 0, d), {
                  guildId: I && null != n ? n : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: p,
                  joinRequestId: _
              }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != o ? o : void 0,
            sessionId: null != l ? l : void 0,
            section: f,
            subsection: h,
            friendToken: p,
            showGuildProfile: I,
            analyticsLocation: m,
            sourceAnalyticsLocations: T
        });
}
function h() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
