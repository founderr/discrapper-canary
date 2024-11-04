n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(100621),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(771845),
    f = n(624138),
    m = n(727258),
    g = n(276952),
    C = n(199540),
    _ = n(40153),
    x = n(252686),
    v = n(682662),
    I = n(662146),
    b = n(388032),
    S = n(115376),
    Z = n(767573);
let N = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    E = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    y = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
function j(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: u, mediaState: f, mentionCount: j = 0, unread: T = !1, defaultFolderName: P, useCircleMask: A = !1, draggable: M = !1, sorting: w = !1, onDragStart: L, onDragEnd: R, onExpandCollapse: D, onContextMenu: O, renderChildNode: k, folderIconContent: U } = e,
        { id: G, name: B, children: V } = t,
        [H, F] = l.useState(!1),
        [W, z] = l.useState(!1),
        Y = H || W;
    l.useEffect(() => {
        w && F(!1);
    }, [w]);
    let [{ dragging: K }, q] = (0, o.c)({
            type: m.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: m.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == R || R(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        Q = l.useCallback((e) => {
            z(e);
        }, []),
        J = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && D();
            },
            [D, u]
        ),
        X = null != B && '' !== B ? B : null != P && '' !== P ? P : b.intl.string(b.t.xV9hVl),
        $ = (0, c.Ie)(''.concat(G)),
        ee = 'folder-items-'.concat(G),
        et = V.length * (E + y),
        en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: N }
        }),
        ei = l.useCallback((e) => (null == n ? void 0 : n(G, e)), [n, G]),
        el = (0, i.jsxs)(v.H, {
            children: [
                (0, i.jsx)(g.Z, {
                    disabled: K || u,
                    hovered: H,
                    selected: r,
                    unread: T,
                    className: Z.pill
                }),
                (0, i.jsx)(I.Z, {
                    text: X,
                    disabled: w,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: M ? q : void 0,
                        className: a()({ [Z.wobble]: !K && W && !u }),
                        'data-dnd-name': X,
                        children: K
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: t,
                                  expanded: u,
                                  forceCircular: A,
                                  sorting: w,
                                  mediaState: f,
                                  mentionCount: j,
                                  tooltipName: X,
                                  folderGroupId: ee,
                                  onClick: D,
                                  onContextMenu: O,
                                  onHoverChange: F,
                                  onKeyDown: J,
                                  treeItemProps: $,
                                  folderIconContent: U
                              })
                    })
                }),
                M
                    ? (0, i.jsx)(_.ZP, {
                          name: X,
                          targetNode: t,
                          onDragOverChanged: Q
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: ei,
        className: S.wrapper,
        children: [
            !K &&
                (0, i.jsx)('span', {
                    className: a()(S.expandedFolderBackground, {
                        [S.collapsed]: !u,
                        [S.hover]: Y
                    })
                }),
            el,
            en((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        s.animated.ul,
                        {
                            id: ee,
                            style: { height: e.height.to((e) => e * et) },
                            className: S.__invalid_expandedGuilds,
                            role: 'group',
                            children: V.map(k)
                        },
                        l
                    )
                );
            }),
            M && u
                ? (0, i.jsx)(_.Zu, {
                      name: X,
                      targetNode: t
                  })
                : null
        ]
    });
}
