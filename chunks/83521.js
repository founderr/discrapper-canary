"use strict";
t.r(l), t.d(l, {
  default: function() {
    return T
  }
});
var a = t("735250"),
  s = t("470079"),
  n = t("461920"),
  i = t("481060"),
  o = t("442837"),
  d = t("700582"),
  r = t("518738"),
  u = t("271383"),
  c = t("430824"),
  h = t("594174"),
  m = t("176278"),
  v = t("5192"),
  x = t("931240"),
  f = t("114487"),
  A = t("979264"),
  _ = t("689938"),
  C = t("134607");

function T(e) {
  var l, t, T, g;
  let {
    guildId: j,
    transitionState: N,
    onClose: S
  } = e, L = (0, o.useStateFromStores)([c.default], () => c.default.getGuild(j), [j]), R = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), E = null == R ? void 0 : R.id, M = (0, o.useStateFromStores)([u.default], () => null == E ? null : u.default.getMember(j, E), [j, E]), p = null !== (t = null == M ? void 0 : M.colorString) && void 0 !== t ? t : void 0, k = v.default.getName(j, null, R), I = null !== (T = null == M ? void 0 : M.highestRoleId) && void 0 !== T ? T : void 0, D = (0, o.useStateFromStores)([c.default], () => null != I ? c.default.getRole(j, I) : void 0, [j, I]), O = (0, r.useRoleIcon)({
    roleId: null !== (g = null == D ? void 0 : D.id) && void 0 !== g ? g : void 0,
    size: 20,
    guildId: j
  }), B = s.useCallback(async () => {
    null != L && (await (0, x.adoptClanIdentity)(L.id, !0), S())
  }, [L, S]), U = s.useCallback(async () => {
    null != L && (await (0, x.adoptClanIdentity)(L.id, !1), S())
  }, [L, S]);
  return (s.useEffect(() => ((null == L || null == R) && S(), () => {}), [R, L, S]), null == L || null == R) ? null : (0, a.jsxs)(i.ModalRoot, {
    transitionState: N,
    size: i.ModalSize.SMALL,
    children: [(0, a.jsx)(i.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: C.mainContainer,
        children: [(0, a.jsxs)("div", {
          className: C.infoContainer,
          children: [(0, a.jsx)(f.default, {
            guild: L,
            iconSize: 64
          }), (0, a.jsxs)("div", {
            className: C.headerTextContainer,
            children: [(0, a.jsx)(i.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: L.name
              })
            }), (0, a.jsx)(i.Text, {
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
              user: R,
              size: i.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: C.chat,
            children: [(0, a.jsxs)("div", {
              className: C.chatHeader,
              children: [(0, a.jsx)(i.Text, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "header-primary",
                children: (0, a.jsx)(i.NameWithRole, {
                  name: k,
                  color: p
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
            children: [(0, a.jsx)(i.Text, {
              variant: "text-md/medium",
              color: "text-primary",
              children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE
            }), (0, a.jsx)(n.CheckmarkBoldIcon, {
              width: 16,
              height: 16,
              color: i.tokens.colors.STATUS_POSITIVE
            })]
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE_CALLOUT
          })]
        })]
      })
    }), (0, a.jsxs)(i.ModalFooter, {
      children: [(0, a.jsx)(i.Button, {
        onClick: B,
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA
      }), (0, a.jsx)(i.Button, {
        onClick: U,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        children: _.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}