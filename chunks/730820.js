"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
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
  _ = s("607018"),
  f = s("778764"),
  m = s("314897"),
  g = s("325067"),
  I = s("594174"),
  N = s("285952"),
  h = s("572004"),
  C = s("287880"),
  p = s("714565"),
  A = s("202858"),
  O = s("981631"),
  x = s("815660"),
  R = s("689938"),
  M = s("493087"),
  v = s("611273");

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function L(e) {
  let {
    code: {
      code: t,
      consumed: s
    }
  } = e, l = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), i = n.useRef(null), r = n.useCallback(e => {
    if ("c" === e.key && e.metaKey && h.SUPPORTS_COPY) {
      var t;
      e.preventDefault(), e.stopPropagation(), (0, h.copy)(l), null == i || null === (t = i.current) || void 0 === t || t.focus()
    }
  }, [l]);
  return (0, a.jsx)("li", {
    className: v.marginBottom20,
    children: (0, a.jsx)(o.Clickable, {
      innerRef: i,
      className: M.backupCode,
      onKeyDown: r,
      children: (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: M.codeCheckbox,
        value: s,
        children: (0, a.jsx)("span", {
          className: M.code,
          children: l
        })
      })
    })
  })
}
class P extends n.PureComponent {
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
    } = this.props, i = null != n.phone, r = n.hasFlag(O.UserFlags.MFA_SMS);
    if (i || r) {
      let e = s ? n.phone : this.maskPhoneNumber(n.phone);
      t = (0, a.jsxs)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: v.marginBottom8,
        children: [R.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, a.jsx)(o.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: M.phoneRevealer,
          children: s ? R.default.Messages.MFA_SMS_PHONE_NUMBER_HIDE : R.default.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (r) e = (0, a.jsx)(N.default, {
      className: i ? "" : v.marginTop8,
      children: (0, a.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        look: o.Button.Looks.OUTLINED,
        size: o.Button.Sizes.SMALL,
        submitting: l,
        onClick: this.handleDisableSMS,
        children: R.default.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let t = (0, p.getSMSBackupDisabledMessage)(n);
      e = (0, a.jsxs)(N.default, {
        className: i ? "" : v.marginTop8,
        children: [(0, a.jsx)(o.Button, {
          onClick: this.handleEnableSMS,
          size: o.Button.Sizes.SMALL,
          submitting: l,
          disabled: null != t,
          children: null != t ? t : R.default.Messages.MFA_SMS_ENABLE
        }), i ? (0, a.jsx)(o.Button, {
          onClick: this.handleChangePhoneNumber,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          children: R.default.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      className: v.marginTop40,
      title: R.default.Messages.MFA_SMS_AUTH,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: R.default.Messages.MFA_SMS_AUTH_SALES_PITCH
      }), t, e]
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: t
    } = this.props, s = (0, a.jsx)(o.Button, {
      onClick: this.sendMFABackupCodesVerificationKeyEmail,
      size: o.Button.Sizes.SMALL,
      children: R.default.Messages.TWO_FA_VIEW_BACKUP_CODES
    });
    if (t.length > 0) {
      s = (0, a.jsx)(c.default, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, a.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          children: R.default.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let n = e => e.map(e => (0, a.jsx)(L, {
        code: e
      }, e.code));
      e = (0, a.jsxs)(o.FormSection, {
        title: R.default.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: v.marginBottom20,
          children: R.default.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, a.jsxs)(N.default, {
          children: [(0, a.jsx)(N.default.Child, {
            children: (0, a.jsx)("ul", {
              className: M.checkboxGroup,
              children: n(t.slice(0, t.length / 2))
            })
          }), (0, a.jsx)(N.default.Child, {
            children: (0, a.jsx)("ul", {
              className: M.checkboxGroup,
              children: n(t.slice(t.length / 2))
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Button, {
            onClick: this.generateBackupCodes,
            look: o.ButtonLooks.LINK,
            size: o.ButtonSizes.MIN,
            children: R.default.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, a.jsx)(o.FormDivider, {
          className: v.marginTop20
        })]
      })
    }
    return (0, a.jsxs)(o.FormSection, {
      children: [(0, a.jsx)(o.FormTitle, {
        children: R.default.Messages.TWO_FA
      }), (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: v.marginBottom20,
        children: R.default.Messages.TWO_FA_DESCRIPTION
      }), (0, a.jsxs)(N.default, {
        justify: N.default.Justify.START,
        className: v.marginBottom20,
        children: [(0, a.jsx)(N.default.Child, {
          wrap: !0,
          grow: 0,
          children: s
        }), (0, a.jsx)(N.default.Child, {
          wrap: !0,
          children: this.props.hasTOTPEnabled ? (0, a.jsx)(o.Button, {
            onClick: this.handleDisableMFA,
            size: o.Button.Sizes.SMALL,
            color: o.ButtonColors.RED,
            look: o.ButtonLooks.OUTLINED,
            children: R.default.Messages.TWO_FA_REMOVE
          }) : (0, a.jsx)(o.Button, {
            onClick: A.default.enableMFA,
            size: o.ButtonSizes.SMALL,
            children: R.default.Messages.TWO_FA_ENABLE
          })
        })]
      }), e, this.renderMFASMS(), (0, a.jsx)(f.default, {})]
    })
  }
  renderDisabled() {
    return (0, a.jsxs)(o.FormSection, {
      title: R.default.Messages.TWO_FA,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: v.marginBottom20,
        children: R.default.Messages.TWO_FA_SALES_PITCH
      }), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          onClick: A.default.enableMFA,
          size: o.ButtonSizes.SMALL,
          children: R.default.Messages.TWO_FA_ENABLE
        })
      }), (0, a.jsx)(f.default, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return C.hasCrypto ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, a.jsx)(o.FormSection, {
      title: R.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: R.default.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, a.jsx)(o.FormSection, {
      title: R.default.Messages.TWO_FA,
      children: (0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: R.default.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.openModal)(t => (0, a.jsx)(_.default, {
      reason: T.ChangePhoneReason.USER_SETTINGS_UPDATE,
      ...t,
      ...e
    }), {
      modalKey: x.PHONE_VERIFICATION_MODAL_KEY
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      revealed: !1,
      password: ""
    }), D(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), D(this, "handleDisableMFA", () => {
      u.default.show({
        title: R.default.Messages.TWO_FA_REMOVE,
        body: R.default.Messages.TWO_FA_REMOVE_CONFIRMATION,
        cancelText: R.default.Messages.CANCEL,
        onConfirm: () => d.default.disable()
      })
    }), D(this, "generateBackupCodes", async () => {
      let e = g.default.getVerificationKey();
      await d.default.confirmViewBackupCodes(e, !0)
    }), D(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: e => d.default.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: R.default.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: R.default.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), D(this, "viewBackupCodes", e => {
      (0, o.openModal)(t => (0, a.jsx)(S.default, {
        ...t,
        handleSubmit: e => d.default.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
        maxLength: 8,
        title: R.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: R.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: R.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: R.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => d.default.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: R.default.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: R.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), D(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: t,
            code: s
          } = e;
          return "* ".concat(s.substr(0, 4), "-").concat(s.substr(4), " ").concat(t ? "(used)" : "")
        }).join("\r\n"),
        t = R.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(t, "\r\n\r\n").concat(e)
    }), D(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), D(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, t = () => {
        (0, o.openModal)(e => (0, a.jsx)(E.default, {
          ...e,
          handleSubmit: d.default.enableSMS,
          title: R.default.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: t
      }) : t()
    }), D(this, "handleDisableSMS", () => {
      (0, o.openModal)(e => (0, a.jsx)(E.default, {
        ...e,
        handleSubmit: d.default.disableSMS,
        title: R.default.Messages.MFA_SMS_REMOVE,
        children: R.default.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function b(e) {
  let t = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser());
  i()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let s = (0, r.useStateFromStoresObject)([g.default, m.default], () => ({
    togglingSMS: g.default.togglingSMS,
    hasTOTPEnabled: m.default.hasTOTPEnabled()
  }));
  return (0, a.jsx)(P, {
    currentUser: t,
    ...s,
    ...e
  })
}