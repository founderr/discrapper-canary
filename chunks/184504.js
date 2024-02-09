"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("627445"),
  l = n.n(r),
  o = n("446674"),
  a = n("77078"),
  u = n("913144"),
  c = n("430713"),
  d = n("984557"),
  f = n("367376"),
  h = n("878720"),
  E = n("601745"),
  _ = n("650893"),
  C = n("697218"),
  p = n("145131"),
  I = n("583227"),
  R = n("49111"),
  v = n("482931"),
  S = n("782340"),
  A = n("659248");
let N = e => {
  let {
    label: t,
    text: n,
    children: i,
    ...r
  } = e;
  return (0, s.jsxs)(p.default, {
    direction: p.default.Direction.VERTICAL,
    ...r,
    children: [(0, s.jsx)(a.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, s.jsx)(a.Text, {
      variant: "text-md/normal",
      className: A.sectionBody,
      children: n
    }) : null, (0, s.jsx)(p.default.Child, {
      wrap: !0,
      children: i
    })]
  })
};
class g extends i.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(R.UserFlags.MFA_SMS), i = e.hasFlag(R.UserFlags.PARTNER) || e.hasFlag(R.UserFlags.STAFF);
    return t ? (0, s.jsxs)(N, {
      label: S.default.Messages.MFA_SMS_ENABLE,
      text: S.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, s.jsxs)(a.Text, {
        variant: "text-md/normal",
        className: A.sectionBody,
        children: [(0, s.jsx)("strong", {
          className: A.phoneNumber,
          children: S.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, s.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.LINK,
          size: a.Button.Sizes.MIN,
          className: A.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: S.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, s.jsx)(a.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || i,
        color: a.Button.Colors.GREEN,
        size: a.Button.Sizes.SMALL,
        children: i ? S.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? S.default.Messages.MFA_SMS_ALREADY_ENABLED : S.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, s.jsx)(N, {
      label: S.default.Messages.MFA_SMS_ENABLE,
      text: S.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, s.jsx)(a.Button, {
        onClick: this.handleEnableSMS,
        color: a.Button.Colors.GREEN,
        size: a.Button.Sizes.SMALL,
        disabled: i,
        children: i ? S.default.Messages.MFA_SMS_DISABLED_PARTNER : S.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, s.jsx)(N, {
      label: S.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: S.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, s.jsx)(d.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => u.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, s.jsx)(a.Button, {
          color: a.Button.Colors.GREEN,
          size: a.Button.Sizes.SMALL,
          children: S.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, s.jsxs)(a.ModalHeader, {
      separator: !1,
      children: [(0, s.jsxs)(p.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, s.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          className: A.header,
          children: f.default.parse(S.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, s.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: A.subHeader,
          children: e
        })]
      }), (0, s.jsx)(p.default.Child, {
        grow: 0,
        children: (0, s.jsx)(a.ModalCloseButton, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, s.jsx)(a.DeclarativeConfirmModal, {
      dismissable: !0,
      header: S.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: S.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: S.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        u.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, s.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        children: e
      })
    })
  }
  render() {
    let {
      isTotp: e
    } = this.props;
    return e ? this.renderTotp() : this.renderWebAuthn()
  }
  renderTotp() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, s.jsxs)(a.ModalRoot, {
      transitionState: e,
      className: A.modal,
      children: [this.renderHeader(S.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, s.jsxs)(a.ModalContent, {
        className: A.modalInner,
        children: [this.renderSMSSection(), (0, s.jsx)(a.FormDivider, {
          className: A.divider
        }), this.renderBackupCodesSection()]
      }), t && this.renderConfirmModal(S.default.Messages.TWO_FA_CONFIRM_BODY)]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, s.jsxs)(a.ModalRoot, {
      transitionState: e,
      className: A.modal,
      children: [this.renderHeader(S.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, s.jsx)(a.ModalContent, {
        className: A.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(S.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, a.openModal)(t => (0, s.jsx)(E.default, {
      reason: h.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: v.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showConfirmModal: !1
    }, this.handleCloseModal = () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: t
      } = this.props;
      t ? null == e || e() : this.setState({
        showConfirmModal: !0
      })
    }, this.getDownloadFileContents = () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: n
          } = e;
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(S.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        t = S.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }, this.handleChangePhoneNumber = () => {
      this.openPhoneVerificationModal()
    }, this.handleEnableSMS = () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, a.openModal)(e => (0, s.jsx)(I.default, {
          ...e,
          handleSubmit: e => c.default.enableSMS(e),
          title: S.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }
  }
}
var m = o.default.connectStores([C.default, _.default], () => {
  let e = C.default.getCurrentUser();
  return l(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: _.default.getBackupCodes(),
    hasSeenBackupPrompt: _.default.hasSeenBackupPrompt
  }
})(g)