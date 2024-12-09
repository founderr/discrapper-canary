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
    _ = n(199540),
    v = n(40153),
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
    let { folderNode: n, setNodeRef: r, selected: s, expanded: u, mediaState: f, mentionCount: T = 0, unread: j = !1, defaultFolderName: A, useCircleMask: P = !1, draggable: R = !1, sorting: M = !1, onDragStart: L, onDragEnd: w, onExpandCollapse: D, onContextMenu: O, renderChildNode: k, folderIconContent: U } = e,
        { id: G, name: B, children: H } = n,
        V = (0, p.Q3)('FolderItem'),
        [F, W] = l.useState(!1),
        [z, Y] = l.useState(!1),
        K = F || z;
    l.useEffect(() => {
        M && W(!1);
    }, [M]);
    let [{ dragging: q }, Q] = (0, a.c)({
            type: g.eD.FOLDER,
            item: () => (
                null == L || L(),
                {
                    type: g.eD.FOLDER,
                    nodeId: n.id
                }
            ),
            end() {
                null == w || w(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        J = l.useCallback((e) => {
            Y(e);
        }, []),
        X = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && D();
            },
            [D, u]
        ),
        $ = null != B && '' !== B ? B : null != A && '' !== A ? A : E.intl.string(E.t.xV9hVl),
        ee = (0, c.Ie)(''.concat(G)),
        et = 'folder-items-'.concat(G);
    let { iconHeight: en, iconMargin: ei } = {
            iconHeight: (t = V) ? 44 : 48,
            iconMargin: 8
        },
        el = H.length * (en + ei) - (V ? 4 : 0),
        er = (0, d.useTransition)(!q && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: N }
        }),
        eo = l.useCallback((e) => (null == r ? void 0 : r(G, e)), [r, G]),
        ea = (0, i.jsxs)(I.H, {
            children: [
                (0, i.jsx)(C.Z, {
                    disabled: q || u,
                    hovered: F,
                    selected: s,
                    unread: j,
                    className: Z.pill
                }),
                (0, i.jsx)(b.Z, {
                    text: $,
                    disabled: M,
                    selected: s,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: R ? Q : void 0,
                        className: o()({ [Z.wobble]: !q && z && !u }),
                        'data-dnd-name': $,
                        children: q
                            ? (0, i.jsx)(x.Z, {})
                            : (0, i.jsx)(_.Z, {
                                  folderNode: n,
                                  expanded: u,
                                  forceCircular: P,
                                  sorting: M,
                                  mediaState: f,
                                  mentionCount: T,
                                  tooltipName: $,
                                  folderGroupId: et,
                                  onClick: D,
                                  onContextMenu: O,
                                  onHoverChange: W,
                                  onKeyDown: X,
                                  treeItemProps: ee,
                                  folderIconContent: U
                              })
                    })
                }),
                R
                    ? (0, i.jsx)(v.ZP, {
                          name: $,
                          targetNode: n,
                          onDragOverChanged: J
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: eo,
        className: S.wrapper,
        children: [
            !q &&
                (0, i.jsx)('span', {
                    className: o()(S.expandedFolderBackground, {
                        [S.collapsed]: !u,
                        [S.hover]: K
                    })
                }),
            ea,
            er((e, t, n) => {
                let { key: l } = n;
                return (
                    t &&
                    (0, i.jsx)(
                        y,
                        {
                            as: 'ul',
                            gap: V ? 'xxs' : 0,
                            id: et,
                            style: { height: e.height.to((e) => e * el) },
                            role: 'group',
                            children: H.map(k)
                        },
                        l
                    )
                );
            }),
            R && u
                ? (0, i.jsx)(v.Zu, {
                      name: $,
                      targetNode: n
                  })
                : null
        ]
    });
}
