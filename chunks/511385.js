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
  u = s("594174"),
  x = s("153124"),
  S = s("931240"),
  m = s("970606"),
  g = s("353093"),
  h = s("979264"),
  C = s("284019"),
  v = s("308083"),
  j = s("981631"),
  N = s("689938"),
  T = s("306366");
a.default = e => {
  var a, s, i;
  let {
    guildId: _,
    tag: f,
    brandPrimaryColor: E,
    transitionState: p,
    onClose: A
  } = e, L = (0, x.useUID)(), [M, U] = l.useState(!0), b = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(_)), k = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), w = (0, n.useStateFromStores)([c.default], () => null != k ? c.default.getMember(_, k.id) : null);
  if (l.useEffect(() => {
      (0, m.trackConvertSuccessModalViewed)(_)
    }, [_]), null == b || null == k || null == w) return null;
  let z = null != E ? {
      background: "radial-gradient(circle at top, ".concat(d()(E).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    B = (0, g.getClanBadgeUrl)(b.id, null === (a = b.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsx)(r.ModalRoot, {
    className: T.modal,
    transitionState: p,
    "aria-labelledby": L,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: T.content,
      style: z,
      children: [(0, t.jsx)(h.BaseClanTagChiplet, {
        clanTag: f,
        clanBadge: B,
        className: T.tagPreview,
        textClassName: T.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: b.name
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: N.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, t.jsx)(r.Text, {
        className: T.subtitle,
        variant: "text-md/normal",
        children: N.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: T.previewSection,
        children: [(0, t.jsxs)("div", {
          className: T.chatPreview,
          children: [(0, t.jsx)(r.Avatar, {
            src: k.getAvatarURL(_, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, t.jsxs)("div", {
            className: T.previewText,
            children: [(0, t.jsxs)("div", {
              className: T.userName,
              children: [(0, t.jsx)(r.NameWithRole, {
                className: T.userName,
                name: null !== (s = w.nick) && void 0 !== s ? s : k.username,
                color: null !== (i = w.colorString) && void 0 !== i ? i : void 0
              }), M && (0, t.jsx)(h.BaseClanTagChiplet, {
                clanBadge: B,
                clanTag: f,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, t.jsx)("div", {
              className: T.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, t.jsx)("div", {
              className: T.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, t.jsx)("div", {
          className: T.divider
        }), (0, t.jsxs)("div", {
          className: T.settingSection,
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
      }), (0, t.jsx)(C.default, {
        themeColor: E,
        onClick: () => {
          (0, S.adoptClanIdentity)(_, M, j.AnalyticsLocations.CLAN_SETUP_MODAL), (0, m.trackConvertSuccessModalConfirm)(_, M), A()
        },
        children: (0, t.jsx)(r.Text, {
          color: "none",
          variant: "text-md/medium",
          children: N.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}