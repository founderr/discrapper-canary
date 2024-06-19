n.d(t, {
  OG: function() {
    return Z
  },
  Zu: function() {
    return N
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(512722),
  o = n.n(a),
  u = n(290843),
  c = n(749210),
  d = n(626135),
  h = n(727258),
  g = n(662146),
  p = n(981631),
  m = n(689938),
  C = n(798314);

function E(e) {
  let t = i.useRef(null),
    n = e.map(e => e[0]);
  return i.useLayoutEffect(() => {
    let n = requestAnimationFrame(() => {
      let n = t.current;
      if (null != n)
        for (let [t, l] of e) t ? n.classList.add(l) : n.classList.remove(l)
    });
    return () => cancelAnimationFrame(n)
  }, n), t
}

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return o()(t.type !== h.eD.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!l || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) && (e.type !== h.eD.FOLDER || null == t.parentId) && !0,
    drop(e) {
      let {
        nodeId: i
      } = e;
      l && t.type !== h.eD.FOLDER && d.default.track(p.rMx.GUILD_FOLDER_CREATED), c.Z.moveById(i, t.id, n, l)
    },
    collect: e => ({
      canDrop: e.canDrop(),
      isOver: e.isOver()
    })
  }
}

function _(e) {
  let {
    name: t,
    targetNode: n,
    combine: s,
    below: a
  } = e, o = i.useMemo(() => f([h.eD.GUILD, h.eD.FOLDER], n, a, s), [n, a, s]), [{
    canDrop: c,
    isOver: d
  }, g] = (0, u.L)(o), p = E([
    [c, C.autoPointerEvents],
    [d, C.dragOver]
  ]);
  return (0, l.jsx)("div", {
    ref: e => {
      p.current = e, g(e)
    },
    "data-dnd-name": m.Z.Messages.DND_DROP_ABOVE.format({
      itemName: t
    }),
    className: r()(C.target)
  })
}

function I(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: s
  } = e, [{
    canDrop: a,
    isOver: o
  }, c] = (0, u.L)(() => f([h.eD.GUILD], n, !0, !0));
  i.useEffect(() => {
    null == s || s(o)
  }, [s, o]);
  let d = E([
    [a, C.autoPointerEvents],
    [o, C.dragOver]
  ]);
  return (0, l.jsx)(g.Z, {
    text: t,
    shouldShow: o,
    forceOpen: o,
    disableWrapper: !0,
    tooltipClass: C.centerTargetTooltip,
    children: (0, l.jsx)("div", {
      ref: e => {
        d.current = e, c(e)
      },
      "data-dnd-name": m.Z.Messages.DND_DROP_COMBINE.format({
        itemName: t
      }),
      className: r()(C.centerTarget, {})
    })
  })
}

function N(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: i,
    isOver: s
  }, a] = (0, u.L)(() => f([h.eD.GUILD], n, !0, !0)), o = E([
    [s, C.wrapperOver]
  ]), c = E([
    [s, C.dragOver],
    [i, C.autoPointerEvents]
  ]);
  return (0, l.jsx)("div", {
    ref: o,
    className: r()(C.folderEndWrapper),
    "aria-hidden": !0,
    children: (0, l.jsx)("div", {
      className: C.folderTarget,
      children: (0, l.jsx)("div", {
        ref: e => {
          c.current = e, a(e)
        },
        "aria-label": "At end of ".concat(t),
        className: r()(C.target)
      })
    })
  })
}

function Z(e) {
  let {
    children: t
  } = e, [, n] = (0, u.L)({
    accept: []
  });
  return (0, l.jsx)("div", {
    ref: n,
    children: t
  })
}
t.ZP = i.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: i = !1,
    below: s = !1,
    onDragOverChanged: r
  } = e, a = !i && null == n.parentId;
  return (0, l.jsxs)("div", {
    className: C.wrapper,
    "aria-hidden": !0,
    children: [(0, l.jsx)(_, {
      name: t,
      targetNode: n,
      below: s
    }), a ? (0, l.jsx)(I, {
      name: t,
      targetNode: n,
      onDragOverChanged: r
    }) : null]
  })
})