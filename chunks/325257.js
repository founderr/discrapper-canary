n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(999153),
    s = n(91192),
    c = n(399606),
    u = n(846519),
    d = n(481060),
    h = n(493683),
    p = n(239091),
    f = n(153867),
    m = n(35225),
    g = n(703656),
    C = n(769654),
    _ = n(271383),
    x = n(771845),
    v = n(727258),
    I = n(276952),
    b = n(249792),
    S = n(40153),
    Z = n(593618),
    N = n(252686),
    E = n(682662),
    y = n(674552),
    j = n(981631),
    T = n(388032),
    P = n(767573);
let A = {
    analyticsSource: {
        page: j.ZY5.GUILD_CHANNEL,
        section: j.jXE.CHANNEL_LIST,
        object: j.qAy.CHANNEL
    }
};
function M(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('97313'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('28377'), n.e('49201'), n.e('33213'), n.e('18339')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, w;
    let { guildNode: L, setRef: R, onDragStart: D, onDragEnd: O, route: k, guild: U, animatable: G, selected: B = !1, unread: V = !1, mediaState: H, unavailable: F = !1, badge: W = 0, contextMenu: z = M, draggable: Y = !1, sorting: K = !1, preloadOnClick: q = !0, guildJoinRequestStatus: Q } = e,
        { id: J, parentId: X } = L,
        $ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, y.Ny)() : null != H ? (0, y.Or)(H) : void 0,
        ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ee && W > 0 ? (ee = null !== (r = (0, y.Ne)(W)) && void 0 !== r ? r : void 0) : null == ee && null != Q && (ee = null !== (p = (0, y.jt)({ guildJoinRequestStatus: Q })) && void 0 !== p ? p : void 0);
    let et = null !== (w = e.lowerBadgeSize) && void 0 !== w ? w : { width: (0, d.getBadgeWidthForValue)(W) },
        [{ dragging: en }, ei] = (0, o.c)({
            type: v.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == D || D();
                }),
                {
                    type: L.type,
                    nodeId: L.id
                }
            ),
            end() {
                null == O || O(), (0, f.V1)(x.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        el = (0, s.Ie)(null != J ? J : j.lds),
        [er, ea] = l.useState(!1),
        eo = !K && er,
        [es, ec] = l.useState(!1),
        [eu, ed] = l.useState(!1),
        [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
    l.useEffect(() => () => eh.cancel(), [eh]);
    let ep = l.useCallback(() => {
            if (null != k) {
                (0, g.uL)(k, { state: A });
                return;
            }
            (0, C.X)(J, { state: A });
        }, [J, k]),
        ef = l.useCallback(() => {
            if (null != k || null == U || F || !q) return;
            let e = (0, m.V)(U.id);
            if (null != e) h.Z.preload(U.id, e);
        }, [k, U, F, q]),
        em = (0, c.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(J)),
        eg = l.useCallback(
            (e) => {
                null != U && !em && z(e, U);
            },
            [U, z, em]
        ),
        eC = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != X) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(X, ']'))) || void 0 === t || t.focus();
                }
            },
            [X]
        ),
        e_ = l.useCallback(
            (e) => {
                if (e) {
                    eh.delay();
                    return;
                }
                eh.cancel(), ed(!1);
            },
            [eh]
        ),
        ex = l.useCallback(
            (e) => {
                null == R || R(J, e);
            },
            [J, R]
        );
    if (null == U) return null;
    let ev =
            eu || es
                ? (0, i.jsx)(b.Z, {
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
                      ariaLabel: T.intl.formatToPlainString(T.t['/uzRsr'], {
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
                      onContextMenu: eg,
                      onKeyDown: eC,
                      icon: U.getIconURL(96, eo && G),
                      selected: B || eo,
                      ...el,
                      role: 'treeitem'
                  }),
        eI = en
            ? (0, i.jsx)(S.OG, { children: (0, i.jsx)(N.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: Y ? ei : void 0,
                  'data-dnd-name': U.toString(),
                  className: a()(P.blobContainer, {
                      [P.sorting]: K,
                      [P.wobble]: eu,
                      [P.selected]: eu || B
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: eu || B || eo,
                      upperBadge: $,
                      lowerBadge: ee,
                      lowerBadgeSize: et,
                      children: ev
                  })
              });
    return (0, i.jsxs)(E.H, {
        ref: ex,
        children: [
            (0, i.jsx)(I.Z, {
                hovered: !en && eo,
                selected: !en && B,
                unread: !en && V,
                className: P.pill
            }),
            (0, i.jsx)(Z.Z, {
                guild: U,
                disabled: K,
                isDragging: en,
                children: eI
            }),
            Y
                ? (0, i.jsx)(S.ZP, {
                      name: U.name,
                      targetNode: L,
                      onDragOverChanged: e_
                  })
                : null
        ]
    });
});
