n.d(t, {
  Z: function() {
    return f
  },
  y: function() {
    return l
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(392711),
  u = n(692547),
  d = n(153867),
  h = n(347469),
  m = n(740492),
  p = n(36645),
  E = n(923756);
(i = l || (l = {}))[i.PostSidebar = 0] = "PostSidebar", i[i.ThreadSidebar = 1] = "ThreadSidebar", i[i.CallChatSidebar = 2] = "CallChatSidebar", i[i.MessageRequestSidebar = 3] = "MessageRequestSidebar", i[i.HomeSidebar = 4] = "HomeSidebar";

function g(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: l,
    maxWidth: i
  } = e, a = (0, h.Z)({
    minDimension: p.C,
    maxDimension: i,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: l,
    orientation: h.y.HORIZONTAL_LEFT
  });
  return (0, s.jsx)("div", {
    onMouseDown: a,
    className: E.resizeHandle
  })
}

function f(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: l,
    children: i,
    floatingLayer: r
  } = e, h = a.useRef(null), f = function(e) {
    switch (e) {
      case 0:
        return "postSidebarWidth";
      case 1:
        return "threadSidebarWidth";
      case 2:
        return "callChatSidebarWidth";
      case 3:
        return "messageRequestSidebarWidth";
      case 4:
        return "homeSidebarWidth"
    }
  }(t), [C, _] = a.useState(m.ZP[f]), I = a.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      [f]: e
    })
  }, [f]), x = (0, p.W)({
    maxWidth: n
  }), T = (0, c.clamp)(C, p.C, n), N = x ? T : T + u.Z.modules.chat.RESIZE_HANDLE_WIDTH;
  a.useEffect(() => {
    null == l || l(T, x)
  }, [T, l, x]);
  let Z = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: o()(E.chatTarget, {
        [E.floating]: x,
        [E.notFloating]: !x
      }),
      style: {
        width: N
      }
    }), !x && (0, s.jsx)(g, {
      maxWidth: n,
      resizableNode: h,
      onResize: _,
      onResizeEnd: I
    }), (0, s.jsx)("div", {
      ref: h,
      className: o()(E.container, {
        [E.floating]: x
      }),
      style: {
        width: T
      },
      children: i
    })]
  });
  if (x) {
    let e = null != r ? r : a.Fragment;
    return (0, s.jsx)(e, {
      children: (0, s.jsx)("div", {
        className: E.chatLayerWrapper,
        children: Z
      })
    })
  }
  return (0, s.jsx)(s.Fragment, {
    children: Z
  })
}