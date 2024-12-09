n.d(t, {
    Z: function () {
        return Z;
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
    u = n(477690),
    d = n(481060),
    h = n(540059),
    p = n(565138),
    m = n(430824),
    f = n(624138),
    g = n(674552),
    C = n(981631),
    _ = n(388032),
    v = n(10448);
let x = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    I = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    b = ['12px 4px 4px 4px', '4px 12px 4px 4px', '4px 4px 4px 12px', '4px 4px 12px 4px'];
function S(e) {
    let { guildId: t, animate: n, index: l } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        o = (0, h.Q3)('GuildIcon');
    return null == r
        ? (0, i.jsx)('div', {
              className: v.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(p.Z, {
              guild: r,
              animate: n,
              size: o ? p.Z.Sizes.MINI : p.Z.Sizes.SMOL,
              className: v.guildIcon,
              tabIndex: -1,
              style: o ? { borderRadius: b[l] } : void 0
          });
}
function E(e) {
    let t,
        n,
        { folderNode: r, hovered: o, expanded: c } = e,
        u = (0, h.Q3)('FolderIconContent'),
        { color: p, children: m } = r,
        f = null != p ? p : C.Wyy,
        g = m.map((e) => e.id),
        [_, b] = l.useState(!1),
        [E, Z] = l.useState(c),
        N = c ? 0 : -I,
        y = (0, d.useSpring)(
            {
                transform: 'translate3d(0, '.concat(N, 'px, 0)'),
                config: { duration: x },
                onStart() {
                    b(!0), Z(c);
                },
                onRest() {
                    b(!1), Z(c);
                }
            },
            'animate-always'
        ),
        T = _ ? y : void 0;
    return (
        (_ || E) &&
            (t = (0, i.jsx)(a.animated.div, {
                style: T,
                className: v.expandedFolderIconWrapper,
                children: (0, i.jsx)(d.FolderIcon, {
                    size: u ? 'sm' : 'md',
                    color: 'currentColor',
                    style: { color: (0, s.Rf)(f) }
                })
            })),
        (_ || !E) &&
            (n = (0, i.jsx)(a.animated.div, {
                style: T,
                className: v.closedFolderIconWrapper,
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
            className: v.folderIconWrapper,
            children: [t, n]
        })
    );
}
function Z(e) {
    let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: a,
            mediaState: s,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: p,
            folderIconContent: m,
            onClick: f,
            onContextMenu: C,
            onHoverChange: x,
            onKeyDown: I,
            treeItemProps: { onFocus: b, ...S }
        } = e,
        [Z, N] = l.useState(!1),
        y = l.useCallback(() => {
            a || N(!0), null == x || x(!0);
        }, [a, x]),
        T = l.useCallback(() => {
            a || N(!1), null == x || x(!1);
        }, [a, x]),
        A = (0, h.Q3)('FolderHeader'),
        j = r || null == s ? null : (0, g.Or)(s),
        P = !r && c > 0 ? (0, g.Ne)(c) : null;
    return (0, i.jsx)(d.BlobMask, {
        isFolder: !0,
        style: A
            ? {
                  width: 52,
                  height: 52
              }
            : void 0,
        selected: !!A || !n,
        upperBadge: j,
        lowerBadge: P,
        lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
        children: (0, i.jsx)(d.Clickable, {
            className: o()(v.folder, { [v.hover]: Z }),
            onClick: f,
            onContextMenu: C,
            onMouseEnter: y,
            onMouseLeave: T,
            onKeyDown: I,
            onFocus: b,
            'aria-label': _.intl.formatToPlainString(_.t['90/DwM'], {
                folderName: u,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': p,
            focusProps: { enabled: !1 },
            ...S,
            role: 'treeitem',
            children:
                null != m
                    ? (0, i.jsx)('div', {
                          className: v.expandedFolderIconWrapper,
                          children: m
                      })
                    : (0, i.jsx)(E, {
                          folderNode: t,
                          hovered: Z,
                          expanded: r
                      })
        })
    });
}
