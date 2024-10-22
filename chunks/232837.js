n.r(s),
    n.d(s, {
        default: function () {
            return C;
        }
    });
var t = n(200651);
n(192379);
var a = n(990547),
    o = n(481060),
    i = n(287734),
    r = n(594174),
    _ = n(626135),
    c = n(33194),
    d = n(807031),
    l = n(343544),
    N = n(110223),
    u = n(981631),
    E = n(689938);
function C(e) {
    let { channelId: s, blockedUserId: n, transitionState: C, onClose: m } = e;
    if (!(0, d.w)({ location: 'warning_modal' })) return null;
    let x = r.default.getUser(n),
        I = [
            {
                icon: (0, t.jsx)(o.UserIcon, {}),
                text: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null == x ? void 0 : x.username })
            },
            {
                icon: (0, t.jsx)(o.MicrophoneIcon, {}),
                text: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE
            }
        ];
    return (0, t.jsx)(l.Z, {
        headerText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
        descriptionText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: I,
        onDismissAndStay: () => {
            m(),
                (0, c.g6)(s),
                _.default.track(u.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_STAY,
                    channel_id: s,
                    blocked_user_ids: [n],
                    warning_surface: N.fz.POST_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            m(),
                i.default.disconnect(),
                _.default.track(u.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.q.CLICK_TO_LEAVE,
                    channel_id: s,
                    blocked_user_ids: [n],
                    warning_surface: N.fz.POST_JOIN_MODAL
                });
        },
        leaveButtonText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: E.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
        transitionState: C,
        onClose: m,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: s,
                blocked_user_ids: [n],
                warning_surface: N.fz.POST_JOIN_MODAL
            }
        }
    });
}
