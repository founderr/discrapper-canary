n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(225857),
    o = n(212433),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(771845),
    f = n(624138),
    _ = n(727258),
    m = n(276952),
    g = n(199540),
    C = n(40153),
    I = n(252686),
    E = n(682662),
    N = n(662146),
    S = n(689938),
    x = n(115376),
    v = n(767573);
let T = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    Z = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    A = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
function b(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: u, mediaState: f, mentionCount: b = 0, unread: R = !1, defaultFolderName: M, useCircleMask: L = !1, draggable: P = !1, sorting: O = !1, onDragStart: y, onDragEnd: D, onExpandCollapse: j, onContextMenu: w, renderChildNode: U, folderIconContent: G } = e,
        { id: k, name: B, children: V } = t,
        [H, F] = l.useState(!1),
        [W, z] = l.useState(!1),
        Y = H || W;
    l.useEffect(() => {
        O && F(!1);
    }, [O]);
    let [{ dragging: K }, q] = (0, s.c)({
            type: _.eD.FOLDER,
            item: () => (
                null == y || y(),
                {
                    type: _.eD.FOLDER,
                    nodeId: t.id
                }
            ),
            end() {
                null == D || D(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        Q = l.useCallback((e) => {
            z(e);
        }, []),
        X = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && j();
            },
            [j, u]
        ),
        J = null != B && '' !== B ? B : null != M && '' !== M ? M : S.Z.Messages.SERVER_FOLDER_PLACEHOLDER,
        $ = (0, c.Ie)(''.concat(k)),
        ee = 'folder-items-'.concat(k),
        et = V.length * (Z + A),
        en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: T }
        }),
        ei = l.useCallback((e) => (null == n ? void 0 : n(k, e)), [n, k]),
        el = (0, i.jsxs)(E.H, {
            children: [
                (0, i.jsx)(m.Z, {
                    disabled: K || u,
                    hovered: H,
                    selected: r,
                    unread: R,
                    className: v.pill
                }),
                (0, i.jsx)(N.Z, {
                    text: J,
                    disabled: O,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: P ? q : void 0,
                        className: a()({ [v.wobble]: !K && W && !u }),
                        'data-dnd-name': J,
                        children: K
                            ? (0, i.jsx)(I.Z, {})
                            : (0, i.jsx)(g.Z, {
                                  folderNode: t,
                                  expanded: u,
                                  forceCircular: L,
                                  sorting: O,
                                  mediaState: f,
                                  mentionCount: b,
                                  tooltipName: J,
                                  folderGroupId: ee,
                                  onClick: j,
                                  onContextMenu: w,
                                  onHoverChange: F,
                                  onKeyDown: X,
                                  treeItemProps: $,
                                  folderIconContent: G
                              })
                    })
                }),
                P
                    ? (0, i.jsx)(C.ZP, {
                          name: J,
                          targetNode: t,
                          onDragOverChanged: Q
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: ei,
        className: x.wrapper,
        children: [
            !K &&
                (0, i.jsx)('span', {
                    className: a()(x.expandedFolderBackground, {
                        [x.collapsed]: !u,
                        [x.hover]: Y
                    })
                }),
            el,
            en((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        o.animated.ul,
                        {
                            id: ee,
                            style: { height: e.height.to((e) => e * et) },
                            className: x.__invalid_expandedGuilds,
                            role: 'group',
                            children: V.map(U)
                        },
                        l
                    )
                );
            }),
            P && u
                ? (0, i.jsx)(C.Zu, {
                      name: J,
                      targetNode: t
                  })
                : null
        ]
    });
}
