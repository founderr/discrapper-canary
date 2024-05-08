"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("176617"),
  o = n("924826"),
  u = n("399606"),
  d = n("846519"),
  c = n("481060"),
  f = n("493683"),
  h = n("239091"),
  p = n("153867"),
  m = n("35225"),
  C = n("703656"),
  g = n("769654"),
  E = n("271383"),
  S = n("771845"),
  _ = n("880080"),
  I = n("26290"),
  N = n("15434"),
  T = n("727258"),
  A = n("249792"),
  L = n("40153"),
  v = n("593618"),
  x = n("252686"),
  R = n("682662"),
  M = n("674552"),
  y = n("981631"),
  O = n("689938"),
  D = n("634165");
let b = {
  analyticsSource: {
    page: y.AnalyticsPages.GUILD_CHANNEL,
    section: y.AnalyticsSections.CHANNEL_LIST,
    object: y.AnalyticsObjects.CHANNEL
  }
};

function j(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("52332"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, P;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: w,
    onDragEnd: B,
    route: F,
    guild: V,
    animatable: H,
    selected: k = !1,
    unread: Y = !1,
    mediaState: W,
    unavailable: K = !1,
    badge: z = 0,
    contextMenu: Z = j,
    draggable: X = !1,
    sorting: Q = !1,
    preloadOnClick: q = !0,
    guildJoinRequestStatus: J
  } = e, {
    id: $,
    parentId: ee
  } = G, et = null !== (t = e.upperBadge) && void 0 !== t ? t : K ? (0, M.renderUnavailableBadge)() : null != W ? (0, M.renderMediaBadge)(W) : void 0, en = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == en && z > 0 ? en = null !== (s = (0, M.renderMentionBadge)(z)) && void 0 !== s ? s : void 0 : null == en && null != J && (en = null !== (h = (0, M.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: J
  })) && void 0 !== h ? h : void 0);
  let el = null !== (P = e.lowerBadgeWidth) && void 0 !== P ? P : (0, I.getBadgeWidthForValue)(z),
    [{
      dragging: ea
    }, es] = (0, r.useDrag)({
      type: T.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == w || w()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == B || B(), (0, p.saveGuildFolders)(S.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ei = (0, o.useTreeItem)(null != $ ? $ : y.EMPTY_STRING_SNOWFLAKE_ID),
    [er, eo] = a.useState(!1),
    eu = !Q && er,
    [ed, ec] = a.useState(!1),
    [ef, eh] = a.useState(!1),
    [ep] = a.useState(() => new d.DelayedCall(70, () => eh(!0)));
  a.useEffect(() => () => ep.cancel(), [ep]);
  let em = a.useCallback(() => {
      if (null != F) {
        (0, C.transitionTo)(F, {
          state: b
        });
        return
      }(0, g.transitionToGuild)($, {
        state: b
      })
    }, [$, F]),
    eC = a.useCallback(() => {
      if (null != F || null == V || K || !q) return;
      let e = (0, m.getChannelIdForGuildTransition)(V.id);
      null != e && f.default.preload(V.id, e)
    }, [F, V, K, q]),
    eg = (0, u.useStateFromStores)([E.default], () => E.default.isCurrentUserGuest($)),
    eE = a.useCallback(e => {
      null != V && !eg && Z(e, V)
    }, [V, Z, eg]),
    eS = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ee) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat(ee, "]"))) || void 0 === t || t.focus()
      }
    }, [ee]),
    e_ = a.useCallback(e => {
      if (e) {
        ep.delay();
        return
      }
      ep.cancel(), eh(!1)
    }, [ep]),
    eI = a.useCallback(e => {
      null == U || U($, e)
    }, [$, U]);
  if (null == V) return null;
  let eN = ef || ed ? (0, l.jsx)(A.default, {
      guild: V,
      show: ef,
      active: k,
      onAnimationStart: function() {
        ec(ef)
      },
      onAnimationRest: function() {
        ef || ec(!1)
      }
    }) : (0, l.jsx)(N.default, {
      ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: V.toString(),
        mentions: z
      }),
      name: V.toString(),
      onClick: em,
      onMouseEnter: function() {
        Q || eo(!0)
      },
      onMouseLeave: function() {
        Q || eo(!1)
      },
      onMouseDown: eC,
      onContextMenu: eE,
      onKeyDown: eS,
      icon: V.getIconURL(96, eu && H),
      selected: k || eu,
      ...ei,
      role: "treeitem"
    }),
    eT = ea ? (0, l.jsx)(L.PlaceholderDropTarget, {
      children: (0, l.jsx)(x.default, {})
    }) : (0, l.jsx)("div", {
      ref: X ? es : void 0,
      "data-dnd-name": V.toString(),
      className: i()(D.blobContainer, {
        [D.sorting]: Q,
        [D.wobble]: ef,
        [D.selected]: ef || k
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ef || k || eu,
        upperBadge: et,
        lowerBadge: en,
        lowerBadgeWidth: el,
        children: eN
      })
    });
  return (0, l.jsxs)(R.ListItem, {
    ref: eI,
    children: [(0, l.jsx)(_.default, {
      hovered: !ea && eu,
      selected: !ea && k,
      unread: !ea && Y,
      className: D.pill
    }), (0, l.jsx)(v.default, {
      guild: V,
      disabled: Q,
      isDragging: ea,
      children: eT
    }), X ? (0, l.jsx)(L.default, {
      name: V.name,
      targetNode: G,
      onDragOverChanged: e_
    }) : null]
  })
})