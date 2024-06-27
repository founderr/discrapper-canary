t.d(s, {
  Z: function() {
    return j
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(512722),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(816814),
  d = t(240872),
  _ = t(23645),
  E = t(712364),
  u = t(279837),
  T = t(144114),
  S = t(921801),
  I = t(607018),
  N = t(778764),
  C = t(314897),
  m = t(325067),
  A = t(594174),
  g = t(285952),
  O = t(572004),
  h = t(287880),
  p = t(714565),
  R = t(202858),
  x = t(726985),
  M = t(981631),
  D = t(815660),
  f = t(689938),
  L = t(402669),
  P = t(331651);

function Z(e, s, t) {
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
  } = e, i = "".concat(s.substr(0, 4), "-").concat(s.substr(4)), r = a.useRef(null), o = a.useCallback(e => {
    if ("c" === e.key && e.metaKey && O.wS) {
      var s;
      e.preventDefault(), e.stopPropagation(), (0, O.JG)(i), null == r || null === (s = r.current) || void 0 === s || s.focus()
    }
  }, [i]);
  return (0, n.jsx)("li", {
    className: P.marginBottom20,
    children: (0, n.jsx)(l.Clickable, {
      innerRef: r,
      className: L.backupCode,
      onKeyDown: o,
      children: (0, n.jsx)(l.Checkbox, {
        displayOnly: !0,
        readOnly: !0,
        className: L.codeCheckbox,
        value: t,
        children: (0, n.jsx)("span", {
          className: L.code,
          children: i
        })
      })
    })
  })
}
class b extends a.PureComponent {
  maskPhoneNumber(e) {
    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
  }
  renderMFASMS() {
    let e, s;
    let {
      revealed: t
    } = this.state, {
      currentUser: a,
      togglingSMS: i
    } = this.props, r = null != a.phone, o = a.hasFlag(M.xW$.MFA_SMS);
    if (r || o) {
      let e = t ? a.phone : this.maskPhoneNumber(a.phone);
      s = (0, n.jsxs)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: P.marginBottom8,
        children: [f.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
          phoneNumber: e
        }), (0, n.jsx)(l.Anchor, {
          onClick: this.togglePhoneNumberVisibility,
          className: L.phoneRevealer,
          children: t ? f.Z.Messages.MFA_SMS_PHONE_NUMBER_HIDE : f.Z.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
        })]
      })
    }
    if (o) e = (0, n.jsx)(g.Z, {
      className: r ? "" : P.marginTop8,
      children: (0, n.jsx)(l.Button, {
        color: l.Button.Colors.RED,
        look: l.Button.Looks.OUTLINED,
        size: l.Button.Sizes.SMALL,
        submitting: i,
        onClick: this.handleDisableSMS,
        children: f.Z.Messages.MFA_SMS_REMOVE
      })
    });
    else {
      let s = (0, p.c)(a);
      e = (0, n.jsxs)(g.Z, {
        className: r ? "" : P.marginTop8,
        children: [(0, n.jsx)(l.Button, {
          onClick: this.handleEnableSMS,
          size: l.Button.Sizes.SMALL,
          submitting: i,
          disabled: null != s,
          children: null != s ? s : f.Z.Messages.MFA_SMS_ENABLE
        }), r ? (0, n.jsx)(l.Button, {
          onClick: this.handleChangePhoneNumber,
          color: l.Button.Colors.PRIMARY,
          size: l.Button.Sizes.SMALL,
          look: l.Button.Looks.LINK,
          children: f.Z.Messages.CHANGE_PHONE_NUMBER
        }) : null]
      })
    }
    return (0, n.jsx)(S.F, {
      setting: x.s6.ACCOUNT_SMS_BACKUP,
      children: (0, n.jsxs)(l.FormSection, {
        className: P.marginTop40,
        title: f.Z.Messages.MFA_SMS_AUTH,
        children: [(0, n.jsx)(l.FormText, {
          type: l.FormText.Types.DESCRIPTION,
          children: f.Z.Messages.MFA_SMS_AUTH_SALES_PITCH
        }), s, e]
      })
    })
  }
  renderEnabled() {
    let e;
    let {
      backupCodes: s
    } = this.props, t = (0, n.jsx)(S.F, {
      setting: x.s6.ACCOUNT_VIEW_BACKUP_CODES,
      children: (0, n.jsx)(l.Button, {
        onClick: this.sendMFABackupCodesVerificationKeyEmail,
        size: l.Button.Sizes.SMALL,
        children: f.Z.Messages.TWO_FA_VIEW_BACKUP_CODES
      })
    });
    if (s.length > 0) {
      t = (0, n.jsx)(_.Z, {
        fileContents: this.getDownloadFileContents,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, n.jsx)(l.Button, {
          size: l.Button.Sizes.SMALL,
          children: f.Z.Messages.TWO_FA_DOWNLOAD_CODES
        })
      });
      let a = e => e.map(e => (0, n.jsx)(v, {
        code: e
      }, e.code));
      e = (0, n.jsxs)(l.FormSection, {
        title: f.Z.Messages.TWO_FA_BACKUP_CODES_LABEL,
        children: [(0, n.jsx)(l.FormText, {
          type: l.FormText.Types.DESCRIPTION,
          className: P.marginBottom20,
          children: f.Z.Messages.TWO_FA_BACKUP_CODES_BODY.format()
        }), (0, n.jsxs)(g.Z, {
          children: [(0, n.jsx)(g.Z.Child, {
            children: (0, n.jsx)("ul", {
              className: L.checkboxGroup,
              children: a(s.slice(0, s.length / 2))
            })
          }), (0, n.jsx)(g.Z.Child, {
            children: (0, n.jsx)("ul", {
              className: L.checkboxGroup,
              children: a(s.slice(s.length / 2))
            })
          })]
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(l.Button, {
            onClick: this.generateBackupCodes,
            look: l.ButtonLooks.LINK,
            size: l.ButtonSizes.MIN,
            children: f.Z.Messages.TWO_FA_GENERATE_CODES
          })
        }), (0, n.jsx)(l.FormDivider, {
          className: P.marginTop20
        })]
      })
    }
    return (0, n.jsxs)(l.FormSection, {
      children: [(0, n.jsx)(l.FormTitle, {
        children: f.Z.Messages.TWO_FA
      }), (0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: f.Z.Messages.TWO_FA_DESCRIPTION
      }), (0, n.jsxs)(g.Z, {
        justify: g.Z.Justify.START,
        className: P.marginBottom20,
        children: [(0, n.jsx)(g.Z.Child, {
          wrap: !0,
          grow: 0,
          children: t
        }), (0, n.jsxs)(g.Z.Child, {
          wrap: !0,
          children: [(0, n.jsx)(S.F, {
            setting: x.s6.ACCOUNT_REMOVE_2FA,
            children: (0, n.jsx)(l.Button, {
              onClick: this.handleDisableMFA,
              size: l.Button.Sizes.SMALL,
              color: l.ButtonColors.RED,
              look: l.ButtonLooks.OUTLINED,
              children: f.Z.Messages.TWO_FA_REMOVE
            })
          }), (0, n.jsx)(S.F, {
            setting: x.s6.ACCOUNT_ENABLE_2FA,
            children: (0, n.jsx)(l.Button, {
              onClick: R.ZP.enableMFA,
              size: l.ButtonSizes.SMALL,
              children: f.Z.Messages.TWO_FA_ENABLE
            })
          })]
        })]
      }), e, this.renderMFASMS(), (0, n.jsx)(S.F, {
        setting: x.s6.ACCOUNT_SECURITY_KEYS,
        children: (0, n.jsx)(N.Z, {})
      })]
    })
  }
  renderDisabled() {
    return (0, n.jsxs)(l.FormSection, {
      title: f.Z.Messages.TWO_FA,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: P.marginBottom20,
        children: f.Z.Messages.TWO_FA_SALES_PITCH
      }), (0, n.jsx)(l.FormItem, {
        children: (0, n.jsx)(l.Button, {
          onClick: R.ZP.enableMFA,
          size: l.ButtonSizes.SMALL,
          children: f.Z.Messages.TWO_FA_ENABLE
        })
      }), (0, n.jsx)(N.Z, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return h.uZ ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, n.jsx)(l.FormSection, {
      title: f.Z.Messages.TWO_FA,
      children: (0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        children: f.Z.Messages.TWO_FA_NOT_VERIFIED
      })
    }) : (0, n.jsx)(l.FormSection, {
      title: f.Z.Messages.TWO_FA,
      children: (0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        children: f.Z.Messages.TWO_FA_USE_DESKTOP_APP
      })
    })
  }
  openPhoneVerificationModal() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, l.openModal)(s => (0, n.jsx)(I.default, {
      reason: T.L.USER_SETTINGS_UPDATE,
      ...s,
      ...e
    }), {
      modalKey: D.M
    })
  }
  constructor(...e) {
    super(...e), Z(this, "state", {
      revealed: !1,
      password: ""
    }), Z(this, "togglePhoneNumberVisibility", e => {
      e.preventDefault(), this.setState({
        revealed: !this.state.revealed
      })
    }), Z(this, "handleDisableMFA", () => {
      d.Z.show({
        title: f.Z.Messages.TWO_FA_REMOVE,
        body: f.Z.Messages.TWO_FA_REMOVE_CONFIRMATION,
        cancelText: f.Z.Messages.CANCEL,
        onConfirm: () => c.Z.disable()
      })
    }), Z(this, "generateBackupCodes", async () => {
      let e = m.Z.getVerificationKey();
      await c.Z.confirmViewBackupCodes(e, !0)
    }), Z(this, "sendMFABackupCodesVerificationKeyEmail", () => {
      (0, l.openModal)(e => (0, n.jsx)(u.default, {
        ...e,
        handleSubmit: e => c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
          this.viewBackupCodes(e)
        }),
        title: f.Z.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
        actionText: f.Z.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
      }))
    }), Z(this, "viewBackupCodes", e => {
      (0, l.openModal)(s => (0, n.jsx)(E.Z, {
        ...s,
        handleSubmit: e => c.Z.confirmViewBackupCodes(e, !1).then(() => s.onClose()),
        maxLength: 8,
        title: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
        label: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
        forceNoPlaceholder: !0,
        retryPrompt: f.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
        retrySuccessMessage: f.Z.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
        onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
        actionText: f.Z.Messages.TWO_FA_VIEW_CODES_SUBMIT,
        helpMessage: f.Z.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
      }))
    }), Z(this, "getDownloadFileContents", () => {
      let e = this.props.backupCodes.map(e => {
          let {
            consumed: s,
            code: t
          } = e;
          return "* ".concat(t.substr(0, 4), "-").concat(t.substr(4), " ").concat(s ? "(used)" : "")
        }).join("\r\n"),
        s = f.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
          email: this.props.currentUser.email
        });
      return "".concat(s, "\r\n\r\n").concat(e)
    }), Z(this, "handleChangePhoneNumber", () => {
      this.openPhoneVerificationModal()
    }), Z(this, "handleEnableSMS", () => {
      let {
        currentUser: e
      } = this.props, s = () => {
        (0, l.openModal)(e => (0, n.jsx)(u.default, {
          ...e,
          handleSubmit: c.Z.enableSMS,
          title: f.Z.Messages.MFA_SMS_ENABLE
        }))
      };
      null == e.phone ? this.openPhoneVerificationModal({
        onAddedPhone: s
      }) : s()
    }), Z(this, "handleDisableSMS", () => {
      (0, l.openModal)(e => (0, n.jsx)(u.default, {
        ...e,
        handleSubmit: c.Z.disableSMS,
        title: f.Z.Messages.MFA_SMS_REMOVE,
        children: f.Z.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
      }))
    })
  }
}

function j(e) {
  let s = (0, o.e7)([A.default], () => A.default.getCurrentUser());
  r()(null != s, "TwoFactorAuth: currentUser cannot be undefined");
  let t = (0, o.cj)([m.Z, C.default], () => ({
    togglingSMS: m.Z.togglingSMS,
    hasTOTPEnabled: C.default.hasTOTPEnabled()
  }));
  return (0, n.jsx)(b, {
    currentUser: s,
    ...t,
    ...e
  })
}