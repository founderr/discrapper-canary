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
  I = n("676327"),
  A = n("353093"),
  N = n("532490"),
  v = n("979264"),
  x = n("620929"),
  M = n("284019"),
  R = n("308083"),
  L = n("689938"),
  y = n("958631");

function O(e) {
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
      className: y.scrollContentsContainer,
      children: [(0, a.jsx)(v.BaseClanTagChiplet, {
        clanBadge: (0, A.getClanBadgeUrl)(n, s.badge.imageHash, R.ClanTagBadgeSize.SIZE_24),
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: R.ClanTagBadgeSize.SIZE_24,
        className: y.clanTagChiplet
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(h.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: y.charterHeaderText,
          children: L.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(h.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: y.charterHeaderText,
          children: s.name
        }), (0, a.jsx)("div", {
          className: y.establishedDate,
          children: (0, a.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: y.charterHeaderText,
            children: L.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
              date: r
            })
          })
        })]
      }), (0, a.jsx)(x.CharterScrollGameSection, {
        applicationIds: u,
        playstyle: s.playstyle,
        className: o()(y.charterBodyText, y.gameSection)
      }), (0, a.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: y.charterBodyText,
        children: L.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
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
  } = e, S = (0, C.useUID)(), N = (0, T.useClanInfo)(s), [x, j] = l.useState(!0), [P, D] = l.useState(!1), b = l.useCallback(() => {
    u(), r()
  }, [u, r]);
  l.useEffect(() => {
    null == N && b()
  }, [N, b]);
  let U = null == N ? void 0 : null === (t = N.branding) || void 0 === t ? void 0 : t.primaryColor,
    F = l.useCallback(() => {
      (0, _.adoptClanIdentity)(s, x), b()
    }, [s, b, x]),
    w = l.useCallback(() => {
      D(!0)
    }, []),
    k = (0, f.useStateFromStores)([p.default], () => p.default.getGuild(s)),
    H = (0, f.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
    B = (0, f.useStateFromStores)([m.default], () => null != H ? m.default.getMember(s, H.id) : null);
  if (null == k || null == H || null == B || null == N) return null;
  let G = null != U ? {
      background: "radial-gradient(circle at top left, ".concat(i()(U).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    V = (0, A.getClanBadgeUrl)(k.id, N.badge.imageHash, R.ClanTagBadgeSize.SIZE_36);
  return (0, a.jsx)(h.ModalRoot, {
    ...d,
    transitionState: d.transitionState,
    "aria-labelledby": S,
    className: y.modal,
    size: h.ModalSize.DYNAMIC,
    children: (0, a.jsxs)(h.ModalContent, {
      className: y.content,
      style: G,
      children: [(0, a.jsxs)("div", {
        className: y.infoSide,
        children: [(0, a.jsxs)("div", {
          className: y.titlesContainer,
          children: [(0, a.jsxs)("div", {
            className: y.title,
            children: [(0, a.jsx)(h.Heading, {
              variant: "heading-xxl/medium",
              children: L.default.Messages.CLAN_JOIN_SUCCESS_TITLE
            }), (0, a.jsx)(h.Heading, {
              variant: "heading-xxl/bold",
              children: k.name
            })]
          }), (0, a.jsx)(h.Text, {
            className: y.subtitle,
            variant: "text-md/normal",
            children: L.default.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, a.jsxs)("div", {
          className: y.previewSection,
          children: [(0, a.jsxs)("div", {
            className: y.chatPreview,
            children: [(0, a.jsx)(h.Avatar, {
              src: H.getAvatarURL(s, 40),
              size: h.AvatarSizes.SIZE_40,
              "aria-hidden": !0
            }), (0, a.jsxs)("div", {
              className: y.previewText,
              children: [(0, a.jsxs)("div", {
                className: y.userName,
                children: [(0, a.jsx)(h.NameWithRole, {
                  className: y.userName,
                  name: g.default.getName(s, null, H),
                  color: null !== (n = B.colorString) && void 0 !== n ? n : void 0
                }), x && (0, a.jsx)(v.BaseClanTagChiplet, {
                  clanBadge: V,
                  clanTag: N.tag,
                  badgeSize: R.ClanTagBadgeSize.SIZE_12,
                  textVariant: "text-xs/normal"
                })]
              }), (0, a.jsx)("div", {
                className: y.fakeMessage,
                style: {
                  width: "80%"
                }
              }), (0, a.jsx)("div", {
                className: y.fakeMessage,
                style: {
                  width: "50%"
                }
              })]
            })]
          }), (0, a.jsx)("div", {
            className: y.divider
          }), (0, a.jsxs)("div", {
            className: y.settingSection,
            children: [(0, a.jsxs)("div", {
              children: [(0, a.jsx)(h.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: L.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
              }), (0, a.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: L.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
              })]
            }), (0, a.jsx)(h.Switch, {
              onChange: () => j(!x),
              checked: x
            })]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: y.scrollMainContainer,
        children: (0, a.jsx)(O, {
          guildId: s,
          clanInfo: N,
          onSignCharter: w
        })
      }), (0, a.jsx)(M.default, {
        onClick: F,
        color: h.Button.Colors.BRAND,
        themeColor: U,
        fullWidth: !1,
        className: o()(y.ctaButton, P ? y.ctaButtonSigned : null),
        children: (0, a.jsxs)("div", {
          className: y.ctaButtonInner,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-md/medium",
            children: L.default.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, a.jsx)(c.ArrowLargeRightIcon, {
            width: 20,
            height: 20,
            color: null == U ? void 0 : (0, I.getAccessibleTextColor)(U).hex()
          })]
        })
      })]
    })
  })
}