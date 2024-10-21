n(47120);
var s = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    l = n(252759),
    o = n(442837),
    c = n(481060),
    d = n(946314),
    u = n(938502),
    _ = n(967916),
    I = n(68638),
    E = n(816817),
    T = n(219369),
    m = n(650774),
    N = n(845377),
    S = n(981631),
    g = n(689938),
    h = n(445314),
    C = n(716455);
let x = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
    p = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'];
t.Z = (e) => {
    let { guild: t, onEnableDiscovery: n, isGuildAdmin: i } = e,
        [R, L] = (0, l.Z)(() => [r().sample(x), r().sample(p)], []);
    a.useEffect(() => {
        _.z([R, L]);
    }, [R, L]);
    let [f, O] = (0, o.Wu)([I.Z], () => [I.Z.getGuild(R), I.Z.getGuild(L)], [R, L]),
        { canEnableDiscovery: A, isPendingSuccess: M } = (0, o.cj)(
            [d.ZP],
            () => ({
                canEnableDiscovery: d.ZP.passesChecklist(t.id),
                isPendingSuccess: d.ZP.isPendingSuccess(t.id)
            }),
            [t.id]
        ),
        [D, v] = (0, o.Wu)([m.Z], () => [null, m.Z.getMemberCount(t.id)], [t.id]),
        j = a.useCallback(() => {
            null != n && n();
        }, [n]),
        Z = null;
    return (
        i ? (M ? (Z = g.Z.Messages.GUILD_SETTINGS_DISCOVERY_PENDING_HEALTHY) : !A && (Z = g.Z.Messages.GUILD_SETTINGS_DISCOVERY_REQUIREMENTS_NOT_MET)) : (Z = g.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY),
        (0, s.jsxs)('div', {
            className: h.container,
            children: [
                (0, s.jsx)('img', {
                    alt: '',
                    src: C,
                    className: h.sparkles
                }),
                (0, s.jsxs)('div', {
                    className: h.discoverPreview,
                    children: [
                        (0, s.jsx)(E.Z, {
                            className: h.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == f,
                            guild: f
                        }),
                        (0, s.jsx)(E.Z, {
                            className: h.previewCard,
                            guild: t,
                            description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_PREVIEW_DESCRIPTION,
                            presenceCount: D,
                            memberCount: v
                        }),
                        (0, s.jsx)(E.Z, {
                            className: h.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == O,
                            guild: O
                        })
                    ]
                }),
                (0, s.jsx)(c.Heading, {
                    className: h.header,
                    variant: 'heading-xl/semibold',
                    children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_HEADER
                }),
                (0, s.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: h.valueProp,
                    color: 'header-secondary',
                    children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION.format({
                        onLinkClick: () =>
                            (0, T.lW)({
                                articleId: S.BhN.SERVER_DISCOVERY,
                                guildId: t.id,
                                pageView: u.d5.INTRO
                            })
                    })
                }),
                (0, s.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: h.byline,
                    color: 'header-secondary',
                    children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION_SUBHEADING.format({
                        onGuidelinesClick: () =>
                            (0, T.lW)({
                                articleId: S.BhN.SERVER_DISCOVERY_GUIDELINES,
                                guildId: t.id,
                                pageView: u.d5.INTRO
                            })
                    })
                }),
                (0, s.jsx)(c.Tooltip, {
                    text: Z,
                    children: (e) =>
                        (0, s.jsx)(c.Button, {
                            ...e,
                            className: h.enableButton,
                            color: c.Button.Colors.BRAND,
                            size: c.Button.Sizes.LARGE,
                            disabled: !A || !i,
                            onClick: j,
                            children: g.Z.Messages.GUILD_SETTINGS_SET_UP_DISCOVERY
                        })
                }),
                (0, s.jsx)(N.Z, {
                    className: h.checklist,
                    guild: t,
                    guildId: t.id
                })
            ]
        })
    );
};
