n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(752877),
    s = n(866442),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    h = n(377171),
    p = n(540059),
    m = n(565138),
    f = n(430824),
    g = n(624138),
    C = n(674552),
    v = n(981631),
    _ = n(388032),
    x = n(10448);
let I = (0, g.Mg)(d.Z.FOLDER_ITEM_ANIMATION_DURATION),
    b = (0, g.Mg)(d.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    E = ['12px 4px 4px 4px', '4px 12px 4px 4px', '4px 4px 4px 12px', '4px 4px 12px 4px'];
function S(e) {
    let { guildId: t, animate: n, index: l } = e,
        r = (0, c.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        o = (0, p.Q3)('GuildIcon');
    return null == r
        ? (0, i.jsx)('div', {
              className: x.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(m.Z, {
              guild: r,
              animate: n,
              size: o ? m.Z.Sizes.MINI : m.Z.Sizes.SMOL,
              className: x.guildIcon,
              tabIndex: -1,
              style: o ? { borderRadius: E[l] } : void 0
          });
}
function Z(e) {
    let t,
        n,
        { folderNode: r, hovered: o, expanded: c } = e,
        d = (0, p.Q3)('FolderIconContent'),
        { color: h, children: m } = r,
        f = null != h ? h : v.Wyy,
        g = m.map((e) => e.id),
        [C, _] = l.useState(!1),
        [E, Z] = l.useState(c),
        N = c ? 0 : -b,
        y = (0, u.useSpring)(
            {
                transform: 'translate3d(0, '.concat(N, 'px, 0)'),
                config: { duration: I },
                onStart() {
                    _(!0), Z(c);
                },
                onRest() {
                    _(!1), Z(c);
                }
            },
            'animate-always'
        ),
        T = C ? y : void 0;
    return (
        (C || E) &&
            (t = (0, i.jsx)(a.animated.div, {
                style: T,
                className: x.expandedFolderIconWrapper,
                children: (0, i.jsx)(u.FolderIcon, {
                    size: d ? 'sm' : 'md',
                    color: 'currentColor',
                    style: { color: (0, s.Rf)(f) }
                })
            })),
        (C || !E) &&
            (n = (0, i.jsx)(a.animated.div, {
                style: T,
                className: x.closedFolderIconWrapper,
                children: g.slice(0, 4).map((e, t) =>
                    (0, i.jsx)(
                        S,
                        {
                            index: t,
                            guildId: e,
                            animate: o
                        },
                        e
                    )
                )
            })),
        (0, i.jsxs)('div', {
            'aria-hidden': !0,
            style: c ? void 0 : { backgroundColor: (0, s.br)(f, 0.4) },
            className: x.folderIconWrapper,
            children: [t, n]
        })
    );
}
function N(e) {
    let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: a,
            mediaState: s,
            mentionCount: c = 0,
            isMentionLowImportance: d,
            tooltipName: m,
            folderGroupId: f,
            folderIconContent: g,
            onClick: v,
            onContextMenu: I,
            onHoverChange: b,
            onKeyDown: E,
            treeItemProps: { onFocus: S, ...N }
        } = e,
        [y, T] = l.useState(!1),
        j = l.useCallback(() => {
            a || T(!0), null == b || b(!0);
        }, [a, b]),
        A = l.useCallback(() => {
            a || T(!1), null == b || b(!1);
        }, [a, b]),
        P = (0, p.Q3)('FolderHeader'),
        R = r || null == s ? null : (0, C.Or)(s),
        M = !r && c > 0 ? (0, C.Ne)(c, d ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER) : null;
    return (0, i.jsx)(u.BlobMask, {
        isFolder: !0,
        style: P
            ? {
                  width: 52,
                  height: 52
              }
            : void 0,
        selected: !!P || !n,
        upperBadge: R,
        lowerBadge: M,
        lowerBadgeSize: { width: (0, u.getBadgeWidthForValue)(c) },
        children: (0, i.jsx)(u.Clickable, {
            className: o()(x.folder, { [x.hover]: y }),
            onClick: v,
            onContextMenu: I,
            onMouseEnter: j,
            onMouseLeave: A,
            onKeyDown: E,
            onFocus: S,
            'aria-label': _.intl.formatToPlainString(_.t['90/DwM'], {
                folderName: m,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': f,
            focusProps: { enabled: !1 },
            ...N,
            role: 'treeitem',
            children:
                null != g
                    ? (0, i.jsx)('div', {
                          className: x.expandedFolderIconWrapper,
                          children: g
                      })
                    : (0, i.jsx)(Z, {
                          folderNode: t,
                          hovered: y,
                          expanded: r
                      })
        })
    });
}
