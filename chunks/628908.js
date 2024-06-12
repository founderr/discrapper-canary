"use strict";
t.r(s), t("47120");
var a = t("735250"),
  n = t("470079"),
  l = t("512722"),
  o = t.n(l),
  r = t("442837"),
  d = t("481060"),
  i = t("570140"),
  u = t("816814"),
  h = t("23645"),
  c = t("454585"),
  M = t("144114"),
  _ = t("607018"),
  S = t("325067"),
  A = t("594174"),
  C = t("285952"),
  f = t("279837"),
  p = t("981631"),
  E = t("815660"),
  m = t("689938"),
  N = t("190677");

function g(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let x = e => {
  let {
    label: s,
    text: t,
    children: n,
    ...l
  } = e;
  return (0, a.jsxs)(C.default, {
    direction: C.default.Direction.VERTICAL,
    ...l,
    children: [(0, a.jsx)(d.FormTitle, {
      tag: "h2",
      children: s
    }), null != t ? (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      className: N.sectionBody,
      children: t
    }) : null, (0, a.jsx)(C.default.Child, {
      wrap: !0,
      children: n
    })]
  })
};
class F extends n.PureComponent {
  renderSMSSection() {
    let {
      currentUser: e
    } = this.props, s = null != this.props.currentUser.phone, t = e.hasFlag(p.UserFlags.MFA_SMS), n = e.hasFlag(p.UserFlags.PARTNER) || e.hasFlag(p.UserFlags.STAFF);
    return s ? (0, a.jsxs)(x, {
      label: m.default.Messages.MFA_SMS_ENABLE,
      text: m.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: [(0, a.jsxs)(d.Text, {
        variant: "text-md/normal",
        className: N.sectionBody,
        children: [(0, a.jsx)("strong", {
          className: N.phoneNumber,
          children: m.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
            phoneNumber: e.phone
          })
        }), (0, a.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.LINK,
          size: d.Button.Sizes.MIN,
          className: N.linkButton,
          onClick: this.handleChangePhoneNumber,
          children: m.default.Messages.CHANGE_PHONE_NUMBER
        })]
      }), (0, a.jsx)(d.Button, {
        onClick: this.handleEnableSMS,
        disabled: t || n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: n ? m.default.Messages.MFA_SMS_DISABLED_PARTNER : t ? m.default.Messages.MFA_SMS_ALREADY_ENABLED : m.default.Messages.MFA_SMS_ENABLE
      })]
    }) : (0, a.jsx)(x, {
      label: m.default.Messages.MFA_SMS_ENABLE,
      text: m.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
      children: (0, a.jsx)(d.Button, {
        onClick: this.handleEnableSMS,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        disabled: n,
        children: n ? m.default.Messages.MFA_SMS_DISABLED_PARTNER : m.default.Messages.MFA_SMS_ADD_PHONE
      })
    })
  }
  renderBackupCodesSection() {
    return (0, a.jsx)(x, {
      label: m.default.Messages.TWO_FA_DOWNLOAD_CODES,
      text: m.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
      children: (0, a.jsx)(h.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        onDownload: () => i.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }),
        children: (0, a.jsx)(d.Button, {
          color: d.Button.Colors.GREEN,
          size: d.Button.Sizes.SMALL,
          children: m.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      })
    })
  }
  renderHeader(e) {
    return (0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, a.jsxs)(C.default.Child, {
        grow: 1,
        shrink: 1,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: N.header,
          children: c.default.parse(m.default.Messages.TWO_FA_SUCCESS_HEADER)
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: N.subHeader,
          children: e
        })]
      }), (0, a.jsx)(C.default.Child, {
        grow: 0,
        children: (0, a.jsx)(d.ModalCloseButton, {
          onClick: this.handleCloseModal
        })
      })]
    })
  }
  renderConfirmModal(e) {
    let {
      onClose: s
    } = this.props;
    return (0, a.jsx)(d.DeclarativeConfirmModal, {
      dismissable: !0,
      header: m.default.Messages.TWO_FA_CONFIRM_TITLE,
      confirmText: m.default.Messages.TWO_FA_CONFIRM_CONFIRM,
      cancelText: m.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showConfirmModal: !1
      }),
      onConfirm: () => {
        i.default.dispatch({
          type: "MFA_SEEN_BACKUP_CODE_PROMPT"
        }), s()
      },
      children: (0, a.jsx)(d.Text, {
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
      showConfirmModal: s
    } = this.state;
    return (0, a.jsxs)(d.ModalRoot, {
      transitionState: e,
      className: N.modal,
      children: [this.renderHeader(m.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, a.jsxs)(d.ModalContent, {
        className: N.modalInner,
        children: [this.renderSMSSection(), (0, a.jsx)(d.FormDivider, {
          className: N.divider
        }), this.renderBackupCodesSection()]
      }), s && this.renderConfirmModal(m.default.Messages.TWO_FA_CONFIRM_BODY)]
    })
  }
  renderWebAuthn() {
    let {
      transitionState: e
    } = this.props, {
      showConfirmModal: s
    } = this.state;
    return (0, a.jsxs)(d.ModalRoot, {
      transitionState: e,
      className: N.modal,
      children: [this.renderHeader(m.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, a.jsx)(d.ModalContent, {
        className: N.modalInner,
        children: this.renderBackupCodesSection()
      }), s && this.renderConfirmModal(m.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, d.openModal)(s => (0, a.jsx)(_.default, {
      reason: M.ChangePhoneReason.MFA_PHONE_UPDATE,
      ...s,
      ...e
    }), {
      modalKey: E.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      showConfirmModal: !1
    }), g(this, "handleCloseModal", () => {
      let {
        onClose: e,
        hasSeenBackupPrompt: s
      } = this.props;
      s ? null == e || e() : this.setState({
        showConfirmModal: !0
      })
    }), g(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: s,
            code: t
          } = e;
          return "* ".concat(t.substr(0, 4), "-").concat(t.substr(4), " ").concat(s ? "(".concat(m.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
        }).join("\r\n"),
        s = m.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(s, "\r\n\r\n").concat(e)
    }), g(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), g(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, s = () => {
        (0, d.openModal)(e => (0, a.jsx)(f.default, {
          ...e,
          handleSubmit: e => u.default.enableSMS(e),
          title: m.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: s
      }) : s()
    })
  }
}
s.default = r.default.connectStores([A.default, S.default], () => {
  let e = A.default.getCurrentUser();
  return o()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
    currentUser: e,
    backupCodes: S.default.getBackupCodes(),
    hasSeenBackupPrompt: S.default.hasSeenBackupPrompt
  }
})(F)