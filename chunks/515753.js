n.d(t, {
    PZ: function () {
        return Y;
    },
    Qj: function () {
        return K;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(512722), o = n.n(s), c = n(613828), u = n(91192), d = n(873546), h = n(442837), p = n(481060), _ = n(493683), f = n(239091), m = n(420660), g = n(702321), C = n(201895), I = n(43267), E = n(933557), N = n(979264), x = n(853856), S = n(93687), v = n(785232), Z = n(878857), T = n(204197), L = n(199902), A = n(158776), b = n(306680), M = n(111583), R = n(9156), O = n(594174), y = n(467679), P = n(514342), j = n(28718), D = n(733880), U = n(709054), G = n(998502), w = n(788307), k = n(960670), B = n(981631), V = n(689938), H = n(17147);
let F = G.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar, W = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    }, Y = e => (0, i.jsx)(p.Clickable, {
        className: H.closeButton,
        ...e,
        focusProps: {
            offset: {
                top: -2,
                bottom: -2,
                left: -2,
                right: 6
            }
        },
        children: (0, i.jsx)(p.CloseSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: H.closeIcon
        })
    }), z = () => (0, i.jsx)(p.StarIcon, {
        size: 'xs',
        color: 'currentColor',
        className: H.favoriteIcon
    });
class K extends l.Component {
    render() {
        let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: l,
            interactiveClassName: r,
            text: s,
            children: o,
            locationState: u,
            onClick: h,
            className: _,
            role: f,
            'aria-posinset': m,
            'aria-setsize': g,
            ...C
        } = this.props;
        return (0, i.jsx)(D.Z, {
            className: a()(H.channel, { [H.fullWidth]: d.tq }, _),
            onClick: h,
            role: f,
            focusProps: {
                within: !0,
                ...W
            },
            'aria-posinset': m,
            'aria-setsize': g,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: a()(r, H.interactive, H.linkButton, { [H.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: u
                    },
                    className: H.link,
                    ...C,
                    children: [
                        (0, i.jsx)(j.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: a()(H.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: H.avatarWithText
                        }),
                        o
                    ]
                })
            })
        });
    }
}
function q(e) {
    let {
            channel: t,
            isGDMFacepileEnabled: r,
            selected: s = !1,
            user: d,
            activities: S,
            applicationStream: L,
            isTyping: A,
            status: M,
            isMobile: O,
            'aria-posinset': U,
            'aria-setsize': G
        } = e, [K, q] = l.useState(!1), Q = l.useRef(null), J = l.useRef(null), {
            avatarSrc: X,
            avatarDecorationSrc: $,
            eventHandlers: ee
        } = (0, T.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(s || K)
        }), et = (0, h.e7)([R.ZP], () => R.ZP.isChannelMuted(t.getGuildId(), t.id)), en = (0, h.e7)([b.ZP], () => b.ZP.getMentionCount(t.id) > 0), ei = (0, E.ZP)(t), el = (0, h.e7)([x.Z], () => x.Z.isFavorite(t.id)), er = () => {
            q(!0);
        }, ea = () => {
            q(!1);
        }, es = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), _.Z.closePrivateChannel(t.id, s, n);
        }, eo = () => {
            _.Z.preload(B.ME, t.id);
        }, ec = e => {
            e.stopPropagation();
        }, eu = e => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = Q.current) || void 0 === t || t.click();
            }
        }, ed = e => {
            t.isMultiUserDM() ? (0, f.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('25421')
                ]).then(n.bind(n, 354741));
                return n => (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    selected: s
                });
            }, { noBlurEvent: !0 }) : (0, f.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('45984'),
                    n.e('56826'),
                    n.e('80991')
                ]).then(n.bind(n, 131404));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: d,
                    channel: t,
                    channelSelected: s
                });
            });
        }, eh = e => {
            e.preventDefault(), e.stopPropagation();
            let n = V.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name }), l = V.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name });
            t.isManaged() && (n = V.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name }), l = V.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name })), (0, p.openModal)(e => (0, i.jsx)(k.Z, {
                header: n,
                body: l,
                onSubmit: es,
                ...e
            }));
        }, ep = () => {
            let e = {
                className: H.activity,
                textClassName: H.activityText,
                emojiClassName: H.activityEmoji
            };
            return t.isSystemDM() ? (0, i.jsx)('div', {
                className: H.subtext,
                children: (0, g.Z)(t.id) ? V.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : V.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
            }) : t.isMultiUserDM() ? (0, i.jsx)('div', {
                className: H.subtext,
                children: V.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
            }) : null != S && S.length > 0 ? (0, i.jsx)(w.Z, {
                ...e,
                activities: S,
                applicationStream: L,
                animate: K,
                hideTooltip: !0,
                user: d
            }) : null;
        }, e_ = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
                return t.recipients.length >= 2 && r && null == t.icon ? (0, i.jsx)(v.Z, {
                    'aria-hidden': !0,
                    recipients: t.recipients,
                    size: e,
                    isTyping: A,
                    status: M
                }) : (0, i.jsx)(F, {
                    ...ee,
                    src: (0, I.x)(t),
                    'aria-hidden': !0,
                    size: e,
                    status: A ? B.Skl.ONLINE : M,
                    isTyping: A
                });
            o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return !d.isSystemUser() && (n = (0, m.Z)(S) ? B.Skl.STREAMING : M), (0, i.jsx)(F, {
                ...ee,
                size: p.AvatarSizes.SIZE_32,
                src: X,
                avatarDecoration: $,
                status: n,
                isMobile: O,
                isTyping: A,
                'aria-label': d.username,
                statusTooltip: !0
            });
        }, ef = t.isMultiUserDM(), em = t.isSystemDM(), eg = (0, Z.Q)(), eC = ef || em || t.type !== B.d4z.DM || (null == d ? void 0 : d.clan) == null ? ei : (0, i.jsxs)(i.Fragment, {
            children: [
                ei,
                (0, i.jsx)(N.ZP, {
                    clan: null == d ? void 0 : d.clan,
                    userId: null == d ? void 0 : d.id,
                    inline: !0,
                    disableGuildProfile: !0,
                    className: H.clanTag
                })
            ]
        });
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: e => {
            let {
                role: n,
                ...l
            } = e;
            return (0, i.jsx)(D.Z, {
                className: H.channel,
                role: n,
                focusProps: {
                    ...W,
                    focusTarget: Q,
                    ringTarget: J
                },
                ref: J,
                onMouseEnter: er,
                onMouseLeave: ea,
                onMouseDown: eo,
                onContextMenu: ed,
                'aria-setsize': G,
                'aria-posinset': U,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(H.interactive, {
                        [H.interactiveSystemDM]: eg && em,
                        [H.interactiveSelected]: s
                    }),
                    as: 'div',
                    onClick: eu,
                    muted: et,
                    selected: s,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: Q,
                            to: B.Z5c.CHANNEL(B.ME, t.id),
                            className: H.link,
                            'aria-label': (0, C.ZP)({
                                channel: t,
                                unread: en
                            }),
                            ...l,
                            children: (0, i.jsx)(j.Z, {
                                avatar: e_(),
                                selected: s,
                                highlighted: en,
                                muted: null != et && et,
                                subText: ep(),
                                name: (0, i.jsx)(P.Z, {
                                    tooltipClassName: H.overflowTooltip,
                                    children: eC
                                }),
                                decorators: t.isSystemDM() ? (0, i.jsx)(y.Z, {
                                    className: H.decorator,
                                    type: y.Z.Types.SYSTEM_DM,
                                    verified: !0
                                }) : null
                            })
                        }),
                        el ? (0, i.jsx)(z, {}) : null,
                        (0, i.jsx)(Y, {
                            'aria-label': ef ? V.Z.Messages.LEAVE_GROUP_DM : V.Z.Messages.CLOSE_DM,
                            onClick: ef ? eh : es,
                            onMouseDown: ec
                        })
                    ]
                })
            });
        }
    });
}
t.ZP = e => {
    let {
            channel: t,
            selected: n,
            ...l
        } = e, r = (0, h.e7)([O.default], () => O.default.getUser(t.getRecipientId())), {
            isStatusIndicatorEnabled: a,
            isTypingIndicatorEnabled: s,
            isFacepileEnabled: o
        } = S.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }), c = null == r ? void 0 : r.id, u = (0, h.cj)([
            A.Z,
            L.Z
        ], () => {
            let e;
            if (t.isMultiUserDM()) {
                if (a) {
                    let n = A.Z.getState().statuses;
                    t.recipients.some(e => n[e] === B.Skl.ONLINE) && (e = B.Skl.ONLINE);
                }
            } else
                null != c && (e = A.Z.getStatus(c));
            return {
                status: e,
                activities: null != c ? A.Z.getActivities(c) : null,
                applicationStream: null != c ? L.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && A.Z.isMobileOnline(c)
            };
        }, [
            t,
            c,
            a
        ]), d = (0, h.e7)([
            O.default,
            M.Z
        ], () => {
            if (t.isMultiUserDM())
                return !!s && U.default.keys(M.Z.getTypingUsers(t.id)).some(e => {
                    var t;
                    return e !== (null === (t = O.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                });
            if (null != r)
                return M.Z.isTyping(t.id, t.getRecipientId());
            return !1;
        }, [
            t,
            r,
            s
        ]);
    return t.isMultiUserDM() ? (0, i.jsx)(q, {
        channel: t,
        selected: n,
        isTyping: d,
        status: u.status === B.Skl.ONLINE ? B.Skl.ONLINE : void 0,
        isGDMFacepileEnabled: o,
        ...l
    }) : (0, i.jsx)(q, {
        channel: t,
        selected: n,
        user: r,
        isTyping: d,
        ...l,
        ...u
    });
};
