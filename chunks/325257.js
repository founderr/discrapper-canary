n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(225857),
    o = n(91192),
    c = n(399606),
    u = n(846519),
    d = n(481060),
    h = n(493683),
    p = n(239091),
    f = n(153867),
    m = n(35225),
    _ = n(703656),
    g = n(769654),
    C = n(271383),
    I = n(771845),
    E = n(727258),
    N = n(276952),
    S = n(249792),
    x = n(40153),
    v = n(593618),
    T = n(252686),
    Z = n(682662),
    A = n(674552),
    b = n(981631),
    R = n(689938),
    M = n(767573);
let L = {
    analyticsSource: {
        page: b.ZY5.GUILD_CHANNEL,
        section: b.jXE.CHANNEL_LIST,
        object: b.qAy.CHANNEL
    }
};
function P(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('96427'), n.e('33053'), n.e('37581'), n.e('7654'), n.e('61086'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('36897'), n.e('36362'), n.e('33213'), n.e('18339')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, y;
    let { guildNode: O, setRef: j, onDragStart: D, onDragEnd: w, route: G, guild: U, animatable: k, selected: B = !1, unread: V = !1, mediaState: H, unavailable: F = !1, badge: W = 0, contextMenu: z = P, draggable: Y = !1, sorting: K = !1, preloadOnClick: q = !0, guildJoinRequestStatus: Q } = e,
        { id: X, parentId: J } = O,
        $ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, A.Ny)() : null != H ? (0, A.Or)(H) : void 0,
        ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ee && W > 0 ? (ee = null !== (r = (0, A.Ne)(W)) && void 0 !== r ? r : void 0) : null == ee && null != Q && (ee = null !== (p = (0, A.jt)({ guildJoinRequestStatus: Q })) && void 0 !== p ? p : void 0);
    let et = null !== (y = e.lowerBadgeSize) && void 0 !== y ? y : { width: (0, d.getBadgeWidthForValue)(W) },
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
        el = (0, o.Ie)(null != X ? X : b.lds),
        [er, ea] = l.useState(!1),
        es = !K && er,
        [eo, ec] = l.useState(!1),
        [eu, ed] = l.useState(!1),
        [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
    l.useEffect(() => () => eh.cancel(), [eh]);
    let ep = l.useCallback(() => {
            if (null != G) {
                (0, _.uL)(G, { state: L });
                return;
            }
            (0, g.X)(X, { state: L });
        }, [X, G]),
        ef = l.useCallback(() => {
            if (null != G || null == U || F || !q) return;
            let e = (0, m.V)(U.id);
            if (null != e) h.Z.preload(U.id, e);
        }, [G, U, F, q]),
        em = (0, c.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(X)),
        e_ = l.useCallback(
            (e) => {
                null != U && !em && z(e, U);
            },
            [U, z, em]
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
    if (null == U) return null;
    let eE =
            eu || eo
                ? (0, i.jsx)(S.Z, {
                      guild: U,
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
                      ariaLabel: R.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                          guildName: U.toString(),
                          mentions: W
                      }),
                      name: U.toString(),
                      onClick: ep,
                      onMouseEnter: function () {
                          K || ea(!0);
                      },
                      onMouseLeave: function () {
                          K || ea(!1);
                      },
                      onMouseDown: ef,
                      onContextMenu: e_,
                      onKeyDown: eg,
                      icon: U.getIconURL(96, es && k),
                      selected: B || es,
                      ...el,
                      role: 'treeitem'
                  }),
        eN = en
            ? (0, i.jsx)(x.OG, { children: (0, i.jsx)(T.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: Y ? ei : void 0,
                  'data-dnd-name': U.toString(),
                  className: a()(M.blobContainer, {
                      [M.sorting]: K,
                      [M.wobble]: eu,
                      [M.selected]: eu || B
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: eu || B || es,
                      upperBadge: $,
                      lowerBadge: ee,
                      lowerBadgeSize: et,
                      children: eE
                  })
              });
    return (0, i.jsxs)(Z.H, {
        ref: eI,
        children: [
            (0, i.jsx)(N.Z, {
                hovered: !en && es,
                selected: !en && B,
                unread: !en && V,
                className: M.pill
            }),
            (0, i.jsx)(v.Z, {
                guild: U,
                disabled: K,
                isDragging: en,
                children: eN
            }),
            Y
                ? (0, i.jsx)(x.ZP, {
                      name: U.name,
                      targetNode: O,
                      onDragOverChanged: eC
                  })
                : null
        ]
    });
});
