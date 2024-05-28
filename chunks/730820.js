"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("816814"),
  u = s("240872"),
  c = s("23645"),
  S = s("712364"),
  E = s("279837"),
  T = s("144114"),
  _ = s("921801"),
  f = s("607018"),
  m = s("778764"),
  I = s("314897"),
  g = s("325067"),
  N = s("594174"),
  h = s("285952"),
  C = s("572004"),
  O = s("287880"),
  A = s("714565"),
  p = s("202858"),
  R = s("726985"),
  x = s("981631"),
  M = s("815660"),
  L = s("689938"),
  D = s("493087"),
  P = s("611273");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function b(e) {
  let {
    code: {
      code: t,
      consumed: s
    }
  } = e, l = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), i = n.useRef(null), r = n.useCallback(e => {
    if ("c" === e.key && e.metaKey && C.SUPPORTS_COPY) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, C.copy)(l), null == i || null === (t = i.current) || void 0 === t || t.focus()
    }
  }, [l]);
  return (0, a.jsx)("li", {
    className: P.marginBottom20,
    children: (0, a.jsx)(o.Clickable, {
      innerRef: i,
      className: D.backupCode,
      onKeyDown: r,
      children: (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: D.codeCheckbox,
        value: s,
        children: (0, a.jsx)("span", {
          className: D.code,
          children: l
        })
      })
    })
  })
}
class j extends n.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
  }
  renderMFASMS() {
    let e, t;
    let {
      revealed: s
    } = this.state, {
      currentUser: n,
      togglingSMS: l
    } = this.props, i = null != n.phone, r = n.hasFlag(x.UserFlags.MFA_SMS);
    if (i || r) {
      let e = s ? n.phone : this.maskPhoneNumber(n.phone);
      t = (0, a.jsxs)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom8,
        children: [L.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, a.jsx)(o.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: D.phoneRevealer,
          children: s ? L.default.Messages.MFA_SMS_PHONE_NUMBER_HIDE : L.default.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (r) e = (0, a.jsx)(h.default, {
      className: i ? "" : P.marginTop8,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        look: o.Button.Looks.OUTLINED,
        size: o.Button.Sizes.SMALL,
        submitting: l,
        onClick: this.handleDisableSMS,
        children: L.default.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let t = (0, A.getSMSBackupDisabledMessage)(n);
      e = (0, a.jsxs)(h.default, {
        className: i ? "" : P.marginTop8,
        children: [(0, a.jsx)(o.Button, {
          onClick: this.handleEnableSMS,
          size: o.Button.Sizes.SMALL,
          submitting: l,
          disabled: null != t,
          children: null != t ? t : L.default.Messages.MFA_SMS_ENABLE
        }), i ? (0, a.jsx)(o.Button, {
          onClick: this.handleChangePhoneNumber,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          children: L.default.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, a.jsx)(_.Subsetting, {
      setting: R.WebSetting.ACCOUNT_SMS_BACKUP,
      children: (0, a.jsxs)(o.FormSection, {
        className: P.marginTop40,
        title: L.default.Messages.MFA_SMS_AUTH,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: L.default.Messages.MFA_SMS_AUTH_SALES_PITCH
        }), t, e]
      })
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: t
    } = this.props, s = (0, a.jsx)(_.Subsetting, {
      setting: R.WebSetting.ACCOUNT_VIEW_BACKUP_CODES,
      children: (0, a.jsx)(o.Button, {
        onClick: this.sendMFABackupCodesVerificationKeyEmail,
        size: o.Button.Sizes.SMALL,
        children: L.default.Messages.TWO_FA_VIEW_BACKUP_CODES
      })
    });
    if (t.length > 0) {
      s = (0, a.jsx)(c.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, a.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          children: L.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let n = e => e.map(e => (0, a.jsx)(b, {
        code: e
      }, e.code));
      e = (0, a.jsxs)(o.FormSection, {
        title: L.default.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: P.marginBottom20,
          children: L.default.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, a.jsxs)(h.default, {
          children: [(0, a.jsx)(h.default.Child, {
            children: (0, a.jsx)("ul", {
              className: D.checkboxGroup,
              children: n(t.slice(0, t.length / 2))
            })
          }), (0, a.jsx)(h.default.Child, {
            children: (0, a.jsx)("ul", {
              className: D.checkboxGroup,
              children: n(t.slice(t.length / 2))
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Button, {
            onClick: this.generateBackupCodes,
            look: o.ButtonLooks.LINK,
            size: o.ButtonSizes.MIN,
            children: L.default.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginTop20
        })]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsx)(o.FormTitle, {
        children: L.default.Messages.TWO_FA
      }), (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: L.default.Messages.TWO_FA_DESCRIPTION
      }), (0, a.jsxs)(h.default, {
        justify: h.default.Justify.START,
        className: P.marginBottom20,
        children: [(0, a.jsx)(h.default.Child, {
          wrap: !0,
          grow: 0,
          children: s
        }), (0, a.jsx)(h.default.Child, {
          wrap: !0,
          children: this.props.hasTOTPEnabled ? (0, a.jsx)(_.Subsetting, {
            setting: R.WebSetting.ACCOUNT_REMOVE_2FA,
            children: (0, a.jsx)(o.Button, {
              onClick: this.handleDisableMFA,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.RED,
              look: o.ButtonLooks.OUTLINED,
              children: L.default.Messages.TWO_FA_REMOVE
            })
          }) : (0, a.jsx)(_.Subsetting, {
            setting: R.WebSetting.ACCOUNT_ENABLE_2FA,
            children: (0, a.jsx)(o.Button, {
              onClick: p.default.enableMFA,
              size: o.ButtonSizes.SMALL,
              children: L.default.Messages.TWO_FA_ENABLE
            })
          })
        })]
      }), e, this.renderMFASMS(), (0, a.jsx)(_.Subsetting, {
        setting: R.WebSetting.ACCOUNT_SECURITY_KEYS,
        children: (0, a.jsx)(m.default, {})
      })]
    })
  }
  renderDisabled() {
    return (0, a.jsxs)(o.FormSection, {
      title: L.default.Messages.TWO_FA,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: L.default.Messages.TWO_FA_SALES_PITCH
      }), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          onClick: p.default.enableMFA,
          size: o.ButtonSizes.SMALL,
          children: L.default.Messages.TWO_FA_ENABLE
        })
      }), (0, a.jsx)(m.default, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return O.hasCrypto ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, a.jsx)(o.FormSection, {
      title: L.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: L.default.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, a.jsx)(o.FormSection, {
      title: L.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: L.default.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.openModal)(t => (0, a.jsx)(f.default, {
      reason: T.ChangePhoneReason.USER_SETTINGS_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: M.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      revealed: !1,
      password: ""
    }), v(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), v(this, "handleDisableMFA", () => {
      u.default.show({
        title: L.default.Messages.TWO_FA_REMOVE,
        body: L.default.Messages.TWO_FA_REMOVE_CONFIRMATION,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: () => d.default.disable()
      })
    }), v(this, "generateBackupCodes", async () => {
      let e = g.default.getVerificationKey();
      await d.default.confirmViewBackupCodes(e, !0)
    }), v(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: e => d.default.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: L.default.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: L.default.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), v(this, "viewBackupCodes", e => {
      (0, o.openModal)(t => (0, a.jsx)(S.default, {
        ...t,
        handleSubmit: e => d.default.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
        maxLength: 8,
        title: L.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: L.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: L.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: L.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => d.default.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: L.default.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: L.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), v(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: s
          } = e;
          return "* ".concat(s.substr(0, 4), "-").concat(s.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = L.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), v(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), v(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, o.openModal)(e => (0, a.jsx)(E.default, {
          ...e,
          handleSubmit: d.default.enableSMS,
          title: L.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }), v(this, "handleDisableSMS", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: d.default.disableSMS,
        title: L.default.Messages.MFA_SMS_REMOVE,
        children: L.default.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function U(e) {
  let t = (0, r.useStateFromStores)([N.default], () => N.default.getCurrentUser());
  i()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let s = (0, r.useStateFromStoresObject)([g.default, I.default], () => ({
    togglingSMS: g.default.togglingSMS,
    hasTOTPEnabled: I.default.hasTOTPEnabled()
  }));
  return (0, a.jsx)(j, {
    currentUser: t,
    ...s,
    ...e
  })
}