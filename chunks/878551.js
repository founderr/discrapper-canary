"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("222007");
var n = a("37983"),
  r = a("884691"),
  s = a("759843"),
  i = a("77078"),
  l = a("54239"),
  o = a("87657"),
  d = a("428958"),
  u = a("592407"),
  c = a("915639"),
  f = a("145131"),
  R = a("956089"),
  E = a("315102"),
  N = a("387111"),
  T = a("158998"),
  _ = a("49111"),
  m = a("474695"),
  S = a("782340"),
  I = a("272916");
let A = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.default.locale;
  return "https://".concat(_.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function g(e) {
  let {
    guild: t,
    toUser: c,
    fromUser: g,
    onClose: h,
    transitionState: p
  } = e, [O, x] = r.useState(!1), v = t.hasFeature(_.GuildFeatures.VERIFIED) || t.hasFeature(_.GuildFeatures.PARTNERED), C = v ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, F = v ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
    ticketUrl: A()
  }) : null, M = t.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function D(e) {
    await u.default.transferOwnership(t.id, c.id, m.TransferOwnershipVerificationTypes.EMAIL, e)
  }
  async function L() {
    await u.default.sendTransferOwnershipPincode(t.id, !0)
  }
  async function b(e) {
    e.preventDefault(), h();
    try {
      g.mfaEnabled || null == g.email ? (await u.default.transferOwnership(t.id, c.id, g.mfaEnabled ? m.TransferOwnershipVerificationTypes.MFA : null), (0, l.popLayer)()) : (await u.default.sendTransferOwnershipPincode(t.id), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await a.el("644512").then(a.bind(a, "644512"));
        return t => (0, n.jsx)(e, {
          ...t,
          onFormSubmit: D,
          onResend: L,
          onSuccess: l.popLayer,
          headerText: S.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonText: S.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonColor: i.Button.Colors.RED,
          impressionName: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
        })
      }))
    } catch (e) {
      e.body.code === _.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
        ...e,
        header: S.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
        confirmText: S.default.Messages.GOT_IT,
        confirmButtonColor: i.Button.Colors.BRAND,
        children: (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          children: S.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
            server_subscription_owner_transfer_article: _.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        })
      }))
    }
  }(0, d.default)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let P = N.default.getNickname(t.id, void 0, c),
    j = c.hasAvatarForGuild(t.id),
    y = () => (0, n.jsxs)("span", {
      className: I.guildTransfer,
      children: [null != t.icon ? (0, n.jsx)(i.Avatar, {
        src: E.default.getGuildIconURL({
          id: t.id,
          icon: t.icon,
          size: 16
        }),
        size: i.AvatarSizes.SIZE_16,
        className: I.miniGuildIcon,
        "aria-hidden": !0
      }) : null, (0, n.jsx)(i.Text, {
        className: I.guildName,
        variant: "text-sm/bold",
        children: t.toString()
      })]
    });
  return (0, n.jsx)(i.ModalRoot, {
    transitionState: p,
    children: (0, n.jsxs)("form", {
      onSubmit: b,
      children: [(0, n.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          className: I.header,
          children: S.default.Messages.TRANSFER_OWNERSHIP
        })
      }), (0, n.jsxs)(i.ModalContent, {
        children: [(0, n.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: I.subHeader,
          children: null != P || j ? S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
            GuildHook: y,
            user: (0, T.getUserTag)(c),
            AKAHook: function() {
              return (0, n.jsxs)("span", {
                className: I.akaTransfer,
                children: [(0, n.jsx)(R.TextBadge, {
                  text: S.default.Messages.AKA,
                  disableColor: !0,
                  className: I.akaBadge
                }), j ? (0, n.jsx)(i.Avatar, {
                  src: c.getAvatarURL(t.id, 16, !0),
                  size: i.AvatarSizes.SIZE_16,
                  className: I.miniAvatar,
                  "aria-hidden": !0
                }) : null, (0, n.jsx)(i.Text, {
                  className: I.nickname,
                  variant: "text-sm/normal",
                  children: null != P ? P : T.default.getName(c)
                })]
              })
            }
          }) : S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
            GuildHook: y,
            user: (0, T.getUserTag)(c)
          })
        }), (0, n.jsxs)(f.default, {
          className: I.fromToWrapper,
          justify: f.default.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: I.from,
            children: (0, n.jsx)(o.default, {
              user: g,
              size: i.AvatarSizes.SIZE_80
            })
          }), (0, n.jsx)("div", {
            className: I.to,
            children: (0, n.jsx)(o.default, {
              user: c,
              size: i.AvatarSizes.SIZE_80
            })
          })]
        }), M && (0, n.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: I.roleSubscriptionText,
          children: S.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
            server_subscription_owner_transfer_article: _.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        }), (0, n.jsx)(i.FormSwitch, {
          disabled: v,
          tooltipNote: C,
          hideBorder: !0,
          value: O,
          onChange: function(e) {
            x(e)
          },
          children: (0, n.jsx)(i.FormText, {
            type: i.FormText.Types.DESCRIPTION,
            children: S.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
              username: (0, T.getUserTag)(c)
            })
          })
        }), (0, n.jsx)(i.FormText, {
          className: I.protectedText,
          type: i.FormText.Types.DEFAULT,
          children: F
        })]
      }), (0, n.jsxs)(i.ModalFooter, {
        children: [(0, n.jsx)(i.Button, {
          type: "submit",
          disabled: !O,
          color: i.Button.Colors.RED,
          children: S.default.Messages.TRANSFER_OWNERSHIP
        }), (0, n.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: h,
          children: S.default.Messages.CANCEL
        })]
      })]
    })
  })
}