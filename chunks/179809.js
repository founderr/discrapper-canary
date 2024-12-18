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
    s = n(752877),
    c = n(91192),
    u = n(477690),
    d = n(481060),
    h = n(153867),
    p = n(540059),
    f = n(771845),
    m = n(624138),
    g = n(727258),
    v = n(276952),
    C = n(199540),
    x = n(40153),
    _ = n(252686),
    I = n(682662),
    Z = n(662146),
    b = n(388032),
    S = n(10448),
    N = n(284923);
let E = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
    y = (0, s.animated)(d.Stack);
function j(e) {
    var t;
    let { folderNode: n, setNodeRef: r, selected: s, expanded: u, mediaState: m, mentionCount: j = 0, isMentionLowImportance: T, unread: P = !1, defaultFolderName: A, useCircleMask: w = !1, draggable: M = !1, sorting: L = !1, onDragStart: R, onDragEnd: D, onExpandCollapse: G, onContextMenu: k, renderChildNode: B, folderIconContent: U } = e,
        { id: O, name: V, children: H } = n,
        F = (0, p.Q3)('FolderItem'),
        [W, z] = l.useState(!1),
        [q, Y] = l.useState(!1),
        Q = W || q;
    l.useEffect(() => {
        L && z(!1);
    }, [L]);
    let [{ dragging: J }, K] = (0, o.c)({
            type: g.eD.FOLDER,
            item: () => (
                null == R || R(),
                {
                    type: g.eD.FOLDER,
                    nodeId: n.id
                }
            ),
            end() {
                null == D || D(), (0, h.V1)(f.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        X = l.useCallback((e) => {
            Y(e);
        }, []),
        $ = l.useCallback(
            (e) => {
                (('ArrowRight' === e.key && !u) || ('ArrowLeft' === e.key && u)) && G();
            },
            [G, u]
        ),
        ee = null != V && '' !== V ? V : null != A && '' !== A ? A : b.intl.string(b.t.xV9hVl),
        et = (0, c.Ie)(''.concat(O)),
        en = 'folder-items-'.concat(O);
    let { iconHeight: ei, iconMargin: el } = {
            iconHeight: (t = F) ? 44 : 48,
            iconMargin: 8
        },
        er = H.length * (ei + el) - (F ? 4 : 0),
        ea = (0, d.useTransition)(!J && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: E }
        }),
        eo = l.useCallback((e) => (null == r ? void 0 : r(O, e)), [r, O]),
        es = (0, i.jsxs)(I.H, {
            children: [
                (0, i.jsx)(v.Z, {
                    disabled: J || u,
                    hovered: W,
                    selected: s,
                    unread: P,
                    className: N.pill
                }),
                (0, i.jsx)(Z.Z, {
                    text: ee,
                    disabled: L,
                    selected: s,
                    disableWrapper: !0,
                    children: (0, i.jsx)('div', {
                        ref: M ? K : void 0,
                        className: a()(S.folderIcon, { [N.wobble]: !J && q && !u }),
                        'data-dnd-name': ee,
                        children: J
                            ? (0, i.jsx)(_.Z, {})
                            : (0, i.jsx)(C.Z, {
                                  folderNode: n,
                                  expanded: u,
                                  forceCircular: w,
                                  sorting: L,
                                  mediaState: m,
                                  mentionCount: j,
                                  isMentionLowImportance: T,
                                  tooltipName: ee,
                                  folderGroupId: en,
                                  onClick: G,
                                  onContextMenu: k,
                                  onHoverChange: z,
                                  onKeyDown: $,
                                  treeItemProps: et,
                                  folderIconContent: U
                              })
                    })
                }),
                M
                    ? (0, i.jsx)(x.ZP, {
                          name: ee,
                          targetNode: n,
                          onDragOverChanged: X
                      })
                    : null
            ]
        });
    return (0, i.jsxs)('div', {
        ref: eo,
        className: a()(S.wrapper, u && S.isExpanded),
        children: [
            !J &&
                (0, i.jsx)('span', {
                    className: a()(S.expandedFolderBackground, {
                        [S.collapsed]: !u,
                        [S.hover]: Q
                    })
                }),
            es,
            ea((e, t, n) => {
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
                            children: H.map(B)
                        },
                        l
                    )
                );
            }),
            M && u
                ? (0, i.jsx)(x.Zu, {
                      name: ee,
                      targetNode: n
                  })
                : null
        ]
    });
}
