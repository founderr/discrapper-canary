l.r(n), l.d(n, {
  default: function() {
    return b
  }
});
var t = l(735250),
  s = l(470079),
  i = l(120356),
  a = l.n(i),
  o = l(442837),
  r = l(481060),
  d = l(100527),
  c = l(906732),
  u = l(252618),
  _ = l(189432),
  E = l(189357),
  I = l(473403),
  N = l(984370),
  x = l(703656),
  h = l(171368),
  C = l(433355),
  A = l(592125),
  S = l(984933),
  T = l(430824),
  M = l(944486),
  g = l(514342),
  D = l(241559),
  L = l(575766),
  R = l(305473),
  f = l(937283),
  j = l(440857),
  m = l(707113),
  Z = l(981631),
  v = l(176505),
  O = l(50493),
  B = l(689938),
  G = l(872686),
  k = l(175803);

function p(e) {
  let {
    guild: n,
    previousChannel: l
  } = e, i = B.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE, a = B.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, u.Tt)({
    location: n.name,
    subsection: i
  }), (0, t.jsxs)(N.Z, {
    className: G.header,
    innerClassname: G.__invalid_innerHeader,
    channelId: v.oC.MEMBER_SAFETY,
    guildId: n.id,
    hideSearch: !0,
    toolbar: null != l ? (0, t.jsx)(r.Button, {
      className: G.returnButton,
      size: r.Button.Sizes.SMALL,
      look: r.Button.Looks.OUTLINED,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        null != l && (0, x.XU)(n.id, l.id)
      },
      children: (0, t.jsx)(r.Text, {
        className: G.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: B.Z.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == l ? null : (0, t.jsxs)(s.Fragment, {
            children: [(0, t.jsx)(I._, {
              className: G.returnIcon,
              guild: n,
              channel: l
            }), (0, t.jsx)(g.Z, {
              children: (0, t.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l.name
              })
            })]
          }, l.id)
        })
      })
    }) : (0, t.jsx)("div", {}),
    children: [(0, t.jsx)(N.Z.Icon, {
      icon: r.GroupIcon,
      "aria-hidden": !0
    }), (0, t.jsx)(N.Z.Title, {
      children: a
    })]
  })
}

function b(e) {
  let {
    guildId: n
  } = e, l = (0, o.e7)([T.Z], () => T.Z.getGuild(n)), {
    analyticsLocations: i
  } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE), u = (0, D.n2)(n), I = (0, E.ms)(n, u), N = (0, o.e7)([M.Z], () => M.Z.getLastSelectedChannelId(n)), g = (0, o.e7)([A.Z], () => A.Z.getChannel(N)), B = s.useRef(null);
  (0, L.n)(n), s.useEffect(() => {
    if (!u && null != l) {
      var e;
      let n = null === (e = S.ZP.getDefaultChannel(l.id)) || void 0 === e ? void 0 : e.id;
      (0, x.XU)(l.id, n)
    }
  }, [l, u]);
  let b = (0, o.e7)([C.ZP], () => null != C.ZP.getGuildSidebarState(n), [n]),
    P = s.useCallback(e => {
      (0, E.By)(e.guildId, !0) ? (0, _.r)(e.guildId, e.userId, v.oC.MEMBER_SAFETY, {
        modViewPanel: O.k.INFO
      }) : (0, h.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        sourceAnalyticsLocations: i,
        analyticsLocation: {
          section: Z.jXE.MEMBER_SAFETY_PAGE
        }
      })
    }, [i]);
  return null != l && u ? (0, t.jsxs)(c.Gt, {
    value: i,
    children: [(0, t.jsxs)("div", {
      className: a()(k.chat, G.page, {
        [k.threadSidebarOpen]: b
      }),
      children: [(0, t.jsx)(p, {
        guild: l,
        previousChannel: g
      }), (0, t.jsx)(r.AdvancedScroller, {
        className: a()(G.scroller),
        ref: B,
        orientation: "vertical",
        children: (0, t.jsxs)("div", {
          className: a()(k.content, G.container),
          children: [(0, t.jsx)(R.Z, {
            guild: l
          }), (0, t.jsx)(m.Z, {
            guild: l,
            onMemberSelect: P
          })]
        })
      }), (0, t.jsx)(j.Z, {
        guildId: l.id
      })]
    }), I && (0, t.jsx)(f.Z, {
      guildId: l.id
    })]
  }) : null
}