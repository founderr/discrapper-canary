n.d(t, {
  KF: function() {
    return v
  },
  LW: function() {
    return R
  },
  OO: function() {
    return A
  },
  TH: function() {
    return M
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(266067),
  o = n(442837),
  u = n(704215),
  c = n(481060),
  d = n(350810),
  h = n(110924),
  g = n(100527),
  p = n(970606),
  m = n(963202),
  C = n(824991),
  E = n(243778),
  f = n(863249),
  _ = n(937111),
  I = n(602147),
  N = n(981631),
  Z = n(308083),
  S = n(921944),
  x = n(689938),
  T = n(210606);

function L(e) {
  let {
    title: t,
    message: n,
    dismissibleContent: s,
    defaultGameId: r,
    onPopoutVisible: o,
    onClick: u,
    children: h,
    isEligibleForUpsell: g = !0,
    withInviteIcon: p = !0
  } = e, m = (0, a.TH)(), [f, _] = (0, E.U)([s], S.R.SIDEBAR), x = f !== s, L = (0, d.Z)(), v = g && !L && !x && m.pathname !== N.Z5c.GUILD_DISCOVERY;
  i.useEffect(() => {
    v && o()
  }, [v, o]);
  let A = i.useMemo(() => {
      switch (r) {
        case Z.nJ:
          return T.valorantBackgroundImage;
        case Z.xn:
          return T.genshinBackgroundImage;
        default:
          return
      }
    }, [r]),
    M = i.useCallback(() => {
      _(S.L.TAKE_ACTION), u(), (0, I.o)()
    }, [_, u]),
    R = i.useCallback(e => {
      e(), _(S.L.USER_DISMISS)
    }, [_]);
  return (0, l.jsxs)("div", {
    className: T.container,
    children: [(0, l.jsx)(c.Popout, {
      shouldShow: v,
      renderPopout: e => {
        let {
          closePopout: i
        } = e;
        return (0, l.jsxs)("div", {
          className: T.popoutContainer,
          children: [(0, l.jsx)("div", {
            className: A
          }), (0, l.jsx)(c.Clickable, {
            onClick: () => R(i),
            className: T.close,
            children: (0, l.jsx)(c.CloseSmallIcon, {
              size: "xs",
              color: c.tokens.colors.WHITE
            })
          }), (0, l.jsxs)("div", {
            className: T.popoutContent,
            children: [p && (0, l.jsx)(C.YV, {}), (0, l.jsx)(C.aF, {
              title: t
            }), (0, l.jsx)(C.To, {
              message: n
            }), (0, l.jsx)(C.Xu, {
              onClick: M
            })]
          }), (0, l.jsx)("div", {
            className: T.popoutCaret
          })]
        })
      },
      position: "top",
      animationPosition: "top",
      align: "left",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: T.popoutAnchor
      })
    }), h({
      onClick: M
    })]
  })
}

function v(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, s = i.useCallback(() => {
    (0, p.tv)({
      location: g.Z.GUILDS_LIST
    })
  }, []), r = i.useCallback(() => {
    (0, p.GS)({
      location: g.Z.GUILDS_LIST
    })
  }, []), [a, o] = i.useMemo(() => {
    switch (t) {
      case Z.xn:
        return [x.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE, x.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE];
      case Z.nJ:
        return [x.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE, x.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(L, {
    title: a,
    message: o,
    dismissibleContent: u.z.GUILD_LIST_CLAN_USER_UPSELL,
    defaultGameId: t,
    onClick: r,
    onPopoutVisible: s,
    withInviteIcon: !1,
    children: n
  })
}

function A(e) {
  let {
    defaultGameId: t,
    children: n
  } = e, {
    guilds: s
  } = (0, m.C3)({
    location: "GuildsBarClanAdminUpsellPopout",
    includeConverted: !1
  }), r = s.length > 0, a = i.useCallback(() => {
    (0, p.TE)({
      location: g.Z.GUILDS_LIST
    })
  }, []), o = i.useCallback(() => {
    (0, p._9)({
      location: g.Z.GUILDS_LIST
    })
  }, []), [c, d] = i.useMemo(() => {
    switch (t) {
      case Z.xn:
        return [x.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE, x.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      case Z.nJ:
        return [x.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE, x.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE];
      default:
        return [void 0, void 0]
    }
  }, [t]);
  return (0, l.jsx)(L, {
    title: c,
    message: d,
    dismissibleContent: u.z.GUILD_LIST_CLAN_ADMIN_UPSELL,
    defaultGameId: t,
    onClick: o,
    isEligibleForUpsell: r,
    onPopoutVisible: a,
    children: n
  })
}

function M(e) {
  let {
    onActivate: t,
    children: n
  } = e, s = (0, o.e7)([_.Z], () => _.Z.hasJoinRequestCoackmark()), r = i.useCallback(() => {
    f.Z.clearCoachmark()
  }, []), a = (0, h.Z)(s), u = i.useRef(null);
  return i.useEffect(() => {
    if (s && s !== a) {
      var e, n, l, i, r;
      t(), null === (r = u.current) || void 0 === r || null === (i = r.ref) || void 0 === i || null === (l = i.current) || void 0 === l || null === (n = l.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition()
    }
  }, [u, s, a, t]), (0, l.jsxs)("div", {
    className: T.container,
    children: [(0, l.jsx)(c.Popout, {
      ref: u,
      shouldShow: s,
      renderPopout: () => (0, l.jsxs)("div", {
        className: T.popoutContainer,
        children: [(0, l.jsxs)("div", {
          className: T.popoutContent,
          children: [(0, l.jsxs)("div", {
            className: T.coachmarkTextContainer,
            children: [(0, l.jsx)(c.Heading, {
              variant: "heading-md/medium",
              children: x.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
            }), (0, l.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: x.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
            })]
          }), (0, l.jsx)(c.Button, {
            fullWidth: !0,
            size: c.ButtonSizes.SMALL,
            color: c.ButtonColors.BRAND,
            onClick: r,
            children: x.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
          })]
        }), (0, l.jsx)("div", {
          className: T.popoutCaretLeft
        })]
      }),
      position: "right",
      animationPosition: "right",
      align: "top",
      spacing: 16,
      children: e => (0, l.jsx)("div", {
        ...e,
        className: T.popoutAnchor
      })
    }), n]
  })
}

function R(e) {
  let {
    hideGradient: t,
    children: n
  } = e;
  return (0, l.jsxs)("div", {
    className: T.footer,
    children: [(0, l.jsx)("div", {
      className: r()(T.gradient, {
        [T.gradientHidden]: t
      })
    }), n]
  })
}