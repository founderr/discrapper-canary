n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(999153),
    o = n(91192),
    c = n(399606),
    u = n(846519),
    d = n(481060),
    h = n(493683),
    p = n(239091),
    f = n(153867),
    _ = n(35225),
    m = n(703656),
    g = n(769654),
    C = n(271383),
    I = n(771845),
    E = n(727258),
    N = n(276952),
    x = n(249792),
    S = n(40153),
    v = n(593618),
    Z = n(252686),
    T = n(682662),
    b = n(674552),
    A = n(981631),
    M = n(689938),
    R = n(767573);
let L = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
    }
};
function y(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('97313'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('28377'), n.e('64881'), n.e('33213'), n.e('18339')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, P;
    let { guildNode: O, setRef: j, onDragStart: D, onDragEnd: w, route: U, guild: G, animatable: k, selected: B = !1, unread: H = !1, mediaState: V, unavailable: F = !1, badge: W = 0, contextMenu: z = y, draggable: Y = !1, sorting: K = !1, preloadOnClick: q = !0, guildJoinRequestStatus: Q } = e,
        { id: X, parentId: J } = O,
        $ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, b.Ny)() : null != V ? (0, b.Or)(V) : void 0,
        ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ee && W > 0 ? (ee = null !== (r = (0, b.Ne)(W)) && void 0 !== r ? r : void 0) : null == ee && null != Q && (ee = null !== (p = (0, b.jt)({ guildJoinRequestStatus: Q })) && void 0 !== p ? p : void 0);
    let et = null !== (P = e.lowerBadgeSize) && void 0 !== P ? P : { width: (0, d.getBadgeWidthForValue)(W) },
        [{ dragging: en }, ei] = (0, s.c)({
            type: E.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == D || D();
                }),
                {
                    type: O.type,
                    nodeId: O.id
                }
            ),
            end() {
                null == w || w(), (0, f.V1)(I.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        el = (0, o.Ie)(null != X ? X : A.lds),
        [er, ea] = l.useState(!1),
        es = !K && er,
        [eo, ec] = l.useState(!1),
        [eu, ed] = l.useState(!1),
        [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
    l.useEffect(() => () => eh.cancel(), [eh]);
    let ep = l.useCallback(() => {
            if (null != U) {
                (0, m.uL)(U, { state: L });
                return;
            }
            (0, g.X)(X, { state: L });
        }, [X, U]),
        ef = l.useCallback(() => {
            if (null != U || null == G || F || !q) return;
            let e = (0, _.V)(G.id);
            if (null != e) h.Z.preload(G.id, e);
        }, [U, G, F, q]),
        e_ = (0, c.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(X)),
        em = l.useCallback(
            (e) => {
                null != G && !e_ && z(e, G);
            },
            [G, z, e_]
        ),
        eg = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != J) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(J, ']'))) || void 0 === t || t.focus();
                }
            },
            [J]
        ),
        eC = l.useCallback(
            (e) => {
                if (e) {
                    eh.delay();
                    return;
                }
                eh.cancel(), ed(!1);
            },
            [eh]
        ),
        eI = l.useCallback(
            (e) => {
                null == j || j(X, e);
            },
            [X, j]
        );
    if (null == G) return null;
    let eE =
            eu || eo
                ? (0, i.jsx)(x.Z, {
                      guild: G,
                      show: eu,
                      active: B,
                      onAnimationStart: function () {
                          ec(eu);
                      },
                      onAnimationRest: function () {
                          eu || ec(!1);
                      }
                  })
                : (0, i.jsx)(d.NavItem, {
                      ariaLabel: M.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                          guildName: G.toString(),
                          mentions: W
                      }),
                      name: G.toString(),
                      onClick: ep,
                      onMouseEnter: function () {
                          K || ea(!0);
                      },
                      onMouseLeave: function () {
                          K || ea(!1);
                      },
                      onMouseDown: ef,
                      onContextMenu: em,
                      onKeyDown: eg,
                      icon: G.getIconURL(96, es && k),
                      selected: B || es,
                      ...el,
                      role: 'treeitem'
                  }),
        eN = en
            ? (0, i.jsx)(S.OG, { children: (0, i.jsx)(Z.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: Y ? ei : void 0,
                  'data-dnd-name': G.toString(),
                  className: a()(R.blobContainer, {
                      [R.sorting]: K,
                      [R.wobble]: eu,
                      [R.selected]: eu || B
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: eu || B || es,
                      upperBadge: $,
                      lowerBadge: ee,
                      lowerBadgeSize: et,
                      children: eE
                  })
              });
    return (0, i.jsxs)(T.H, {
        ref: eI,
        children: [
            (0, i.jsx)(N.Z, {
                hovered: !en && es,
                selected: !en && B,
                unread: !en && H,
                className: R.pill
            }),
            (0, i.jsx)(v.Z, {
                guild: G,
                disabled: K,
                isDragging: en,
                children: eN
            }),
            Y
                ? (0, i.jsx)(S.ZP, {
                      name: G.name,
                      targetNode: O,
                      onDragOverChanged: eC
                  })
                : null
        ]
    });
});
