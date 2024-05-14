"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("688619"),
  i = n.n(s),
  r = n("120356"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("989600"),
  f = n("442837"),
  h = n("481060"),
  m = n("271383"),
  p = n("430824"),
  E = n("594174"),
  C = n("153124"),
  g = n("5192"),
  S = n("709054"),
  _ = n("931240"),
  T = n("645896"),
  I = n("603368"),
  A = n("353093"),
  N = n("532490"),
  v = n("979264"),
  x = n("620929"),
  M = n("284019"),
  R = n("308083"),
  L = n("981631"),
  y = n("689938"),
  O = n("946984");

function j(e) {
  var t;
  let {
    guildId: n,
    clanInfo: s,
    onSignCharter: i
  } = e, r = l.useMemo(() => {
    let e = S.default.extractTimestamp(n);
    return d()(new Date(e)).format("MMMM YYYY")
  }, [n]), u = l.useMemo(() => new Set(s.games), [s.games]);
  return (0, a.jsx)(N.default, {
    guildId: n,
    signHintPosition: N.SignHintPosition.LEFT,
    primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
    onSignCharter: i,
    children: (0, a.jsxs)("div", {
      className: O.scrollContentsContainer,
      children: [(0, a.jsx)(v.BaseClanTagChiplet, {
        clanBadge: (0, A.getClanBadgeUrl)(n, s.badge.imageHash, R.ClanTagBadgeSize.SIZE_24),
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: R.ClanTagBadgeSize.SIZE_24,
        className: O.clanTagChiplet
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(h.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: O.charterHeaderText,
          children: y.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(h.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: O.charterHeaderText,
          children: s.name
        }), (0, a.jsx)(h.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: O.establishedDate,
          children: y.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: r
          })
        })]
      }), (0, a.jsx)(x.CharterScrollGameSection, {
        applicationIds: u,
        playstyle: s.playstyle,
        className: o()(O.charterBodyText, O.gameSection)
      }), (0, a.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: O.charterBodyText,
        children: y.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      })]
    })
  })
}
t.default = function(e) {
  var t, n;
  let {
    guildId: s,
    onClose: r,
    onAccept: u,
    ...d
  } = e, S = (0, C.useUID)(), N = (0, T.useClanInfo)(s), x = (0, T.useIsFetchingClanInfo)(), [P, D] = l.useState(!0), [b, U] = l.useState(!1), F = l.useCallback(() => {
    u(), r()
  }, [u, r]);
  l.useEffect(() => {
    null == N && !x && F()
  }, [N, F, x]);
  let w = null == N ? void 0 : null === (t = N.branding) || void 0 === t ? void 0 : t.primaryColor,
    k = l.useCallback(() => {
      P && (0, _.adoptClanIdentity)(s, P, L.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL), F()
    }, [s, F, P]),
    H = l.useCallback(() => {
      U(!0)
    }, []),
    B = (0, f.useStateFromStores)([p.default], () => p.default.getGuild(s)),
    G = (0, f.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
    V = (0, f.useStateFromStores)([m.default], () => null != G ? m.default.getMember(s, G.id) : null);
  if (null == B || null == G || null == V || null == N) return null;
  let W = null != w ? {
      background: "radial-gradient(circle at top left, ".concat(i()(w).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    Y = (0, A.getClanBadgeUrl)(B.id, N.badge.imageHash, R.ClanTagBadgeSize.SIZE_36);
  return (0, a.jsx)(h.ModalRoot, {
    ...d,
    transitionState: d.transitionState,
    "aria-labelledby": S,
    className: O.modal,
    size: h.ModalSize.DYNAMIC,
    children: (0, a.jsxs)(h.ModalContent, {
      className: O.content,
      style: W,
      children: [(0, a.jsxs)("div", {
        className: O.infoSide,
        children: [(0, a.jsxs)("div", {
          className: O.titlesContainer,
          children: [(0, a.jsxs)("div", {
            className: O.title,
            children: [(0, a.jsx)(h.Heading, {
              variant: "heading-xxl/medium",
              children: y.default.Messages.CLAN_JOIN_SUCCESS_TITLE
            }), (0, a.jsx)(h.Heading, {
              variant: "heading-xxl/bold",
              children: B.name
            })]
          }), (0, a.jsx)(h.Text, {
            className: O.subtitle,
            variant: "text-md/normal",
            children: y.default.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, a.jsxs)("div", {
          className: O.previewSection,
          children: [(0, a.jsxs)("div", {
            className: O.chatPreview,
            children: [(0, a.jsx)(h.Avatar, {
              src: G.getAvatarURL(s, 40),
              size: h.AvatarSizes.SIZE_40,
              "aria-hidden": !0
            }), (0, a.jsxs)("div", {
              className: O.previewText,
              children: [(0, a.jsxs)("div", {
                className: O.userName,
                children: [(0, a.jsx)(h.NameWithRole, {
                  className: O.userName,
                  name: g.default.getName(s, null, G),
                  color: null !== (n = V.colorString) && void 0 !== n ? n : void 0
                }), P && (0, a.jsx)(v.BaseClanTagChiplet, {
                  clanBadge: Y,
                  clanTag: N.tag,
                  badgeSize: R.ClanTagBadgeSize.SIZE_12,
                  textVariant: "text-xs/normal"
                })]
              }), (0, a.jsx)("div", {
                className: O.fakeMessage,
                style: {
                  width: "80%"
                }
              }), (0, a.jsx)("div", {
                className: O.fakeMessage,
                style: {
                  width: "50%"
                }
              })]
            })]
          }), (0, a.jsx)("div", {
            className: O.divider
          }), (0, a.jsxs)("div", {
            className: O.settingSection,
            children: [(0, a.jsxs)("div", {
              children: [(0, a.jsx)(h.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: y.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
              }), (0, a.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: y.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
              })]
            }), (0, a.jsx)(h.Switch, {
              onChange: () => D(!P),
              checked: P
            })]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: O.scrollMainContainer,
        children: (0, a.jsx)(j, {
          guildId: s,
          clanInfo: N,
          onSignCharter: H
        })
      }), (0, a.jsx)(M.default, {
        onClick: k,
        color: h.Button.Colors.BRAND,
        themeColor: w,
        fullWidth: !1,
        className: o()(O.ctaButton, b ? O.ctaButtonSigned : null),
        children: (0, a.jsxs)("div", {
          className: O.ctaButtonInner,
          children: [(0, a.jsx)(h.Text, {
            color: "none",
            variant: "text-md/medium",
            children: y.default.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, a.jsx)(c.ArrowLargeRightIcon, {
            width: 20,
            height: 20,
            color: null == w ? void 0 : (0, I.getAccessibleTextColor)(w).hex()
          })]
        })
      })]
    })
  })
}