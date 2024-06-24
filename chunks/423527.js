n.d(t, {
  Z: function() {
    return eo
  }
}), n(757143), n(47120), n(627341);
var s, r = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(593473),
  u = n(278074),
  c = n(990547),
  d = n(442837),
  h = n(846519),
  E = n(481060),
  _ = n(893776),
  m = n(899370),
  g = n(224841),
  p = n(13430),
  f = n(213609),
  I = n(882037),
  N = n(201207),
  A = n(481230),
  T = n(388905),
  R = n(853268),
  S = n(639946),
  C = n(616952),
  x = n(792766),
  O = n(692483),
  v = n(100159),
  Z = n(473855),
  L = n(726745),
  M = n(929809),
  b = n(541692),
  D = n(986197),
  y = n(135200),
  j = n(219496),
  P = n(794099),
  w = n(807369),
  U = n(180529),
  G = n(108427),
  F = n(314897),
  k = n(480294),
  B = n(896797),
  H = n(626135),
  V = n(585483),
  z = n(70956),
  K = n(624138),
  Y = n(481153),
  W = n(588705),
  q = n(163671),
  Q = n(981631),
  J = n(355142),
  X = n(188785),
  $ = n(701476),
  ee = n(801461),
  et = n(689938),
  en = n(182428),
  es = n(331651);

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
d.ZP.initialize();
let ei = /\.$/,
  ea = e => Array.isArray(e) ? e.map(e => e.replace(ei, "")).join(". ").trim() : e;
class el extends(s = i.PureComponent) {
  get registrationSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n
    } = this.props;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    if (null != n) {
      if (null != n.guild) return "guild_invite";
      if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null
  }
  hasConsent() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t
    } = this.state;
    return null != e && t
  }
  componentDidMount() {
    this.redirectIfAuthenticated(), N.Z.trackExposure({
      location: "0ba758_1"
    });
    let {
      giftCodeSKU: e,
      invite: t
    } = this.props;
    H.default.track(Q.rMx.REGISTER_VIEWED, {
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource,
      ...null != e ? (0, v.Z)(e, !1, !1) : {}
    }, {
      flush: !0
    }), null == this.props.consentRequired && _.Z.getLocationMetadata(), (0, G.e)("register")
  }
  componentWillUnmount() {
    this._retryTimer.stop()
  }
  static getDerivedStateFromProps(e, t) {
    let {
      consentRequired: n
    } = e, {
      consentRequiredProp: s
    } = t;
    return null == s && null != n ? {
      consent: !n,
      consentRequiredProp: n
    } : {
      consentRequiredProp: n
    }
  }
  componentDidUpdate(e, t) {
    let {
      apiErrors: n,
      authenticated: s,
      isUnderage: r,
      invite: i,
      onChangeStep: a
    } = this.props, {
      parsedDateOfBirth: l
    } = this.state;
    (e.apiErrors !== n || t.parsedDateOfBirth !== l) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(this.props.apiErrors.retry_after * z.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
      })
    }))), s && !e.authenticated && ((0, M.c)($.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let o = J.E.FULL;
    r || this.hasError("date_of_birth") ? o = J.E.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (o = J.E.INVITE), a(o)
  }
  redirectIfAuthenticated() {
    let {
      authenticated: e,
      transitionTo: t,
      redirectTo: n
    } = this.props;
    if (!!e) t(null != n ? n : B.Z.defaultRoute)
  }
  async handleRegister() {
    let {
      email: e,
      username: t,
      globalName: n,
      password: s,
      consent: r,
      parsedDateOfBirth: i
    } = this.state, {
      invite: a,
      guildTemplate: l,
      giftCode: o,
      onRegister: u,
      usernameSuggestion: c,
      isMobileWebInviteRegistration: d
    } = this.props, h = null != a ? a.code : null, E = null != o ? o.skuId : null, _ = I.MD.getState(), m = (0, K.Ew)(c) ? null : t === c, g = X.a ? await (0, O.K)(t) : t, p = X.a ? await (0, O.K)(n) : n;
    V.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
    try {
      d || null == a ? await (0, A.R$)({
        email: e,
        username: g,
        globalName: p,
        consent: r,
        password: s,
        invite: h,
        usedUsernameSuggestion: m,
        guildTemplateCode: null == l ? void 0 : l.code,
        giftCodeSKUId: E,
        birthday: i,
        promoEmailConsent: _.required ? _ : null
      }) : await (0, A.ZP)({
        consent: r,
        invite: h,
        giftCodeSKUId: E,
        usedUsernameSuggestion: m,
        globalName: p
      }), null == u || u()
    } catch (e) {}
  }
  hasError(e) {
    return null != this.props.apiErrors[e]
  }
  renderConsentComponents() {
    let {
      consent: e
    } = this.state, {
      consentRequired: t,
      registrationCopyExperimentConfig: {
        enableNewCopy: n,
        hasProminentCopy: s
      }
    } = this.props, i = null, a = null;
    return t ? a = (0, r.jsx)(R.Z, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: et.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }) : i = (0, r.jsx)(T.i_, {
      isProminent: !!s,
      className: es.marginTop8,
      children: n ? et.Z.Messages.TERMS_PRIVACY_ON_REGISTER.format({
        buttonText: et.Z.Messages.CONTINUE,
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      }) : et.Z.Messages.TERMS_PRIVACY.format({
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }), {
      subText: i,
      consentText: a
    }
  }
  renderInviteResolving() {
    let {
      authBoxClassName: e
    } = this.props, t = e => {
      this.setState({
        globalName: e
      })
    }, n = this.state.globalName;
    return (0, r.jsxs)(T.ZP, {
      className: e,
      children: [(0, r.jsx)(W.R, {}), (0, r.jsxs)(T.gO, {
        className: es.marginTop40,
        children: [(0, r.jsx)(E.FormTitle, {
          children: et.Z.Messages.FORM_LABEL_USERNAME
        }), (0, r.jsx)(E.Tooltip, {
          text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
          position: "right",
          color: E.Tooltip.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: i
            } = e;
            return (0, r.jsx)(T.II, {
              autoFocus: !0,
              className: es.marginBottom8,
              name: "username",
              value: n,
              placeholder: et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
              onChange: t,
              onMouseEnter: s,
              onMouseLeave: i
            })
          }
        }), (0, r.jsx)(T.zx, {
          className: es.marginTop20,
          disabled: !0,
          children: et.Z.Messages.CONTINUE
        }), (0, r.jsx)(T.i_, {
          disabled: !0,
          className: es.marginTop8,
          children: et.Z.Messages.TERMS_PRIVACY.format({
            termsURL: Q.EYA.TERMS,
            privacyURL: Q.EYA.PRIVACY
          })
        }), X.a ? null : (0, r.jsx)(T.zx, {
          look: T.zx.Looks.LINK,
          color: T.zx.Colors.LINK,
          disabled: !0,
          className: es.marginTop20,
          children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, r.jsx)(x.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, r.jsx)(S.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, r.jsx)(W.Z, {
      invite: e
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      registering: t,
      consentRequired: n
    } = this.props, {
      consent: s
    } = this.state, i = T.zx.Colors.BRAND, a = et.Z.Messages.CONTINUE;
    return (null == e ? void 0 : e.stage_instance) != null && (i = T.zx.Colors.GREEN, a = et.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, r.jsx)(E.Tooltip, {
      text: !s && n ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, r.jsx)("div", {
        className: es.marginTop20,
        ...e,
        children: (0, r.jsx)(T.zx, {
          type: "submit",
          submitting: t,
          disabled: !this.hasConsent(),
          color: i,
          children: a
        })
      })
    })
  }
  renderInvite() {
    let {
      invite: e,
      authBoxClassName: t,
      apiErrors: {
        username: n,
        global_name: s
      }
    } = this.props, {
      subText: i,
      consentText: a
    } = this.renderConsentComponents(), l = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
      this.setState({
        globalName: e
      })
    }, u = this.state.globalName;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(T.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), l ? (0, r.jsx)("div", {
          className: en.divider
        }) : null, (0, r.jsxs)(T.gO, {
          className: l ? void 0 : es.marginTop40,
          children: [(0, r.jsx)(E.FormTitle, {
            error: ea(null != s ? s : n),
            children: et.Z.Messages.DISPLAY_NAME
          }), (0, r.jsx)(E.Tooltip, {
            text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
            position: "right",
            color: E.Tooltip.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: i
              } = e;
              return (0, r.jsx)(T.II, {
                autoFocus: !0,
                className: es.marginBottom8,
                name: "global_name",
                value: u,
                placeholder: et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                onChange: o,
                error: null != n || null != s ? "" : null,
                onMouseEnter: t,
                onMouseLeave: i
              })
            }
          }), (0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
          }), this.renderInviteButton(), i, a, X.a ? null : (0, r.jsx)(T.zx, {
            look: T.zx.Looks.LINK,
            color: T.zx.Colors.LINK,
            onClick: this.handleGotoLogin,
            className: es.marginTop20,
            children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
          })]
        })]
      }), null != e && l ? (0, r.jsx)(T.ZP, {
        className: es.marginTop20,
        children: (0, r.jsx)(x.y, {
          guild: e.guild,
          onlineCount: e.approximate_presence_count
        })
      }) : null]
    })
  }
  renderErrorMessage() {
    let {
      apiErrors: {
        message: e
      }
    } = this.props;
    return "string" != typeof e ? null : (0, r.jsx)(T.i_, {
      className: l()(es.marginTop20, en.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: s,
      globalName: a,
      password: o,
      consent: u,
      parsedDateOfBirth: c,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: _,
      passwordClientError: m,
      dateOfBirthClientError: g
    } = this.state, {
      registering: f,
      consentRequired: I,
      isMobileWebInviteRegistration: N,
      uniqueUsernameRegistrationConfig: {
        suggestions: A
      },
      authBoxClassName: R,
      apiErrors: {
        email: S,
        username: x,
        global_name: O,
        password: v,
        date_of_birth: Z
      } = {},
      hasLoggedInAccounts: L,
      registrationCopyExperimentConfig: {
        hasCopyAboveButton: M
      }
    } = this.props, {
      subText: b,
      consentText: j
    } = this.renderConsentComponents(), P = this.renderErrorMessage(), w = (0, r.jsx)(E.Tooltip, {
      text: !u && I ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, r.jsx)("div", {
        className: es.marginTop20,
        ...e,
        children: (0, r.jsx)(T.zx, {
          type: "submit",
          submitting: f,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: et.Z.Messages.CONTINUE
        })
      })
    }), G = async () => {
      this.setState({
        usernameFocused: !0
      }), A && a.length > 0 && !y.Z.wasRegistrationSuggestionFetched(a) && await D.Z.fetchSuggestionsRegistration(a)
    }, F = null != e ? (0, r.jsx)(i.Fragment, {
      children: e()
    }, "custom-header") : (0, r.jsx)(T.Dx, {
      children: et.Z.Messages.REGISTER_TITLE
    }, "title"), k = (0, r.jsxs)(T.gO, {
      className: es.marginTop20,
      children: [(0, r.jsx)(T.II, {
        autoFocus: !0,
        className: es.marginBottom20,
        label: et.Z.Messages.FORM_LABEL_EMAIL,
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
        }),
        error: null != h ? h : ea(S),
        type: "email",
        setRef: e => {
          this.emailRef = e
        },
        required: !0
      }), (0, r.jsx)(T.II, {
        label: et.Z.Messages.DISPLAY_NAME,
        className: es.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: ea(O),
        maxLength: ee.hy,
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => this.setState({
          globalNameFocused: !0
        }),
        onBlur: () => this.setState({
          globalNameFocused: !1
        })
      }), (0, r.jsx)(U.Z, {
        show: d,
        top: -12,
        bottom: 20,
        children: (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
        })
      }), (0, r.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: G,
        tabIndex: -1,
        children: [(0, r.jsx)(T.II, {
          label: et.Z.Messages.FORM_LABEL_USERNAME,
          className: es.marginBottom20,
          name: "username",
          value: s,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
            })
          },
          error: null != _ ? _ : ea(x),
          setRef: e => {
            this.usernameRef = e
          },
          required: !0
        }), this.renderUsernameValidation()]
      }), (0, r.jsx)(T.II, {
        label: et.Z.Messages.FORM_LABEL_PASSWORD,
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
        }),
        error: null != m ? m : ea(v),
        type: "password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0
      }), (0, r.jsx)(p.Z, {
        label: et.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
        wrapperClassName: es.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != g ? g : ea(Z),
        value: c,
        required: !0
      }), M && b, (0, r.jsx)(C.Z, {}), w, P, j, !M && b, X.a ? null : (0, r.jsx)(T.zx, {
        look: N ? T.zx.Looks.FILLED : T.zx.Looks.LINK,
        color: N ? T.zx.Colors.PRIMARY : T.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: es.marginTop20,
        children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
      })]
    });
    return t ? (0, r.jsx)(q.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: l()(R, en.horizontalAuthBox),
      children: () => [F, (0, r.jsxs)("div", {
        className: en.flex,
        children: [(0, r.jsx)(T.Dx, {
          className: en.createAccountTemplateHeader,
          children: et.Z.Messages.REGISTER_TITLE
        }), k]
      }, "register-title")]
    }) : (0, r.jsxs)(T.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: R,
      children: [L && !N ? (0, r.jsx)(T.zx, {
        onClick: this.handleGotoLogin,
        look: T.zx.Looks.LINK,
        color: T.zx.Colors.PRIMARY,
        className: en.goBackButton,
        children: (0, r.jsxs)("div", {
          className: en.content,
          children: [(0, r.jsx)(E.ChevronSmallLeftIcon, {
            size: "xs",
            color: "currentColor",
            className: en.caret
          }), (0, r.jsx)(E.Text, {
            variant: "text-md/normal",
            children: et.Z.Messages.AGE_GATE_GO_BACK
          })]
        })
      }) : null, F, k]
    })
  }
  render() {
    let {
      isUnderage: e,
      isMobileWebInviteRegistration: t
    } = this.props;
    if (e || this.hasError("date_of_birth")) return (0, r.jsx)(g.Z, {});
    let {
      invite: n,
      giftCode: s,
      guildTemplate: i
    } = this.props, a = null != n && null == n.guild && null == n.channel && null != n.inviter;
    return null == n || a || t ? null != i ? this.renderFull(() => (0, r.jsx)(Z.Z, {
      guildTemplate: i
    }), !0) : null != s ? this.renderFull(() => (0, r.jsx)(Y.Z, {
      giftCode: s
    })) : null != n && a && n.state === Q.r2o.RESOLVED && !t ? this.renderFull(() => (0, r.jsx)(W.Z, {
      invite: n,
      isRegister: !0
    })) : this.renderFull() : n.state === Q.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
  }
  constructor(e) {
    var t;
    super(e), er(this, "emailRef", void 0), er(this, "usernameRef", void 0), er(this, "globalNameRef", void 0), er(this, "passwordRef", void 0), er(this, "dateOfBirthRef", i.createRef()), er(this, "_retryTimer", new h.V7), er(this, "handleGotoLogin", e => {
      let t;
      let {
        email: n
      } = this.state, {
        giftCode: s,
        guildTemplate: r,
        invite: i,
        location: a,
        onLoginStart: l,
        redirectTo: u,
        transitionTo: c,
        isMobileWebInviteRegistration: d
      } = this.props;
      if (d) {
        null == l || l(e);
        return
      }
      let h = null != a ? (0, o.parse)(a.search) : {};
      null != i ? t = Q.Z5c.INVITE_LOGIN(i.code) : null != s ? t = Q.Z5c.GIFT_CODE_LOGIN(s.code) : null != r ? t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code) : null != u ? (t = Q.Z5c.LOGIN, h.redirect_to = u) : (t = Q.Z5c.LOGIN, "" !== n && (h = {
        email: n
      })), _.Z.loginReset(), c(t, {
        search: (0, o.stringify)(h)
      }), null == l || l(e), V.S.dispatch(Q.CkL.WAVE_EMPHASIZE)
    }), er(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: s,
        parsedDateOfBirth: r
      } = this.state, {
        invite: i,
        consentRequired: a
      } = this.props;
      if (null !== a) {
        if (null == i) {
          let e = !1;
          if (0 === t.length && (this.setState({
              emailClientError: et.Z.Messages.REQUIRED
            }), e = !0), 0 === n.length && (this.setState({
              usernameClientError: et.Z.Messages.REQUIRED
            }), e = !0), 0 === s.length && (this.setState({
              passwordClientError: et.Z.Messages.REQUIRED
            }), e = !0), null == r && (this.setState({
              dateOfBirthClientError: et.Z.Messages.REQUIRED
            }), e = !0), e) return
        }
        this.handleRegister()
      }
    }), er(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), er(this, "renderUsernameValidation", () => {
      let {
        username: e,
        globalName: t,
        usernameFocused: n
      } = this.state, {
        usernameSuggestion: s,
        uniqueUsernameRegistrationConfig: {
          livecheckEnabled: i
        }
      } = this.props;
      return (0, r.jsx)(eu, {
        username: e,
        suggestion: s,
        livecheckEnabled: i,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: () => {
          null != this.usernameRef && this.usernameRef.focus(), null != s && s.length > 0 && this.setState({
            username: s
          })
        }
      })
    });
    let n = null != e.location ? (0, o.parse)(e.location.search) : {};
    this.state = {
      email: null !== (t = n.email) && void 0 !== t ? t : "",
      username: "",
      globalName: "",
      password: "",
      parsedDateOfBirth: null,
      emailClientError: null,
      usernameClientError: null,
      passwordClientError: null,
      dateOfBirthClientError: null,
      consent: !e.consentRequired,
      consentRequiredProp: e.consentRequired,
      isRateLimited: !1,
      globalNameFocused: !1,
      usernameFocused: !1
    }
  }
}

function eo(e) {
  let t = (0, d.cj)([k.Z, F.default, m.Z, b.Z, L.Z], () => ({
      consentRequired: k.Z.getAuthenticationConsentRequired(),
      registering: F.default.getRegisterStatus() === Q.$ib.REGISTERING,
      apiErrors: F.default.getErrors(),
      authenticated: F.default.isAuthenticated(),
      isUnderage: m.Z.isUnderageAnonymous(),
      country: b.Z.getCountryCode(),
      hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
    })),
    n = (0, P.F4)(),
    s = (0, d.e7)([y.Z], () => y.Z.registrationUsernameSuggestion()),
    [a, l] = i.useState(J.E.FULL);
  return (0, f.Z)({
    type: c.ImpressionTypes.VIEW,
    name: c.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: c.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: a
    }
  }, {}, [a]), (0, r.jsx)(el, {
    onChangeStep: e => l(e),
    registrationCopyExperimentConfig: N.Z.getCurrentConfig({
      location: "0ba758_2"
    }, {
      autoTrackExposure: !1
    }),
    uniqueUsernameRegistrationConfig: n,
    usernameSuggestion: s,
    ...e,
    ...t
  })
}

function eu(e) {
  let t, {
      username: n,
      suggestion: s,
      globalName: i,
      livecheckEnabled: a,
      isUsernameFocused: l,
      onClickSuggestion: o
    } = e,
    c = (0, w.a)(n, a, !0),
    d = a && n.length > 0;
  return t = d ? (0, u.EQ)(c).with({
    type: j.K.ERROR,
    message: u.P.select()
  }, e => (0, r.jsx)(E.Text, {
    className: en.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: j.K.AVAILABLE,
    message: u.P.select()
  }, e => (0, r.jsx)(E.Text, {
    className: en.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  })) : null != s && s.length > 0 && i.length > 0 ? (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.UU_REGISTER_SUGGESTION.format({
      suggestion: s,
      nameOnClick: o
    })
  }) : (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }), (0, r.jsx)(U.Z, {
    show: d && (null == c ? void 0 : c.type) === j.K.ERROR || l,
    top: -12,
    bottom: 20,
    children: t
  })
}
er(el, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: e => n.g.location.assign(e)
})