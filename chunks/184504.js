"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  o = n.n(s),
  a = n("446674"),
  u = n("77078"),
  l = n("913144"),
  d = n("430713"),
  c = n("984557"),
  E = n("367376"),
  f = n("878720"),
  _ = n("601745"),
  S = n("650893"),
  I = n("697218"),
  T = n("145131"),
  h = n("583227"),
  N = n("49111"),
  p = n("482931"),
  A = n("782340"),
  R = n("193384");
let C = e => {
  let {
    label: t,
    text: n,
    children: i,
    ...s
  } = e;
  return (0, r.jsxs)(T.default, {
    direction: T.default.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(u.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: R.sectionBody,
      children: n
    }) : null, (0, r.jsx)(T.default.Child, {
      wrap: !0,
      children: i
    })]
  })
};
class v extends i.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(N.UserFlags.MFA_SMS), i = e.hasFlag(N.UserFlags.PARTNER) || e.hasFlag(N.UserFlags.STAFF);
    return t ? (0, r.jsxs)(C, {
      label: A.default.Messages.MFA_SMS_ENABLE,
      text: A.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(u.Text, {
        variant: "text-md/normal",
        className: R.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: R.phoneNumber,
          children: A.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.LINK,
          size: u.Button.Sizes.MIN,
          className: R.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: A.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(u.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || i,
        color: u.Button.Colors.GREEN,
        size: u.Button.Sizes.SMALL,
        children: i ? A.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? A.default.Messages.MFA_SMS_ALREADY_ENABLED : A.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(C, {
      label: A.default.Messages.MFA_SMS_ENABLE,
      text: A.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(u.Button, {
        onClick: this.handleEnableSMS,
        color: u.Button.Colors.GREEN,
        size: u.Button.Sizes.SMALL,
        disabled: i,
        children: i ? A.default.Messages.MFA_SMS_DISABLED_PARTNER : A.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(C, {
      label: A.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: A.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, r.jsx)(c.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => l.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(u.Button, {
          color: u.Button.Colors.GREEN,
          size: u.Button.Sizes.SMALL,
          children: A.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(u.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(T.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          className: R.header,
          children: E.default.parse(A.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          className: R.subHeader,
          children: e
        })]
      }), (0, r.jsx)(T.default.Child, {
        grow: 0,
        children: (0, r.jsx)(u.ModalCloseButton, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, r.jsx)(u.DeclarativeConfirmModal, {
      dismissable: !0,
      header: A.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: A.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: A.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        l.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, r.jsx)(u.Text, {
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
    return (0, r.jsxs)(u.ModalRoot, {
      transitionState: e,
      className: R.modal,
      children: [this.renderHeader(A.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(u.ModalContent, {
        className: R.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(u.FormDivider, {
          className: R.divider
        }), this.renderBackupCodesSection()]
      }), t && this.renderConfirmModal(A.default.Messages.TWO_FA_CONFIRM_BODY)]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: t
    } = this.state;
    return (0, r.jsxs)(u.ModalRoot, {
      transitionState: e,
      className: R.modal,
      children: [this.renderHeader(A.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(u.ModalContent, {
        className: R.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(A.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, u.openModal)(t => (0, r.jsx)(_.default, {
      reason: f.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: p.PHONE_VERIFICATION_MODAL_KEY
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
          return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(A.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        t = A.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }, this.handleChangePhoneNumber = () => {
      this.openPhoneVerificationModal()
    }, this.handleEnableSMS = () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, u.openModal)(e => (0, r.jsx)(h.default, {
          ...e,
          handleSubmit: e => d.default.enableSMS(e),
          title: A.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }
  }
}
var m = a.default.connectStores([I.default, S.default], () => {
  let e = I.default.getCurrentUser();
  return o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: S.default.getBackupCodes(),
    hasSeenBackupPrompt: S.default.hasSeenBackupPrompt
  }
})(v)