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
    f = n(377171),
    g = n(540059),
    C = n(35225),
    v = n(703656),
    _ = n(769654),
    x = n(271383),
    I = n(771845),
    b = n(727258),
    E = n(276952),
    S = n(249792),
    Z = n(40153),
    N = n(593618),
    y = n(252686),
    T = n(682662),
    j = n(674552),
    A = n(981631),
    P = n(388032),
    R = n(284923);
let M = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
    }
};
function L(e, t) {
    (0, p.jW)(e, async () => {
        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('42309'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('54770'), n.e('66780'), n.e('33213'), n.e('22179')]).then(n.bind(n, 545135));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
t.Z = l.memo(function (e) {
    var t, n, r, p, w;
    let { guildNode: D, setRef: O, onDragStart: k, onDragEnd: G, route: U, guild: B, animatable: H, selected: V = !1, unread: F = !1, mediaState: W, unavailable: z = !1, badge: Y = 0, isMentionLowImportance: K, contextMenu: q = L, draggable: Q = !1, sorting: J = !1, preloadOnClick: X = !0, guildJoinRequestStatus: $ } = e,
        { id: ee, parentId: et } = D,
        en = (0, g.Q3)('GuildItem'),
        ei = null !== (t = e.upperBadge) && void 0 !== t ? t : z ? (0, j.Ny)() : null != W ? (0, j.Or)(W) : void 0,
        el = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
    null == el && Y > 0 ? (el = null !== (r = (0, j.Ne)(Y, K ? f.Z.BACKGROUND_ACCENT : f.Z.STATUS_DANGER)) && void 0 !== r ? r : void 0) : null == el && null != $ && (el = null !== (p = (0, j.jt)({ guildJoinRequestStatus: $ })) && void 0 !== p ? p : void 0);
    let er = null !== (w = e.lowerBadgeSize) && void 0 !== w ? w : { width: (0, d.getBadgeWidthForValue)(Y) },
        [{ dragging: eo }, ea] = (0, a.c)({
            type: b.eD.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    null == k || k();
                }),
                {
                    type: D.type,
                    nodeId: D.id
                }
            ),
            end() {
                null == G || G(), (0, m.V1)(I.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() })
        }),
        es = (0, s.Ie)(null != ee ? ee : A.lds),
        [ec, eu] = l.useState(!1),
        ed = !J && ec,
        [eh, ep] = l.useState(!1),
        [em, ef] = l.useState(!1),
        [eg] = l.useState(() => new u.sW(70, () => ef(!0)));
    l.useEffect(() => () => eg.cancel(), [eg]);
    let eC = l.useCallback(() => {
            if (null != U) {
                (0, v.uL)(U, { state: M });
                return;
            }
            (0, _.X)(ee, { state: M });
        }, [ee, U]),
        ev = l.useCallback(() => {
            if (null != U || null == B || z || !X) return;
            let e = (0, C.V)(B.id);
            if (null != e) h.Z.preload(B.id, e);
        }, [U, B, z, X]),
        e_ = (0, c.e7)([x.ZP], () => x.ZP.isCurrentUserGuest(ee)),
        ex = l.useCallback(
            (e) => {
                null != B && !e_ && q(e, B);
            },
            [B, q, e_]
        ),
        eI = l.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key && null != et) {
                    var t;
                    null === (t = document.querySelector('[aria-owns=folder-items-'.concat(et, ']'))) || void 0 === t || t.focus();
                }
            },
            [et]
        ),
        eb = l.useCallback(
            (e) => {
                if (e) {
                    eg.delay();
                    return;
                }
                eg.cancel(), ef(!1);
            },
            [eg]
        ),
        eE = l.useCallback(
            (e) => {
                null == O || O(ee, e);
            },
            [ee, O]
        );
    if (null == B) return null;
    let eS =
            em || eh
                ? (0, i.jsx)(S.Z, {
                      guild: B,
                      show: em,
                      active: V,
                      onAnimationStart: function () {
                          ep(em);
                      },
                      onAnimationRest: function () {
                          em || ep(!1);
                      }
                  })
                : (0, i.jsx)(d.NavItem, {
                      ariaLabel: P.intl.formatToPlainString(P.t['/uzRsr'], {
                          guildName: B.toString(),
                          mentions: Y
                      }),
                      name: B.toString(),
                      onClick: eC,
                      onMouseEnter: function () {
                          J || eu(!0);
                      },
                      onMouseLeave: function () {
                          J || eu(!1);
                      },
                      onMouseDown: ev,
                      onContextMenu: ex,
                      onKeyDown: eI,
                      icon: B.getIconURL((en ? 44 : 48) * 2, ed && H),
                      selected: V || ed,
                      ...es,
                      role: 'treeitem'
                  }),
        eZ = eo
            ? (0, i.jsx)(Z.OG, { children: (0, i.jsx)(y.Z, {}) })
            : (0, i.jsx)('div', {
                  ref: Q ? ea : void 0,
                  'data-dnd-name': B.toString(),
                  className: o()(R.blobContainer, {
                      [R.sorting]: J,
                      [R.wobble]: em,
                      [R.selected]: em || V
                  }),
                  children: (0, i.jsx)(d.BlobMask, {
                      selected: !!en || em || V || ed,
                      upperBadge: ei,
                      lowerBadge: el,
                      lowerBadgeSize: er,
                      children: eS
                  })
              });
    return (0, i.jsxs)(T.H, {
        ref: eE,
        children: [
            (0, i.jsx)(E.Z, {
                hovered: !eo && ed,
                selected: !eo && V,
                unread: !eo && F,
                className: R.pill
            }),
            (0, i.jsx)(N.Z, {
                guild: B,
                disabled: J,
                isDragging: eo,
                children: eZ
            }),
            Q
                ? (0, i.jsx)(Z.ZP, {
                      name: B.name,
                      targetNode: D,
                      onDragOverChanged: eb
                  })
                : null
        ]
    });
});
