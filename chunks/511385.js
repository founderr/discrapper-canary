"use strict";
s.r(a), s("47120");
var t = s("735250"),
  l = s("470079"),
  i = s("688619"),
  d = s.n(i),
  n = s("442837"),
  r = s("481060"),
  o = s("271383"),
  c = s("430824"),
  u = s("594174"),
  x = s("153124"),
  g = s("931240"),
  S = s("353093"),
  m = s("728257"),
  C = s("979264"),
  h = s("308083"),
  v = s("689938"),
  N = s("299526");
a.default = e => {
  var a, s, i;
  let {
    guildId: T,
    tag: j,
    brandPrimaryColor: _,
    transitionState: f,
    onClose: p
  } = e, E = (0, x.useUID)(), [A, B] = l.useState(!0), b = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(T)), U = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), k = (0, n.useStateFromStores)([o.default], () => null != U ? o.default.getMember(T, U.id) : null), L = (0, m.useColorIsLowContrastAgainstClientBackground)(_);
  if (null == b || null == U || null == k) return null;
  let M = null != _ ? {
      background: "radial-gradient(circle at top, ".concat(d()(_).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    w = (0, S.getClanBadgeUrl)(b.id, null === (a = b.clan) || void 0 === a ? void 0 : a.badge, h.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsx)(r.ModalRoot, {
    className: N.modal,
    transitionState: f,
    "aria-labelledby": E,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: N.content,
      style: M,
      children: [(0, t.jsx)(C.BaseClanTagChiplet, {
        clanTag: j,
        clanBadge: w,
        className: N.tagPreview,
        textClassName: N.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: h.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: b.name
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: v.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, t.jsx)(r.Text, {
        className: N.subtitle,
        variant: "text-md/normal",
        children: v.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: N.previewSection,
        children: [(0, t.jsxs)("div", {
          className: N.chatPreview,
          children: [(0, t.jsx)(r.Avatar, {
            src: U.getAvatarURL(T, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, t.jsxs)("div", {
            className: N.previewText,
            children: [(0, t.jsxs)("div", {
              className: N.userName,
              children: [(0, t.jsx)(r.NameWithRole, {
                className: N.userName,
                name: null !== (s = k.nick) && void 0 !== s ? s : U.username,
                color: null !== (i = k.colorString) && void 0 !== i ? i : void 0
              }), A && (0, t.jsx)(C.BaseClanTagChiplet, {
                clanBadge: w,
                clanTag: j,
                badgeSize: h.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, t.jsx)("div", {
              className: N.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, t.jsx)("div", {
              className: N.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, t.jsx)("div", {
          className: N.divider
        }), (0, t.jsxs)("div", {
          className: N.settingSection,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: v.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: v.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, t.jsx)(r.Switch, {
            onChange: () => B(!A),
            checked: A
          })]
        })]
      }), (0, t.jsx)(r.Button, {
        onClick: () => {
          (0, g.adoptClanIdentity)(T, A), p()
        },
        color: L ? r.Button.Colors.BRAND : r.Button.Colors.CUSTOM,
        style: L ? void 0 : {
          backgroundColor: _
        },
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/medium",
          className: L ? void 0 : N.ctaText,
          children: v.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}