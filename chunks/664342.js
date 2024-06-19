n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(32750),
  r = n(323597),
  o = n(438536),
  c = n(193987),
  u = n(933793),
  d = n(13736),
  h = n(732393),
  m = n(214906),
  p = n(612856),
  E = n(137591),
  g = n(299206),
  f = n(727429),
  C = n(359110),
  _ = n(502568),
  I = n(585483),
  x = n(739830),
  T = n(488131),
  N = n(981631),
  Z = n(689938);

function S(e) {
  let {
    channel: t
  } = e, [n, a] = i.useState(!1);

  function r() {
    a(e => !e)
  }
  let o = Z.Z.Messages.MORE;
  return (0, l.jsx)(s.Popout, {
    shouldShow: n,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => a(!1),
    renderPopout: function(e) {
      return (0, l.jsx)(v, {
        ...e,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.jsx)(_.ZP.Icon, {
        ...e,
        onClick: r,
        tooltip: n ? null : o,
        icon: s.MoreHorizontalIcon,
        "aria-label": o,
        selected: n
      })
    }
  })
}

function v(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: i
  } = e, f = (0, o.Z)(t, "Sidebar Overflow"), _ = (0, u.Z)(t), x = (0, m.Z)(t), T = (0, p.Z)(t), S = (0, a.Z)(t), v = (0, c.Z)(t), A = (0, h.Z)(t.id), M = (0, d.Z)(t), R = (0, r.Z)(t), j = (0, g.Z)({
    id: t.id,
    label: Z.Z.Messages.COPY_ID_THREAD
  }), L = (0, E.Z)(t);

  function O() {
    (0, C.Kh)(t.id)
  }
  return (0, l.jsxs)(s.Menu, {
    navId: "thread-context",
    onClose: n,
    "aria-label": Z.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, l.jsxs)(s.MenuGroup, {
      children: [f, (0, l.jsx)(s.MenuItem, {
        id: "open",
        label: Z.Z.Messages.OPEN_IN_FULL_VIEW,
        action: O
      })]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [x, T]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [M, _, A]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [(0, l.jsx)(s.MenuItem, {
        id: "search",
        label: Z.Z.Messages.SEARCH,
        icon: s.WindowLaunchIcon,
        action: function() {
          O(), setTimeout(() => {
            I.S.dispatch(N.CkL.FOCUS_SEARCH, {
              prefillCurrentChannel: !1
            })
          }, 2e3)
        }
      }), (0, l.jsx)(s.MenuItem, {
        id: "pins",
        label: Z.Z.Messages.PINS,
        icon: s.WindowLaunchIcon,
        action: function() {
          O(), I.S.dispatch(N.CkL.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, l.jsxs)(s.MenuGroup, {
      children: [L, S, v, R]
    }), (0, l.jsx)(s.MenuGroup, {
      children: j
    })]
  })
}

function A(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [t.isForumPost() ? null : (0, l.jsx)(x.Z, {
      channel: t
    }), (0, l.jsx)(S, {
      channel: t
    }), (0, l.jsx)(_.ZP.Icon, {
      icon: s.CloseSmallIcon,
      tooltip: Z.Z.Messages.CLOSE,
      onClick: () => (0, T.vN)((0, f.e)(t), null != n ? n : t.parent_id)
    })]
  })
}