"use strict";
t.r(l), t.d(l, {
  default: function() {
    return S
  }
});
var s = t("735250"),
  a = t("470079"),
  o = t("461920"),
  n = t("481060"),
  i = t("442837"),
  d = t("700582"),
  r = t("518738"),
  c = t("271383"),
  u = t("430824"),
  h = t("594174"),
  m = t("176278"),
  x = t("5192"),
  A = t("931240"),
  v = t("114487"),
  f = t("979264"),
  C = t("921944"),
  _ = t("689938"),
  T = t("134607");

function S(e) {
  var l, t, S, N;
  let {
    guildId: g,
    transitionState: j,
    onClose: L
  } = e, M = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(g), [g]), R = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), p = null == R ? void 0 : R.id, I = (0, i.useStateFromStores)([c.default], () => null == p ? null : c.default.getMember(g, p), [g, p]), D = null !== (t = null == I ? void 0 : I.colorString) && void 0 !== t ? t : void 0, E = x.default.getName(g, null, R), k = null !== (S = null == I ? void 0 : I.highestRoleId) && void 0 !== S ? S : void 0, O = (0, i.useStateFromStores)([u.default], () => null != k ? u.default.getRole(g, k) : void 0, [g, k]), B = (0, r.useRoleIcon)({
    roleId: null !== (N = null == O ? void 0 : O.id) && void 0 !== N ? N : void 0,
    size: 20,
    guildId: g
  }), U = a.useCallback(async () => {
    await (0, A.adoptClanIdentity)(g, !0), L(C.ContentDismissActionType.PRIMARY)
  }, [L, g]), y = a.useCallback(() => {
    L(C.ContentDismissActionType.DISMISS)
  }, [L]);
  return (a.useEffect(() => ((null == M || null == R) && L(C.ContentDismissActionType.AUTO_DISMISS), () => {}), [R, M, g, L]), null == M || null == R) ? null : (0, s.jsxs)(n.ModalRoot, {
    transitionState: j,
    size: n.ModalSize.SMALL,
    children: [(0, s.jsx)(n.ModalContent, {
      children: (0, s.jsxs)("div", {
        className: T.mainContainer,
        children: [(0, s.jsxs)("div", {
          className: T.infoContainer,
          children: [(0, s.jsx)(v.default, {
            guild: M,
            iconSize: 64
          }), (0, s.jsxs)("div", {
            className: T.headerTextContainer,
            children: [(0, s.jsx)(n.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: M.name
              })
            }), (0, s.jsx)(n.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
                guildName: M.name
              })
            })]
          })]
        }), (0, s.jsxs)("div", {
          className: T.skeletonChatContainer,
          children: [(0, s.jsx)("div", {
            children: (0, s.jsx)(d.default, {
              user: R,
              size: n.AvatarSizes.SIZE_40
            })
          }), (0, s.jsxs)("div", {
            className: T.chat,
            children: [(0, s.jsxs)("div", {
              className: T.chatHeader,
              children: [(0, s.jsx)(n.Text, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "header-primary",
                children: (0, s.jsx)(n.NameWithRole, {
                  name: E,
                  color: D
                })
              }), (0, s.jsx)(f.BaseClanTagChiplet, {
                clanTag: null === (l = M.clan) || void 0 === l ? void 0 : l.tag,
                className: T.chiplet
              }), null != O && (0, s.jsx)("div", {
                className: T.roleContainer,
                children: (0, s.jsx)(m.default, {
                  ...B,
                  enableTooltip: !1,
                  name: null == O ? void 0 : O.name
                })
              })]
            }), (0, s.jsx)("div", {
              className: T.skeletonChatBody
            })]
          })]
        }), (0, s.jsxs)("div", {
          className: T.footerTextContainer,
          children: [(0, s.jsxs)("div", {
            className: T.footerText,
            children: [(0, s.jsx)(n.Text, {
              variant: "text-md/medium",
              color: "text-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE
            }), (0, s.jsx)(o.CheckmarkBoldIcon, {
              width: 16,
              height: 16,
              color: n.tokens.colors.STATUS_POSITIVE
            })]
          }), (0, s.jsx)(n.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE_CALLOUT
          })]
        })]
      })
    }), (0, s.jsxs)(n.ModalFooter, {
      children: [(0, s.jsx)(n.Button, {
        onClick: U,
        color: n.Button.Colors.BRAND_NEW,
        look: n.Button.Looks.FILLED,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA
      }), (0, s.jsx)(n.Button, {
        onClick: y,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}