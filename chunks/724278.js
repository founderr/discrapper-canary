t.d(n, {
    Z: function () {
        return M;
    }
});
var l = t(735250),
    i = t(470079),
    r = t(120356),
    a = t.n(r),
    o = t(442837),
    c = t(481060),
    s = t(447543),
    d = t(906732),
    u = t(565138),
    _ = t(372769),
    h = t(171368),
    v = t(271383),
    f = t(430824),
    E = t(51144),
    g = t(897285),
    m = t(978227),
    x = t(894017),
    I = t(79874),
    Z = t(315416),
    b = t(236373),
    N = t(854698),
    T = t(391174),
    C = t(810561),
    p = t(390966),
    j = t(390072),
    S = t(981631),
    L = t(689938),
    R = t(448144);
function y(e) {
    var n;
    let { creator: t, guildId: i, channelId: r } = e,
        { analyticsLocations: a } = (0, d.ZP)(),
        s = (0, o.e7)([v.ZP], () => v.ZP.getMember(i, t.id), [t, i]);
    return (0, l.jsxs)('div', {
        className: R.row,
        children: [
            (0, l.jsx)(c.Avatar, {
                size: c.AvatarSizes.SIZE_20,
                src: t.getAvatarURL(i, 20),
                'aria-label': null !== (n = null == s ? void 0 : s.nick) && void 0 !== n ? n : E.ZP.getName(t),
                className: R.icon
            }),
            (0, l.jsx)(c.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: L.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                    usernameHook: function () {
                        var e, n;
                        return (0, l.jsx)(
                            c.Clickable,
                            {
                                onClick: () =>
                                    (0, h.openUserProfileModal)({
                                        guildId: i,
                                        channelId: r,
                                        userId: t.id,
                                        roleId: null == s ? void 0 : s.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                        analyticsLocation: { section: S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                                    }),
                                className: R.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, l.jsx)(c.NameWithRole, {
                                    name: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : E.ZP.getName(t),
                                    color: null !== (n = null == s ? void 0 : s.colorString) && void 0 !== n ? n : void 0
                                })
                            },
                            'open-user-profile'
                        );
                    }
                })
            })
        ]
    });
}
function k(e) {
    let { guild: n, onClick: t, onClose: r } = e,
        o = i.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == r || r(e));
            },
            [t, r]
        ),
        s = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: a()(R.guildIcon, R.icon)
                }),
                (0, l.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: c.Tooltip.Colors.PRIMARY,
                    size: 16,
                    className: R.guildBadge
                }),
                (0, l.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: R.linkText,
                    children: n.name
                })
            ]
        });
    return (0, l.jsx)('div', {
        className: R.row,
        children:
            null != t
                ? (0, l.jsx)(c.Clickable, {
                      onClick: o,
                      className: R.clickable,
                      role: 'link',
                      children: s
                  })
                : s
    });
}
function P(e) {
    let { userCount: n, onClick: t } = e;
    return (0, l.jsxs)('div', {
        className: R.row,
        children: [
            (0, l.jsx)(c.GroupIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: R.icon
            }),
            (0, l.jsx)(c.Clickable, {
                onClick: t,
                className: R.interestedCount,
                children: (0, l.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: L.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({ count: n })
                })
            })
        ]
    });
}
function M(e) {
    let { guildEvent: n, guild: t, channel: r, headerId: a, onClose: d, onClickInterestedCount: u, isHub: _ = !1, containerRef: h, recurrenceId: v, setRecurrenceId: E } = e,
        S = (0, o.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]),
        { startTime: L, endTime: M } = (0, I.ZP)(n, v),
        D = (0, Z.Z)(n.guild_id, n.id, v),
        A = i.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, s.B)(n);
            },
            [n]
        ),
        B = (0, x.Z)(v, n.id),
        G = (0, m.Z)(n);
    i.useEffect(() => {
        g.Z.getGuildEventUserCounts(t.id, n.id, null != v ? [v] : []), g.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, v]);
    let U = (0, b.KV)(n.recurrence_rule),
        w = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, N.lh)(B, L, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, l.jsxs)('div', {
        ref: h,
        children: [
            (0, l.jsxs)('div', {
                className: R.header,
                children: [
                    (0, l.jsx)(p.z, {
                        startTime: L.toISOString(),
                        endTime: null == M ? void 0 : M.toISOString(),
                        status: null != w ? w : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: v
                    }),
                    (0, l.jsx)(c.Heading, {
                        id: a,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: R.title,
                        children: n.name
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: R.body,
                children: [
                    (0, l.jsx)(k, {
                        guild: t,
                        onClick: S ? A : void 0,
                        onClose: d
                    }),
                    (0, l.jsx)(j.Z, {
                        guildScheduledEvent: n,
                        channel: r,
                        onClose: d
                    }),
                    null != D &&
                        (0, l.jsx)(P, {
                            userCount: D,
                            onClick: u
                        }),
                    !_ &&
                        null != G &&
                        (0, l.jsx)(
                            y,
                            {
                                creator: G,
                                guildId: t.id,
                                channelId: null == r ? void 0 : r.id
                            },
                            G.id
                        ),
                    null != n.description &&
                        (0, l.jsx)('div', {
                            className: R.description,
                            children: (0, l.jsx)(T.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != U && (0, l.jsx)('hr', { className: R.divider }),
            null != U &&
                (0, l.jsx)(C.Z, {
                    guildId: t.id,
                    recurrenceRule: U,
                    guildEventId: n.id,
                    onRecurrenceClick: E,
                    hideScroller: !0,
                    activeRecurrenceId: v
                })
        ]
    });
}
