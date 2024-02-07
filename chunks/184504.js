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
  l = n("77078"),
  u = n("913144"),
  c = n("430713"),
  d = n("984557"),
  f = n("367376"),
  h = n("878720"),
  E = n("601745"),
  _ = n("650893"),
  p = n("697218"),
  C = n("145131"),
  v = n("583227"),
  I = n("49111"),
  R = n("482931"),
  S = n("782340"),
  A = n("659248");
let N = e => {
  let {
    label: t,
    text: n,
    children: i,
    ...s
  } = e;
  return (0, r.jsxs)(C.default, {
    direction: C.default.Direction.VERTICAL,
    ...s,
    children: [(0, r.jsx)(l.FormTitle, {
      tag: "h2",
      children: t
    }), null != n ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: A.sectionBody,
      children: n
    }) : null, (0, r.jsx)(C.default.Child, {
      wrap: !0,
      children: i
    })]
  })
};
class g extends i.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(I.UserFlags.MFA_SMS), i = e.hasFlag(I.UserFlags.PARTNER) || e.hasFlag(I.UserFlags.STAFF);
    return t ? (0, r.jsxs)(N, {
      label: S.default.Messages.MFA_SMS_ENABLE,
      text: S.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        className: A.sectionBody,
        children: [(0, r.jsx)("strong", {
          className: A.phoneNumber,
          children: S.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          size: l.Button.Sizes.MIN,
          className: A.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: S.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        disabled: n || i,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        children: i ? S.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? S.default.Messages.MFA_SMS_ALREADY_ENABLED : S.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, r.jsx)(N, {
      label: S.default.Messages.MFA_SMS_ENABLE,
      text: S.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, r.jsx)(l.Button, {
        onClick: this.handleEnableSMS,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        disabled: i,
        children: i ? S.default.Messages.MFA_SMS_DISABLED_PARTNER : S.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, r.jsx)(N, {
      label: S.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: S.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
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
          children: S.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, r.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, r.jsxs)(C.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: A.header,
          children: f.default.parse(S.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: A.subHeader,
          children: e
        })]
      }), (0, r.jsx)(C.default.Child, {
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
      className: A.modal,
      children: [this.renderHeader(S.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, r.jsxs)(l.ModalContent, {
        className: A.modalInner,
        children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, {
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
    return (0, r.jsxs)(l.ModalRoot, {
      transitionState: e,
      className: A.modal,
      children: [this.renderHeader(S.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, r.jsx)(l.ModalContent, {
        className: A.modalInner,
        children: this.renderBackupCodesSection()
      }), t && this.renderConfirmModal(S.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(t => (0, r.jsx)(E.default, {
      reason: h.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: R.PHONE_VERIFICATION_MODAL_KEY
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
        (0, l.openModal)(e => (0, r.jsx)(v.default, {
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
var m = a.default.connectStores([p.default, _.default], () => {
  let e = p.default.getCurrentUser();
  return o(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: _.default.getBackupCodes(),
    hasSeenBackupPrompt: _.default.hasSeenBackupPrompt
  }
})(g)