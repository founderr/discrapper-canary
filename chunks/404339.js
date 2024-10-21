t.r(s),
    t.d(s, {
        default: function () {
            return l;
        }
    }),
    t(47120);
var n = t(200651);
t(192379);
var a = t(481060),
    o = t(594174),
    r = t(33194),
    i = t(807031),
    c = t(343544),
    d = t(689938);
function l(e) {
    let { channelId: s, blockedUserIds: t, transitionState: l, onClose: _, onJoin: u } = e;
    if (!(0, i.w)({ location: 'warning_modal' })) return null;
    let N = t.size > 1,
        E = [
            {
                icon: N ? (0, n.jsx)(a.GroupIcon, {}) : (0, n.jsx)(a.UserIcon, {}),
                text: N ? d.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: t.size }) : d.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: o.default.getUser([...t][0]) })
            },
            {
                icon: (0, n.jsx)(a.MicrophoneIcon, {}),
                text: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WILL_BEAUDIBLE
            }
        ];
    return (0, n.jsx)(c.Z, {
        headerText: d.Z.Messages.VOICE_PANEL_BLOCKED_PEOPLE_WARNING.format({ n: t.size }),
        secondaryHeaderText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_MODAL,
        descriptionText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DESCRIPTION,
        infoRows: E,
        onDismissAndStay: () => {
            u(), _(), (0, r.g6)(s);
        },
        onDismissAndLeave: () => {
            _();
        },
        leaveButtonText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_DONT_JOIN,
        stayButtonText: d.Z.Messages.VOICE_CHANNEL_BLOCKED_USER_WARNING_JOIN_ANYWAY,
        transitionState: l,
        onClose: _
    });
}
