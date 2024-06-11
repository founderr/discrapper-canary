"use strict";
a.r(s), a.d(s, {
  default: function() {
    return A
  }
}), a("47120");
var t = a("735250"),
  r = a("470079"),
  n = a("990547"),
  i = a("481060"),
  o = a("37234"),
  l = a("700582"),
  d = a("213609"),
  u = a("434404"),
  c = a("706454"),
  R = a("285952"),
  E = a("768581"),
  _ = a("5192"),
  N = a("51144"),
  T = a("981631"),
  f = a("72766"),
  I = a("689938"),
  S = a("163303");
let m = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.default.locale;
  return "https://".concat(T.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function A(e) {
  let {
    guild: s,
    toUser: c,
    fromUser: A,
    onClose: O,
    transitionState: p
  } = e, [h, x] = r.useState(!1), F = s.hasFeature(T.GuildFeatures.VERIFIED) || s.hasFeature(T.GuildFeatures.PARTNERED), M = F ? I.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, g = F ? I.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
    ticketUrl: m()
  }) : null, P = s.hasFeature(T.GuildFeatures.CREATOR_MONETIZABLE) || s.hasFeature(T.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function C(e) {
    await u.default.transferOwnership(s.id, c.id, f.TransferOwnershipVerificationTypes.EMAIL, e)
  }
  async function L() {
    await u.default.sendTransferOwnershipPincode(s.id, !0)
  }
  async function j(e) {
    e.preventDefault(), O();
    try {
      A.mfaEnabled || null == A.email ? (await u.default.transferOwnership(s.id, c.id, A.mfaEnabled ? f.TransferOwnershipVerificationTypes.MFA : null), (0, o.popLayer)()) : (await u.default.sendTransferOwnershipPincode(s.id), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("94566")]).then(a.bind(a, "965072"));
        return s => (0, t.jsx)(e, {
          ...s,
          onFormSubmit: C,
          onResend: L,
          onSuccess: o.popLayer,
          headerText: I.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonText: I.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonColor: i.Button.Colors.RED,
          impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
        })
      }))
    } catch (e) {
      e.body.code === T.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)(e => (0, t.jsx)(i.ConfirmModal, {
        ...e,
        header: I.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
        confirmText: I.default.Messages.GOT_IT,
        confirmButtonColor: i.Button.Colors.BRAND,
        children: (0, t.jsx)(i.Text, {
          variant: "text-md/normal",
          children: I.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
            server_subscription_owner_transfer_article: T.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        })
      }))
    }
  }(0, d.default)({
    type: n.ImpressionTypes.MODAL,
    name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let D = _.default.getNickname(s.id, void 0, c),
    v = c.hasAvatarForGuild(s.id),
    y = () => (0, t.jsxs)("span", {
      className: S.guildTransfer,
      children: [null != s.icon ? (0, t.jsx)(i.Avatar, {
        src: E.default.getGuildIconURL({
          id: s.id,
          icon: s.icon,
          size: 16
        }),
        size: i.AvatarSizes.SIZE_16,
        className: S.miniGuildIcon,
        "aria-hidden": !0
      }) : null, (0, t.jsx)(i.Text, {
        className: S.guildName,
        variant: "text-sm/bold",
        children: s.toString()
      })]
    });
  return (0, t.jsx)(i.ModalRoot, {
    transitionState: p,
    children: (0, t.jsxs)("form", {
      onSubmit: j,
      children: [(0, t.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, t.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          className: S.header,
          children: I.default.Messages.TRANSFER_OWNERSHIP
        })
      }), (0, t.jsxs)(i.ModalContent, {
        children: [(0, t.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: S.subHeader,
          children: null != D || v ? I.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
            GuildHook: y,
            user: (0, N.getUserTag)(c),
            AKAHook: function() {
              return (0, t.jsxs)("span", {
                className: S.akaTransfer,
                children: [(0, t.jsx)(i.TextBadge, {
                  text: I.default.Messages.AKA,
                  disableColor: !0,
                  className: S.akaBadge
                }), v ? (0, t.jsx)(i.Avatar, {
                  src: c.getAvatarURL(s.id, 16, !0),
                  size: i.AvatarSizes.SIZE_16,
                  className: S.miniAvatar,
                  "aria-hidden": !0
                }) : null, (0, t.jsx)(i.Text, {
                  className: S.nickname,
                  variant: "text-sm/normal",
                  children: null != D ? D : N.default.getName(c)
                })]
              })
            }
          }) : I.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
            GuildHook: y,
            user: (0, N.getUserTag)(c)
          })
        }), (0, t.jsxs)(R.default, {
          className: S.fromToWrapper,
          justify: R.default.Justify.CENTER,
          children: [(0, t.jsx)("div", {
            className: S.from,
            children: (0, t.jsx)(l.default, {
              user: A,
              size: i.AvatarSizes.SIZE_80
            })
          }), (0, t.jsx)("div", {
            className: S.to,
            children: (0, t.jsx)(l.default, {
              user: c,
              size: i.AvatarSizes.SIZE_80
            })
          })]
        }), P && (0, t.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: S.roleSubscriptionText,
          children: I.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
            server_subscription_owner_transfer_article: T.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        }), (0, t.jsx)(i.FormSwitch, {
          disabled: F,
          tooltipNote: M,
          hideBorder: !0,
          value: h,
          onChange: function(e) {
            x(e)
          },
          children: (0, t.jsx)(i.FormText, {
            type: i.FormText.Types.DESCRIPTION,
            children: I.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
              username: (0, N.getUserTag)(c)
            })
          })
        }), (0, t.jsx)(i.FormText, {
          className: S.protectedText,
          type: i.FormText.Types.DEFAULT,
          children: g
        })]
      }), (0, t.jsxs)(i.ModalFooter, {
        children: [(0, t.jsx)(i.Button, {
          type: "submit",
          disabled: !h,
          color: i.Button.Colors.RED,
          children: I.default.Messages.TRANSFER_OWNERSHIP
        }), (0, t.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: O,
          children: I.default.Messages.CANCEL
        })]
      })]
    })
  })
}