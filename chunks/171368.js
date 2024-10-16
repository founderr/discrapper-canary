n.r(t),
    n.d(t, {
        closeUserProfileModal: function () {
            return p;
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
    c = n(484459),
    d = n(981631);
let _ = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
    E = new r.Y('UserProfileModalActionCreators'),
    f = async (e) => {
        if (l.default.getId() === e)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                E.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function h(e) {
    let { userId: t, guildId: n = d.ME, channelId: r, messageId: i, roleId: o, sessionId: l, joinRequestId: E, section: h, subsection: p, friendToken: I, showGuildProfile: m, analyticsLocation: T, sourceAnalyticsLocations: S } = e,
        g = null != n && n !== d.ME ? n : void 0,
        A = u.default.getUser(t);
    f(t),
        null == A
            ? await (0, s.In)(t, {
                  guildId: m ? g : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: I,
                  joinRequestId: E
              })
            : (0, c.Z)(A.id, A.getAvatarURL(void 0, _), {
                  guildId: m ? g : void 0,
                  withMutualGuilds: !0,
                  withMutualFriends: !0,
                  friendToken: I,
                  joinRequestId: E
              }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != o ? o : void 0,
            sessionId: null != l ? l : void 0,
            section: h,
            subsection: p,
            friendToken: I,
            showGuildProfile: m,
            analyticsLocation: T,
            sourceAnalyticsLocations: S
        });
}
function p() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
