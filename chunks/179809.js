n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(999153),
    s = n(752877),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(540059),
    m = n(771845),
    f = n(624138),
    g = n(727258),
    C = n(276952),
    v = n(199540),
    _ = n(40153),
    x = n(252686),
    I = n(682662),
    b = n(662146),
    E = n(388032),
    S = n(10448),
    Z = n(284923);
let N = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    y = (0, s.animated)(d.Stack);
function T(e) {
    var t;
    let { folderNode: n, setNodeRef: r, selected: s, expanded: u, mediaState: f, mentionCount: T = 0, isMentionLowImportance: j, unread: A = !1, defaultFolderName: P, useCircleMask: R = !1, draggable: M = !1, sorting: w = !1, onDragStart: L, onDragEnd: D, onExpandCollapse: O, onContextMenu: k, renderChildNode: U, folderIconContent: G } = e,
        { id: B, name: H, children: V } = n,
        F = (0, p.Q3)('FolderItem'),
        [W, z] = l.useState(!1),
        [Y, K] = l.useState(!1),
        q = W || Y;
    l.useEffect(() => {
        w && z(!1);
    }, [w]);
    let [{ dragging: Q }, J] = (0, a.c)({
            type: g.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: g.eD.FOLDER,
                    nodeId: n.id
                }
            ),
            end() {
                null == D || D(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        X = l.useCallback((e) => {
            K(e);
        }, []),
        $ = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && O();
            },
            [O, u]
        ),
        ee = null != H && '' !== H ? H : null != P && '' !== P ? P : E.intl.string(E.t.xV9hVl),
        et = (0, c.Ie)(''.concat(B)),
        en = 'folder-items-'.concat(B);
    let { iconHeight: ei, iconMargin: el } = {
            iconHeight: (t = F) ? 44 : 48,
            iconMargin: 8
        },
        er = V.length * (ei + el) - (F ? 4 : 0),
        eo = (0, d.useTransition)(!Q && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: N }
        }),
        ea = l.useCallback((e) => (null == r ? void 0 : r(B, e)), [r, B]),
        es = (0, i.jsxs)(I.H, {
            children: [
                (0, i.jsx)(C.Z, {
                    disabled: Q || u,
                    hovered: W,
                    selected: s,
                    unread: A,
                    className: Z.pill
                }),
                (0, i.jsx)(b.Z, {
                    text: ee,
                    disabled: w,
                    selected: s,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: M ? J : void 0,
                        className: o()(S.folderIcon, { [Z.wobble]: !Q && Y && !u }),
                        'data-dnd-name': ee,
                        children: Q
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(v.Z, {
                                  folderNode: n,
                                  expanded: u,
                                  forceCircular: R,
                                  sorting: w,
                                  mediaState: f,
                                  mentionCount: T,
                                  isMentionLowImportance: j,
                                  tooltipName: ee,
                                  folderGroupId: en,
                                  onClick: O,
                                  onContextMenu: k,
                                  onHoverChange: z,
                                  onKeyDown: $,
                                  treeItemProps: et,
                                  folderIconContent: G
                              })
                    })
                }),
                M
                    ? (0, i.jsx)(_.ZP, {
                          name: ee,
                          targetNode: n,
                          onDragOverChanged: X
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: ea,
        className: o()(S.wrapper, u && S.isExpanded),
        children: [
            !Q &&
                (0, i.jsx)('span', {
                    className: o()(S.expandedFolderBackground, {
                        [S.collapsed]: !u,
                        [S.hover]: q
                    })
                }),
            es,
            eo((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        y,
                        {
                            as: 'ul',
                            gap: F ? 'xxs' : 0,
                            id: en,
                            style: { height: e.height.to((e) => e * er) },
                            role: 'group',
                            children: V.map(U)
                        },
                        l
                    )
                );
            }),
            M && u
                ? (0, i.jsx)(_.Zu, {
                      name: ee,
                      targetNode: n
                  })
                : null
        ]
    });
}
