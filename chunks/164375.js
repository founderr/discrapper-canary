t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var s = t(200651),
    a = t(192379),
    o = t(481060),
    r = t(493683),
    _ = t(594174),
    i = t(626135),
    c = t(799352),
    d = t(343544),
    l = t(110223),
    E = t(981631),
    u = t(689938);
function N(e) {
    var n;
    let { channelId: t, blockedUserIds: N, transitionState: M, onClose: D } = e,
        G = N.map((e) => _.default.getUser(e));
    a.useEffect(() => {
        i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: l.X.MODAL,
            blocked_user_ids: N
        });
    }, [t, N]);
    let R = G.length > 1,
        x = [
            {
                icon: R ? (0, s.jsx)(o.GroupIcon, {}) : (0, s.jsx)(o.UserIcon, {}),
                text: R ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: G.length }) : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null === (n = G[0]) || void 0 === n ? void 0 : n.username })
            },
            {
                icon: (0, s.jsx)(o.BellSlashIcon, {}),
                text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
            },
            {
                icon: (0, s.jsx)(o.EnvelopeIcon, {}),
                text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
            }
        ];
    return (0, s.jsx)(d.Z, {
        headerText: R ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        secondaryHeaderText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
        infoRows: x,
        onDismissAndStay: () => {
            D(),
                (0, c.O)(t),
                i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: l.X.MODAL,
                    blocked_user_ids: N
                });
        },
        onDismissAndLeave: () => {
            D(),
                (0, c.O)(t),
                r.Z.closePrivateChannel(t, !0, !0),
                i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: l.X.MODAL,
                    blocked_user_ids: N
                });
        },
        leaveButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
        transitionState: M,
        onClose: D
    });
}
