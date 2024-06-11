"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("512722"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("816814"),
  u = s("240872"),
  c = s("23645"),
  S = s("712364"),
  E = s("279837"),
  T = s("144114"),
  _ = s("921801"),
  I = s("607018"),
  N = s("778764"),
  g = s("314897"),
  f = s("325067"),
  m = s("594174"),
  A = s("285952"),
  C = s("572004"),
  O = s("287880"),
  h = s("714565"),
  R = s("202858"),
  p = s("726985"),
  M = s("981631"),
  D = s("815660"),
  x = s("689938"),
  L = s("493087"),
  P = s("611273");

function b(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function v(e) {
  let {
    code: {
      code: t,
      consumed: s
    }
  } = e, i = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), l = n.useRef(null), r = n.useCallback(e => {
    if ("c" === e.key && e.metaKey && C.SUPPORTS_COPY) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, C.copy)(i), null == l || null === (t = l.current) || void 0 === t || t.focus()
    }
  }, [i]);
  return (0, a.jsx)("li", {
    className: P.marginBottom20,
    children: (0, a.jsx)(o.Clickable, {
      innerRef: l,
      className: L.backupCode,
      onKeyDown: r,
      children: (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: L.codeCheckbox,
        value: s,
        children: (0, a.jsx)("span", {
          className: L.code,
          children: i
        })
      })
    })
  })
}
class U extends n.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
  }
  renderMFASMS() {
    let e, t;
    let {
      revealed: s
    } = this.state, {
      currentUser: n,
      togglingSMS: i
    } = this.props, l = null != n.phone, r = n.hasFlag(M.UserFlags.MFA_SMS);
    if (l || r) {
      let e = s ? n.phone : this.maskPhoneNumber(n.phone);
      t = (0, a.jsxs)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom8,
        children: [x.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, a.jsx)(o.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: L.phoneRevealer,
          children: s ? x.default.Messages.MFA_SMS_PHONE_NUMBER_HIDE : x.default.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (r) e = (0, a.jsx)(A.default, {
      className: l ? "" : P.marginTop8,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        look: o.Button.Looks.OUTLINED,
        size: o.Button.Sizes.SMALL,
        submitting: i,
        onClick: this.handleDisableSMS,
        children: x.default.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let t = (0, h.getSMSBackupDisabledMessage)(n);
      e = (0, a.jsxs)(A.default, {
        className: l ? "" : P.marginTop8,
        children: [(0, a.jsx)(o.Button, {
          onClick: this.handleEnableSMS,
          size: o.Button.Sizes.SMALL,
          submitting: i,
          disabled: null != t,
          children: null != t ? t : x.default.Messages.MFA_SMS_ENABLE
        }), l ? (0, a.jsx)(o.Button, {
          onClick: this.handleChangePhoneNumber,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          children: x.default.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, a.jsx)(_.Subsetting, {
      setting: p.WebSetting.ACCOUNT_SMS_BACKUP,
      children: (0, a.jsxs)(o.FormSection, {
        className: P.marginTop40,
        title: x.default.Messages.MFA_SMS_AUTH,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: x.default.Messages.MFA_SMS_AUTH_SALES_PITCH
        }), t, e]
      })
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: t
    } = this.props, s = (0, a.jsx)(_.Subsetting, {
      setting: p.WebSetting.ACCOUNT_VIEW_BACKUP_CODES,
      children: (0, a.jsx)(o.Button, {
        onClick: this.sendMFABackupCodesVerificationKeyEmail,
        size: o.Button.Sizes.SMALL,
        children: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES
      })
    });
    if (t.length > 0) {
      s = (0, a.jsx)(c.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, a.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          children: x.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let n = e => e.map(e => (0, a.jsx)(v, {
        code: e
      }, e.code));
      e = (0, a.jsxs)(o.FormSection, {
        title: x.default.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: P.marginBottom20,
          children: x.default.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, a.jsxs)(A.default, {
          children: [(0, a.jsx)(A.default.Child, {
            children: (0, a.jsx)("ul", {
              className: L.checkboxGroup,
              children: n(t.slice(0, t.length / 2))
            })
          }), (0, a.jsx)(A.default.Child, {
            children: (0, a.jsx)("ul", {
              className: L.checkboxGroup,
              children: n(t.slice(t.length / 2))
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Button, {
            onClick: this.generateBackupCodes,
            look: o.ButtonLooks.LINK,
            size: o.ButtonSizes.MIN,
            children: x.default.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginTop20
        })]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsx)(o.FormTitle, {
        children: x.default.Messages.TWO_FA
      }), (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: x.default.Messages.TWO_FA_DESCRIPTION
      }), (0, a.jsxs)(A.default, {
        justify: A.default.Justify.START,
        className: P.marginBottom20,
        children: [(0, a.jsx)(A.default.Child, {
          wrap: !0,
          grow: 0,
          children: s
        }), (0, a.jsx)(A.default.Child, {
          wrap: !0,
          children: this.props.hasTOTPEnabled ? (0, a.jsx)(_.Subsetting, {
            setting: p.WebSetting.ACCOUNT_REMOVE_2FA,
            children: (0, a.jsx)(o.Button, {
              onClick: this.handleDisableMFA,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.RED,
              look: o.ButtonLooks.OUTLINED,
              children: x.default.Messages.TWO_FA_REMOVE
            })
          }) : (0, a.jsx)(_.Subsetting, {
            setting: p.WebSetting.ACCOUNT_ENABLE_2FA,
            children: (0, a.jsx)(o.Button, {
              onClick: R.default.enableMFA,
              size: o.ButtonSizes.SMALL,
              children: x.default.Messages.TWO_FA_ENABLE
            })
          })
        })]
      }), e, this.renderMFASMS(), (0, a.jsx)(_.Subsetting, {
        setting: p.WebSetting.ACCOUNT_SECURITY_KEYS,
        children: (0, a.jsx)(N.default, {})
      })]
    })
  }
  renderDisabled() {
    return (0, a.jsxs)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: x.default.Messages.TWO_FA_SALES_PITCH
      }), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          onClick: R.default.enableMFA,
          size: o.ButtonSizes.SMALL,
          children: x.default.Messages.TWO_FA_ENABLE
        })
      }), (0, a.jsx)(N.default, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return O.hasCrypto ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, a.jsx)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: x.default.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, a.jsx)(o.FormSection, {
      title: x.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: x.default.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.openModal)(t => (0, a.jsx)(I.default, {
      reason: T.ChangePhoneReason.USER_SETTINGS_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: D.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      revealed: !1,
      password: ""
    }), b(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), b(this, "handleDisableMFA", () => {
      u.default.show({
        title: x.default.Messages.TWO_FA_REMOVE,
        body: x.default.Messages.TWO_FA_REMOVE_CONFIRMATION,
        cancelText: x.default.Messages.CANCEL,
        onConfirm: () => d.default.disable()
      })
    }), b(this, "generateBackupCodes", async () => {
      let e = f.default.getVerificationKey();
      await d.default.confirmViewBackupCodes(e, !0)
    }), b(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: e => d.default.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: x.default.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), b(this, "viewBackupCodes", e => {
      (0, o.openModal)(t => (0, a.jsx)(S.default, {
        ...t,
        handleSubmit: e => d.default.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
        maxLength: 8,
        title: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => d.default.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: x.default.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), b(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: s
          } = e;
          return "* ".concat(s.substr(0, 4), "-").concat(s.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = x.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), b(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), b(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, o.openModal)(e => (0, a.jsx)(E.default, {
          ...e,
          handleSubmit: d.default.enableSMS,
          title: x.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }), b(this, "handleDisableSMS", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: d.default.disableSMS,
        title: x.default.Messages.MFA_SMS_REMOVE,
        children: x.default.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function j(e) {
  let t = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser());
  l()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let s = (0, r.useStateFromStoresObject)([f.default, g.default], () => ({
    togglingSMS: f.default.togglingSMS,
    hasTOTPEnabled: g.default.hasTOTPEnabled()
  }));
  return (0, a.jsx)(U, {
    currentUser: t,
    ...s,
    ...e
  })
}