"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  o = n.n(s),
  a = n("446674"),
  l = n("77078"),
  u = n("913144"),
  c = n("430713"),
  d = n("984557"),
  f = n("367376"),
  E = n("878720"),
  h = n("601745"),
  _ = n("650893"),
  p = n("697218"),
  S = n("145131"),
  C = n("583227"),
  R = n("49111"),
  I = n("482931"),
  A = n("782340"),
  v = n("193384");
let N = e => {
  let {
    label: t,
    text: n,
    children: i,
    ...s
  } = e;
  return (0, r.jsxs)(S.default, {
    direction: S.default.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(l.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: v.sectionBody,
      children: n
    }) : null, (0, r.jsx)(S.default.Child, {
      wrap: !0,
      children: i
    })]
  })
};
class m extends i.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(R.UserFlags.MFA_SMS), i = e.hasFlag(R.UserFlags.PARTNER) || e.hasFlag(R.UserFlags.STAFF);
    return t ? (0, r.jsxs)(N, {
      label: A.default.Messages.MFA_SMS_ENABLE,
      text: A.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        className: v.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: v.phoneNumber,
          children: A.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: v.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: A.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || i,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        children: i ? A.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? A.default.Messages.MFA_SMS_ALREADY_ENABLED : A.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(N, {
      label: A.default.Messages.MFA_SMS_ENABLE,
      text: A.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        disabled: i,
        children: i ? A.default.Messages.MFA_SMS_DISABLED_PARTNER : A.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(N, {
      label: A.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: A.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, r.jsx)(d.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => u.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, r.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          size: l.Button.Sizes.SMALL,
          children: A.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(S.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: f.default.parse(A.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: v.subHeader,
          children: e
        })]
      }), (0, r.jsx)(S.default.Child, {
        grow: 0,
        children: (0, r.jsx)(l.ModalCloseButton, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: t
    } = this.props;
    return (0, r.jsx)(l.DeclarativeConfirmModal, {
      dismissable: !0,
      header: A.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: A.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: A.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        u.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), t()
      },
      children: (0, r.jsx)(l.Text, {
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
    return (0, r.jsxs)(l.ModalRoot, {
      transitionState: e,
      className: v.modal,
      children: [this.renderHeader(A.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(l.ModalContent, {
        className: v.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, {
          className: v.divider
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
    return (0, r.jsxs)(l.ModalRoot, {
      transitionState: e,
      className: v.modal,
      children: [this.renderHeader(A.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(l.ModalContent, {
        className: v.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(A.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(t => (0, r.jsx)(h.default, {
      reason: E.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: I.PHONE_VERIFICATION_MODAL_KEY
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
        (0, l.openModal)(e => (0, r.jsx)(C.default, {
          ...e,
          handleSubmit: e => c.default.enableSMS(e),
          title: A.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }
  }
}
var g = a.default.connectStores([p.default, _.default], () => {
  let e = p.default.getCurrentUser();
  return o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: _.default.getBackupCodes(),
    hasSeenBackupPrompt: _.default.hasSeenBackupPrompt
  }
})(m)