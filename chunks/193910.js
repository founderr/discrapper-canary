n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(831209),
    l = n(442837),
    r = n(704215),
    o = n(481060),
    c = n(538239),
    u = n(566620),
    d = n(403404),
    h = n(906732),
    p = n(605236),
    m = n(706140),
    _ = n(243778),
    f = n(488131),
    E = n(375954),
    g = n(626135),
    C = n(585483),
    I = n(403182),
    T = n(127654),
    x = n(752305),
    S = n(951211),
    v = n(981631),
    N = n(921944),
    A = n(489887),
    Z = n(689938),
    M = n(695527);
function b(e, t, s, a) {
    (0, o.openModalLazy)(
        async () => {
            let { default: l } = await Promise.resolve().then(n.bind(n, 538239));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    activity: e,
                    channel: t,
                    activityActionType: s,
                    analyticsLocations: a
                });
        },
        { modalKey: c.activityInviteKey }
    );
}
let R = /(.*)```(\w+)\n(.*)```(.*)/s;
function L() {
    let e = (0, l.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, m.cv)(t);
    return (
        s.useEffect(
            () => () => {
                n === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, p.EW)(r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: N.L.TAKE_ACTION });
            },
            [n]
        ),
        (0, i.jsx)(_.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === r.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(o.TextBadge, {
                          text: Z.Z.Messages.NEW,
                          color: a.Z.BUTTON_DANGER_BACKGROUND
                      })
                    : null;
            }
        })
    );
}
function j(e) {
    let { channel: t, options: l, onFileUpload: c, onClose: m, onSelect: _, draftType: E, editorTextContent: j, setValue: P, openClips: O } = e,
        { analyticsLocations: y } = (0, h.ZP)();
    s.useEffect(() => {
        g.default.track(v.rMx.OPEN_POPOUT, {
            type: 'Send Attachment',
            channel_id: t.id,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id]);
    function D() {
        (0, f.R6)(t, void 0, 'Plus Button');
    }
    function U() {
        g.default.track(v.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), P('/', (0, x.JM)('/'));
    }
    function k() {
        O();
    }
    function w() {
        (0, p.EW)(r.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: N.L.TAKE_ACTION }),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await n.e('68784').then(n.bind(n, 611611));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t
                        });
                },
                { modalKey: A.$z }
            );
    }
    function B() {
        g.default.track(v.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id
        }),
            (0, d.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: {
                    page: t.isPrivate() ? v.ZY5.DM_CHANNEL : v.ZY5.GUILD_CHANNEL,
                    section: v.jXE.CHANNEL_TEXT_AREA,
                    object: v.qAy.CONTEXT_MENU_ITEM,
                    objectType: v.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: y
            }),
            (0, u.w1)({ guildId: t.guild_id });
    }
    function H() {
        let e = j,
            n = 'txt',
            i = '',
            s = j.match(R);
        null != s && ((i = s[1]), (n = s[2]), (e = s[3]), (i += s[4])), (0, T.d)([(0, I.dp)(new Blob([e], { type: 'text/plain' }), 'message.'.concat(n))], t, E), C.S.dispatchToLastSubscribed(v.CkL.CLEAR_TEXT), '' !== i && C.S.dispatchToLastSubscribed(v.CkL.INSERT_TEXT, { plainText: i });
    }
    return (0, i.jsx)(o.Menu, {
        onSelect: _,
        navId: 'channel-attach',
        onClose: m,
        'aria-label': Z.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        className: M.menu,
        children: l.map(function (e) {
            var n;
            let s = (0, i.jsxs)('div', {
                className: M.optionLabel,
                children: [
                    (0, i.jsx)(e.icon, {
                        className: M.optionIcon,
                        color: 'currentColor'
                    }),
                    (0, i.jsx)('div', {
                        className: M.optionName,
                        children: e.display
                    }),
                    null != e.badgeVal &&
                        e.badgeVal > 0 &&
                        (0, i.jsx)(o.NumberBadge, {
                            className: M.badge,
                            color: null !== (n = e.badgeColor) && void 0 !== n ? n : a.Z.STATUS_DANGER,
                            count: e.badgeVal
                        })
                ]
            });
            switch (e.type) {
                case S.r.UPLOAD_A_FILE:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'upload-file',
                            label: s,
                            action: c
                        },
                        'upload-file'
                    );
                case S.r.UPLOAD_TEXT_AS_FILE:
                    if ('' === j) return null;
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'upload-text-as-file',
                            label: s,
                            action: H
                        },
                        'upload-text-as-file'
                    );
                case S.r.CLIPS:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'clips',
                            label: s,
                            action: k
                        },
                        'clips'
                    );
                case S.r.POLL:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'poll',
                            label: s,
                            action: w
                        },
                        'poll'
                    );
                case S.r.INVITE_TO_PLAY_GAME:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'play',
                            label: s,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void (g.default.track(v.rMx.OPEN_MODAL, {
                                        type: 'Send Join Invite',
                                        application_id: n.application_id,
                                        location: v.jXE.CHANNEL_TEXT_AREA
                                    }),
                                    b(n, t, v.mFx.JOIN, y))
                                );
                            }
                        },
                        'play'
                    );
                case S.r.INVITE_TO_LISTEN:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'listen',
                            label: s,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void (g.default.track(v.rMx.OPEN_MODAL, {
                                        type: 'Send Listen Invite',
                                        location: v.jXE.CHANNEL_TEXT_AREA
                                    }),
                                    b(n, t, v.mFx.LISTEN, y))
                                );
                            }
                        },
                        'listen'
                    );
                case S.r.INVITE_TO_WATCH:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'watch',
                            label: s,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void (g.default.track(v.rMx.OPEN_MODAL, {
                                        type: 'Send Watch Invite',
                                        location: v.jXE.CHANNEL_TEXT_AREA
                                    }),
                                    b(n, t, v.mFx.WATCH, y))
                                );
                            }
                        },
                        'watch'
                    );
                case S.r.CREATE_THREAD:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'THREAD',
                            label: s,
                            action: D
                        },
                        'THREAD'
                    );
                case S.r.SLASH_COMMAND:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'SLASH_COMMAND',
                            label: s,
                            action: U
                        },
                        'SLASH_COMMAND'
                    );
                case S.r.ACTIVITY:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'activity',
                            label: s,
                            action: B,
                            hint: (0, i.jsx)(L, {})
                        },
                        'activity'
                    );
                default:
                    return null;
            }
        })
    });
}
