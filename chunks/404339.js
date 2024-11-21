i.r(e),
    i.d(e, {
        default: function () {
            return p;
        }
    }),
    i(47120),
    i(733860);
var n = i(200651);
i(192379);
var s = i(990547),
    a = i(481060),
    r = i(785232),
    l = i(922611),
    o = i(592125),
    c = i(594174),
    _ = i(626135),
    u = i(5192),
    d = i(33194),
    A = i(807031),
    I = i(343544),
    m = i(110223),
    S = i(981631),
    g = i(388032),
    E = i(961929);
let N = (t) => {
        let { multipleBlockedUsers: e } = t;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? g.intl.string(g.t.zPUmzc) : e ? g.intl.string(g.t.aJRlSU) : g.intl.string(g.t.rlBMub);
    },
    h = (t) => {
        let { numOfBlockedUsers: e, numOfIgnoredUsers: i } = t;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return g.intl.string(g.t.K8YIgY);
        let s = e > 0,
            a = i > 0;
        return s && a
            ? (0, n.jsxs)(n.Fragment, {
                  children: [g.intl.string(g.t.aTORmJ), (0, n.jsx)('br', {}), g.intl.string(g.t.LXFz19)]
              })
            : s
              ? (0, n.jsxs)(n.Fragment, {
                    children: [g.intl.format(g.t['J/ZBu7'], { n: e }), (0, n.jsx)('br', {}), g.intl.string(g.t.tFvYm5)]
                })
              : a
                ? (0, n.jsxs)(n.Fragment, {
                      children: [g.intl.format(g.t['8mtcq6'], { n: i }), (0, n.jsx)('br', {}), g.intl.string(g.t.Z21Rp6)]
                  })
                : null;
    },
    f = (t, e, i, n) => {
        let s = [...t].map((t) => c.default.getUser(t));
        return e >= 4
            ? g.intl.formatToPlainString(g.t.RFVQV1, {
                  username1: u.ZP.getName(i, n, s[0]),
                  username2: u.ZP.getName(i, n, s[1]),
                  numberOfOtherUsers: e - t.length
              })
            : 3 === e
              ? g.intl.formatToPlainString(g.t.UdvSVF, {
                    username1: u.ZP.getName(i, n, s[0]),
                    username2: u.ZP.getName(i, n, s[1])
                })
              : 2 === e
                ? g.intl.formatToPlainString(g.t.hqmVbm, {
                      username1: u.ZP.getName(i, n, s[0]),
                      username2: u.ZP.getName(i, n, s[1])
                  })
                : g.intl.formatToPlainString(g.t.V5mxhY, { username: u.ZP.getName(i, n, s[0]) });
    },
    x = (t, e) => {
        if (1 === t.length) {
            let i = c.default.getUser(t[0]);
            return null != i
                ? (0, n.jsx)(a.Avatar, {
                      src: i.getAvatarURL(e, 32),
                      size: a.AvatarSizes.SIZE_32,
                      'aria-hidden': !0
                  })
                : (0, n.jsx)(a.UserIcon, {});
        }
        return (0, n.jsx)(r.Z, {
            recipients: t,
            size: a.AvatarSizes.SIZE_32
        });
    },
    L = (t) => {
        let { channelId: e, blockedUserIds: i, ignoredUserIds: s, isStealthRemediationEnabled: l } = t,
            _ = i.size > 1;
        if (!l)
            return [
                {
                    icon: _ ? (0, n.jsx)(a.GroupIcon, {}) : (0, n.jsx)(a.UserIcon, {}),
                    text: _ ? g.intl.formatToPlainString(g.t.Zqlt5e, { blockedUserCount: i.size }) : g.intl.formatToPlainString(g.t.V0aCFx, { userName: c.default.getUser([...i][0]) })
                },
                {
                    icon: (0, n.jsx)(a.MicrophoneIcon, {}),
                    text: g.intl.string(g.t['7jN3FB'])
                }
            ];
        let u = o.Z.getChannel(e),
            d = i.size > 0,
            A = s.size > 0,
            I = [
                {
                    icon: (0, n.jsx)('div', {
                        className: E.icon,
                        children: (0, n.jsx)(a.WarningIcon, {})
                    }),
                    text: g.intl.string(g.t['7jN3FB']),
                    className: E.row
                }
            ];
        if (d && A) {
            let t = [...i, ...s].slice(0, 2);
            I.unshift({
                icon: (0, n.jsx)('div', {
                    className: E.icon,
                    children: (0, n.jsx)(r.Z, {
                        recipients: t,
                        size: a.AvatarSizes.SIZE_32
                    })
                }),
                text: g.intl.string(g.t.aTORmJ),
                className: E.row
            });
        } else {
            let t = d ? [...i].slice(0, 2) : [...s].slice(0, 2),
                a = d ? i.size : s.size;
            I.unshift({
                icon: (0, n.jsx)('div', {
                    className: E.icon,
                    children: x(t, null == u ? void 0 : u.guild_id)
                }),
                text: f(t, a, null == u ? void 0 : u.guild_id, e),
                className: E.row
            });
        }
        return I;
    };
function p(t) {
    let { channelId: e, blockedUserIds: i, ignoredUserIds: a, transitionState: r, onClose: o, onJoin: c } = t,
        u = (0, A.KR)({ location: 'warning_modal' }),
        E = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' });
    if (!u) return null;
    let f = i.size > 1;
    return (0, n.jsx)(I.Z, {
        headerText: (0, n.jsx)(N, { multipleBlockedUsers: f }),
        secondaryHeaderText: E ? void 0 : g.intl.string(g.t.zPUmzc),
        descriptionText: (0, n.jsx)(h, {
            numOfBlockedUsers: i.size,
            numOfIgnoredUsers: a.size
        }),
        infoRows: L({
            channelId: e,
            blockedUserIds: i,
            ignoredUserIds: a,
            isStealthRemediationEnabled: E
        }),
        onDismissAndStay: () => {
            c(),
                o(),
                (0, d.g6)(e),
                _.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_JOIN,
                    channel_id: e,
                    blocked_user_ids: Array.from(i),
                    ignored_user_ids: Array.from(a),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                _.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    blocked_user_ids: Array.from(i),
                    ignored_user_ids: Array.from(a),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: g.intl.string(g.t.Trz9Ji),
        stayButtonText: g.intl.string(g.t.kiODyM),
        transitionState: r,
        onClose: o,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: e,
                blocked_user_ids: Array.from(i),
                warning_surface: m.fz.PRE_JOIN_MODAL
            }
        }
    });
}
