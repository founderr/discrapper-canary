n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(999153),
    s = n(91192),
    c = n(399606),
    u = n(846519),
    d = n(481060),
    h = n(493683),
    p = n(239091),
    m = n(153867),
    f = n(540059),
    g = n(35225),
    C = n(703656),
    v = n(769654),
    _ = n(271383),
    x = n(771845),
    I = n(727258),
    b = n(276952),
    E = n(249792),
    S = n(40153),
    Z = n(593618),
    N = n(252686),
    y = n(682662),
    T = n(674552),
    j = n(981631),
    A = n(388032),
    P = n(284923);
let R = {
    analyticsSource: {
        page: j.ZY5.GUILD_CHANNEL,
        section: j.jXE.CHANNEL_LIST,
        object: j.qAy.CHANNEL
    }
};
function M(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('42309'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('54770'), n.e('23956'), n.e('33213'), n.e('22179')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, L;
    let { guildNode: w, setRef: D, onDragStart: O, onDragEnd: k, route: U, guild: G, animatable: B, selected: H = !1, unread: V = !1, mediaState: F, unavailable: W = !1, badge: z = 0, contextMenu: Y = M, draggable: K = !1, sorting: q = !1, preloadOnClick: Q = !0, guildJoinRequestStatus: J } = e,
        { id: X, parentId: $ } = w,
        ee = (0, f.Q3)('GuildItem'),
        et = null !== (t = e.upperBadge) && void 0 !== t ? t : W ? (0, T.Ny)() : null != F ? (0, T.Or)(F) : void 0,
        en = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == en && z > 0 ? (en = null !== (r = (0, T.Ne)(z)) && void 0 !== r ? r : void 0) : null == en && null != J && (en = null !== (p = (0, T.jt)({ guildJoinRequestStatus: J })) && void 0 !== p ? p : void 0);
    let ei = null !== (L = e.lowerBadgeSize) && void 0 !== L ? L : { width: (0, d.getBadgeWidthForValue)(z) },
        [{ dragging: el }, er] = (0, a.c)({
            type: I.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == O || O();
                }),
                {
                    type: w.type,
                    nodeId: w.id
                }
            ),
            end() {
                null == k || k(), (0, m.V1)(x.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        eo = (0, s.Ie)(null != X ? X : j.lds),
        [ea, es] = l.useState(!1),
        ec = !q && ea,
        [eu, ed] = l.useState(!1),
        [eh, ep] = l.useState(!1),
        [em] = l.useState(() => new u.sW(70, () => ep(!0)));
    l.useEffect(() => () => em.cancel(), [em]);
    let ef = l.useCallback(() => {
            if (null != U) {
                (0, C.uL)(U, { state: R });
                return;
            }
            (0, v.X)(X, { state: R });
        }, [X, U]),
        eg = l.useCallback(() => {
            if (null != U || null == G || W || !Q) return;
            let e = (0, g.V)(G.id);
            if (null != e) h.Z.preload(G.id, e);
        }, [U, G, W, Q]),
        eC = (0, c.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(X)),
        ev = l.useCallback(
            (e) => {
                null != G && !eC && Y(e, G);
            },
            [G, Y, eC]
        ),
        e_ = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != $) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat($, ']'))) || void 0 === t || t.focus();
                }
            },
            [$]
        ),
        ex = l.useCallback(
            (e) => {
                if (e) {
                    em.delay();
                    return;
                }
                em.cancel(), ep(!1);
            },
            [em]
        ),
        eI = l.useCallback(
            (e) => {
                null == D || D(X, e);
            },
            [X, D]
        );
    if (null == G) return null;
    let eb =
            eh || eu
                ? (0, i.jsx)(E.Z, {
                      guild: G,
                      show: eh,
                      active: H,
                      onAnimationStart: function () {
                          ed(eh);
                      },
                      onAnimationRest: function () {
                          eh || ed(!1);
                      }
                  })
                : (0, i.jsx)(d.NavItem, {
                      ariaLabel: A.intl.formatToPlainString(A.t['/uzRsr'], {
                          guildName: G.toString(),
                          mentions: z
                      }),
                      name: G.toString(),
                      onClick: ef,
                      onMouseEnter: function () {
                          q || es(!0);
                      },
                      onMouseLeave: function () {
                          q || es(!1);
                      },
                      onMouseDown: eg,
                      onContextMenu: ev,
                      onKeyDown: e_,
                      icon: G.getIconURL((ee ? 44 : 48) * 2, ec && B),
                      selected: H || ec,
                      ...eo,
                      role: 'treeitem'
                  }),
        eE = el
            ? (0, i.jsx)(S.OG, { children: (0, i.jsx)(N.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: K ? er : void 0,
                  'data-dnd-name': G.toString(),
                  className: o()(P.blobContainer, {
                      [P.sorting]: q,
                      [P.wobble]: eh,
                      [P.selected]: eh || H
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: !!ee || eh || H || ec,
                      upperBadge: et,
                      lowerBadge: en,
                      lowerBadgeSize: ei,
                      children: eb
                  })
              });
    return (0, i.jsxs)(y.H, {
        ref: eI,
        children: [
            (0, i.jsx)(b.Z, {
                hovered: !el && ec,
                selected: !el && H,
                unread: !el && V,
                className: P.pill
            }),
            (0, i.jsx)(Z.Z, {
                guild: G,
                disabled: q,
                isDragging: el,
                children: eE
            }),
            K
                ? (0, i.jsx)(S.ZP, {
                      name: G.name,
                      targetNode: w,
                      onDragOverChanged: ex
                  })
                : null
        ]
    });
});
