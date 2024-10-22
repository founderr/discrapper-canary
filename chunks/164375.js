s.r(n),
    s.d(n, {
        default: function () {
            return N;
        }
    });
var t = s(200651),
    a = s(192379),
    o = s(481060),
    r = s(493683),
    _ = s(594174),
    i = s(626135),
    c = s(799352),
    d = s(343544),
    l = s(110223),
    E = s(981631),
    u = s(689938);
function N(e) {
    var n;
    let { channelId: s, blockedUserIds: N, transitionState: R, onClose: M } = e,
        D = N.map((e) => _.default.getUser(e));
    a.useEffect(() => {
        i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: s,
            warning_medium: l.WR.MODAL,
            blocked_user_ids: N
        });
    }, [s, N]);
    let G = D.length > 1,
        x = [
            {
                icon: G ? (0, t.jsx)(o.GroupIcon, {}) : (0, t.jsx)(o.UserIcon, {}),
                text: G ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format({ blockedUserCount: D.length }) : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({ userName: null === (n = D[0]) || void 0 === n ? void 0 : n.username })
            },
            {
                icon: (0, t.jsx)(o.BellSlashIcon, {}),
                text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY
            },
            {
                icon: (0, t.jsx)(o.EnvelopeIcon, {}),
                text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED
            }
        ];
    return (0, t.jsx)(d.Z, {
        headerText: G ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
        secondaryHeaderText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
        infoRows: x,
        onDismissAndStay: () => {
            M(),
                (0, c.O)(s),
                i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.q.CLICK_TO_STAY,
                    channel_id: s,
                    warning_medium: l.WR.MODAL,
                    blocked_user_ids: N
                });
        },
        onDismissAndLeave: () => {
            M(),
                (0, c.O)(s),
                r.Z.closePrivateChannel(s, !0, !0),
                i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.q.CLICK_TO_LEAVE,
                    channel_id: s,
                    warning_medium: l.WR.MODAL,
                    blocked_user_ids: N
                });
        },
        leaveButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
        stayButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
        transitionState: R,
        onClose: M
    });
}
