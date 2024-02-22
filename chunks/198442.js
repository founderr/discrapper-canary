"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("476042"),
  o = n("974667"),
  u = n("65597"),
  d = n("862337"),
  c = n("77078"),
  f = n("450911"),
  h = n("272030"),
  C = n("452804"),
  p = n("393414"),
  m = n("239380"),
  E = n("26989"),
  g = n("677099"),
  I = n("15738"),
  _ = n("956089"),
  S = n("108189"),
  N = n("674644"),
  T = n("945317"),
  A = n("472942"),
  L = n("423080"),
  v = n("492950"),
  x = n("610898"),
  R = n("255991"),
  M = n("49111"),
  O = n("782340"),
  y = n("99725");
let D = {
  analyticsSource: {
    page: M.AnalyticsPages.GUILD_CHANNEL,
    section: M.AnalyticsSections.CHANNEL_LIST,
    object: M.AnalyticsObjects.CHANNEL
  }
};

function b(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("374705").then(n.bind(n, "374705"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
var j = a.memo(function(e) {
  var t, n, s, h, j;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: P,
    onDragEnd: w,
    route: F,
    guild: B,
    animatable: V,
    selected: H = !1,
    unread: k = !1,
    mediaState: Y,
    unavailable: K = !1,
    badge: W = 0,
    contextMenu: Z = b,
    draggable: z = !1,
    sorting: X = !1,
    preloadOnClick: Q = !0,
    guildJoinRequestStatus: J
  } = e, {
    id: q,
    parentId: $
  } = G, ee = null !== (t = e.upperBadge) && void 0 !== t ? t : K ? (0, R.renderUnavailableBadge)() : null != Y ? (0, R.renderMediaBadge)(Y) : void 0, et = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == et && W > 0 ? et = null !== (s = (0, R.renderMentionBadge)(W)) && void 0 !== s ? s : void 0 : null == et && null != J && (et = null !== (h = (0, R.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: J
  })) && void 0 !== h ? h : void 0);
  let en = null !== (j = e.lowerBadgeWidth) && void 0 !== j ? j : (0, _.getBadgeWidthForValue)(W),
    [{
      dragging: el
    }, ea] = (0, r.useDrag)({
      type: N.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == P || P()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == w || w(), (0, C.saveGuildFolders)(g.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    es = (0, o.useTreeItem)(null != q ? q : M.EMPTY_STRING_GUILD_ID),
    [ei, er] = a.useState(!1),
    eo = !X && ei,
    [eu, ed] = a.useState(!1),
    [ec, ef] = a.useState(!1),
    [eh] = a.useState(() => new d.DelayedCall(70, () => ef(!0)));
  a.useEffect(() => () => eh.cancel(), [eh]);
  let eC = a.useCallback(() => {
      if (null != F) {
        (0, p.transitionTo)(F, {
          state: D
        });
        return
      }(0, m.transitionToGuild)(q, {
        state: D
      })
    }, [q, F]),
    ep = a.useCallback(() => {
      if (null != F || null == B || K || !Q) return;
      let e = (0, m.getChannelIdForGuildTransition)(B.id);
      null != e && f.default.preload(B.id, e)
    }, [F, B, K, Q]),
    em = (0, u.default)([E.default], () => E.default.isCurrentUserGuest(q)),
    eE = a.useCallback(e => {
      null != B && !em && Z(e, B)
    }, [B, Z, em]),
    eg = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != $) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat($, "]"))) || void 0 === t || t.focus()
      }
    }, [$]),
    eI = a.useCallback(e => {
      if (e) {
        eh.delay();
        return
      }
      eh.cancel(), ef(!1)
    }, [eh]),
    e_ = a.useCallback(e => {
      null == U || U(q, e)
    }, [q, U]);
  if (null == B) return null;
  let eS = ec || eu ? (0, l.jsx)(T.default, {
      guild: B,
      show: ec,
      active: H,
      onAnimationStart: function() {
        ed(ec)
      },
      onAnimationRest: function() {
        ec || ed(!1)
      }
    }) : (0, l.jsx)(S.default, {
      ariaLabel: O.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: B.toString(),
        mentions: W
      }),
      name: B.toString(),
      onClick: eC,
      onMouseEnter: function() {
        X || er(!0)
      },
      onMouseLeave: function() {
        X || er(!1)
      },
      onMouseDown: ep,
      onContextMenu: eE,
      onKeyDown: eg,
      icon: B.getIconURL(96, eo && V),
      selected: H || eo,
      ...es,
      role: "treeitem"
    }),
    eN = el ? (0, l.jsx)(A.PlaceholderDropTarget, {
      children: (0, l.jsx)(v.default, {})
    }) : (0, l.jsx)("div", {
      ref: z ? ea : void 0,
      "data-dnd-name": B.toString(),
      className: i(y.blobContainer, {
        [y.sorting]: X,
        [y.wobble]: ec,
        [y.selected]: ec || H
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ec || H || eo,
        upperBadge: ee,
        lowerBadge: et,
        lowerBadgeWidth: en,
        children: eS
      })
    });
  return (0, l.jsxs)(x.ListItem, {
    ref: e_,
    children: [(0, l.jsx)(I.default, {
      hovered: !el && eo,
      selected: !el && H,
      unread: !el && k,
      className: y.pill
    }), (0, l.jsx)(L.default, {
      guild: B,
      disabled: X,
      children: eN
    }), z ? (0, l.jsx)(A.default, {
      name: B.name,
      targetNode: G,
      onDragOverChanged: eI
    }) : null]
  })
})