n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(526629),
    o = n(866442),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(565138),
    p = n(430824),
    f = n(624138),
    _ = n(674552),
    m = n(981631),
    g = n(689938),
    C = n(115376);
let I = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    E = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE);
function N(e) {
    let { guildId: t, animate: n } = e,
        l = (0, c.e7)([p.Z], () => p.Z.getGuild(t), [t]);
    return null == l
        ? (0, i.jsx)('div', {
              className: C.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(h.Z, {
              guild: l,
              animate: n,
              size: h.Z.Sizes.SMOL,
              className: C.guildIcon,
              tabIndex: -1
          });
}
function S(e) {
    let t,
        n,
        { folderNode: r, hovered: a, expanded: c } = e,
        { color: u, children: h } = r,
        p = null != u ? u : m.Wyy,
        f = h.map((e) => e.id),
        [_, g] = l.useState(!1),
        [S, x] = l.useState(c),
        v = c ? 0 : -E,
        T = (0, d.useSpring)(
            {
                transform: 'translate3d(0, '.concat(v, 'px, 0)'),
                config: { duration: I },
                onStart() {
                    g(!0), x(c);
                },
                onRest() {
                    g(!1), x(c);
                }
            },
            'animate-always'
        ),
        Z = _ ? T : void 0;
    return (
        (_ || S) &&
            (t = (0, i.jsx)(s.animated.div, {
                style: Z,
                className: C.expandedFolderIconWrapper,
                children: (0, i.jsx)(d.FolderIcon, {
                    size: 'md',
                    color: 'currentColor',
                    style: { color: (0, o.Rf)(p) }
                })
            })),
        (_ || !S) &&
            (n = (0, i.jsx)(s.animated.div, {
                style: Z,
                className: C.closedFolderIconWrapper,
                children: f.slice(0, 4).map((e) =>
                    (0, i.jsx)(
                        N,
                        {
                            guildId: e,
                            animate: a
                        },
                        e
                    )
                )
            })),
        (0, i.jsxs)('div', {
            'aria-hidden': !0,
            style: c ? void 0 : { backgroundColor: (0, o.br)(p, 0.4) },
            className: C.folderIconWrapper,
            children: [t, n]
        })
    );
}
function x(e) {
    let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: s,
            mediaState: o,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: h,
            folderIconContent: p,
            onClick: f,
            onContextMenu: m,
            onHoverChange: I,
            onKeyDown: E,
            treeItemProps: { onFocus: N, ...x }
        } = e,
        [v, T] = l.useState(!1),
        Z = l.useCallback(() => {
            s || T(!0), null == I || I(!0);
        }, [s, I]),
        b = l.useCallback(() => {
            s || T(!1), null == I || I(!1);
        }, [s, I]),
        A = r || null == o ? null : (0, _.Or)(o),
        R = !r && c > 0 ? (0, _.Ne)(c) : null;
    return (0, i.jsx)(d.BlobMask, {
        selected: !n,
        upperBadge: A,
        lowerBadge: R,
        lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
        children: (0, i.jsx)(d.Clickable, {
            className: a()(C.folder, { [C.hover]: v }),
            onClick: f,
            onContextMenu: m,
            onMouseEnter: Z,
            onMouseLeave: b,
            onKeyDown: E,
            onFocus: N,
            'aria-label': g.Z.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
                folderName: u,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': h,
            focusProps: { enabled: !1 },
            ...x,
            role: 'treeitem',
            children:
                null != p
                    ? (0, i.jsx)('div', {
                          className: C.expandedFolderIconWrapper,
                          children: p
                      })
                    : (0, i.jsx)(S, {
                          folderNode: t,
                          hovered: v,
                          expanded: r
                      })
        })
    });
}
