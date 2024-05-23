"use strict";
s.r(a), s("47120");
var t = s("735250"),
  l = s("470079"),
  i = s("688619"),
  d = s.n(i),
  n = s("442837"),
  r = s("481060"),
  c = s("271383"),
  o = s("430824"),
  S = s("594174"),
  u = s("153124"),
  x = s("931240"),
  m = s("970606"),
  C = s("353093"),
  g = s("979264"),
  h = s("284019"),
  v = s("308083"),
  T = s("981631"),
  N = s("689938"),
  _ = s("306366");
a.default = e => {
  var a, s, i;
  let {
    guildId: j,
    tag: f,
    brandPrimaryColor: p,
    transitionState: E,
    onClose: A
  } = e, L = (0, u.useUID)(), [M, U] = l.useState(!0), k = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(j)), b = (0, n.useStateFromStores)([S.default], () => S.default.getCurrentUser()), w = (0, n.useStateFromStores)([c.default], () => null != b ? c.default.getMember(j, b.id) : null);
  if (l.useEffect(() => {
      (0, m.trackConvertSuccessModalViewed)(j)
    }, [j]), null == k || null == b || null == w) return null;
  let z = null != p ? {
      background: "radial-gradient(circle at top, ".concat(d()(p).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    B = (0, C.getClanBadgeUrl)(k.id, null === (a = k.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsx)(r.ModalRoot, {
    className: _.modal,
    transitionState: E,
    "aria-labelledby": L,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: _.content,
      style: z,
      children: [(0, t.jsx)(g.BaseClanTagChiplet, {
        clanTag: f,
        clanBadge: B,
        className: _.tagPreview,
        textClassName: _.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: N.default.Messages.CLAN_SUCCESS_TITLE.format({
          name: k.name
        })
      }), (0, t.jsx)(r.Text, {
        className: _.subtitle,
        variant: "text-md/normal",
        children: N.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: _.previewSection,
        children: [(0, t.jsxs)("div", {
          className: _.chatPreview,
          children: [(0, t.jsx)(r.Avatar, {
            src: b.getAvatarURL(j, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, t.jsxs)("div", {
            className: _.previewText,
            children: [(0, t.jsxs)("div", {
              className: _.userName,
              children: [(0, t.jsx)(r.NameWithRole, {
                className: _.userName,
                name: null !== (s = w.nick) && void 0 !== s ? s : b.username,
                color: null !== (i = w.colorString) && void 0 !== i ? i : void 0
              }), M && (0, t.jsx)(g.BaseClanTagChiplet, {
                clanBadge: B,
                clanTag: f,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, t.jsx)("div", {
              className: _.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, t.jsx)("div", {
              className: _.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, t.jsx)("div", {
          className: _.divider
        }), (0, t.jsxs)("div", {
          className: _.settingSection,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, t.jsx)(r.Switch, {
            onChange: () => U(!M),
            checked: M
          })]
        })]
      }), (0, t.jsx)(h.default, {
        themeColor: p,
        onClick: () => {
          M && (0, x.adoptClanIdentity)(j, M, T.AnalyticsLocations.CLAN_SETUP_MODAL), (0, m.trackConvertSuccessModalConfirm)(j, M), A()
        },
        children: (0, t.jsx)(r.Text, {
          color: "none",
          variant: "text-md/medium",
          children: N.default.Messages.CLAN_SUCCESS_CTA
        })
      }), (0, t.jsx)(r.Text, {
        className: _.postscript,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: N.default.Messages.CLAN_SUCCESS_POSTSCRIPT
      })]
    })
  })
}