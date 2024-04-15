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
  S = n("880080"),
  I = n("26290"),
  _ = n("15434"),
  N = n("727258"),
  T = n("249792"),
  A = n("40153"),
  L = n("593618"),
  v = n("252686"),
  x = n("682662"),
  R = n("674552"),
  y = n("981631"),
  M = n("689938"),
  O = n("814886");
let b = {
  analyticsSource: {
    page: y.AnalyticsPages.GUILD_CHANNEL,
    section: y.AnalyticsSections.CHANNEL_LIST,
    object: y.AnalyticsObjects.CHANNEL
  }
};

function D(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("64796"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, j;
  let {
    guildNode: G,
    setRef: P,
    onDragStart: U,
    onDragEnd: w,
    route: B,
    guild: F,
    animatable: V,
    selected: H = !1,
    unread: k = !1,
    mediaState: K,
    unavailable: Y = !1,
    badge: W = 0,
    contextMenu: Z = D,
    draggable: z = !1,
    sorting: X = !1,
    preloadOnClick: q = !0,
    guildJoinRequestStatus: Q
  } = e, {
    id: J,
    parentId: $
  } = G, ee = null !== (t = e.upperBadge) && void 0 !== t ? t : Y ? (0, R.renderUnavailableBadge)() : null != K ? (0, R.renderMediaBadge)(K) : void 0, et = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == et && W > 0 ? et = null !== (s = (0, R.renderMentionBadge)(W)) && void 0 !== s ? s : void 0 : null == et && null != Q && (et = null !== (h = (0, R.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: Q
  })) && void 0 !== h ? h : void 0);
  let en = null !== (j = e.lowerBadgeWidth) && void 0 !== j ? j : (0, I.getBadgeWidthForValue)(W),
    [{
      dragging: el
    }, ea] = (0, r.useDrag)({
      type: N.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == U || U()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == w || w(), (0, p.saveGuildFolders)(E.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    es = (0, o.useTreeItem)(null != J ? J : y.EMPTY_STRING_SNOWFLAKE_ID),
    [ei, er] = a.useState(!1),
    eo = !X && ei,
    [eu, ed] = a.useState(!1),
    [ec, ef] = a.useState(!1),
    [eh] = a.useState(() => new d.DelayedCall(70, () => ef(!0)));
  a.useEffect(() => () => eh.cancel(), [eh]);
  let ep = a.useCallback(() => {
      if (null != B) {
        (0, m.transitionTo)(B, {
          state: b
        });
        return
      }(0, C.transitionToGuild)(J, {
        state: b
      })
    }, [J, B]),
    em = a.useCallback(() => {
      if (null != B || null == F || Y || !q) return;
      let e = (0, C.getChannelIdForGuildTransition)(F.id);
      null != e && f.default.preload(F.id, e)
    }, [B, F, Y, q]),
    eC = (0, u.useStateFromStores)([g.default], () => g.default.isCurrentUserGuest(J)),
    eg = a.useCallback(e => {
      null != F && !eC && Z(e, F)
    }, [F, Z, eC]),
    eE = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != $) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat($, "]"))) || void 0 === t || t.focus()
      }
    }, [$]),
    eS = a.useCallback(e => {
      if (e) {
        eh.delay();
        return
      }
      eh.cancel(), ef(!1)
    }, [eh]),
    eI = a.useCallback(e => {
      null == P || P(J, e)
    }, [J, P]);
  if (null == F) return null;
  let e_ = ec || eu ? (0, l.jsx)(T.default, {
      guild: F,
      show: ec,
      active: H,
      onAnimationStart: function() {
        ed(ec)
      },
      onAnimationRest: function() {
        ec || ed(!1)
      }
    }) : (0, l.jsx)(_.default, {
      ariaLabel: M.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: F.toString(),
        mentions: W
      }),
      name: F.toString(),
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
      icon: F.getIconURL(96, eo && V),
      selected: H || eo,
      ...es,
      role: "treeitem"
    }),
    eN = el ? (0, l.jsx)(A.PlaceholderDropTarget, {
      children: (0, l.jsx)(v.default, {})
    }) : (0, l.jsx)("div", {
      ref: z ? ea : void 0,
      "data-dnd-name": F.toString(),
      className: i()(O.blobContainer, {
        [O.sorting]: X,
        [O.wobble]: ec,
        [O.selected]: ec || H
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ec || H || eo,
        upperBadge: ee,
        lowerBadge: et,
        lowerBadgeWidth: en,
        children: e_
      })
    });
  return (0, l.jsxs)(x.ListItem, {
    ref: eI,
    children: [(0, l.jsx)(S.default, {
      hovered: !el && eo,
      selected: !el && H,
      unread: !el && k,
      className: O.pill
    }), (0, l.jsx)(L.default, {
      guild: F,
      disabled: X,
      children: eN
    }), z ? (0, l.jsx)(A.default, {
      name: F.name,
      targetNode: G,
      onDragOverChanged: eS
    }) : null]
  })
})