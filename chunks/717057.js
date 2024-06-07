"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("989600"),
  d = n("442837"),
  c = n("481060"),
  f = n("410030"),
  h = n("271383"),
  m = n("430824"),
  p = n("594174"),
  E = n("153124"),
  C = n("709054"),
  g = n("931240"),
  S = n("645896"),
  _ = n("603368"),
  T = n("532490"),
  I = n("380365"),
  A = n("979264"),
  v = n("620929"),
  N = n("284019"),
  x = n("308083"),
  M = n("981631"),
  R = n("689938"),
  y = n("946984");

function L(e) {
  var t;
  let {
    guildId: n,
    clanInfo: s,
    onSignCharter: r
  } = e, u = l.useMemo(() => {
    let e = C.default.extractTimestamp(n);
    return o()(new Date(e)).format("MMMM YYYY")
  }, [n]), d = l.useMemo(() => new Set(s.games), [s.games]);
  return (0, a.jsx)(T.default, {
    guildId: n,
    signHintPosition: T.SignHintPosition.LEFT,
    primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
    onSignCharter: r,
    children: (0, a.jsxs)("div", {
      className: y.scrollContentsContainer,
      children: [(0, a.jsx)(A.BaseClanTagChiplet, {
        guildId: n,
        clanBadge: s.badge.imageHash,
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: x.ClanTagBadgeSize.SIZE_24,
        className: y.clanTagChiplet
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: y.charterHeaderText,
          children: R.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: y.charterHeaderText,
          children: s.name
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: y.establishedDate,
          children: R.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: u
          })
        })]
      }), (0, a.jsx)(v.CharterScrollGameSection, {
        applicationIds: d,
        playstyle: s.playstyle,
        className: i()(y.charterBodyText, y.gameSection)
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: y.charterBodyText,
        children: R.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      })]
    })
  })
}

function O(e) {
  var t;
  let {
    guildId: n,
    onClose: s,
    onAccept: r,
    ...o
  } = e, C = (0, E.useUID)(), T = (0, S.useClanInfo)(n), A = (0, S.useIsFetchingClanInfo)(), [v, x] = l.useState(!0), [O, j] = l.useState(!1), P = l.useCallback(() => {
    r(), s()
  }, [r, s]);
  l.useEffect(() => {
    null == T && !A && P()
  }, [T, P, A]);
  let D = l.useCallback(() => {
      v && (0, g.adoptClanIdentity)(n, v, M.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL), P()
    }, [n, P, v]),
    b = l.useCallback(() => {
      j(!0)
    }, []),
    U = (0, d.useStateFromStores)([m.default], () => m.default.getGuild(n)),
    F = (0, d.useStateFromStores)([p.default], () => p.default.getCurrentUser()),
    w = (0, d.useStateFromStores)([h.default], () => null != F ? h.default.getMember(n, F.id) : null),
    k = (0, f.default)(),
    H = (0, _.useBrandColor)(null == T ? void 0 : null === (t = T.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, .7]),
    B = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: k,
      saturation: 1
    }).hex(),
    G = (0, _.getClanRadialBackgroundStyle)(H, B, "top center");
  return null == U || null == F || null == w || null == T ? null : (0, a.jsx)(c.ModalRoot, {
    ...o,
    transitionState: o.transitionState,
    "aria-labelledby": C,
    className: y.modal,
    size: c.ModalSize.DYNAMIC,
    children: (0, a.jsxs)(c.ModalContent, {
      className: y.content,
      style: G,
      children: [(0, a.jsxs)("div", {
        className: y.infoSide,
        children: [(0, a.jsxs)("div", {
          className: y.titlesContainer,
          children: [(0, a.jsx)("div", {
            className: y.title,
            children: (0, a.jsx)(c.Heading, {
              variant: "heading-xxl/medium",
              children: R.default.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                name: U.name
              })
            })
          }), (0, a.jsx)(c.Text, {
            className: y.subtitle,
            variant: "text-md/normal",
            children: R.default.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, a.jsx)(I.default, {
          guildId: n,
          isTagAdopted: v,
          onChangeUseTag: x
        })]
      }), (0, a.jsx)("div", {
        className: y.scrollMainContainer,
        children: (0, a.jsx)(L, {
          guildId: n,
          clanInfo: T,
          onSignCharter: b
        })
      }), (0, a.jsx)(N.default, {
        onClick: D,
        color: c.Button.Colors.BRAND,
        themeColor: H,
        fullWidth: !1,
        className: i()(y.ctaButton, O ? y.ctaButtonSigned : null),
        children: (0, a.jsxs)("div", {
          className: y.ctaButtonInner,
          children: [(0, a.jsx)(c.Text, {
            color: "currentColor",
            variant: "text-md/medium",
            children: R.default.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, a.jsx)(u.ArrowLargeRightIcon, {
            width: 20,
            height: 20,
            color: null == H ? void 0 : (0, _.getAccessibleTextColor)(H).hex()
          })]
        })
      })]
    })
  })
}