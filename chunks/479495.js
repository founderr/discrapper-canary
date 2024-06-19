t(757143);
var r, n = t(735250),
  a = t(470079),
  o = t(120356),
  i = t.n(o),
  l = t(593473),
  h = t(873546),
  d = t(442837),
  u = t(570140),
  c = t(893776),
  p = t(129293),
  g = t(388905),
  m = t(17894),
  C = t(124860),
  f = t(108427),
  E = t(314897),
  S = t(585483),
  T = t(981631),
  N = t(689938),
  _ = t(331651);

function A(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
d.ZP.initialize();
class O extends(r = a.PureComponent) {
  componentDidMount() {
    (0, f.e)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: s,
      hasCancel: r
    } = this.state, a = this.isSubmitting(), o = null != s ? s : this.renderError("password");
    return (0, n.jsxs)(g.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null == o ? t(26230) : t(935227),
        className: _.marginBottom20
      }), (0, n.jsx)(g.Dx, {
        children: N.Z.Messages.RESET_PASSWORD_TITLE
      }), (0, n.jsxs)(g.gO, {
        className: _.marginTop20,
        children: [(0, n.jsx)(g.II, {
          label: N.Z.Messages.FORM_LABEL_NEW_PASSWORD,
          className: _.marginBottom20,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: o,
          type: "password"
        }), (0, n.jsx)(g.zx, {
          type: "submit",
          submitting: a,
          children: N.Z.Messages.CHANGE_PASSWORD
        }), r ? (0, n.jsx)(g.zx, {
          className: _.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: a,
          color: g.zx.Colors.PRIMARY,
          children: N.Z.Messages.CANCEL
        }) : null]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, n.jsx)(g.ZP, {
      style: {
        padding: 0
      },
      children: (0, n.jsx)(C.Cd, {
        mfaFinish: e => {
          let {
            mfaType: s,
            data: t
          } = e;
          return this.handleTokenSubmitMFAv2(s, t)
        },
        request: e,
        onEarlyClose: () => {
          u.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderSucceeded() {
    return (0, n.jsxs)(g.ZP, {
      children: [(0, n.jsx)("img", {
        alt: "",
        src: t(26230),
        className: i()(_.marginBottom20, h.tq ? _.marginTop20 : "")
      }), (0, n.jsx)(g.Dx, {
        className: _.marginBottom40,
        children: N.Z.Messages.RESET_PASSWORD_SUCCESS_TITLE
      }), (0, n.jsx)(g.zx, {
        onClick: this.handleOpenApp,
        children: N.Z.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var s;
    super(e), A(this, "handleSubmit", async e => {
      let {
        location: s,
        onLoginSuccess: t,
        source: r,
        resetToken: n
      } = this.props, {
        password: a,
        error: o
      } = this.state;
      if (null != e && e.preventDefault(), 0 === a.length) {
        this.setState({
          error: N.Z.Messages.PASSWORD_REQUIRED
        }), S.S.dispatch(T.CkL.WAVE_EMPHASIZE);
        return
      }
      null != o && this.setState({
        error: null
      });
      let i = n;
      if (null != s && (i = (0, p.Z)(s)), null != i) {
        this.setState({
          working: !0
        });
        try {
          let {
            result: e,
            sms: s,
            webauthn: n,
            ticket: o,
            token: l,
            totp: h,
            backup: d
          } = await c.Z.resetPassword(i, a, r);
          e === c.c.MFA ? u.Z.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: o,
            sms: s,
            webauthn: n,
            totp: h,
            backup: d
          }) : null != t ? t(l) : (u.Z.dispatch({
            type: "LOGIN_SUCCESS",
            token: l
          }), this.handlePasswordChangeSuccess())
        } catch (e) {}
        this.setState({
          working: !1
        })
      }
    }), A(this, "handleTokenSubmitMFAv2", (e, s) => {
      let {
        location: t,
        mfaTicket: r,
        onLoginSuccess: n,
        resetToken: a,
        source: o
      } = this.props, {
        password: i
      } = this.state;
      if (0 === i.length) return u.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let l = a;
      return (null != t && (l = (0, p.Z)(t)), null == l) ? (u.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject()) : c.Z.resetPasswordMFAv2({
        method: e,
        code: s,
        ticket: r,
        password: i,
        token: l,
        source: o
      }).then(e => {
        null != n ? n(e) : (u.Z.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), this.handlePasswordChangeSuccess())
      })
    }), A(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (h.Em || h.tq) {
        this.setState({
          success: !0
        });
        return
      }
      e(T.Z5c.APP)
    }), A(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      c.Z.loginReset(), e(T.Z5c.LOGIN)
    }), A(this, "isSubmitting", () => {
      let {
        loginStatus: e
      } = this.props, {
        working: s
      } = this.state;
      return s || e === T.u34.LOGGING_IN_MFA
    }), A(this, "handleOpenApp", () => {
      (0, m.Z)("password_reset")
    }), A(this, "hasError", e => null != this.props.errors[e] || null != this.state.error), A(this, "renderError", e => {
      let {
        errors: s
      } = this.props;
      if (this.hasError(e)) {
        let t = s[e];
        return Array.isArray(t) ? t[0] : t
      }
      return null
    });
    let t = (null === (s = this.props.location) || void 0 === s ? void 0 : s.search) != null && "" !== this.props.location.search ? (0, l.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      error: null,
      hasCancel: null != t && null != t.from_login,
      working: !1,
      success: !1
    }
  }
}
A(O, "defaultProps", {
  transitionTo: e => t.g.location.assign(e),
  replaceWith: e => t.g.location.replace(e)
});
s.Z = function(e) {
  let s = (0, d.cj)([E.default], () => ({
    loginStatus: E.default.getLoginStatus(),
    mfaTicket: E.default.getMFATicket(),
    errors: E.default.getErrors(),
    mfaMethods: E.default.getMFAMethods()
  }));
  return (0, n.jsx)(O, {
    ...e,
    ...s
  })
}