n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    s = n.n(l),
    a = n(252759),
    o = n(442837),
    c = n(481060),
    d = n(650774),
    u = n(21297),
    m = n(118215),
    h = n(30766),
    g = n(166184),
    x = n(654351),
    p = n(259674),
    f = n(845377),
    C = n(981631),
    _ = n(388032),
    I = n(442344),
    v = n(716455);
let N = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
    T = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'];
t.Z = (e) => {
    let { guild: t, onEnableDiscovery: n, isGuildAdmin: l } = e,
        [b, j] = (0, a.Z)(() => [s().sample(N), s().sample(T)], []);
    r.useEffect(() => {
        (0, u.z)([b, j]);
    }, [b, j]);
    let [S, E] = (0, o.Wu)([h.Z], () => [h.Z.getGuild(b), h.Z.getGuild(j)], [b, j]),
        { canEnableDiscovery: R, isPendingSuccess: y } = (0, o.cj)(
            [m.ZP],
            () => ({
                canEnableDiscovery: m.ZP.passesChecklist(t.id),
                isPendingSuccess: m.ZP.isPendingSuccess(t.id)
            }),
            [t.id]
        ),
        [Z, A] = (0, o.Wu)([d.Z], () => [null, d.Z.getMemberCount(t.id)], [t.id]),
        L = r.useCallback(() => {
            null != n && n();
        }, [n]),
        D = null;
    return (
        l ? (y ? (D = _.intl.string(_.t.zP8DFx)) : !R && (D = _.intl.string(_.t.ABFu19))) : (D = _.intl.string(_.t['5VbUBw'])),
        (0, i.jsxs)('div', {
            className: I.container,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    src: v,
                    className: I.sparkles
                }),
                (0, i.jsxs)('div', {
                    className: I.discoverPreview,
                    children: [
                        (0, i.jsx)(g.Z, {
                            className: I.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == S,
                            guild: S
                        }),
                        (0, i.jsx)(g.Z, {
                            className: I.previewCard,
                            guild: t,
                            description: _.intl.string(_.t['0k7fyM']),
                            presenceCount: Z,
                            memberCount: A
                        }),
                        (0, i.jsx)(g.Z, {
                            className: I.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == E,
                            guild: E
                        })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    className: I.header,
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.UwPrKS)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: I.valueProp,
                    color: 'header-secondary',
                    children: _.intl.format(_.t.BhkgBg, {
                        onLinkClick: () =>
                            (0, p.lW)({
                                articleId: C.BhN.SERVER_DISCOVERY,
                                guildId: t.id,
                                pageView: x.d5.INTRO
                            })
                    })
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: I.byline,
                    color: 'header-secondary',
                    children: _.intl.format(_.t.ALSi8v, {
                        onGuidelinesClick: () =>
                            (0, p.lW)({
                                articleId: C.BhN.SERVER_DISCOVERY_GUIDELINES,
                                guildId: t.id,
                                pageView: x.d5.INTRO
                            })
                    })
                }),
                (0, i.jsx)(c.Tooltip, {
                    text: D,
                    children: (e) =>
                        (0, i.jsx)(c.Button, {
                            ...e,
                            className: I.enableButton,
                            color: c.Button.Colors.BRAND,
                            size: c.Button.Sizes.LARGE,
                            disabled: !R || !l,
                            onClick: L,
                            children: _.intl.string(_.t.oBIZwc)
                        })
                }),
                (0, i.jsx)(f.Z, {
                    className: I.checklist,
                    guild: t,
                    guildId: t.id
                })
            ]
        })
    );
};
