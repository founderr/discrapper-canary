n.d(t, {
  Z: function() {
    return h
  },
  e: function() {
    return i
  }
});
var l, i, s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(285952),
  c = n(507675),
  u = n(820687);

function d(e) {
  let {
    disableGradients: t = !1,
    renderHeader: n,
    renderBottomLeft: l,
    renderBottomCenter: i,
    renderBottomRight: a,
    renderCenter: r
  } = e;
  return (0, s.jsxs)("div", {
    className: u.videoControls,
    children: [!(0 === t || !0 === t) && (0, s.jsx)("div", {
      className: u.gradientTop
    }), !(1 === t || !0 === t) && (0, s.jsx)("div", {
      className: u.gradientBottom
    }), (0, s.jsx)("div", {
      className: u.topControls,
      children: null == n ? void 0 : n()
    }), null == r ? void 0 : r(), (0, s.jsxs)("div", {
      className: u.bottomControls,
      children: [(0, s.jsx)(o.Z, {
        grow: 0,
        shrink: 1,
        align: o.Z.Align.CENTER,
        children: null == l ? void 0 : l()
      }), (0, s.jsx)(o.Z, {
        grow: 1,
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        children: null == i ? void 0 : i()
      }), (0, s.jsx)(o.Z, {
        grow: 0,
        shrink: 1,
        justify: o.Z.Justify.END,
        align: o.Z.Align.CENTER,
        children: null == a ? void 0 : a()
      })]
    })]
  })
}

function h(e) {
  let {
    screenMessage: t,
    onDoubleClick: n,
    onActive: l,
    onForceIdle: i,
    idle: a,
    children: o,
    renderChatButton: h,
    renderChatToasts: m,
    renderVoiceChannelEffects: p,
    style: E,
    ...g
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(u.root, {
      [u.idle]: a
    }),
    style: E,
    onMouseMove: l,
    onMouseDown: l,
    onMouseLeave: i,
    onDoubleClick: n,
    children: [o, null != t ? (0, s.jsx)(c.Z, {
      size: "large",
      ...t
    }) : null, (0, s.jsx)(d, {
      ...g
    }), null == h ? void 0 : h({
      className: u.chatButton,
      showingClassName: u.chatButtonShowing
    }), null == m ? void 0 : m(), null == p ? void 0 : p()]
  })
}(l = i || (i = {}))[l.TOP = 0] = "TOP", l[l.BOTTOM = 1] = "BOTTOM"