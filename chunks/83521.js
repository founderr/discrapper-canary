"use strict";
t.r(l), t.d(l, {
  default: function() {
    return T
  }
});
var a = t("735250"),
  s = t("470079"),
  o = t("461920"),
  n = t("481060"),
  i = t("442837"),
  d = t("700582"),
  r = t("518738"),
  u = t("271383"),
  c = t("430824"),
  h = t("594174"),
  m = t("176278"),
  x = t("5192"),
  v = t("931240"),
  f = t("114487"),
  A = t("979264"),
  _ = t("689938"),
  C = t("134607");

function T(e) {
  var l, t, T, N;
  let {
    guildId: g,
    transitionState: j,
    onClose: S
  } = e, L = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(g), [g]), M = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), R = null == M ? void 0 : M.id, p = (0, i.useStateFromStores)([u.default], () => null == R ? null : u.default.getMember(g, R), [g, R]), E = null !== (t = null == p ? void 0 : p.colorString) && void 0 !== t ? t : void 0, k = x.default.getName(g, null, M), I = null !== (T = null == p ? void 0 : p.highestRoleId) && void 0 !== T ? T : void 0, D = (0, i.useStateFromStores)([c.default], () => null != I ? c.default.getRole(g, I) : void 0, [g, I]), O = (0, r.useRoleIcon)({
    roleId: null !== (N = null == D ? void 0 : D.id) && void 0 !== N ? N : void 0,
    size: 20,
    guildId: g
  }), B = s.useCallback(async () => {
    null != L && (await (0, v.adoptClanIdentity)(L.id, !0), S())
  }, [L, S]), w = s.useCallback(async () => {
    null != L && (await (0, v.adoptClanIdentity)(L.id, !1), S())
  }, [L, S]);
  return (s.useEffect(() => ((null == L || null == M) && S(), () => {}), [M, L, S]), null == L || null == M) ? null : (0, a.jsxs)(n.ModalRoot, {
    transitionState: j,
    size: n.ModalSize.SMALL,
    children: [(0, a.jsx)(n.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: C.mainContainer,
        children: [(0, a.jsxs)("div", {
          className: C.infoContainer,
          children: [(0, a.jsx)(f.default, {
            guild: L,
            iconSize: 64
          }), (0, a.jsxs)("div", {
            className: C.headerTextContainer,
            children: [(0, a.jsx)(n.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: L.name
              })
            }), (0, a.jsx)(n.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
                guildName: L.name
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: C.skeletonChatContainer,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.default, {
              user: M,
              size: n.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: C.chat,
            children: [(0, a.jsxs)("div", {
              className: C.chatHeader,
              children: [(0, a.jsx)(n.Text, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "header-primary",
                children: (0, a.jsx)(n.NameWithRole, {
                  name: k,
                  color: E
                })
              }), (0, a.jsx)(A.BaseClanTagChiplet, {
                clanTag: null === (l = L.clan) || void 0 === l ? void 0 : l.tag,
                className: C.chiplet
              }), null != D && (0, a.jsx)("div", {
                className: C.roleContainer,
                children: (0, a.jsx)(m.default, {
                  ...O,
                  enableTooltip: !1,
                  name: null == D ? void 0 : D.name
                })
              })]
            }), (0, a.jsx)("div", {
              className: C.skeletonChatBody
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: C.footerTextContainer,
          children: [(0, a.jsxs)("div", {
            className: C.footerText,
            children: [(0, a.jsx)(n.Text, {
              variant: "text-md/medium",
              color: "text-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE
            }), (0, a.jsx)(o.CheckmarkBoldIcon, {
              width: 16,
              height: 16,
              color: n.tokens.colors.STATUS_POSITIVE
            })]
          }), (0, a.jsx)(n.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE_CALLOUT
          })]
        })]
      })
    }), (0, a.jsxs)(n.ModalFooter, {
      children: [(0, a.jsx)(n.Button, {
        onClick: B,
        color: n.Button.Colors.BRAND_NEW,
        look: n.Button.Looks.FILLED,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA
      }), (0, a.jsx)(n.Button, {
        onClick: w,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}