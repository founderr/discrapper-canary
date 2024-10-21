l(47120);
var n = l(200651),
    a = l(192379),
    o = l(120356),
    s = l.n(o),
    i = l(954955),
    r = l.n(i),
    C = l(498607),
    c = l.n(C),
    d = l(149765),
    u = l(399606),
    m = l(780384),
    _ = l(481060),
    E = l(102560),
    h = l(210887),
    M = l(496675),
    x = l(910693),
    b = l(588215),
    T = l(893966),
    L = l(527379),
    g = l(855935),
    H = l(231338),
    I = l(689938),
    f = l(877832);
let p = a.forwardRef(function (e, t) {
    let { guild: l } = e,
        o = (0, u.e7)([T.Z], () => T.Z.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        i = (0, u.e7)([h.Z], () => (0, m.wj)(h.Z.theme)),
        C = (0, u.e7)([M.Z], () => M.Z.can(d.$e(H.Pl.MANAGE_GUILD, H.Pl.KICK_MEMBERS), l)),
        p = a.useCallback(() => {
            if (null != l && !!C)
                (0, _.openModalLazy)(
                    async () => (e) =>
                        (0, n.jsx)(E.Z, {
                            ...e,
                            guild: l
                        })
                );
        }, [l, C]),
        N = (0, u.e7)([T.Z], () => T.Z.getSearchStateByGuildId(l.id), [l.id], c()),
        A = (0, x.gm)(l.id),
        [R, S] = a.useState(N.query),
        Z = null != N.selectedSort && N.selectedSort !== b.d$.ORDER_BY_GUILD_JOINED_AT_DESC && N.selectedSort !== b.d$.ORDER_BY_UNSPECIFIED,
        j = a.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, L.Dr)(l.id, { query: t });
            },
            [l.id, A]
        ),
        v = a.useCallback(r()(j, 300), [j]),
        D = a.useCallback(
            (e) => {
                S(e), v(e);
            },
            [v]
        ),
        B = a.useCallback(() => {
            S(''), j('');
        }, [j]);
    return (
        a.useImperativeHandle(t, () => ({
            resetSearchText() {
                S('');
            }
        })),
        (0, n.jsxs)('div', {
            className: s()(f.searchHeaderContainer),
            children: [
                (0, n.jsx)('div', {
                    className: s()(f.searchHeader),
                    children: o
                        ? (0, n.jsx)(_.Heading, {
                              variant: 'heading-md/medium',
                              children: I.Z.Messages.MEMBER_SAFETY_TABLE_TITLE
                          })
                        : (0, n.jsx)(_.Heading, {
                              variant: 'heading-md/medium',
                              children: I.Z.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
                          })
                }),
                (0, n.jsx)('div', {
                    className: s()(f.searchInput),
                    children: (0, n.jsx)('div', {
                        className: s()(f.searchHeader),
                        children: (0, n.jsx)(_.SearchBar, {
                            className: f.searchBar,
                            query: R,
                            placeholder: I.Z.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
                            onChange: D,
                            onClear: B,
                            autoComplete: 'off',
                            inputProps: {
                                autoCapitalize: 'none',
                                autoCorrect: 'off',
                                spellCheck: 'false'
                            }
                        })
                    })
                }),
                (0, n.jsx)('div', {
                    children: (0, n.jsx)(_.Popout, {
                        animation: _.Popout.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, n.jsx)(g.Z, {
                                guildId: l.id,
                                onClose: void 0
                            }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(_.Button, {
                                ...l,
                                onClick: t,
                                'aria-label': I.Z.Messages.SORT,
                                color: i ? _.Button.Colors.PRIMARY : _.Button.Colors.TRANSPARENT,
                                look: i ? _.Button.Looks.FILLED : _.Button.Looks.OUTLINED,
                                size: _.Button.Sizes.SMALL,
                                children: (0, n.jsxs)('div', {
                                    className: f.sortButton,
                                    children: [
                                        (0, n.jsx)(_.ArrowsUpDownIcon, {
                                            size: 'xs',
                                            color: Z ? _.tokens.colors.INTERACTIVE_ACTIVE.css : _.tokens.colors.HEADER_SECONDARY.css
                                        }),
                                        (0, n.jsx)(_.Text, {
                                            variant: 'text-sm/medium',
                                            color: Z ? 'interactive-active' : 'header-secondary',
                                            className: f.sortText,
                                            children: I.Z.Messages.SORT
                                        })
                                    ]
                                })
                            });
                        }
                    })
                }),
                (0, n.jsx)('div', {
                    className: s()(f.tableOptions),
                    children:
                        C &&
                        (0, n.jsx)(_.Button, {
                            className: s()(f.__invalid_pruneButton),
                            onClick: p,
                            'aria-label': I.Z.Messages.PRUNE_MEMBERS,
                            color: _.Button.Colors.RED,
                            look: _.Button.Looks.OUTLINED,
                            size: _.Button.Sizes.SMALL,
                            children: I.Z.Messages.PRUNE
                        })
                })
            ]
        })
    );
});
t.Z = p;
