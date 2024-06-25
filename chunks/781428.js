n.d(t, {
  q: function() {
    return Y
  }
});
var s, r = n(735250),
  i = n(470079),
  a = n(615231),
  o = n(120356),
  l = n.n(o),
  c = n(593473),
  u = n(873546),
  d = n(442837),
  h = n(481060),
  E = n(570140),
  _ = n(893776),
  g = n(899742),
  f = n(579806),
  p = n(743142),
  m = n(388905),
  N = n(379760),
  I = n(100159),
  A = n(473855),
  R = n(124860),
  T = n(86779),
  C = n(726745),
  S = n(913583),
  x = n(144114),
  O = n(541692),
  v = n(952802),
  Z = n(108427),
  L = n(365007),
  M = n(314897),
  b = n(117240),
  y = n(896797),
  D = n(285952),
  P = n(626135),
  j = n(585483),
  w = n(358085),
  U = n(481153),
  G = n(588705),
  k = n(494526),
  F = n(163671),
  B = n(981631),
  H = n(58346),
  z = n(689938),
  K = n(686557),
  W = n(331651);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Y() {
  return (0, r.jsx)(m.ZP, {
    children: (0, r.jsx)(h.Spinner, {})
  })
}
class q extends(s = i.PureComponent) {
  static getDerivedStateFromProps(e) {
    let {
      handoffAvailable: t,
      authenticated: n
    } = e;
    return t || n ? null : {
      checkingHandoff: !1
    }
  }
  componentDidMount() {
    let {
      handoffAvailable: e,
      authenticated: t,
      giftCodeSKU: n,
      invite: s,
      location: r
    } = this.props;
    e && !t ? (0, g.is)() : t && this.loginOrSSO(t, r, !0), P.default.track(B.rMx.LOGIN_VIEWED, {
      location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
      login_source: this.loginSource,
      authenticated: t,
      ...null != n ? (0, I.Z)(n, !1, !1) : {}
    }, {
      flush: !0
    }), null == f.Z && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable && PublicKeyCredential.isConditionalMediationAvailable().then(e => {
      e && (0, L.us)().then(e => {
        let {
          challenge: t,
          ticket: n
        } = e, s = (0, a.wz)(JSON.parse(t));
        return s.signal = this.state.conditionalMediationAbortController.signal, (0, a.U2)(s).then(e => (E.Z.dispatch({
          type: "PASSWORDLESS_START"
        }), _.Z.loginWebAuthn({
          ticket: n,
          credential: JSON.stringify(e),
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }))).catch(e => {
          if ("AbortError" !== e.name) throw e
        })
      }).catch(() => {})
    }), _.Z.getLocationMetadata(), (0, Z.e)("login")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      location: n
    } = this.props, {
      checkingHandoff: s
    } = this.state;
    if (t && !e.authenticated && !s && (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(t, n)), e.errors !== this.props.errors) {
      var r, i, a;
      this.hasError("password") ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError("email") || this.hasError("login") ? null === (i = this.loginRef) || void 0 === i || i.focus() : this.hasError("code") && (null === (a = this.codeRef) || void 0 === a || a.focus())
    }
  }
  get loginSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n,
      loginSource: s,
      redirectTo: r
    } = this.props;
    if (null != s) return s;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    else if (null != n) {
      if (null != n.guild) return "guild_invite";
      if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null != r ? (0, p.L)(r) : null
  }
  get giftCodeSKUId() {
    let {
      giftCode: e
    } = this.props;
    return null != e ? e.skuId : null
  }
  get canShowChooseAccount() {
    return this.props.hasLoggedInAccounts
  }
  loginOrSSO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!!e && null != t) this.setState({
      redirecting: !0
    }), n ? _.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t)
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: s
    } = this.props, r = null != e ? (0, c.parse)(e.search) : {};
    if (delete r.redirect_to, null != n) null != s ? s(n) : t(n);
    else if (null == r.service) t(B.Z5c.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + B.ANM.SSO,
        t = {
          ...r,
          token: M.default.getToken()
        };
      window.location = "".concat(e, "?").concat((0, c.stringify)(t))
    }
  }
  hasError(e) {
    return null != this.props.errors[e]
  }
  renderHandOffAvailable() {
    let {
      authBoxClassName: e
    } = this.props;
    return (0, r.jsxs)(m.ZP, {
      className: e,
      children: [(0, r.jsx)(m.Hh, {}), (0, r.jsx)(m.Dx, {
        className: W.marginBottom8,
        children: z.Z.Messages.BROWSER_HANDOFF_DETECTING_TITLE
      }), (0, r.jsx)(m.DK, {
        children: z.Z.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
      })]
    })
  }
  renderHandOffContinue() {
    let {
      user: e,
      transitionTo: t,
      authBoxClassName: n
    } = this.props;
    return null == e ? null : (0, r.jsxs)(m.ZP, {
      className: n,
      children: [(0, r.jsx)(m.qE, {
        src: e.getAvatarURL(void 0, 100),
        size: h.AvatarSizes.DEPRECATED_SIZE_100,
        className: W.marginBottom20
      }), (0, r.jsx)(m.Dx, {
        className: W.marginBottom8,
        children: z.Z.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
          name: e.toString()
        })
      }), (0, r.jsx)(m.DK, {
        className: W.marginBottom40,
        children: z.Z.Messages._BROWSER_HANDOFF_SUCCESS_BODY
      }), (0, r.jsxs)(m.gO, {
        children: [(0, r.jsx)(m.zx, {
          onClick: () => t(B.Z5c.APP),
          className: W.marginBottom8,
          children: z.Z.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
            name: e.toString()
          })
        }), (0, r.jsx)(m.zx, {
          look: m.zx.Looks.LINK,
          color: m.zx.Colors.LINK,
          onClick: this.handleReset,
          children: z.Z.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
        })]
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === B.u34.ACCOUNT_DISABLED, n = t ? z.Z.Messages.ACCOUNT_DISABLED_TITLE : z.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, s = t ? z.Z.Messages.ACCOUNT_DISABLED_DESCRIPTION : z.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
    return (0, r.jsx)(m.ZP, {
      tag: "form",
      onSubmit: this.handleReset,
      className: e,
      children: (0, r.jsxs)(h.HeadingLevel, {
        component: (0, r.jsx)(m.Dx, {
          className: W.marginBottom8,
          children: n
        }),
        children: [(0, r.jsx)(m.DK, {
          className: W.marginBottom20,
          children: s
        }), (0, r.jsxs)(m.gO, {
          children: [(0, r.jsx)(m.zx, {
            color: m.zx.Colors.BRAND,
            type: "submit",
            children: z.Z.Messages._RETURN_TO_LOGIN
          }), (0, r.jsx)("div", {
            className: l()(W.marginTop8, K.needAccount),
            children: z.Z.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
              onClick: this.handleCancelAccountDeletion
            })
          })]
        })]
      })
    })
  }
  renderResolving() {
    let {
      authBoxClassName: e,
      country: t
    } = this.props;
    return (0, r.jsxs)(m.ZP, {
      className: e,
      children: [(0, r.jsx)(G.R, {}), (0, r.jsxs)(m.gO, {
        className: W.marginTop20,
        children: [(0, r.jsx)(v.Z, {
          className: W.marginBottom20,
          alpha2: t.alpha2,
          countryCode: t.code.split(" ")[0],
          label: z.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
          onChange: (e, t) => this.setState({
            login: e,
            loginPrefix: t
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !0,
          required: !0
        }), (0, r.jsx)(m.II, {
          className: W.marginBottom20,
          label: z.Z.Messages.FORM_LABEL_PASSWORD,
          onChange: e => this.setState({
            password: e
          }),
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          value: this.state.password,
          required: !0
        }), (0, r.jsx)(m.zx, {
          className: W.marginBottom8,
          type: "submit",
          disabled: !0,
          children: z.Z.Messages._LOGIN
        }), (0, r.jsx)(m.zx, {
          disabled: !0,
          look: m.zx.Looks.LINK,
          color: m.zx.Colors.LINK,
          children: z.Z.Messages.FORGOT_PASSWORD
        }), (0, r.jsx)(m.zx, {
          disabled: !0,
          className: W.marginTop4,
          look: m.zx.Looks.LINK,
          color: m.zx.Colors.LINK,
          children: z.Z.Messages.NEED_ACCOUNT
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n;
    let {
      invite: s,
      giftCode: i,
      loginStatus: a,
      country: o,
      showMobileWebHandoff: c,
      disableAutofocusOnDefaultForm: u
    } = this.props, d = !this.hasError("email") && this.hasError("password"), E = (null == s ? void 0 : s.stage_instance) != null;
    return n = null == s || E ? null != i ? (0, r.jsx)(U.Z, {
      giftCode: i
    }) : (0, r.jsxs)("div", {
      className: K.header,
      children: [(0, r.jsx)(m.Dx, {
        className: W.marginBottom8,
        children: z.Z.Messages.LOGIN_TITLE
      }, "title"), !1 === (0, w.isAndroidWeb)() ? (0, r.jsx)(m.DK, {
        children: z.Z.Messages.AUTH_LOGIN_BODY
      }, "subtitle") : null]
    }) : (0, r.jsx)(G.Z, {
      invite: s
    }), (0, r.jsxs)(D.Z, {
      direction: D.Z.Direction.HORIZONTAL,
      align: D.Z.Align.CENTER,
      children: [(0, r.jsxs)("div", {
        className: K.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, r.jsx)(m.zx, {
          onClick: () => {
            this.setState(e => ({
              ...e,
              dismissedChooseAccount: !1
            }))
          },
          look: m.zx.Looks.LINK,
          color: m.zx.Colors.PRIMARY,
          className: K.goBackButton,
          children: (0, r.jsxs)("div", {
            className: K.content,
            children: [(0, r.jsx)(h.ChevronSmallLeftIcon, {
              size: "xs",
              color: "currentColor",
              className: K.caret
            }), (0, r.jsx)(h.Text, {
              variant: "text-md/normal",
              children: z.Z.Messages.AGE_GATE_GO_BACK
            })]
          })
        }), n, (0, r.jsx)(h.HeadingLevel, {
          children: (0, r.jsxs)(m.gO, {
            className: W.marginTop20,
            children: [(0, r.jsx)(v.Z, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: W.marginBottom20,
              label: z.Z.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
              error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
              onChange: (e, t) => this.setState({
                login: e,
                loginPrefix: t
              }),
              setRef: this.setLoginRef,
              autoCapitalize: "none",
              autoComplete: "webauthn",
              autoCorrect: "off",
              spellCheck: "false",
              value: this.state.login,
              autoFocus: !d && !c && !u,
              required: !0
            }), (0, r.jsx)(m.II, {
              label: z.Z.Messages.FORM_LABEL_PASSWORD,
              error: this.renderError("password"),
              onChange: e => this.setState({
                password: e
              }),
              name: "password",
              type: "password",
              setRef: this.setPasswordRef,
              autoComplete: "off",
              spellCheck: "false",
              autoFocus: d && !c && !u,
              value: this.state.password,
              required: !0
            }), (0, r.jsx)(m.zx, {
              onClick: this.handleForgotPassword,
              look: m.zx.Looks.LINK,
              color: m.zx.Colors.LINK,
              className: l()(W.marginBottom20, W.marginTop4),
              children: z.Z.Messages.FORGOT_PASSWORD
            }), (0, r.jsx)(m.zx, {
              type: "submit",
              submitting: a === B.u34.LOGGING_IN,
              color: E ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
              className: W.marginBottom8,
              children: E ? z.Z.Messages._LOGIN_STAGE : z.Z.Messages._LOGIN
            }), (0, r.jsxs)("div", {
              className: W.marginTop4,
              children: [(0, r.jsx)("span", {
                className: K.needAccount,
                children: z.Z.Messages.NEED_ACCOUNT
              }), (0, r.jsx)(m.zx, {
                onClick: this.handleGotoRegister,
                look: m.zx.Looks.LINK,
                color: m.zx.Colors.LINK,
                className: K.smallRegisterLink,
                children: z.Z.Messages.REGISTER
              })]
            })]
          })
        })]
      }), (0, r.jsx)(h.HeadingLevel, {
        children: e ? (0, r.jsx)(k.Z, {
          authTokenCallback: this.handleAuthToken,
          conditionalMediationAbortController: this.state.conditionalMediationAbortController
        }) : null
      })]
    }, "form-wrapper")
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      showMobileWebHandoff: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: K.__invalid_pageContainer,
      children: [(0, r.jsx)(m.ZP, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: e,
        expanded: !0,
        children: this.renderDefaultForm(!0)
      }), t && (0, r.jsx)(T.Z, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, r.jsx)(F.Z, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: l()(this.props.authBoxClassName, K.horizontalAuthBox),
      children: () => [(0, r.jsx)(A.Z, {
        guildTemplate: e
      }, "template"), this.renderDefaultForm(!1)]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, r.jsx)(m.ZP, {
      style: {
        padding: 0
      },
      children: (0, r.jsx)(R.Cd, {
        mfaFinish: this.handleTokenSubmitMFA,
        request: e,
        onEarlyClose: () => {
          E.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderIPAuthorization() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, r.jsx)(m.ZP, {
      tag: "form",
      className: e,
      children: (0, r.jsx)(N.Z, {
        title: z.Z.Messages.PHONE_IP_AUTHORIZATION_TITLE,
        subtitle: z.Z.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handleIPAuthorize,
        onCancel: _.Z.loginReset
      })
    })
  }
  renderPasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, r.jsx)(m.ZP, {
      tag: "form",
      className: e,
      children: (0, r.jsx)(N.Z, {
        title: z.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
        subtitle: z.Z.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handlePasswordReset,
        onCancel: _.Z.loginReset
      })
    })
  }
  renderChooseAccount() {
    return (0, r.jsx)(S.Z, {
      onDismiss: () => {
        this.setState(e => ({
          ...e,
          dismissedChooseAccount: !0
        }))
      }
    })
  }
  render() {
    let {
      authenticated: e,
      invite: t,
      guildTemplate: n,
      loginStatus: s,
      handoffAvailable: i
    } = this.props, {
      checkingHandoff: a,
      redirecting: o
    } = this.state;
    if (o || a) return (0, r.jsx)(Y, {});
    if (i) return this.renderHandOffAvailable();
    if (e && a) return this.renderHandOffContinue();
    switch (s) {
      case B.u34.LOGGING_IN_MFA_SMS:
      case B.u34.MFA_SMS_STEP:
      case B.u34.LOGGING_IN_MFA:
      case B.u34.MFA_STEP:
        return this.renderMFA();
      case B.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
      case B.u34.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case B.u34.PHONE_IP_AUTHORIZATION:
        return this.renderIPAuthorization();
      case B.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPasswordRecovery();
      case B.u34.LOGGING_IN:
      case B.u34.NONE:
      default:
        if (null != t && t.state === B.r2o.RESOLVING) return this.renderResolving();
        if (null != n) {
          if (n.state === H.Rj.RESOLVING) return this.renderResolving();
          return this.renderGuildTemplate(n)
        }
        if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
        return this.renderDefault()
    }
  }
  constructor(e) {
    var t, n;
    super(e), V(this, "loginRef", void 0), V(this, "passwordRef", void 0), V(this, "codeRef", void 0), V(this, "handleAuthToken", async e => {
      await _.Z.loginToken(e, !1), P.default.track(B.rMx.LOGIN_SUCCESSFUL, {
        source: B.uRl.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: !1
      })
    }), V(this, "setLoginRef", e => {
      this.loginRef = e
    }), V(this, "setPasswordRef", e => {
      this.passwordRef = e
    }), V(this, "setCodeRef", e => {
      this.codeRef = e
    }), V(this, "getFullLogin", () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }), V(this, "renderError", e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }), V(this, "handleLogin", e => {
      let {
        password: t,
        undelete: n
      } = this.state;
      null != e && e.preventDefault(), _.Z.login({
        login: this.getFullLogin(),
        password: t,
        undelete: n,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId,
        invite: this.props.invite
      }), j.S.dispatch(B.CkL.WAVE_EMPHASIZE)
    }), V(this, "handleIPAuthorize", async e => {
      let {
        password: t,
        undelete: n
      } = this.state, s = this.getFullLogin();
      try {
        let {
          token: r
        } = await x.Z.verifyPhone(s, e, !1);
        await _.Z.authorizeIPAddress(r), _.Z.login({
          login: s,
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }), j.S.dispatch(B.CkL.WAVE_EMPHASIZE)
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), V(this, "handlePasswordReset", async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await x.Z.verifyPhone(this.getFullLogin(), e, !1);
        t(B.Z5c.RESET, {
          search: (0, c.stringify)({
            token: n,
            from_login: "true"
          })
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }), V(this, "handleTokenSubmitMFA", e => {
      let {
        mfaType: t,
        data: n,
        ticket: s
      } = e;
      return j.S.dispatch(B.CkL.WAVE_EMPHASIZE), _.Z.loginMFAv2({
        code: n,
        ticket: s,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }), V(this, "handleForgotPassword", async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      try {
        j.S.dispatch(B.CkL.WAVE_EMPHASIZE), await _.Z.forgotPassword(t), (0, h.openModal)(e => (0, r.jsx)(h.ConfirmModal, {
          header: z.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
          confirmText: z.Z.Messages.OKAY,
          confirmButtonColor: m.zx.Colors.BRAND,
          className: u.tq ? K.mobile : "",
          ...e,
          children: (0, r.jsx)(h.Text, {
            variant: "text-md/normal",
            children: z.Z.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
              email: t
            })
          })
        }))
      } catch {}
    }), V(this, "handleResendCode", () => {
      x.Z.resendCode(this.getFullLogin())
    }), V(this, "handleReset", e => {
      null != e && e.preventDefault(), _.Z.loginReset(), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: !1,
        checkingHandoff: !1,
        redirecting: !1
      })
    }), V(this, "handleCancelAccountDeletion", () => {
      this.setState({
        undelete: !0
      }, this.handleLogin)
    }), V(this, "handleGotoRegister", () => {
      let e;
      let {
        login: t
      } = this.state, {
        invite: n,
        giftCode: s,
        guildTemplate: r,
        location: i,
        transitionTo: a,
        redirectTo: o
      } = this.props, l = null != i ? (0, c.parse)(i.search) : {};
      "" !== t && (l.email = t), null != n ? (l.mode = "register", e = B.Z5c.INVITE(n.code)) : null != s ? (l.mode = "register", e = B.Z5c.GIFT_CODE(s.code)) : null != r ? e = B.Z5c.GUILD_TEMPLATE(r.code) : null != o ? (e = B.Z5c.REGISTER, l.redirect_to = o) : e = B.Z5c.REGISTER, _.Z.loginReset(), a(e, {
        search: (0, c.stringify)(l)
      }), j.S.dispatch(B.CkL.WAVE_EMPHASIZE)
    });
    let s = null != e.location ? (0, c.parse)(e.location.search) : {};
    this.state = {
      redirecting: e.authenticated,
      checkingHandoff: e.handoffAvailable,
      loginPrefix: "",
      login: null !== (n = null !== (t = s.email) && void 0 !== t ? t : s.login) && void 0 !== n ? n : "",
      password: "",
      code: "",
      smsCode: "",
      undelete: !1,
      phoneVerifyError: null,
      dismissedChooseAccount: !1,
      conditionalMediationAbortController: new AbortController
    }
  }
}
V(q, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
});
t.Z = function(e) {
  let t = (0, d.cj)([b.Z, y.Z, M.default, C.Z, O.Z], () => ({
    authenticated: M.default.isAuthenticated(),
    handoffAvailable: b.Z.isHandoffAvailable(),
    user: b.Z.user,
    loginStatus: M.default.getLoginStatus(),
    mfaTicket: M.default.getMFATicket(),
    mfaSMS: M.default.getMFASMS(),
    mfaMethods: M.default.getMFAMethods(),
    maskedPhone: M.default.getMaskedPhone(),
    errors: M.default.getErrors(),
    defaultRoute: y.Z.defaultRoute,
    country: O.Z.getCountryCode(),
    hasLoggedInAccounts: C.Z.getHasLoggedInAccounts()
  }));
  return (0, r.jsx)(q, {
    ...e,
    ...t
  })
}