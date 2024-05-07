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
  j = s("689938"),
  N = s("912982");
a.default = e => {
  var a, s, i;
  let {
    guildId: T,
    tag: f,
    brandPrimaryColor: _,
    transitionState: p,
    onClose: E
  } = e, M = (0, x.useUID)(), [b, k] = l.useState(!0), A = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(T)), U = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), L = (0, n.useStateFromStores)([c.default], () => null != U ? c.default.getMember(T, U.id) : null);
  if (l.useEffect(() => {
      (0, m.trackConvertSuccessModalViewed)(T)
    }, [T]), null == A || null == U || null == L) return null;
  let w = null != _ ? {
      background: "radial-gradient(circle at top, ".concat(d()(_).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    z = (0, g.getClanBadgeUrl)(A.id, null === (a = A.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsx)(r.ModalRoot, {
    className: N.modal,
    transitionState: p,
    "aria-labelledby": M,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: N.content,
      style: w,
      children: [(0, t.jsx)(h.BaseClanTagChiplet, {
        clanTag: f,
        clanBadge: z,
        className: N.tagPreview,
        textClassName: N.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: A.name
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: j.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, t.jsx)(r.Text, {
        className: N.subtitle,
        variant: "text-md/normal",
        children: j.default.Messages.CLAN_SUCCESS_SUBTITLE
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
                name: null !== (s = L.nick) && void 0 !== s ? s : U.username,
                color: null !== (i = L.colorString) && void 0 !== i ? i : void 0
              }), b && (0, t.jsx)(h.BaseClanTagChiplet, {
                clanBadge: z,
                clanTag: f,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
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
              children: j.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: j.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, t.jsx)(r.Switch, {
            onChange: () => k(!b),
            checked: b
          })]
        })]
      }), (0, t.jsx)(C.default, {
        themeColor: _,
        onClick: () => {
          (0, S.adoptClanIdentity)(T, b), (0, m.trackConvertSuccessModalConfirm)(T, b), E()
        },
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/medium",
          children: j.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}