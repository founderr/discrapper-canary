n.d(t, {
    Z: function () {
        return T;
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
    m = n(624138),
    f = n(727258),
    g = n(276952),
    C = n(199540),
    _ = n(40153),
    v = n(252686),
    x = n(682662),
    I = n(662146),
    b = n(388032),
    E = n(581294),
    S = n(83296);
let Z = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    y = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
function T(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: u, mediaState: m, mentionCount: T = 0, unread: j = !1, defaultFolderName: A, useCircleMask: P = !1, draggable: M = !1, sorting: R = !1, onDragStart: w, onDragEnd: L, onExpandCollapse: D, onContextMenu: O, renderChildNode: k, folderIconContent: U } = e,
        { id: G, name: B, children: H } = t,
        [V, F] = l.useState(!1),
        [W, z] = l.useState(!1),
        Y = V || W;
    l.useEffect(() => {
        R && F(!1);
    }, [R]);
    let [{ dragging: K }, q] = (0, o.c)({
            type: f.eD.FOLDER,
            item: () => (
                null == w || w(),
                {
                    type: f.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == L || L(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
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
        X = null != B && '' !== B ? B : null != A && '' !== A ? A : b.intl.string(b.t.xV9hVl),
        $ = (0, c.Ie)(''.concat(G)),
        ee = 'folder-items-'.concat(G),
        et = H.length * (N + y),
        en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: Z }
        }),
        ei = l.useCallback((e) => (null == n ? void 0 : n(G, e)), [n, G]),
        el = (0, i.jsxs)(x.H, {
            children: [
                (0, i.jsx)(g.Z, {
                    disabled: K || u,
                    hovered: V,
                    selected: r,
                    unread: j,
                    className: S.pill
                }),
                (0, i.jsx)(I.Z, {
                    text: X,
                    disabled: R,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: M ? q : void 0,
                        className: a()({ [S.wobble]: !K && W && !u }),
                        'data-dnd-name': X,
                        children: K
                            ? (0, i.jsx)(v.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: t,
                                  expanded: u,
                                  forceCircular: P,
                                  sorting: R,
                                  mediaState: m,
                                  mentionCount: T,
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
        className: E.wrapper,
        children: [
            !K &&
                (0, i.jsx)('span', {
                    className: a()(E.expandedFolderBackground, {
                        [E.collapsed]: !u,
                        [E.hover]: Y
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
                            className: E.__invalid_expandedGuilds,
                            role: 'group',
                            children: H.map(k)
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
