"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("30874"),
  r = n("308798"),
  o = n("646240"),
  u = n("37774"),
  d = n("117399"),
  c = n("400501"),
  f = n("542640"),
  h = n("255228"),
  m = n("772371"),
  p = n("604656"),
  E = n("861370"),
  S = n("565298"),
  g = n("144491"),
  C = n("945330"),
  _ = n("758710"),
  I = n("433487"),
  T = n("664336"),
  v = n("659500"),
  x = n("31673"),
  N = n("967241"),
  A = n("49111"),
  M = n("782340");

function R(e) {
  let {
    channel: t
  } = e, [n, i] = a.useState(!1);

  function r() {
    i(e => !e)
  }
  let o = M.default.Messages.MORE;
  return (0, l.jsx)(s.Popout, {
    shouldShow: n,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => i(!1),
    renderPopout: function(e) {
      return (0, l.jsx)(j, {
        ...e,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.jsx)(T.default.Icon, {
        ...e,
        onClick: r,
        tooltip: n ? null : o,
        icon: I.default,
        "aria-label": o,
        selected: n
      })
    }
  })
}

function j(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: a
  } = e, S = (0, o.default)(t, "Sidebar Overflow"), C = (0, d.default)(t), I = (0, h.default)(t), T = (0, m.default)(t), x = (0, i.default)(t), N = (0, u.default)(t), R = (0, f.default)(t.id), j = (0, c.default)(t), L = (0, r.default)(t), O = (0, E.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_THREAD
  }), y = (0, p.default)(t);

  function P() {
    (0, g.transitionToChannel)(t.id)
  }
  return (0, l.jsxs)(s.Menu, {
    navId: "thread-context",
    onClose: n,
    "aria-label": M.default.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: [(0, l.jsxs)(s.MenuGroup, {
      children: [S, (0, l.jsx)(s.MenuItem, {
        id: "open",
        label: M.default.Messages.OPEN_IN_FULL_VIEW,
        action: P
      })]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [I, T]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [j, C, R]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [(0, l.jsx)(s.MenuItem, {
        id: "search",
        label: M.default.Messages.SEARCH,
        icon: _.default,
        action: function() {
          P(), setTimeout(() => {
            v.ComponentDispatch.dispatch(A.ComponentActions.FOCUS_SEARCH, {
              prefillCurrentChannel: !1
            })
          }, 2e3)
        }
      }), (0, l.jsx)(s.MenuItem, {
        id: "pins",
        label: M.default.Messages.PINS,
        icon: _.default,
        action: function() {
          P(), v.ComponentDispatch.dispatch(A.ComponentActions.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [y, x, N, L]
    }), (0, l.jsx)(s.MenuGroup, {
      children: O
    })]
  })
}

function L(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [t.isForumPost() ? null : (0, l.jsx)(x.default, {
      channel: t
    }), (0, l.jsx)(R, {
      channel: t
    }), (0, l.jsx)(T.default.Icon, {
      icon: C.default,
      tooltip: M.default.Messages.CLOSE,
      onClick: () => (0, N.closeThreadSidebar)((0, S.getGuildIdForGenericRedirect)(t), null != n ? n : t.parent_id)
    })]
  })
}