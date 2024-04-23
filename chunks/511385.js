"use strict";
s.r(a), s("47120");
var t = s("735250"),
  l = s("470079"),
  i = s("688619"),
  n = s.n(i),
  d = s("442837"),
  r = s("481060"),
  o = s("271383"),
  c = s("430824"),
  u = s("594174"),
  x = s("153124"),
  m = s("931240"),
  S = s("728257"),
  g = s("979264"),
  h = s("689938"),
  C = s("299526");
a.default = e => {
  var a, s;
  let {
    guildId: i,
    tag: v,
    brandPrimaryColor: N,
    transitionState: j,
    onClose: T
  } = e, _ = (0, x.useUID)(), [f, p] = l.useState(!0), A = (0, d.useStateFromStores)([c.default], () => c.default.getGuild(i)), E = (0, d.useStateFromStores)([u.default], () => u.default.getCurrentUser()), b = (0, d.useStateFromStores)([o.default], () => null != E ? o.default.getMember(i, E.id) : null), k = (0, S.useColorIsLowContrastAgainstClientBackground)(N);
  if (null == A || null == E || null == b) return null;
  let L = null != N ? {
    background: "radial-gradient(circle at top, ".concat(n()(N).alpha(.3).hex(), " 0%, transparent 50%)")
  } : void 0;
  return (0, t.jsx)(r.ModalRoot, {
    className: C.modal,
    transitionState: j,
    "aria-labelledby": _,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: C.content,
      style: L,
      children: [(0, t.jsx)(g.BaseClanTagChiplet, {
        clanTag: v,
        className: C.tagPreview,
        textClassName: C.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: g.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: A.name
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: h.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, t.jsx)(r.Text, {
        className: C.subtitle,
        variant: "text-md/normal",
        children: h.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: C.previewSection,
        children: [(0, t.jsxs)("div", {
          className: C.chatPreview,
          children: [(0, t.jsx)(r.Avatar, {
            src: E.getAvatarURL(i, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, t.jsxs)("div", {
            className: C.previewText,
            children: [(0, t.jsxs)("div", {
              className: C.userName,
              children: [(0, t.jsx)(r.NameWithRole, {
                className: C.userName,
                name: null !== (a = b.nick) && void 0 !== a ? a : E.username,
                color: null !== (s = b.colorString) && void 0 !== s ? s : void 0
              }), f && (0, t.jsx)(g.BaseClanTagChiplet, {
                clanTag: v,
                badgeSize: g.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, t.jsx)("div", {
              className: C.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, t.jsx)("div", {
              className: C.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, t.jsx)("div", {
          className: C.divider
        }), (0, t.jsxs)("div", {
          className: C.settingSection,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: h.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: h.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, t.jsx)(r.Switch, {
            onChange: () => p(!f),
            checked: f
          })]
        })]
      }), (0, t.jsx)(r.Button, {
        onClick: () => {
          (0, m.adoptClanIdentity)(i, f), T()
        },
        color: k ? r.Button.Colors.BRAND : r.Button.Colors.CUSTOM,
        style: k ? void 0 : {
          backgroundColor: N
        },
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/medium",
          className: k ? void 0 : C.ctaText,
          children: h.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}