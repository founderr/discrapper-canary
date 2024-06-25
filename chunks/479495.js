n(757143);
var s, i = n(735250),
  r = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(593473),
  c = n(873546),
  u = n(442837),
  d = n(570140),
  _ = n(893776),
  E = n(129293),
  I = n(388905),
  h = n(17894),
  p = n(124860),
  g = n(108427),
  f = n(314897),
  N = n(585483),
  m = n(981631),
  T = n(689938),
  A = n(331651);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
u.ZP.initialize();
class x extends(s = r.PureComponent) {
  componentDidMount() {
    (0, g.e)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: s
    } = this.state, r = this.isSubmitting(), a = null != t ? t : this.renderError("password");
    return (0, i.jsxs)(I.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      children: [(0, i.jsx)("img", {
        alt: "",
        src: null == a ? n(26230) : n(935227),
        className: A.marginBottom20
      }), (0, i.jsx)(I.Dx, {
        children: T.Z.Messages.RESET_PASSWORD_TITLE
      }), (0, i.jsxs)(I.gO, {
        className: A.marginTop20,
        children: [(0, i.jsx)(I.II, {
          label: T.Z.Messages.FORM_LABEL_NEW_PASSWORD,
          className: A.marginBottom20,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: a,
          type: "password"
        }), (0, i.jsx)(I.zx, {
          type: "submit",
          submitting: r,
          children: T.Z.Messages.CHANGE_PASSWORD
        }), s ? (0, i.jsx)(I.zx, {
          className: A.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: r,
          color: I.zx.Colors.PRIMARY,
          children: T.Z.Messages.CANCEL
        }) : null]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, i.jsx)(I.ZP, {
      style: {
        padding: 0
      },
      children: (0, i.jsx)(p.Cd, {
        mfaFinish: e => {
          let {
            mfaType: t,
            data: n
          } = e;
          return this.handleTokenSubmitMFAv2(t, n)
        },
        request: e,
        onEarlyClose: () => {
          d.Z.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderSucceeded() {
    return (0, i.jsxs)(I.ZP, {
      children: [(0, i.jsx)("img", {
        alt: "",
        src: n(26230),
        className: l()(A.marginBottom20, c.tq ? A.marginTop20 : "")
      }), (0, i.jsx)(I.Dx, {
        className: A.marginBottom40,
        children: T.Z.Messages.RESET_PASSWORD_SUCCESS_TITLE
      }), (0, i.jsx)(I.zx, {
        onClick: this.handleOpenApp,
        children: T.Z.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), Z(this, "handleSubmit", async e => {
      let {
        location: t,
        onLoginSuccess: n,
        source: s,
        resetToken: i
      } = this.props, {
        password: r,
        error: a
      } = this.state;
      if (null != e && e.preventDefault(), 0 === r.length) {
        this.setState({
          error: T.Z.Messages.PASSWORD_REQUIRED
        }), N.S.dispatch(m.CkL.WAVE_EMPHASIZE);
        return
      }
      null != a && this.setState({
        error: null
      });
      let l = i;
      if (null != t && (l = (0, E.Z)(t)), null != l) {
        this.setState({
          working: !0
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: i,
            ticket: a,
            token: o,
            totp: c,
            backup: u
          } = await _.Z.resetPassword(l, r, s);
          e === _.c.MFA ? d.Z.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: a,
            sms: t,
            webauthn: i,
            totp: c,
            backup: u
          }) : null != n ? n(o) : (d.Z.dispatch({
            type: "LOGIN_SUCCESS",
            token: o
          }), this.handlePasswordChangeSuccess())
        } catch (e) {}
        this.setState({
          working: !1
        })
      }
    }), Z(this, "handleTokenSubmitMFAv2", (e, t) => {
      let {
        location: n,
        mfaTicket: s,
        onLoginSuccess: i,
        resetToken: r,
        source: a
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return d.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let o = r;
      return (null != n && (o = (0, E.Z)(n)), null == o) ? (d.Z.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject()) : _.Z.resetPasswordMFAv2({
        method: e,
        code: t,
        ticket: s,
        password: l,
        token: o,
        source: a
      }).then(e => {
        null != i ? i(e) : (d.Z.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), this.handlePasswordChangeSuccess())
      })
    }), Z(this, "handlePasswordChangeSuccess", () => {
      let {
        replaceWith: e
      } = this.props;
      if (c.Em || c.tq) {
        this.setState({
          success: !0
        });
        return
      }
      e(m.Z5c.APP)
    }), Z(this, "handleGoToLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      _.Z.loginReset(), e(m.Z5c.LOGIN)
    }), Z(this, "isSubmitting", () => {
      let {
        loginStatus: e
      } = this.props, {
        working: t
      } = this.state;
      return t || e === m.u34.LOGGING_IN_MFA
    }), Z(this, "handleOpenApp", () => {
      (0, h.Z)("password_reset")
    }), Z(this, "hasError", e => null != this.props.errors[e] || null != this.state.error), Z(this, "renderError", e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    });
    let n = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, o.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      error: null,
      hasCancel: null != n && null != n.from_login,
      working: !1,
      success: !1
    }
  }
}
Z(x, "defaultProps", {
  transitionTo: e => n.g.location.assign(e),
  replaceWith: e => n.g.location.replace(e)
});
t.Z = function(e) {
  let t = (0, u.cj)([f.default], () => ({
    loginStatus: f.default.getLoginStatus(),
    mfaTicket: f.default.getMFATicket(),
    errors: f.default.getErrors(),
    mfaMethods: f.default.getMFAMethods()
  }));
  return (0, i.jsx)(x, {
    ...e,
    ...t
  })
}