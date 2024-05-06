"use strict";
t.r(a), t("47120");
var l = t("735250"),
  s = t("470079"),
  i = t("688619"),
  d = t.n(i),
  n = t("442837"),
  r = t("481060"),
  c = t("271383"),
  u = t("430824"),
  S = t("594174"),
  o = t("153124"),
  x = t("626135"),
  g = t("931240"),
  m = t("353093"),
  C = t("979264"),
  h = t("284019"),
  v = t("308083"),
  _ = t("981631"),
  N = t("689938"),
  E = t("912982");
a.default = e => {
  var a, t, i;
  let {
    guildId: T,
    tag: j,
    brandPrimaryColor: f,
    transitionState: A,
    onClose: p
  } = e, L = (0, o.useUID)(), [M, U] = s.useState(!0), b = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(T)), k = (0, n.useStateFromStores)([S.default], () => S.default.getCurrentUser()), I = (0, n.useStateFromStores)([c.default], () => null != k ? c.default.getMember(T, k.id) : null);
  if (s.useEffect(() => {
      x.default.track(_.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
        guild_id: T
      })
    }, [T]), null == b || null == k || null == I) return null;
  let w = null != f ? {
      background: "radial-gradient(circle at top, ".concat(d()(f).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    z = (0, m.getClanBadgeUrl)(b.id, null === (a = b.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, l.jsx)(r.ModalRoot, {
    className: E.modal,
    transitionState: A,
    "aria-labelledby": L,
    size: r.ModalSize.SMALL,
    children: (0, l.jsxs)("div", {
      className: E.content,
      style: w,
      children: [(0, l.jsx)(C.BaseClanTagChiplet, {
        clanTag: j,
        clanBadge: z,
        className: E.tagPreview,
        textClassName: E.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: b.name
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: N.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, l.jsx)(r.Text, {
        className: E.subtitle,
        variant: "text-md/normal",
        children: N.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, l.jsxs)("div", {
        className: E.previewSection,
        children: [(0, l.jsxs)("div", {
          className: E.chatPreview,
          children: [(0, l.jsx)(r.Avatar, {
            src: k.getAvatarURL(T, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, l.jsxs)("div", {
            className: E.previewText,
            children: [(0, l.jsxs)("div", {
              className: E.userName,
              children: [(0, l.jsx)(r.NameWithRole, {
                className: E.userName,
                name: null !== (t = I.nick) && void 0 !== t ? t : k.username,
                color: null !== (i = I.colorString) && void 0 !== i ? i : void 0
              }), M && (0, l.jsx)(C.BaseClanTagChiplet, {
                clanBadge: z,
                clanTag: j,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, l.jsx)("div", {
              className: E.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, l.jsx)("div", {
              className: E.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, l.jsx)("div", {
          className: E.divider
        }), (0, l.jsxs)("div", {
          className: E.settingSection,
          children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, l.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, l.jsx)(r.Switch, {
            onChange: () => U(!M),
            checked: M
          })]
        })]
      }), (0, l.jsx)(h.default, {
        themeColor: f,
        onClick: () => {
          (0, g.adoptClanIdentity)(T, M), x.default.track(_.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
            guild_id: T,
            enable_tag: M
          }), p()
        },
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/medium",
          children: N.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}