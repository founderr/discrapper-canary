"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("942389"),
  o = n("924826"),
  u = n("399606"),
  d = n("846519"),
  c = n("481060"),
  f = n("493683"),
  h = n("239091"),
  p = n("153867"),
  m = n("703656"),
  C = n("920440"),
  g = n("271383"),
  E = n("771845"),
  _ = n("880080"),
  S = n("26290"),
  I = n("15434"),
  N = n("727258"),
  T = n("249792"),
  A = n("40153"),
  L = n("593618"),
  v = n("252686"),
  x = n("682662"),
  R = n("674552"),
  M = n("981631"),
  y = n("689938"),
  O = n("814886");
let b = {
  analyticsSource: {
    page: M.AnalyticsPages.GUILD_CHANNEL,
    section: M.AnalyticsSections.CHANNEL_LIST,
    object: M.AnalyticsObjects.CHANNEL
  }
};

function D(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("74870"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, j;
  let {
    guildNode: P,
    setRef: G,
    onDragStart: U,
    onDragEnd: w,
    route: F,
    guild: B,
    animatable: H,
    selected: V = !1,
    unread: k = !1,
    mediaState: Y,
    unavailable: K = !1,
    badge: W = 0,
    contextMenu: Z = D,
    draggable: z = !1,
    sorting: X = !1,
    preloadOnClick: Q = !0,
    guildJoinRequestStatus: q
  } = e, {
    id: J,
    parentId: $
  } = P, ee = null !== (t = e.upperBadge) && void 0 !== t ? t : K ? (0, R.renderUnavailableBadge)() : null != Y ? (0, R.renderMediaBadge)(Y) : void 0, et = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == et && W > 0 ? et = null !== (s = (0, R.renderMentionBadge)(W)) && void 0 !== s ? s : void 0 : null == et && null != q && (et = null !== (h = (0, R.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: q
  })) && void 0 !== h ? h : void 0);
  let en = null !== (j = e.lowerBadgeWidth) && void 0 !== j ? j : (0, S.getBadgeWidthForValue)(W),
    [{
      dragging: el
    }, ea] = (0, r.useDrag)({
      type: N.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == U || U()
      }), {
        type: P.type,
        nodeId: P.id
      }),
      end() {
        null == w || w(), (0, p.saveGuildFolders)(E.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    es = (0, o.useTreeItem)(null != J ? J : M.EMPTY_STRING_SNOWFLAKE_ID),
    [ei, er] = a.useState(!1),
    eo = !X && ei,
    [eu, ed] = a.useState(!1),
    [ec, ef] = a.useState(!1),
    [eh] = a.useState(() => new d.DelayedCall(70, () => ef(!0)));
  a.useEffect(() => () => eh.cancel(), [eh]);
  let ep = a.useCallback(() => {
      if (null != F) {
        (0, m.transitionTo)(F, {
          state: b
        });
        return
      }(0, C.transitionToGuild)(J, {
        state: b
      })
    }, [J, F]),
    em = a.useCallback(() => {
      if (null != F || null == B || K || !Q) return;
      let e = (0, C.getChannelIdForGuildTransition)(B.id);
      null != e && f.default.preload(B.id, e)
    }, [F, B, K, Q]),
    eC = (0, u.useStateFromStores)([g.default], () => g.default.isCurrentUserGuest(J)),
    eg = a.useCallback(e => {
      null != B && !eC && Z(e, B)
    }, [B, Z, eC]),
    eE = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != $) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat($, "]"))) || void 0 === t || t.focus()
      }
    }, [$]),
    e_ = a.useCallback(e => {
      if (e) {
        eh.delay();
        return
      }
      eh.cancel(), ef(!1)
    }, [eh]),
    eS = a.useCallback(e => {
      null == G || G(J, e)
    }, [J, G]);
  if (null == B) return null;
  let eI = ec || eu ? (0, l.jsx)(T.default, {
      guild: B,
      show: ec,
      active: V,
      onAnimationStart: function() {
        ed(ec)
      },
      onAnimationRest: function() {
        ec || ed(!1)
      }
    }) : (0, l.jsx)(I.default, {
      ariaLabel: y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: B.toString(),
        mentions: W
      }),
      name: B.toString(),
      onClick: ep,
      onMouseEnter: function() {
        X || er(!0)
      },
      onMouseLeave: function() {
        X || er(!1)
      },
      onMouseDown: em,
      onContextMenu: eg,
      onKeyDown: eE,
      icon: B.getIconURL(96, eo && H),
      selected: V || eo,
      ...es,
      role: "treeitem"
    }),
    eN = el ? (0, l.jsx)(A.PlaceholderDropTarget, {
      children: (0, l.jsx)(v.default, {})
    }) : (0, l.jsx)("div", {
      ref: z ? ea : void 0,
      "data-dnd-name": B.toString(),
      className: i()(O.blobContainer, {
        [O.sorting]: X,
        [O.wobble]: ec,
        [O.selected]: ec || V
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ec || V || eo,
        upperBadge: ee,
        lowerBadge: et,
        lowerBadgeWidth: en,
        children: eI
      })
    });
  return (0, l.jsxs)(x.ListItem, {
    ref: eS,
    children: [(0, l.jsx)(_.default, {
      hovered: !el && eo,
      selected: !el && V,
      unread: !el && k,
      className: O.pill
    }), (0, l.jsx)(L.default, {
      guild: B,
      disabled: X,
      isHovered: !el && eo,
      children: eN
    }), z ? (0, l.jsx)(A.default, {
      name: B.name,
      targetNode: P,
      onDragOverChanged: e_
    }) : null]
  })
})