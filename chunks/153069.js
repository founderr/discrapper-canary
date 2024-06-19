t(757143);
var r, n = t(735250),
  a = t(470079),
  o = t(120356),
  i = t.n(o),
  l = t(442837),
  h = t(481060),
  d = t(893776),
  u = t(479495),
  c = t(388905),
  p = t(379760),
  g = t(124860),
  m = t(144114),
  C = t(541692),
  f = t(952802),
  E = t(210887),
  S = t(314897),
  T = t(896797),
  N = t(585483),
  _ = t(792125),
  A = t(981631),
  O = t(689938),
  R = t(342664),
  M = t(331651);

function I(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class L extends(r = a.PureComponent) {
  componentDidMount() {
    window.addEventListener("keydown", this.handleTabOrEnter)
  }
  componentDidUpdate(e) {
    let {
      authenticated: s,
      transitionTo: t
    } = this.props;
    if (s && !e.authenticated && t(A.Z5c.APP), e.errors !== this.props.errors) {
      var r, n, a;
      this.hasError("password") ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError("email") || this.hasError("login") ? null === (n = this.loginRef) || void 0 === n || n.focus() : this.hasError("code") && (null === (a = this.codeRef) || void 0 === a || a.focus())
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleTabOrEnter)
  }
  hasError(e) {
    return null != this.props.errors[e]
  }
  renderDefaultForm() {
    var e;
    let {
      country: s
    } = this.props, t = !this.hasError("email") && this.hasError("password"), r = (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(c.Dx, {
        className: i()(M.marginBottom8, R.title),
        children: O.Z.Messages.MULTI_ACCOUNT_LOGIN_TITLE
      }, "title"), (0, n.jsx)(h.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: R.subtitle,
        children: O.Z.Messages.MULTI_ACCOUNT_LOGIN_SUBTITLE
      })]
    });
    return (0, n.jsxs)("div", {
      className: R.mainLoginContainer,
      children: [r, (0, n.jsxs)(c.gO, {
        className: R.loginForm,
        children: [(0, n.jsx)(f.Z, {
          alpha2: s.alpha2,
          countryCode: s.code.split(" ")[0],
          className: M.marginBottom20,
          label: O.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
          error: null !== (e = this.renderError("login")) && void 0 !== e ? e : this.renderError("email"),
          onChange: (e, s) => this.setState({
            login: e,
            loginPrefix: s
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !t,
          required: !0
        }), (0, n.jsx)(c.II, {
          label: O.Z.Messages.FORM_LABEL_PASSWORD,
          error: this.renderError("password"),
          onChange: e => this.setState({
            password: e
          }),
          name: "password",
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          autoFocus: t,
          value: this.state.password,
          required: !0
        }), (0, n.jsx)(c.zx, {
          onClick: this.handleForgotPassword,
          look: h.Button.Looks.LINK,
          color: h.Button.Colors.LINK,
          className: i()(M.marginTop4),
          children: O.Z.Messages.FORGOT_PASSWORD
        })]
      })]
    })
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      loginStatus: s,
      closeLogin: t,
      theme: r
    } = this.props;
    return (0, n.jsxs)("div", {
      className: R.__invalid_pageContainer,
      children: [(0, n.jsx)(c.ZP, {
        tag: "form",
        className: e,
        expanded: !0,
        theme: r,
        children: this.renderDefaultForm()
      }), (0, n.jsxs)("div", {
        "data-theme": r,
        "data-disable-adaptive-theme": !0,
        className: i()((0, _.Q)(r), R.navRow),
        children: [(0, n.jsx)(h.Button, {
          type: "button",
          look: h.Button.Looks.LINK,
          "aria-label": "back",
          onClick: t,
          size: h.Button.Sizes.SMALL,
          className: i()((0, _.Q)(r), R.backButton),
          children: O.Z.Messages.BACK
        }), (0, n.jsx)(h.Button, {
          "aria-label": "continue",
          submitting: s === A.u34.LOGGING_IN,
          color: h.Button.Colors.BRAND,
          onClick: this.handleLogin,
          className: R.continueButton,
          children: O.Z.Messages.CONTINUE
        })]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, n.jsx)(c.ZP, {
      style: {
        padding: 0
      },
      theme: this.props.theme,
      children: (0, n.jsx)(g.Cd, {
        mfaFinish: this.handleTokenSubmitMFA,
        request: e,
        onEarlyClose: () => {
          this.handleReset()
        },
        width: 480
      })
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e,
      theme: s
    } = this.props, t = this.props.loginStatus === A.u34.ACCOUNT_DISABLED, r = t ? O.Z.Messages.ACCOUNT_DISABLED_TITLE : O.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? O.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : O.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
    return (0, n.jsxs)(c.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: e,
      theme: s,
      children: [(0, n.jsx)(c.Dx, {
        className: M.marginBottom8,
        children: r
      }), (0, n.jsx)(c.DK, {
        className: M.marginBottom20,
        children: a
      }), (0, n.jsxs)(c.gO, {
        children: [(0, n.jsx)(h.Button, {
          color: h.Button.Colors.BRAND,
          type: "submit",
          fullWidth: !0,
          children: O.Z.Messages._RETURN_TO_LOGIN
        }), (0, n.jsx)("div", {
          className: i()(M.marginTop8, R.needAccount),
          children: O.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
            onClick: this.handleCancelAccountDeletion
          })
        })]
      })]
    })
  }
  renderResetPhonePassword() {
    let {
      resetPasswordPhoneToken: e
    } = this.state;
    return (0, n.jsx)(u.Z, {
      resetToken: e,
      onLoginSuccess: e => {
        d.Z.switchAccountToken(e)
      },
      ...this.props
    })
  }
  renderPhonePasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: s
    } = this.state;
    return (0, n.jsx)(c.ZP, {
      tag: "form",
      className: e,
      children: (0, n.jsx)("div", {
        className: M.marginTop20,
        children: (0, n.jsx)(p.Z, {
          title: O.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
          subtitle: O.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
            onResendClick: this.handleResendCode
          }),
          error: s,
          onSubmit: this.handlePasswordReset,
          onCancel: void 0
        })
      })
    })
  }
  render() {
    let {
      loginStatus: e
    } = this.props;
    if (null != this.state.resetPasswordPhoneToken) return this.renderResetPhonePassword();
    switch (e) {
      case A.u34.LOGGING_IN_MFA_SMS:
      case A.u34.MFA_SMS_STEP:
      case A.u34.LOGGING_IN_MFA:
      case A.u34.MFA_STEP:
        return this.renderMFA();
      case A.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case A.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case A.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPhonePasswordRecovery();
      case A.u34.LOGGING_IN:
      case A.u34.NONE:
      default:
        return this.renderDefault()
    }
  }
  constructor(e) {
    super(e), I(this, "loginRef", void 0), I(this, "passwordRef", void 0), I(this, "codeRef", void 0), I(this, "handleAuthToken", async e => {
      await d.Z.loginToken(e, !1)
    }), I(this, "handleTabOrEnter", e => {
      if ("Tab" === e.key && !e.shiftKey && e.target === this.loginRef) {
        var s;
        null === (s = this.passwordRef) || void 0 === s || s.focus(), e.stopPropagation(), e.preventDefault()
      }
      "Enter" === e.key && (e.target === this.loginRef || e.target === this.passwordRef) && (this.handleLogin(), e.stopPropagation(), e.preventDefault())
    }), I(this, "setLoginRef", e => {
      this.loginRef = e
    }), I(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), I(this, "setCodeRef", e => {
      this.codeRef = e
    }), I(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: s
      } = this.state;
      return e + s
    }), I(this, "renderError", e => {
      let {
        errors: s
      } = this.props;
      if (this.hasError(e)) {
        let t = s[e];
        return Array.isArray(t) ? t[0] : t
      }
      return null
    }), I(this, "handleForgotPassword", async e => {
      var s;
      null == e || e.preventDefault(), null === (s = this.loginRef) || void 0 === s || s.focus();
      let t = this.getFullLogin();
      try {
        N.S.dispatch(A.CkL.WAVE_EMPHASIZE), await d.Z.forgotPassword(t), (0, h.openModal)(e => (0, n.jsx)(h.ConfirmModal, {
          header: O.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
          confirmText: O.Z.Messages.OKAY,
          confirmButtonColor: h.Button.Colors.BRAND,
          ...e,
          children: (0, n.jsx)(h.Text, {
            variant: "text-md/normal",
            children: O.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
              email: t
            })
          })
        }))
      } catch {}
    }), I(this, "handleLogin", e => {
      let {
        password: s,
        undelete: t
      } = this.state;
      null != e && e.preventDefault(), d.Z.login({
        login: this.getFullLogin(),
        password: s,
        undelete: t,
        isMultiAccount: !0
      })
    }), I(this, "handlePasswordReset", async e => {
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: s
        } = await m.Z.verifyPhone(this.getFullLogin(), e, !1, !0);
        this.setState({
          resetPasswordPhoneToken: s
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), I(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: s,
        data: t,
        ticket: r
      } = e;
      return d.Z.loginMFAv2({
        code: t,
        ticket: r,
        mfaType: s,
        isMultiAccount: !0
      })
    }), I(this, "handleResendCode", () => {
      m.Z.resendCode(this.getFullLogin())
    }), I(this, "handleReset", e => {
      null != e && e.preventDefault(), d.Z.loginReset(!0), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: !1,
        resetPasswordPhoneToken: null
      })
    }), I(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: !0
      }, this.handleLogin)
    }), this.state = {
      loginPrefix: "",
      login: "",
      password: "",
      code: "",
      smsCode: "",
      phoneVerifyError: null,
      resetPasswordPhoneToken: null,
      undelete: !1
    }
  }
}
I(L, "defaultProps", {
  transitionTo: e => t.g.location.assign(e),
  replaceWith: e => t.g.location.replace(e)
});
s.Z = function(e) {
  let s = (0, l.cj)([T.Z, S.default, C.Z, E.Z], () => ({
    authenticated: S.default.isAuthenticated(),
    loginStatus: S.default.getLoginStatus(),
    mfaTicket: S.default.getMFATicket(),
    mfaSMS: S.default.getMFASMS(),
    maskedPhone: S.default.getMaskedPhone(),
    mfaMethods: S.default.getMFAMethods(),
    errors: S.default.getErrors(),
    defaultRoute: T.Z.defaultRoute,
    country: C.Z.getCountryCode(),
    theme: E.Z.theme
  }));
  return (0, n.jsx)(L, {
    ...e,
    ...s
  })
}