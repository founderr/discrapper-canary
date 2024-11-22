n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(47120),
    n(733860);
var s = n(200651);
n(192379);
var i = n(990547),
    a = n(481060),
    r = n(785232),
    l = n(922611),
    o = n(592125),
    c = n(594174),
    u = n(626135),
    _ = n(33194),
    d = n(807031),
    A = n(343544),
    I = n(14251),
    m = n(110223),
    S = n(981631),
    E = n(388032),
    f = n(17222);
let N = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? E.intl.string(E.t.zPUmzc) : t ? E.intl.string(E.t.aJRlSU) : E.intl.string(E.t.rlBMub);
    },
    h = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return E.intl.string(E.t.K8YIgY);
        let i = t > 0,
            a = n > 0;
        return i && a
            ? (0, s.jsxs)(s.Fragment, {
                  children: [E.intl.string(E.t.aTORmJ), (0, s.jsx)('br', {}), E.intl.string(E.t.LXFz19)]
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [E.intl.format(E.t['J/ZBu7'], { n: t }), (0, s.jsx)('br', {}), E.intl.string(E.t.tFvYm5)]
                })
              : a
                ? (0, s.jsxs)(s.Fragment, {
                      children: [E.intl.format(E.t['8mtcq6'], { n: n }), (0, s.jsx)('br', {}), E.intl.string(E.t.Z21Rp6)]
                  })
                : null;
    },
    g = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: i, isStealthRemediationEnabled: l } = e,
            u = n.size > 1;
        if (!l)
            return [
                {
                    icon: u ? (0, s.jsx)(a.GroupIcon, {}) : (0, s.jsx)(a.UserIcon, {}),
                    text: u ? E.intl.formatToPlainString(E.t.Zqlt5e, { blockedUserCount: n.size }) : E.intl.formatToPlainString(E.t.V0aCFx, { userName: c.default.getUser([...n][0]) })
                },
                {
                    icon: (0, s.jsx)(a.MicrophoneIcon, {}),
                    text: E.intl.string(E.t['7jN3FB'])
                }
            ];
        let _ = o.Z.getChannel(t),
            d = n.size > 0,
            A = i.size > 0,
            m = [
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(a.WarningIcon, {})
                    }),
                    text: E.intl.string(E.t['7jN3FB']),
                    className: f.row
                }
            ];
        if (d && A) {
            let e = [...n, ...i].slice(0, 2);
            m.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, s.jsx)(r.Z, {
                        recipients: e,
                        size: a.AvatarSizes.SIZE_32
                    })
                }),
                text: E.intl.string(E.t.aTORmJ),
                className: f.row
            });
        } else {
            let e = d ? [...n].slice(0, 2) : [...i].slice(0, 2),
                a = d ? n.size : i.size;
            m.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, I.r)(e, null == _ ? void 0 : _.guild_id)
                }),
                text: (0, I.a)(e, a, null == _ ? void 0 : _.guild_id, t),
                className: f.row
            });
        }
        return m;
    };
function x(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: a, transitionState: r, onClose: o, onJoin: c } = e,
        I = (0, d.KR)({ location: 'warning_modal' }),
        f = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' });
    if (!I) return null;
    let x = n.size > 1;
    return (0, s.jsx)(A.Z, {
        headerText: (0, s.jsx)(N, { multipleBlockedUsers: x }),
        secondaryHeaderText: f ? void 0 : E.intl.string(E.t.zPUmzc),
        descriptionText: (0, s.jsx)(h, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: a.size
        }),
        infoRows: g({
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: a,
            isStealthRemediationEnabled: f
        }),
        onDismissAndStay: () => {
            c(),
                o(),
                (0, _.g6)(t),
                u.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(a),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                u.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(a),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: E.intl.string(E.t.Trz9Ji),
        stayButtonText: E.intl.string(E.t.kiODyM),
        transitionState: r,
        onClose: o,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: Array.from(n),
                warning_surface: m.fz.PRE_JOIN_MODAL
            }
        }
    });
}
