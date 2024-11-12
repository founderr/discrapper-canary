n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(100621),
    s = n(866442),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    h = n(565138),
    p = n(430824),
    f = n(624138),
    m = n(674552),
    g = n(981631),
    C = n(388032),
    _ = n(115376);
let v = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    x = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE);
function I(e) {
    let { guildId: t, animate: n } = e,
        l = (0, c.e7)([p.Z], () => p.Z.getGuild(t), [t]);
    return null == l
        ? (0, i.jsx)('div', {
              className: _.guildIconUnavailable,
              children: '!'
          })
        : (0, i.jsx)(h.Z, {
              guild: l,
              animate: n,
              size: h.Z.Sizes.SMOL,
              className: _.guildIcon,
              tabIndex: -1
          });
}
function b(e) {
    let t,
        n,
        { folderNode: r, hovered: a, expanded: c } = e,
        { color: u, children: h } = r,
        p = null != u ? u : g.Wyy,
        f = h.map((e) => e.id),
        [m, C] = l.useState(!1),
        [b, S] = l.useState(c),
        E = c ? 0 : -x,
        N = (0, d.useSpring)(
            {
                transform: 'translate3d(0, '.concat(E, 'px, 0)'),
                config: { duration: v },
                onStart() {
                    C(!0), S(c);
                },
                onRest() {
                    C(!1), S(c);
                }
            },
            'animate-always'
        ),
        Z = m ? N : void 0;
    return (
        (m || b) &&
            (t = (0, i.jsx)(o.animated.div, {
                style: Z,
                className: _.expandedFolderIconWrapper,
                children: (0, i.jsx)(d.FolderIcon, {
                    size: 'md',
                    color: 'currentColor',
                    style: { color: (0, s.Rf)(p) }
                })
            })),
        (m || !b) &&
            (n = (0, i.jsx)(o.animated.div, {
                style: Z,
                className: _.closedFolderIconWrapper,
                children: f.slice(0, 4).map((e) =>
                    (0, i.jsx)(
                        I,
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
            style: c ? void 0 : { backgroundColor: (0, s.br)(p, 0.4) },
            className: _.folderIconWrapper,
            children: [t, n]
        })
    );
}
function S(e) {
    let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: o,
            mediaState: s,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: h,
            folderIconContent: p,
            onClick: f,
            onContextMenu: g,
            onHoverChange: v,
            onKeyDown: x,
            treeItemProps: { onFocus: I, ...S }
        } = e,
        [E, N] = l.useState(!1),
        Z = l.useCallback(() => {
            o || N(!0), null == v || v(!0);
        }, [o, v]),
        y = l.useCallback(() => {
            o || N(!1), null == v || v(!1);
        }, [o, v]),
        T = r || null == s ? null : (0, m.Or)(s),
        j = !r && c > 0 ? (0, m.Ne)(c) : null;
    return (0, i.jsx)(d.BlobMask, {
        selected: !n,
        upperBadge: T,
        lowerBadge: j,
        lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
        children: (0, i.jsx)(d.Clickable, {
            className: a()(_.folder, { [_.hover]: E }),
            onClick: f,
            onContextMenu: g,
            onMouseEnter: Z,
            onMouseLeave: y,
            onKeyDown: x,
            onFocus: I,
            'aria-label': C.intl.formatToPlainString(C.t['90/DwM'], {
                folderName: u,
                mentions: c
            }),
            'aria-expanded': r,
            'aria-owns': h,
            focusProps: { enabled: !1 },
            ...S,
            role: 'treeitem',
            children:
                null != p
                    ? (0, i.jsx)('div', {
                          className: _.expandedFolderIconWrapper,
                          children: p
                      })
                    : (0, i.jsx)(b, {
                          folderNode: t,
                          hovered: E,
                          expanded: r
                      })
        })
    });
}
