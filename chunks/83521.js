"use strict";
t.r(l), t.d(l, {
  default: function() {
    return S
  }
});
var a = t("735250"),
  s = t("470079"),
  n = t("461920"),
  o = t("481060"),
  i = t("442837"),
  d = t("700582"),
  r = t("518738"),
  c = t("271383"),
  u = t("430824"),
  h = t("594174"),
  m = t("176278"),
  x = t("5192"),
  A = t("931240"),
  v = t("353093"),
  _ = t("114487"),
  C = t("979264"),
  f = t("981631"),
  T = t("921944"),
  g = t("689938"),
  N = t("107468");

function S(e) {
  var l, t, S, j, L;
  let {
    guildId: M,
    transitionState: D,
    onClose: I
  } = e, R = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(M), [M]), p = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), E = null == p ? void 0 : p.id, k = (0, i.useStateFromStores)([c.default], () => null == E ? null : c.default.getMember(M, E), [M, E]), O = null !== (S = null == k ? void 0 : k.colorString) && void 0 !== S ? S : void 0, B = x.default.getName(M, null, p), U = null !== (j = null == k ? void 0 : k.highestRoleId) && void 0 !== j ? j : void 0, y = (0, i.useStateFromStores)([u.default], () => null != U ? u.default.getRole(M, U) : void 0, [M, U]), P = (0, r.useRoleIcon)({
    roleId: null !== (L = null == y ? void 0 : y.id) && void 0 !== L ? L : void 0,
    size: 20,
    guildId: M
  }), w = s.useCallback(async () => {
    await (0, A.adoptClanIdentity)(M, !0, f.AnalyticsLocations.CLAN_ADOPT_IDENTITY_MODAL), I(T.ContentDismissActionType.PRIMARY)
  }, [I, M]), b = s.useCallback(() => {
    I(T.ContentDismissActionType.DISMISS)
  }, [I]);
  if (s.useEffect(() => ((null == R || null == p) && I(T.ContentDismissActionType.AUTO_DISMISS), () => {}), [p, R, M, I]), null == R || null == p) return null;
  let F = (0, v.getClanBadgeUrl)(R.id, null === (l = R.clan) || void 0 === l ? void 0 : l.badge);
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: D,
    size: o.ModalSize.SMALL,
    children: [(0, a.jsx)(o.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: N.mainContainer,
        children: [(0, a.jsxs)("div", {
          className: N.infoContainer,
          children: [(0, a.jsx)(_.default, {
            guild: R,
            iconSize: 64
          }), (0, a.jsxs)("div", {
            className: N.headerTextContainer,
            children: [(0, a.jsx)(o.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: R.name
              })
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
                guildName: R.name
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: N.skeletonChatContainer,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.default, {
              user: p,
              size: o.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: N.chat,
            children: [(0, a.jsxs)("div", {
              className: N.chatHeader,
              children: [(0, a.jsx)(o.Text, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "header-primary",
                children: (0, a.jsx)(o.NameWithRole, {
                  name: B,
                  color: O
                })
              }), (0, a.jsx)(C.BaseClanTagChiplet, {
                clanBadge: F,
                clanTag: null === (t = R.clan) || void 0 === t ? void 0 : t.tag,
                className: N.chiplet
              }), null != y && (0, a.jsx)("div", {
                className: N.roleContainer,
                children: (0, a.jsx)(m.default, {
                  ...P,
                  enableTooltip: !1,
                  name: null == y ? void 0 : y.name
                })
              })]
            }), (0, a.jsx)("div", {
              className: N.skeletonChatBody
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: N.footerTextContainer,
          children: [(0, a.jsxs)("div", {
            className: N.footerText,
            children: [(0, a.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "text-primary",
              children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE
            }), (0, a.jsx)(n.CheckmarkBoldIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.STATUS_POSITIVE
            })]
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE_CALLOUT
          })]
        })]
      })
    }), (0, a.jsxs)(o.ModalFooter, {
      children: [(0, a.jsx)(o.Button, {
        onClick: w,
        color: o.Button.Colors.BRAND_NEW,
        look: o.Button.Looks.FILLED,
        children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA
      }), (0, a.jsx)(o.Button, {
        onClick: b,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: g.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}