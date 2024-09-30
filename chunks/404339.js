n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var s = n(735250);
n(470079);
var a = n(481060),
    o = n(287734),
    r = n(594174),
    i = n(33194),
    l = n(807031),
    d = n(343544),
    c = n(689938);
function u(e) {
    let { channelId: t, blockedUserId: n, transitionState: u, onClose: _ } = e;
    if (!(0, l.F)({ location: 'warning_modal' })) return null;
    let N = r.default.getUser(n),
        x = [
            {
                icon: (0, s.jsx)(a.UserIcon, {}),
                text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null == N ? void 0 : N.username })
            },
            {
                icon: (0, s.jsx)(a.MicrophoneIcon, {}),
                text: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_AUDIBLE
            }
        ];
    return (0, s.jsx)(d.Z, {
        headerText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_ALERT,
        descriptionText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: x,
        onDismissAndStay: () => {
            _(), (0, i.g6)(t);
        },
        onDismissAndLeave: () => {
            _(), o.default.disconnect();
        },
        leaveButtonText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: c.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_STAY,
        transitionState: u,
        onClose: _
    });
}
