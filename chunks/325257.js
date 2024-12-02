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
    m = n(153867),
    f = n(35225),
    g = n(703656),
    C = n(769654),
    _ = n(271383),
    v = n(771845),
    x = n(727258),
    I = n(276952),
    b = n(249792),
    E = n(40153),
    S = n(593618),
    Z = n(252686),
    N = n(682662),
    y = n(674552),
    T = n(981631),
    A = n(388032),
    j = n(284923);
let P = {
    analyticsSource: {
        page: T.ZY5.GUILD_CHANNEL,
        section: T.jXE.CHANNEL_LIST,
        object: T.qAy.CHANNEL
    }
};
function R(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('15669'), n.e('7654'), n.e('42309'), n.e('98479'), n.e('31113'), n.e('85552'), n.e('58227'), n.e('16114'), n.e('61720'), n.e('92905'), n.e('33213'), n.e('22179')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, M;
    let { guildNode: L, setRef: w, onDragStart: D, onDragEnd: O, route: k, guild: U, animatable: G, selected: B = !1, unread: V = !1, mediaState: H, unavailable: F = !1, badge: W = 0, contextMenu: z = R, draggable: Y = !1, sorting: K = !1, preloadOnClick: q = !0, guildJoinRequestStatus: Q } = e,
        { id: X, parentId: J } = L,
        $ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, y.Ny)() : null != H ? (0, y.Or)(H) : void 0,
        ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == ee && W > 0 ? (ee = null !== (r = (0, y.Ne)(W)) && void 0 !== r ? r : void 0) : null == ee && null != Q && (ee = null !== (p = (0, y.jt)({ guildJoinRequestStatus: Q })) && void 0 !== p ? p : void 0);
    let et = null !== (M = e.lowerBadgeSize) && void 0 !== M ? M : { width: (0, d.getBadgeWidthForValue)(W) },
        [{ dragging: en }, ei] = (0, o.c)({
            type: x.eD.GUILD,
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
                null == O || O(), (0, m.V1)(v.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        el = (0, s.Ie)(null != X ? X : T.lds),
        [er, ea] = l.useState(!1),
        eo = !K && er,
        [es, ec] = l.useState(!1),
        [eu, ed] = l.useState(!1),
        [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
    l.useEffect(() => () => eh.cancel(), [eh]);
    let ep = l.useCallback(() => {
            if (null != k) {
                (0, g.uL)(k, { state: P });
                return;
            }
            (0, C.X)(X, { state: P });
        }, [X, k]),
        em = l.useCallback(() => {
            if (null != k || null == U || F || !q) return;
            let e = (0, f.V)(U.id);
            if (null != e) h.Z.preload(U.id, e);
        }, [k, U, F, q]),
        ef = (0, c.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(X)),
        eg = l.useCallback(
            (e) => {
                null != U && !ef && z(e, U);
            },
            [U, z, ef]
        ),
        eC = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != J) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(J, ']'))) || void 0 === t || t.focus();
                }
            },
            [J]
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
        ev = l.useCallback(
            (e) => {
                null == w || w(X, e);
            },
            [X, w]
        );
    if (null == U) return null;
    let ex =
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
                      ariaLabel: A.intl.formatToPlainString(A.t['/uzRsr'], {
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
                      onMouseDown: em,
                      onContextMenu: eg,
                      onKeyDown: eC,
                      icon: U.getIconURL(96, eo && G),
                      selected: B || eo,
                      ...el,
                      role: 'treeitem'
                  }),
        eI = en
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(Z.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: Y ? ei : void 0,
                  'data-dnd-name': U.toString(),
                  className: a()(j.blobContainer, {
                      [j.sorting]: K,
                      [j.wobble]: eu,
                      [j.selected]: eu || B
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: eu || B || eo,
                      upperBadge: $,
                      lowerBadge: ee,
                      lowerBadgeSize: et,
                      children: ex
                  })
              });
    return (0, i.jsxs)(N.H, {
        ref: ev,
        children: [
            (0, i.jsx)(I.Z, {
                hovered: !en && eo,
                selected: !en && B,
                unread: !en && V,
                className: j.pill
            }),
            (0, i.jsx)(S.Z, {
                guild: U,
                disabled: K,
                isDragging: en,
                children: eI
            }),
            Y
                ? (0, i.jsx)(E.ZP, {
                      name: U.name,
                      targetNode: L,
                      onDragOverChanged: e_
                  })
                : null
        ]
    });
});
