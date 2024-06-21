n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(32750),
  u = n(109764),
  d = n(323597),
  h = n(438536),
  m = n(251746),
  p = n(193987),
  E = n(933793),
  g = n(13736),
  f = n(732393),
  C = n(137591),
  _ = n(299206),
  I = n(695346),
  x = n(979651),
  T = n(502568),
  N = n(488131),
  Z = n(689938);

function S(e) {
  let {
    channel: t
  } = e, [n, s] = i.useState(!1);

  function a() {
    s(e => !e)
  }
  let r = Z.Z.Messages.MORE;
  return (0, l.jsx)(o.Popout, {
    shouldShow: n,
    animation: o.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => s(!1),
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
      return (0, l.jsx)(T.ZP.Icon, {
        ...e,
        onClick: a,
        tooltip: n ? null : r,
        icon: o.MoreHorizontalIcon,
        "aria-label": r,
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
  } = e, s = (0, c.Z)(t), T = (0, p.Z)(t), S = (0, f.Z)(t.id), v = (0, g.Z)(t), A = (0, _.Z)({
    id: t.id,
    label: Z.Z.Messages.COPY_ID_THREAD
  }), M = (0, u.Z)(t), R = (0, d.Z)(t), j = (0, h.Z)(t, "Toolbar Overflow"), L = (0, E.Z)(t), O = (0, m.Z)(t), P = (0, C.Z)(t), b = I.vF.useSetting(), y = (0, r.e7)([x.Z], () => !a().isEmpty(x.Z.getVoiceStatesForChannel(t.id)));
  return (0, l.jsxs)(o.Menu, {
    navId: "thread-context",
    onClose: n,
    "aria-label": Z.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: [(0, l.jsxs)(o.MenuGroup, {
      children: [j, O]
    }), (0, l.jsxs)(o.MenuGroup, {
      children: [v, L, S, b && !y ? (0, l.jsx)(o.MenuItem, {
        id: "open",
        label: Z.Z.Messages.OPEN_IN_SPLIT_VIEW,
        action: function() {
          (0, N.ok)(t)
        }
      }) : null]
    }), (0, l.jsxs)(o.MenuGroup, {
      children: [P, s, T, R]
    }), (0, l.jsxs)(o.MenuGroup, {
      children: [M, A]
    })]
  })
}