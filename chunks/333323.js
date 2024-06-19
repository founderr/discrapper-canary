l.d(n, {
  Z: function() {
    return L
  }
}), l(47120);
var a = l(735250),
  i = l(470079),
  s = l(120356),
  r = l.n(s),
  t = l(399606),
  d = l(481060),
  c = l(749210),
  o = l(131388),
  u = l(367907),
  h = l(644080),
  m = l(984370),
  g = l(6025),
  x = l(433355),
  Z = l(626135),
  C = l(526120),
  v = l(563534),
  f = l(846121),
  I = l(460347),
  j = l(404488),
  N = l(605276),
  p = l(869764),
  E = l(919318),
  _ = l(150512),
  b = l(981631),
  M = l(176505),
  A = l(689938),
  S = l(659073),
  T = l(175803);
let R = j.q + 300 + 64,
  P = i.memo(function(e) {
    let {
      guild: n
    } = e;
    return (0, a.jsxs)(m.Z, {
      channelId: M.oC.GUILD_HOME,
      guildId: n.id,
      className: r()(S.title, S.background),
      innerClassname: S.headerBarInner,
      children: [(0, a.jsx)(m.Z.Icon, {
        icon: d.SignPostIcon,
        "aria-hidden": !0
      }), (0, a.jsxs)(m.Z.Title, {
        children: [(0, a.jsx)(d.HiddenVisually, {
          children: n.name
        }), A.Z.Messages.SERVER_GUIDE]
      })]
    })
  });

function L(e) {
  var n, l;
  let {
    guild: s,
    width: m
  } = e, A = (0, t.e7)([x.ZP], () => x.ZP.getSection(M.oC.GUILD_HOME)), [L, H] = i.useState(!1), [y, D] = i.useState(b.$Y6), k = A === b.ULH.SIDEBAR_CHAT, O = (0, d.useFocusJumpSection)(), w = (0, t.e7)([v.Z], () => v.Z.getSettings(s.id)), U = null == w ? void 0 : w.welcomeMessage, B = (0, I.Z)(s.id), G = !B && (null !== (l = null == w ? void 0 : null === (n = w.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0, z = (0, o.Z)("(max-width: 1300px)"), W = m - b.PrS - y, F = k && W < R || z || G;
  return (i.useEffect(() => {
    if (w === v.P)(0, C.cP)(s.id);
    else if (null != w) {
      var e, n, l, a, i;
      Z.default.track(b.rMx.SERVER_GUIDE_VIEWED, {
        ...(0, u.hH)(s.id),
        num_member_actions: null !== (l = null === (e = w.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
        num_member_actions_completed: Object.keys(null !== (a = f.Z.getCompletedActions(s.id)) && void 0 !== a ? a : {}).length,
        num_resource_channels: null !== (i = null === (n = w.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0
      })
    }
  }, [s.id, w]), i.useEffect(() => () => {
    g.Z.closeChannelSidebar(M.oC.GUILD_HOME)
  }, []), i.useEffect(() => {
    G && w !== v.P && c.Z.escapeToDefaultChannel(s.id)
  }, [s.id, G, w]), G) ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: r()(T.chat, S.background, {
        [T.threadSidebarOpen]: k,
        [T.threadSidebarFloating]: k && L
      }),
      children: [(0, a.jsx)(P, {
        guild: s
      }), (0, a.jsx)(d.AdvancedScrollerAuto, {
        ...O,
        children: (0, a.jsxs)("div", {
          className: r()(S.homeContainer, {
            [S.homeContainerCollapsed]: F
          }),
          children: [(0, a.jsx)("div", {
            className: S.maxWidthWrapper,
            children: (0, a.jsx)(h.Z, {
              guild: s,
              titleClassName: z ? S.emptyHeaderTitle : void 0
            })
          }), (0, a.jsxs)("div", {
            className: r()(S.homeContent, S.maxWidthWrapper),
            children: [(0, a.jsxs)("div", {
              className: S.mainContent,
              children: [B && (0, a.jsx)(_.Z, {
                guildId: s.id,
                welcomeMessage: U
              }), B && (0, a.jsx)(p.Z, {
                guildId: s.id
              }), !B || F ? (0, a.jsx)(E.ZP, {
                guild: s,
                isNewMember: B
              }) : null]
            }), F ? null : (0, a.jsx)(N.Z, {
              guild: s,
              isNewMember: B
            })]
          })]
        })
      })]
    }), k ? (0, a.jsx)(j.Z, {
      pageWidth: m,
      onSidebarResize: (e, n) => {
        H(n), D(e)
      }
    }) : null]
  })
}