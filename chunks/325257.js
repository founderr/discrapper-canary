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
  m = n("153867"),
  C = n("35225"),
  p = n("703656"),
  g = n("769654"),
  E = n("271383"),
  S = n("771845"),
  _ = n("880080"),
  I = n("727258"),
  N = n("249792"),
  T = n("40153"),
  A = n("593618"),
  L = n("252686"),
  v = n("682662"),
  x = n("674552"),
  R = n("981631"),
  M = n("689938"),
  y = n("634165");
let O = {
  analyticsSource: {
    page: R.AnalyticsPages.GUILD_CHANNEL,
    section: R.AnalyticsSections.CHANNEL_LIST,
    object: R.AnalyticsObjects.CHANNEL
  }
};

function b(e, t) {
  (0, h.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("7654"), n.e("33053"), n.e("32493"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("46453"), n.e("90144"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.default = a.memo(function(e) {
  var t, n, s, h, D;
  let {
    guildNode: j,
    setRef: P,
    onDragStart: G,
    onDragEnd: U,
    route: w,
    guild: B,
    animatable: F,
    selected: V = !1,
    unread: H = !1,
    mediaState: k,
    unavailable: Y = !1,
    badge: K = 0,
    contextMenu: W = b,
    draggable: z = !1,
    sorting: Z = !1,
    preloadOnClick: X = !0,
    guildJoinRequestStatus: q
  } = e, {
    id: Q,
    parentId: J
  } = j, $ = null !== (t = e.upperBadge) && void 0 !== t ? t : Y ? (0, x.renderUnavailableBadge)() : null != k ? (0, x.renderMediaBadge)(k) : void 0, ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == ee && K > 0 ? ee = null !== (s = (0, x.renderMentionBadge)(K)) && void 0 !== s ? s : void 0 : null == ee && null != q && (ee = null !== (h = (0, x.renderGuildJoinRequestBadge)({
    guildJoinRequestStatus: q
  })) && void 0 !== h ? h : void 0);
  let et = null !== (D = e.lowerBadgeWidth) && void 0 !== D ? D : (0, c.getBadgeWidthForValue)(K),
    [{
      dragging: en
    }, el] = (0, r.useDrag)({
      type: I.GuildsNodeType.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == G || G()
      }), {
        type: j.type,
        nodeId: j.id
      }),
      end() {
        null == U || U(), (0, m.saveGuildFolders)(S.default.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ea = (0, o.useTreeItem)(null != Q ? Q : R.EMPTY_STRING_SNOWFLAKE_ID),
    [es, ei] = a.useState(!1),
    er = !Z && es,
    [eo, eu] = a.useState(!1),
    [ed, ec] = a.useState(!1),
    [ef] = a.useState(() => new d.DelayedCall(70, () => ec(!0)));
  a.useEffect(() => () => ef.cancel(), [ef]);
  let eh = a.useCallback(() => {
      if (null != w) {
        (0, p.transitionTo)(w, {
          state: O
        });
        return
      }(0, g.transitionToGuild)(Q, {
        state: O
      })
    }, [Q, w]),
    em = a.useCallback(() => {
      if (null != w || null == B || Y || !X) return;
      let e = (0, C.getChannelIdForGuildTransition)(B.id);
      null != e && f.default.preload(B.id, e)
    }, [w, B, Y, X]),
    eC = (0, u.useStateFromStores)([E.default], () => E.default.isCurrentUserGuest(Q)),
    ep = a.useCallback(e => {
      null != B && !eC && W(e, B)
    }, [B, W, eC]),
    eg = a.useCallback(e => {
      if ("ArrowLeft" === e.key && null != J) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat(J, "]"))) || void 0 === t || t.focus()
      }
    }, [J]),
    eE = a.useCallback(e => {
      if (e) {
        ef.delay();
        return
      }
      ef.cancel(), ec(!1)
    }, [ef]),
    eS = a.useCallback(e => {
      null == P || P(Q, e)
    }, [Q, P]);
  if (null == B) return null;
  let e_ = ed || eo ? (0, l.jsx)(N.default, {
      guild: B,
      show: ed,
      active: V,
      onAnimationStart: function() {
        eu(ed)
      },
      onAnimationRest: function() {
        ed || eu(!1)
      }
    }) : (0, l.jsx)(c.NavItem, {
      ariaLabel: M.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: B.toString(),
        mentions: K
      }),
      name: B.toString(),
      onClick: eh,
      onMouseEnter: function() {
        Z || ei(!0)
      },
      onMouseLeave: function() {
        Z || ei(!1)
      },
      onMouseDown: em,
      onContextMenu: ep,
      onKeyDown: eg,
      icon: B.getIconURL(96, er && F),
      selected: V || er,
      ...ea,
      role: "treeitem"
    }),
    eI = en ? (0, l.jsx)(T.PlaceholderDropTarget, {
      children: (0, l.jsx)(L.default, {})
    }) : (0, l.jsx)("div", {
      ref: z ? el : void 0,
      "data-dnd-name": B.toString(),
      className: i()(y.blobContainer, {
        [y.sorting]: Z,
        [y.wobble]: ed,
        [y.selected]: ed || V
      }),
      children: (0, l.jsx)(c.BlobMask, {
        selected: ed || V || er,
        upperBadge: $,
        lowerBadge: ee,
        lowerBadgeWidth: et,
        children: e_
      })
    });
  return (0, l.jsxs)(v.ListItem, {
    ref: eS,
    children: [(0, l.jsx)(_.default, {
      hovered: !en && er,
      selected: !en && V,
      unread: !en && H,
      className: y.pill
    }), (0, l.jsx)(A.default, {
      guild: B,
      disabled: Z,
      isDragging: en,
      children: eI
    }), z ? (0, l.jsx)(T.default, {
      name: B.name,
      targetNode: j,
      onDragOverChanged: eE
    }) : null]
  })
})