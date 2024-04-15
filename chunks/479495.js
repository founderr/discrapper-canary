"use strict";
s.r(t), s("757143");
var a, r = s("735250"),
  n = s("470079"),
  o = s("120356"),
  l = s.n(o),
  i = s("593473"),
  d = s("873546"),
  u = s("442837"),
  h = s("570140"),
  c = s("893776"),
  f = s("129293"),
  p = s("17894"),
  g = s("124860"),
  m = s("108427"),
  S = s("314897"),
  T = s("819570"),
  C = s("585483"),
  A = s("981631"),
  E = s("689938"),
  _ = s("794711");

function N(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
u.default.initialize();
class M extends(a = n.PureComponent) {
  componentDidMount() {
    (0, m.trackAppUIViewed)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: a
    } = this.state, n = this.isSubmitting(), o = null != t ? t : this.renderError("password");
    return (0, r.jsxs)(T.default, {
      onSubmit: this.handleSubmit,
      tag: "form",
      children: [(0, r.jsx)("img", {
        alt: "",
        src: null == o ? s("26230") : s("935227"),
        className: _.marginBottom20
      }), (0, r.jsx)(T.Title, {
        children: E.default.Messages.RESET_PASSWORD_TITLE
      }), (0, r.jsxs)(T.Block, {
        className: _.marginTop20,
        children: [(0, r.jsx)(T.Input, {
          label: E.default.Messages.FORM_LABEL_NEW_PASSWORD,
          className: _.marginBottom20,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: o,
          type: "password"
        }), (0, r.jsx)(T.Button, {
          type: "submit",
          submitting: n,
          children: E.default.Messages.CHANGE_PASSWORD
        }), a ? (0, r.jsx)(T.Button, {
          className: _.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: n,
          color: T.Button.Colors.PRIMARY,
          children: E.default.Messages.CANCEL
        }) : null]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, r.jsx)(T.default, {
      style: {
        padding: 0
      },
      children: (0, r.jsx)(g.MFASlides, {
        mfaFinish: e => {
          let {
            mfaType: t,
            data: s
          } = e;
          return this.handleTokenSubmitMFAv2(t, s)
        },
        request: e,
        onEarlyClose: () => {
          h.default.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderSucceeded() {
    return (0, r.jsxs)(T.default, {
      children: [(0, r.jsx)("img", {
        alt: "",
        src: s("26230"),
        className: l()(_.marginBottom20, d.isMobile ? _.marginTop20 : "")
      }), (0, r.jsx)(T.Title, {
        className: _.marginBottom40,
        children: E.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
      }), (0, r.jsx)(T.Button, {
        onClick: this.handleOpenApp,
        children: E.default.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), N(this, "handleSubmit", async e => {
      let {
        location: t,
        onLoginSuccess: s,
        source: a,
        resetToken: r
      } = this.props, {
        password: n,
        error: o
      } = this.state;
      if (null != e && e.preventDefault(), 0 === n.length) {
        this.setState({
          error: E.default.Messages.PASSWORD_REQUIRED
        }), C.ComponentDispatch.dispatch(A.ComponentActions.WAVE_EMPHASIZE);
        return
      }
      null != o && this.setState({
        error: null
      });
      let l = r;
      if (null != t && (l = (0, f.default)(t)), null != l) {
        this.setState({
          working: !0
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: r,
            ticket: o,
            token: i,
            totp: d,
            backup: u
          } = await c.default.resetPassword(l, n, a);
          e === c.PasswordResetResult.MFA ? h.default.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: o,
            sms: t,
            webauthn: r,
            totp: d,
            backup: u
          }) : null != s ? s(i) : (h.default.dispatch({
            type: "LOGIN_SUCCESS",
            token: i
          }), this.handlePasswordChangeSuccess())
        } catch (e) {}
        this.setState({
          working: !1
        })
      }
    }), N(this, "handleTokenSubmitMFAv2", (e, t) => {
      let {
        location: s,
        mfaTicket: a,
        onLoginSuccess: r,
        resetToken: n,
        source: o
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return h.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let i = n;
      return (null != s && (i = (0, f.default)(s)), null == i) ? (h.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject()) : c.default.resetPasswordMFAv2({
        method: e,
        code: t,
        ticket: a,
        password: l,
        token: i,
        source: o
      }).then(e => {
        null != r ? r(e) : (h.default.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), this.handlePasswordChangeSuccess())
      })
    }), N(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (d.isTablet || d.isMobile) {
        this.setState({
          success: !0
        });
        return
      }
      e(A.Routes.APP)
    }), N(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      c.default.loginReset(), e(A.Routes.LOGIN)
    }), N(this, "isSubmitting", () => {
      let {
        loginStatus: e
      } = this.props, {
        working: t
      } = this.state;
      return t || e === A.LoginStates.LOGGING_IN_MFA
    }), N(this, "handleOpenApp", () => {
      (0, p.default)("password_reset")
    }), N(this, "hasError", e => null != this.props.errors[e] || null != this.state.error), N(this, "renderError", e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let s = t[e];
        return Array.isArray(s) ? s[0] : s
      }
      return null
    });
    let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, i.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      error: null,
      hasCancel: null != s && null != s.from_login,
      working: !1,
      success: !1
    }
  }
}
N(M, "defaultProps", {
  transitionTo: e => s.g.location.assign(e),
  replaceWith: e => s.g.location.replace(e)
});
t.default = function(e) {
  let t = (0, u.useStateFromStoresObject)([S.default], () => ({
    loginStatus: S.default.getLoginStatus(),
    mfaTicket: S.default.getMFATicket(),
    errors: S.default.getErrors(),
    mfaMethods: S.default.getMFAMethods()
  }));
  return (0, r.jsx)(M, {
    ...e,
    ...t
  })
}