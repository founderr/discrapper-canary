t.r(n),
    t.d(n, {
        default: function () {
            return _;
        }
    }),
    t(47120);
var r = t(735250),
    d = t(470079),
    s = t(392711),
    i = t.n(s),
    l = t(442837),
    u = t(481060),
    o = t(239091),
    a = t(276264),
    c = t(600164),
    m = t(313201),
    h = t(184301),
    I = t(347475),
    f = t(271383),
    E = t(699516),
    g = t(594174),
    M = t(709054),
    F = t(432496),
    N = t(981631),
    b = t(689938),
    p = t(179161);
function _(e) {
    let { guild: n, transitionState: s, onClose: _ } = e,
        D = (0, m.Dt)(),
        S = d.useMemo(() => {
            let e = E.Z.getRelationships();
            return M.default.keys(e).filter((n) => e[n] === N.OGo.FRIEND);
        }, []);
    d.useEffect(() => {
        F.Z.fetchFriendMembersIfNotFetched(n.id, S);
    }, [n.id, S]);
    let x = (0, l.e7)([f.ZP], () => f.ZP.getMembers(n.id)),
        C = d.useMemo(
            () =>
                i()(x)
                    .filter((e) => !!S.includes(e.userId) && null != g.default.getUser(e.userId))
                    .sortBy((e) => {
                        var n;
                        let t = g.default.getUser(e.userId);
                        return (null != t ? (null !== (n = e.nick) && void 0 !== n ? n : t.username) : '').toLocaleLowerCase();
                    })
                    .map((e) => {
                        let d = g.default.getUser(e.userId);
                        return (0, r.jsx)(
                            u.Popout,
                            {
                                preload: () => (0, h.Z)(d.id, d.getAvatarURL(n.id, 80), { guildId: n.id }),
                                renderPopout: (t) =>
                                    (0, r.jsx)(I.Z, {
                                        ...t,
                                        userId: e.userId,
                                        guildId: n.id
                                    }),
                                spacing: 14,
                                children: (s, i) => {
                                    let { isShown: l } = i;
                                    return (0, r.jsx)(
                                        a.Z,
                                        {
                                            className: p.member,
                                            selected: l,
                                            colorString: e.colorString,
                                            user: d,
                                            isOwner: e.userId === n.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            guildId: n.id,
                                            onContextMenu: (e) => {
                                                (0, o.jW)(e, async () => {
                                                    let { default: e } = await Promise.all([t.e('79695'), t.e('13125'), t.e('26976'), t.e('88405')]).then(t.bind(t, 415118));
                                                    return (t) =>
                                                        (0, r.jsx)(e, {
                                                            ...t,
                                                            user: d,
                                                            guildId: n.id,
                                                            showMediaItems: !0
                                                        });
                                                });
                                            },
                                            ...s
                                        },
                                        e.userId
                                    );
                                }
                            },
                            d.id
                        );
                    })
                    .value(),
            [S, n.id, n.ownerId, x]
        ),
        j = F.Z.isFetchingFriendsForGuild(n.id);
    return (0, r.jsxs)(u.ModalRoot, {
        transitionState: s,
        size: u.ModalSize.SMALL,
        'aria-labelledby': D,
        children: [
            (0, r.jsxs)(u.ModalHeader, {
                separator: !1,
                justify: c.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.heading,
                        children: [
                            (0, r.jsx)('span', { children: (0, r.jsx)(u.FriendsIcon, {}) }),
                            (0, r.jsx)(u.Heading, {
                                variant: 'heading-lg/semibold',
                                children: (j ? b.Z.Messages.GUILD_FRIENDS_MODAL_HEADER_LOADING : b.Z.Messages.GUILD_FRIENDS_MODAL_HEADER).format({
                                    guildName: n.name,
                                    numFriends: C.length
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(u.ModalCloseButton, { onClick: _ })
                ]
            }),
            (0, r.jsxs)(u.ModalContent, {
                className: p.content,
                children: [j && (0, r.jsx)(u.Spinner, {}), (0, r.jsx)(u.Scroller, { children: C })]
            })
        ]
    });
}
