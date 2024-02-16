"use strict";
n.r(t), n.d(t, {
  ChatSidebarType: function() {
    return a
  },
  default: function() {
    return E
  }
}), n("222007");
var a, s, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("917351"),
  d = n("669491"),
  c = n("452804"),
  f = n("594203"),
  h = n("168973"),
  C = n("332374"),
  p = n("758534");
(s = a || (a = {}))[s.PostSidebar = 0] = "PostSidebar", s[s.ThreadSidebar = 1] = "ThreadSidebar", s[s.CallChatSidebar = 2] = "CallChatSidebar", s[s.MessageRequestSidebar = 3] = "MessageRequestSidebar", s[s.HomeSidebar = 4] = "HomeSidebar";

function m(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: a,
    maxWidth: s
  } = e, i = (0, f.default)({
    minDimension: C.MIN_CHAT_SIDEBAR_WIDTH,
    maxDimension: s,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: a,
    orientation: f.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, l.jsx)("div", {
    onMouseDown: i,
    className: p.resizeHandle
  })
}

function E(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: a,
    children: s,
    floatingLayer: r
  } = e, f = i.useRef(null), E = function(e) {
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
  }(t), [g, S] = i.useState(h.default[E]), _ = i.useCallback(e => {
    c.default.updatedUnsyncedSettings({
      [E]: e
    })
  }, [E]), T = (0, C.shouldChannelChatFloat)({
    maxWidth: n
  }), A = (0, u.clamp)(g, C.MIN_CHAT_SIDEBAR_WIDTH, n), M = T ? A : A + d.default.modules.chat.RESIZE_HANDLE_WIDTH;
  i.useEffect(() => {
    null == a || a(A, T)
  }, [A, a, T]);
  let I = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: o(p.chatTarget, {
        [p.floating]: T,
        [p.notFloating]: !T
      }),
      style: {
        width: M
      }
    }), !T && (0, l.jsx)(m, {
      maxWidth: n,
      resizableNode: f,
      onResize: S,
      onResizeEnd: _
    }), (0, l.jsx)("div", {
      ref: f,
      className: o(p.container, {
        [p.floating]: T
      }),
      style: {
        width: A
      },
      children: s
    })]
  });
  if (T) {
    let e = null != r ? r : i.Fragment;
    return (0, l.jsx)(e, {
      children: (0, l.jsx)("div", {
        className: p.chatLayerWrapper,
        children: I
      })
    })
  }
  return (0, l.jsx)(l.Fragment, {
    children: I
  })
}