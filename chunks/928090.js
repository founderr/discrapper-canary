a.r(s), a.d(s, {
  default: function() {
    return x
  }
}), a(47120);
var t = a(735250),
  r = a(470079),
  n = a(990547),
  o = a(481060),
  i = a(37234),
  l = a(700582),
  c = a(213609),
  d = a(434404),
  R = a(706454),
  E = a(285952),
  N = a(768581),
  _ = a(5192),
  u = a(51144),
  m = a(981631),
  T = a(12619),
  I = a(689938),
  S = a(833260);
let A = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.default.locale;
  return "https://".concat(m.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function x(e) {
  let {
    guild: s,
    toUser: R,
    fromUser: x,
    onClose: f,
    transitionState: h
  } = e, [O, p] = r.useState(!1), F = s.hasFeature(m.oNc.VERIFIED) || s.hasFeature(m.oNc.PARTNERED), M = F ? I.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, P = F ? I.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
    ticketUrl: A()
  }) : null, C = s.hasFeature(m.oNc.CREATOR_MONETIZABLE) || s.hasFeature(m.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
  async function Z(e) {
    await d.Z.transferOwnership(s.id, R.id, T.X.EMAIL, e)
  }
  async function g() {
    await d.Z.sendTransferOwnershipPincode(s.id, !0)
  }
  async function L(e) {
    e.preventDefault(), f();
    try {
      x.mfaEnabled || null == x.email ? (await d.Z.transferOwnership(s.id, R.id, x.mfaEnabled ? T.X.MFA : null), (0, i.xf)()) : (await d.Z.sendTransferOwnershipPincode(s.id), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("94566")]).then(a.bind(a, 965072));
        return s => (0, t.jsx)(e, {
          ...s,
          onFormSubmit: Z,
          onResend: g,
          onSuccess: i.xf,
          headerText: I.Z.Messages.TRANSFER_OWNERSHIP,
          confirmButtonText: I.Z.Messages.TRANSFER_OWNERSHIP,
          confirmButtonColor: o.Button.Colors.RED,
          impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
        })
      }))
    } catch (e) {
      e.body.code === m.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, o.openModal)(e => (0, t.jsx)(o.ConfirmModal, {
        ...e,
        header: I.Z.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
        confirmText: I.Z.Messages.GOT_IT,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, t.jsx)(o.Text, {
          variant: "text-md/normal",
          children: I.Z.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
            server_subscription_owner_transfer_article: m.T23
          })
        })
      }))
    }
  }(0, c.Z)({
    type: n.ImpressionTypes.MODAL,
    name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let j = _.ZP.getNickname(s.id, void 0, R),
    D = R.hasAvatarForGuild(s.id),
    v = () => (0, t.jsxs)("span", {
      className: S.guildTransfer,
      children: [null != s.icon ? (0, t.jsx)(o.Avatar, {
        src: N.ZP.getGuildIconURL({
          id: s.id,
          icon: s.icon,
          size: 16
        }),
        size: o.AvatarSizes.SIZE_16,
        className: S.miniGuildIcon,
        "aria-hidden": !0
      }) : null, (0, t.jsx)(o.Text, {
        className: S.guildName,
        variant: "text-sm/bold",
        children: s.toString()
      })]
    });
  return (0, t.jsx)(o.ModalRoot, {
    transitionState: h,
    children: (0, t.jsxs)("form", {
      onSubmit: L,
      children: [(0, t.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, t.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: S.header,
          children: I.Z.Messages.TRANSFER_OWNERSHIP
        })
      }), (0, t.jsxs)(o.ModalContent, {
        children: [(0, t.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: S.subHeader,
          children: null != j || D ? I.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
            GuildHook: v,
            user: (0, u.W5)(R),
            AKAHook: function() {
              return (0, t.jsxs)("span", {
                className: S.akaTransfer,
                children: [(0, t.jsx)(o.TextBadge, {
                  text: I.Z.Messages.AKA,
                  disableColor: !0,
                  className: S.akaBadge
                }), D ? (0, t.jsx)(o.Avatar, {
                  src: R.getAvatarURL(s.id, 16, !0),
                  size: o.AvatarSizes.SIZE_16,
                  className: S.miniAvatar,
                  "aria-hidden": !0
                }) : null, (0, t.jsx)(o.Text, {
                  className: S.nickname,
                  variant: "text-sm/normal",
                  children: null != j ? j : u.ZP.getName(R)
                })]
              })
            }
          }) : I.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
            GuildHook: v,
            user: (0, u.W5)(R)
          })
        }), (0, t.jsxs)(E.Z, {
          className: S.fromToWrapper,
          justify: E.Z.Justify.CENTER,
          children: [(0, t.jsx)("div", {
            className: S.from,
            children: (0, t.jsx)(l.Z, {
              user: x,
              size: o.AvatarSizes.SIZE_80
            })
          }), (0, t.jsx)("div", {
            className: S.to,
            children: (0, t.jsx)(l.Z, {
              user: R,
              size: o.AvatarSizes.SIZE_80
            })
          })]
        }), C && (0, t.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: S.roleSubscriptionText,
          children: I.Z.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
            server_subscription_owner_transfer_article: m.T23
          })
        }), (0, t.jsx)(o.FormSwitch, {
          disabled: F,
          tooltipNote: M,
          hideBorder: !0,
          value: O,
          onChange: function(e) {
            p(e)
          },
          children: (0, t.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            children: I.Z.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
              username: (0, u.W5)(R)
            })
          })
        }), (0, t.jsx)(o.FormText, {
          className: S.protectedText,
          type: o.FormText.Types.DEFAULT,
          children: P
        })]
      }), (0, t.jsxs)(o.ModalFooter, {
        children: [(0, t.jsx)(o.Button, {
          type: "submit",
          disabled: !O,
          color: o.Button.Colors.RED,
          children: I.Z.Messages.TRANSFER_OWNERSHIP
        }), (0, t.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: f,
          children: I.Z.Messages.CANCEL
        })]
      })]
    })
  })
}