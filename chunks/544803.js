n.d(t, {
  Z: function() {
    return S
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(692547),
  a = n(481060),
  o = n(758059),
  u = n(367907),
  c = n(835473),
  d = n(703656),
  h = n(594174),
  p = n(366695),
  g = n(436088),
  m = n(51144),
  C = n(158631),
  E = n(143614),
  f = n(787740),
  _ = n(981631),
  I = n(689938),
  N = n(34771);

function Z(e) {
  var t;
  let {
    userId: n,
    applicationId: i
  } = e, r = (0, s.e7)([h.default], () => h.default.getUser(n)), o = null !== (t = m.ZP.getGlobalName(r)) && void 0 !== t ? t : m.ZP.getUserTag(r), u = (0, c.q)(i);
  return null == r ? null : (0, l.jsxs)("div", {
    className: N.broadcast,
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: N.inline,
        children: [(0, l.jsx)(a.Avatar, {
          size: a.AvatarSizes.SIZE_16,
          src: r.getAvatarURL(null, 16),
          "aria-label": o
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/semibold",
          children: o
        })]
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: (null == u ? void 0 : u.name) != null ? I.Z.Messages.STREAMING.format({
          name: u.name
        }) : I.Z.Messages.STREAMING_A_GAME
      })]
    }), (0, l.jsx)(p.Z, {
      game: u
    })]
  })
}

function S(e) {
  let {
    closePopout: t
  } = e, n = (0, E.Z)(), s = n.slice(0, 3), c = (0, C.ZP)(), h = n.length - s.length;
  return i.useEffect(() => {
    u.ZP.trackWithMetadata(_.rMx.BROADCAST_POPOUT_VIEWED, {
      num_broadcasts_shown: s.length,
      num_active_broadcasts: n.length,
      is_broadcasting: c
    })
  }, [n.length, s.length, c]), (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsxs)("div", {
      className: N.header,
      children: [(0, l.jsxs)("div", {
        className: N.inline,
        children: [(0, l.jsx)(g.Z, {
          color: r.Z.colors.HEADER_PRIMARY.css,
          height: 16,
          width: 16
        }), (0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: I.Z.Messages.LIVE_BROADCASTS
        })]
      }), (0, l.jsx)(f.Z, {})]
    }), s.map((e, t) => (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(Z, {
        ...e
      }, e.userId), t !== s.length - 1 && (0, l.jsx)("hr", {
        className: N.separator
      })]
    })), h > 0 && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("hr", {
        className: N.separator
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: I.Z.Messages.MORE_OPEN_BROADCASTS.format({
          count: h
        })
      })]
    }), (0, l.jsx)(a.Button, {
      onClick: () => {
        (0, d.uL)(_.Z5c.ME), o.Z.setSection(_.pJs.ONLINE), u.ZP.trackWithMetadata(_.rMx.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: n.length,
          friends_tab_clicked: !1,
          is_broadcasting: c
        }), t()
      },
      className: N.button,
      children: I.Z.Messages.VIEW_OPEN_BROADCASTS
    })]
  })
}