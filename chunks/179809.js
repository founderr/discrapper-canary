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
    f = n(624138),
    m = n(727258),
    g = n(276952),
    C = n(199540),
    _ = n(40153),
    x = n(252686),
    v = n(682662),
    I = n(662146),
    b = n(388032),
    N = n(115376),
    E = n(767573);
let S = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    Z = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
    y = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
function T(e) {
    let { folderNode: t, setNodeRef: n, selected: r, expanded: u, mediaState: f, mentionCount: T = 0, unread: j = !1, defaultFolderName: A, useCircleMask: P = !1, draggable: R = !1, sorting: M = !1, onDragStart: L, onDragEnd: w, onExpandCollapse: D, onContextMenu: O, renderChildNode: k, folderIconContent: G } = e,
        { id: U, name: B, children: H } = t,
        [V, F] = l.useState(!1),
        [W, z] = l.useState(!1),
        Y = V || W;
    l.useEffect(() => {
        M && F(!1);
    }, [M]);
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
                null == w || w(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        Q = l.useCallback((e) => {
            z(e);
        }, []),
        X = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && D();
            },
            [D, u]
        ),
        J = null != B && '' !== B ? B : null != A && '' !== A ? A : b.intl.string(b.t.xV9hVl),
        $ = (0, c.Ie)(''.concat(U)),
        ee = 'folder-items-'.concat(U),
        et = H.length * (Z + y),
        en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: S }
        }),
        ei = l.useCallback((e) => (null == n ? void 0 : n(U, e)), [n, U]),
        el = (0, i.jsxs)(v.H, {
            children: [
                (0, i.jsx)(g.Z, {
                    disabled: K || u,
                    hovered: V,
                    selected: r,
                    unread: j,
                    className: E.pill
                }),
                (0, i.jsx)(I.Z, {
                    text: J,
                    disabled: M,
                    selected: r,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: R ? q : void 0,
                        className: a()({ [E.wobble]: !K && W && !u }),
                        'data-dnd-name': J,
                        children: K
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: t,
                                  expanded: u,
                                  forceCircular: P,
                                  sorting: M,
                                  mediaState: f,
                                  mentionCount: T,
                                  tooltipName: J,
                                  folderGroupId: ee,
                                  onClick: D,
                                  onContextMenu: O,
                                  onHoverChange: F,
                                  onKeyDown: X,
                                  treeItemProps: $,
                                  folderIconContent: G
                              })
                    })
                }),
                R
                    ? (0, i.jsx)(_.ZP, {
                          name: J,
                          targetNode: t,
                          onDragOverChanged: Q
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: ei,
        className: N.wrapper,
        children: [
            !K &&
                (0, i.jsx)('span', {
                    className: a()(N.expandedFolderBackground, {
                        [N.collapsed]: !u,
                        [N.hover]: Y
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
                            className: N.__invalid_expandedGuilds,
                            role: 'group',
                            children: H.map(k)
                        },
                        l
                    )
                );
            }),
            R && u
                ? (0, i.jsx)(_.Zu, {
                      name: J,
                      targetNode: t
                  })
                : null
        ]
    });
}
