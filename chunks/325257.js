n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(225857),
  o = n(91192),
  u = n(399606),
  c = n(846519),
  d = n(481060),
  h = n(493683),
  p = n(239091),
  g = n(153867),
  m = n(35225),
  C = n(703656),
  E = n(769654),
  f = n(271383),
  _ = n(771845),
  I = n(880080),
  N = n(727258),
  Z = n(249792),
  S = n(40153),
  x = n(593618),
  L = n(252686),
  T = n(682662),
  v = n(674552),
  A = n(981631),
  M = n(689938),
  R = n(784490);
let O = {
  analyticsSource: {
    page: A.ZY5.GUILD_CHANNEL,
    section: A.jXE.CHANNEL_LIST,
    object: A.qAy.CHANNEL
  }
};

function P(e, t) {
  (0, p.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("50654"), n.e("7654"), n.e("41662"), n.e("44156"), n.e("70161"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("27577"), n.e("33213")]).then(n.bind(n, 545135));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}
t.Z = i.memo(function(e) {
  var t, n, s, p, b;
  let {
    guildNode: j,
    setRef: y,
    onDragStart: D,
    onDragEnd: U,
    route: G,
    guild: w,
    animatable: k,
    selected: B = !1,
    unread: V = !1,
    mediaState: H,
    unavailable: F = !1,
    badge: W = 0,
    contextMenu: Y = P,
    draggable: z = !1,
    sorting: K = !1,
    preloadOnClick: q = !0,
    guildJoinRequestStatus: Q
  } = e, {
    id: J,
    parentId: X
  } = j, $ = null !== (t = e.upperBadge) && void 0 !== t ? t : F ? (0, v.Ny)() : null != H ? (0, v.Or)(H) : void 0, ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
  null == ee && W > 0 ? ee = null !== (s = (0, v.Ne)(W)) && void 0 !== s ? s : void 0 : null == ee && null != Q && (ee = null !== (p = (0, v.jt)({
    guildJoinRequestStatus: Q
  })) && void 0 !== p ? p : void 0);
  let et = null !== (b = e.lowerBadgeSize) && void 0 !== b ? b : {
      width: (0, d.getBadgeWidthForValue)(W)
    },
    [{
      dragging: en
    }, el] = (0, a.c)({
      type: N.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == D || D()
      }), {
        type: j.type,
        nodeId: j.id
      }),
      end() {
        null == U || U(), (0, g.V1)(_.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ei = (0, o.Ie)(null != J ? J : A.lds),
    [es, er] = i.useState(!1),
    ea = !K && es,
    [eo, eu] = i.useState(!1),
    [ec, ed] = i.useState(!1),
    [eh] = i.useState(() => new c.sW(70, () => ed(!0)));
  i.useEffect(() => () => eh.cancel(), [eh]);
  let ep = i.useCallback(() => {
      if (null != G) {
        (0, C.uL)(G, {
          state: O
        });
        return
      }(0, E.X)(J, {
        state: O
      })
    }, [J, G]),
    eg = i.useCallback(() => {
      if (null != G || null == w || F || !q) return;
      let e = (0, m.V)(w.id);
      if (null != e) h.Z.preload(w.id, e)
    }, [G, w, F, q]),
    em = (0, u.e7)([f.ZP], () => f.ZP.isCurrentUserGuest(J)),
    eC = i.useCallback(e => {
      null != w && !em && Y(e, w)
    }, [w, Y, em]),
    eE = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != X) {
        var t;
        null === (t = document.querySelector("[aria-owns=folder-items-".concat(X, "]"))) || void 0 === t || t.focus()
      }
    }, [X]),
    ef = i.useCallback(e => {
      if (e) {
        eh.delay();
        return
      }
      eh.cancel(), ed(!1)
    }, [eh]),
    e_ = i.useCallback(e => {
      null == y || y(J, e)
    }, [J, y]);
  if (null == w) return null;
  let eI = ec || eo ? (0, l.jsx)(Z.Z, {
      guild: w,
      show: ec,
      active: B,
      onAnimationStart: function() {
        eu(ec)
      },
      onAnimationRest: function() {
        ec || eu(!1)
      }
    }) : (0, l.jsx)(d.NavItem, {
      ariaLabel: M.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
        guildName: w.toString(),
        mentions: W
      }),
      name: w.toString(),
      onClick: ep,
      onMouseEnter: function() {
        K || er(!0)
      },
      onMouseLeave: function() {
        K || er(!1)
      },
      onMouseDown: eg,
      onContextMenu: eC,
      onKeyDown: eE,
      icon: w.getIconURL(96, ea && k),
      selected: B || ea,
      ...ei,
      role: "treeitem"
    }),
    eN = en ? (0, l.jsx)(S.OG, {
      children: (0, l.jsx)(L.Z, {})
    }) : (0, l.jsx)("div", {
      ref: z ? el : void 0,
      "data-dnd-name": w.toString(),
      className: r()(R.blobContainer, {
        [R.sorting]: K,
        [R.wobble]: ec,
        [R.selected]: ec || B
      }),
      children: (0, l.jsx)(d.BlobMask, {
        selected: ec || B || ea,
        upperBadge: $,
        lowerBadge: ee,
        lowerBadgeSize: et,
        children: eI
      })
    });
  return (0, l.jsxs)(T.H, {
    ref: e_,
    children: [(0, l.jsx)(I.Z, {
      hovered: !en && ea,
      selected: !en && B,
      unread: !en && V,
      className: R.pill
    }), (0, l.jsx)(x.Z, {
      guild: w,
      disabled: K,
      isDragging: en,
      children: eN
    }), z ? (0, l.jsx)(S.ZP, {
      name: w.name,
      targetNode: j,
      onDragOverChanged: ef
    }) : null]
  })
})