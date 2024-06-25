t.d(s, {
  Z: function() {
    return U
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(816814),
  E = t(240872),
  d = t(23645),
  _ = t(712364),
  T = t(279837),
  S = t(144114),
  u = t(921801),
  I = t(607018),
  N = t(778764),
  A = t(314897),
  C = t(325067),
  O = t(594174),
  m = t(285952),
  h = t(572004),
  g = t(287880),
  R = t(714565),
  M = t(202858),
  x = t(726985),
  D = t(981631),
  p = t(815660),
  L = t(689938),
  P = t(402669),
  Z = t(331651);

function f(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function v(e) {
  let {
    code: {
      code: s,
      consumed: t
    }
  } = e, a = "".concat(s.substr(0, 4), "-").concat(s.substr(4)), l = i.useRef(null), r = i.useCallback(e => {
    if ("c" === e.key && e.metaKey && h.wS) {
      var s;
      e.preventDefault(), e.stopPropagation(), (0, h.JG)(a), null == l || null === (s = l.current) || void 0 === s || s.focus()
    }
  }, [a]);
  return (0, n.jsx)("li", {
    className: Z.marginBottom20,
    children: (0, n.jsx)(o.Clickable, {
      innerRef: l,
      className: P.backupCode,
      onKeyDown: r,
      children: (0, n.jsx)(o.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: P.codeCheckbox,
        value: t,
        children: (0, n.jsx)("span", {
          className: P.code,
          children: a
        })
      })
    })
  })
}
class j extends i.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
  }
  renderMFASMS() {
    let e, s;
    let {
      revealed: t
    } = this.state, {
      currentUser: i,
      togglingSMS: a
    } = this.props, l = null != i.phone, r = i.hasFlag(D.xW$.MFA_SMS);
    if (l || r) {
      let e = t ? i.phone : this.maskPhoneNumber(i.phone);
      s = (0, n.jsxs)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: Z.marginBottom8,
        children: [L.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, n.jsx)(o.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: P.phoneRevealer,
          children: t ? L.Z.Messages.MFA_SMS_PHONE_NUMBER_HIDE : L.Z.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (r) e = (0, n.jsx)(m.Z, {
      className: l ? "" : Z.marginTop8,
      children: (0, n.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        look: o.Button.Looks.OUTLINED,
        size: o.Button.Sizes.SMALL,
        submitting: a,
        onClick: this.handleDisableSMS,
        children: L.Z.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let s = (0, R.c)(i);
      e = (0, n.jsxs)(m.Z, {
        className: l ? "" : Z.marginTop8,
        children: [(0, n.jsx)(o.Button, {
          onClick: this.handleEnableSMS,
          size: o.Button.Sizes.SMALL,
          submitting: a,
          disabled: null != s,
          children: null != s ? s : L.Z.Messages.MFA_SMS_ENABLE
        }), l ? (0, n.jsx)(o.Button, {
          onClick: this.handleChangePhoneNumber,
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          children: L.Z.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, n.jsx)(u.F, {
      setting: x.s6.ACCOUNT_SMS_BACKUP,
      children: (0, n.jsxs)(o.FormSection, {
        className: Z.marginTop40,
        title: L.Z.Messages.MFA_SMS_AUTH,
        children: [(0, n.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: L.Z.Messages.MFA_SMS_AUTH_SALES_PITCH
        }), s, e]
      })
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: s
    } = this.props, t = (0, n.jsx)(u.F, {
      setting: x.s6.ACCOUNT_VIEW_BACKUP_CODES,
      children: (0, n.jsx)(o.Button, {
        onClick: this.sendMFABackupCodesVerificationKeyEmail,
        size: o.Button.Sizes.SMALL,
        children: L.Z.Messages.TWO_FA_VIEW_BACKUP_CODES
      })
    });
    if (s.length > 0) {
      t = (0, n.jsx)(d.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          children: L.Z.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let i = e => e.map(e => (0, n.jsx)(v, {
        code: e
      }, e.code));
      e = (0, n.jsxs)(o.FormSection, {
        title: L.Z.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, n.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          className: Z.marginBottom20,
          children: L.Z.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, n.jsxs)(m.Z, {
          children: [(0, n.jsx)(m.Z.Child, {
            children: (0, n.jsx)("ul", {
              className: P.checkboxGroup,
              children: i(s.slice(0, s.length / 2))
            })
          }), (0, n.jsx)(m.Z.Child, {
            children: (0, n.jsx)("ul", {
              className: P.checkboxGroup,
              children: i(s.slice(s.length / 2))
            })
          })]
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(o.Button, {
            onClick: this.generateBackupCodes,
            look: o.ButtonLooks.LINK,
            size: o.ButtonSizes.MIN,
            children: L.Z.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, n.jsx)(o.FormDivider, {
          className: Z.marginTop20
        })]
      })
    }
    return (0, n.jsxs)(o.FormSection, {
      children: [(0, n.jsx)(o.FormTitle, {
        children: L.Z.Messages.TWO_FA
      }), (0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: Z.marginBottom20,
        children: L.Z.Messages.TWO_FA_DESCRIPTION
      }), (0, n.jsxs)(m.Z, {
        justify: m.Z.Justify.START,
        className: Z.marginBottom20,
        children: [(0, n.jsx)(m.Z.Child, {
          wrap: !0,
          grow: 0,
          children: t
        }), (0, n.jsxs)(m.Z.Child, {
          wrap: !0,
          children: [(0, n.jsx)(u.F, {
            setting: x.s6.ACCOUNT_REMOVE_2FA,
            children: (0, n.jsx)(o.Button, {
              onClick: this.handleDisableMFA,
              size: o.Button.Sizes.SMALL,
              color: o.ButtonColors.RED,
              look: o.ButtonLooks.OUTLINED,
              children: L.Z.Messages.TWO_FA_REMOVE
            })
          }), (0, n.jsx)(u.F, {
            setting: x.s6.ACCOUNT_ENABLE_2FA,
            children: (0, n.jsx)(o.Button, {
              onClick: M.ZP.enableMFA,
              size: o.ButtonSizes.SMALL,
              children: L.Z.Messages.TWO_FA_ENABLE
            })
          })]
        })]
      }), e, this.renderMFASMS(), (0, n.jsx)(u.F, {
        setting: x.s6.ACCOUNT_SECURITY_KEYS,
        children: (0, n.jsx)(N.Z, {})
      })]
    })
  }
  renderDisabled() {
    return (0, n.jsxs)(o.FormSection, {
      title: L.Z.Messages.TWO_FA,
      children: [(0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: Z.marginBottom20,
        children: L.Z.Messages.TWO_FA_SALES_PITCH
      }), (0, n.jsx)(o.FormItem, {
        children: (0, n.jsx)(o.Button, {
          onClick: M.ZP.enableMFA,
          size: o.ButtonSizes.SMALL,
          children: L.Z.Messages.TWO_FA_ENABLE
        })
      }), (0, n.jsx)(N.Z, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return g.uZ ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, n.jsx)(o.FormSection, {
      title: L.Z.Messages.TWO_FA,
      children: (0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: L.Z.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, n.jsx)(o.FormSection, {
      title: L.Z.Messages.TWO_FA,
      children: (0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        children: L.Z.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, o.openModal)(s => (0, n.jsx)(I.default, {
      reason: S.L.USER_SETTINGS_UPDATE,
      ...s,
      ...e
    }), {
      modalKey: p.M
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      revealed: !1,
      password: ""
    }), f(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), f(this, "handleDisableMFA", () => {
      E.Z.show({
        title: L.Z.Messages.TWO_FA_REMOVE,
        body: L.Z.Messages.TWO_FA_REMOVE_CONFIRMATION,
        cancelText: L.Z.Messages.CANCEL,
        onConfirm: () => c.Z.disable()
      })
    }), f(this, "generateBackupCodes", async () => {
      let e = C.Z.getVerificationKey();
      await c.Z.confirmViewBackupCodes(e, !0)
    }), f(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, o.openModal)(e => (0, n.jsx)(T.default, {
        ...e,
        handleSubmit: e => c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: L.Z.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: L.Z.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), f(this, "viewBackupCodes", e => {
      (0, o.openModal)(s => (0, n.jsx)(_.Z, {
        ...s,
        handleSubmit: e => c.Z.confirmViewBackupCodes(e, !1).then(() => s.onClose()),
        maxLength: 8,
        title: L.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: L.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: L.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: L.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: L.Z.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: L.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), f(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: s,
            code: t
          } = e;
          return "* ".concat(t.substr(0, 4), "-").concat(t.substr(4), " ").concat(s ? "(used)" : "")
        }).join("\r\n"),
        s = L.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(s, "\r\n\r\n").concat(e)
    }), f(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), f(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, s = () => {
        (0, o.openModal)(e => (0, n.jsx)(T.default, {
          ...e,
          handleSubmit: c.Z.enableSMS,
          title: L.Z.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: s
      }) : s()
    }), f(this, "handleDisableSMS", () => {
      (0, o.openModal)(e => (0, n.jsx)(T.default, {
        ...e,
        handleSubmit: c.Z.disableSMS,
        title: L.Z.Messages.MFA_SMS_REMOVE,
        children: L.Z.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function U(e) {
  let s = (0, r.e7)([O.default], () => O.default.getCurrentUser());
  l()(null != s, "TwoFactorAuth: currentUser cannot be undefined");
  let t = (0, r.cj)([C.Z, A.default], () => ({
    togglingSMS: C.Z.togglingSMS,
    hasTOTPEnabled: A.default.hasTOTPEnabled()
  }));
  return (0, n.jsx)(j, {
    currentUser: s,
    ...t,
    ...e
  })
}