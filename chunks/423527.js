n.d(t, {
  Z: function() {
    return el
  }
}), n(757143), n(47120), n(627341);
var r, s = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  l = n(593473),
  c = n(278074),
  u = n(990547),
  d = n(442837),
  h = n(846519),
  _ = n(481060),
  p = n(893776),
  f = n(899370),
  g = n(224841),
  E = n(13430),
  m = n(213609),
  I = n(882037),
  A = n(201207),
  N = n(481230),
  C = n(388905),
  T = n(853268),
  R = n(639946),
  x = n(616952),
  S = n(792766),
  b = n(692483),
  v = n(100159),
  O = n(473855),
  L = n(726745),
  Z = n(929809),
  M = n(541692),
  y = n(986197),
  D = n(135200),
  w = n(219496),
  P = n(794099),
  j = n(807369),
  k = n(180529),
  U = n(108427),
  G = n(314897),
  F = n(480294),
  B = n(896797),
  H = n(626135),
  z = n(585483),
  W = n(70956),
  K = n(624138),
  V = n(481153),
  Y = n(588705),
  q = n(163671),
  Q = n(981631),
  X = n(355142),
  J = n(188785),
  $ = n(701476),
  ee = n(801461),
  et = n(689938),
  en = n(182428),
  er = n(331651);

function es(e, t, n) {
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
class eo extends(r = i.PureComponent) {
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
    this.redirectIfAuthenticated(), A.Z.trackExposure({
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
    }), null == this.props.consentRequired && p.Z.getLocationMetadata(), (0, U.e)("register")
  }
  componentWillUnmount() {
    this._retryTimer.stop()
  }
  static getDerivedStateFromProps(e, t) {
    let {
      consentRequired: n
    } = e, {
      consentRequiredProp: r
    } = t;
    return null == r && null != n ? {
      consent: !n,
      consentRequiredProp: n
    } : {
      consentRequiredProp: n
    }
  }
  componentDidUpdate(e, t) {
    let {
      apiErrors: n,
      authenticated: r,
      isUnderage: s,
      invite: i,
      onChangeStep: a
    } = this.props, {
      parsedDateOfBirth: o
    } = this.state;
    (e.apiErrors !== n || t.parsedDateOfBirth !== o) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(this.props.apiErrors.retry_after * W.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
      })
    }))), r && !e.authenticated && ((0, Z.c)($.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let l = X.E.FULL;
    s || this.hasError("date_of_birth") ? l = X.E.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (l = X.E.INVITE), a(l)
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
      password: r,
      consent: s,
      parsedDateOfBirth: i
    } = this.state, {
      invite: a,
      guildTemplate: o,
      giftCode: l,
      onRegister: c,
      usernameSuggestion: u,
      isMobileWebInviteRegistration: d
    } = this.props, h = null != a ? a.code : null, _ = null != l ? l.skuId : null, p = I.MD.getState(), f = (0, K.Ew)(u) ? null : t === u, g = J.a ? await (0, b.K)(t) : t, E = J.a ? await (0, b.K)(n) : n;
    z.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
    try {
      d || null == a ? await (0, N.R$)({
        email: e,
        username: g,
        globalName: E,
        consent: s,
        password: r,
        invite: h,
        usedUsernameSuggestion: f,
        guildTemplateCode: null == o ? void 0 : o.code,
        giftCodeSKUId: _,
        birthday: i,
        promoEmailConsent: p.required ? p : null
      }) : await (0, N.ZP)({
        consent: s,
        invite: h,
        giftCodeSKUId: _,
        usedUsernameSuggestion: f,
        globalName: E
      }), null == c || c()
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
        hasProminentCopy: r
      }
    } = this.props, i = null, a = null;
    return t ? a = (0, s.jsx)(T.Z, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: et.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
        termsURL: Q.EYA.TERMS,
        privacyURL: Q.EYA.PRIVACY
      })
    }) : i = (0, s.jsx)(C.i_, {
      isProminent: !!r,
      className: er.marginTop8,
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
    return (0, s.jsxs)(C.ZP, {
      className: e,
      children: [(0, s.jsx)(Y.R, {}), (0, s.jsxs)(C.gO, {
        className: er.marginTop40,
        children: [(0, s.jsx)(_.FormTitle, {
          children: et.Z.Messages.FORM_LABEL_USERNAME
        }), (0, s.jsx)(_.Tooltip, {
          text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
          position: "right",
          color: _.Tooltip.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: i
            } = e;
            return (0, s.jsx)(C.II, {
              autoFocus: !0,
              className: er.marginBottom8,
              name: "username",
              value: n,
              placeholder: et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
              onChange: t,
              onMouseEnter: r,
              onMouseLeave: i
            })
          }
        }), (0, s.jsx)(C.zx, {
          className: er.marginTop20,
          disabled: !0,
          children: et.Z.Messages.CONTINUE
        }), (0, s.jsx)(C.i_, {
          disabled: !0,
          className: er.marginTop8,
          children: et.Z.Messages.TERMS_PRIVACY.format({
            termsURL: Q.EYA.TERMS,
            privacyURL: Q.EYA.PRIVACY
          })
        }), J.a ? null : (0, s.jsx)(C.zx, {
          look: C.zx.Looks.LINK,
          color: C.zx.Colors.LINK,
          disabled: !0,
          className: er.marginTop20,
          children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(S.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(R.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, s.jsx)(Y.Z, {
      invite: e
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      registering: t,
      consentRequired: n
    } = this.props, {
      consent: r
    } = this.state, i = C.zx.Colors.BRAND, a = et.Z.Messages.CONTINUE;
    return (null == e ? void 0 : e.stage_instance) != null && (i = C.zx.Colors.GREEN, a = et.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(_.Tooltip, {
      text: !r && n ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, s.jsx)("div", {
        className: er.marginTop20,
        ...e,
        children: (0, s.jsx)(C.zx, {
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
        global_name: r
      }
    } = this.props, {
      subText: i,
      consentText: a
    } = this.renderConsentComponents(), o = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, l = e => {
      this.setState({
        globalName: e
      })
    }, c = this.state.globalName;
    return (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(C.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), o ? (0, s.jsx)("div", {
          className: en.divider
        }) : null, (0, s.jsxs)(C.gO, {
          className: o ? void 0 : er.marginTop40,
          children: [(0, s.jsx)(_.FormTitle, {
            error: ea(null != r ? r : n),
            children: et.Z.Messages.DISPLAY_NAME
          }), (0, s.jsx)(_.Tooltip, {
            text: et.Z.Messages.AUTH_USERNAME_TOOLTIP,
            position: "right",
            color: _.Tooltip.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: i
              } = e;
              return (0, s.jsx)(C.II, {
                autoFocus: !0,
                className: er.marginBottom8,
                name: "global_name",
                value: c,
                placeholder: et.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                onChange: l,
                error: null != n || null != r ? "" : null,
                onMouseEnter: t,
                onMouseLeave: i
              })
            }
          }), (0, s.jsx)(_.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
          }), this.renderInviteButton(), i, a, J.a ? null : (0, s.jsx)(C.zx, {
            look: C.zx.Looks.LINK,
            color: C.zx.Colors.LINK,
            onClick: this.handleGotoLogin,
            className: er.marginTop20,
            children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
          })]
        })]
      }), null != e && o ? (0, s.jsx)(C.ZP, {
        className: er.marginTop20,
        children: (0, s.jsx)(S.y, {
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
    return "string" != typeof e ? null : (0, s.jsx)(C.i_, {
      className: o()(er.marginTop20, en.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: r,
      globalName: a,
      password: l,
      consent: c,
      parsedDateOfBirth: u,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: p,
      passwordClientError: f,
      dateOfBirthClientError: g
    } = this.state, {
      registering: m,
      consentRequired: I,
      isMobileWebInviteRegistration: A,
      uniqueUsernameRegistrationConfig: {
        suggestions: N
      },
      authBoxClassName: T,
      apiErrors: {
        email: R,
        username: S,
        global_name: b,
        password: v,
        date_of_birth: O
      } = {},
      hasLoggedInAccounts: L,
      registrationCopyExperimentConfig: {
        hasCopyAboveButton: Z
      }
    } = this.props, {
      subText: M,
      consentText: w
    } = this.renderConsentComponents(), P = this.renderErrorMessage(), j = (0, s.jsx)(_.Tooltip, {
      text: !c && I ? et.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, s.jsx)("div", {
        className: er.marginTop20,
        ...e,
        children: (0, s.jsx)(C.zx, {
          type: "submit",
          submitting: m,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: et.Z.Messages.CONTINUE
        })
      })
    }), U = async () => {
      this.setState({
        usernameFocused: !0
      }), N && a.length > 0 && !D.Z.wasRegistrationSuggestionFetched(a) && await y.Z.fetchSuggestionsRegistration(a)
    }, G = null != e ? (0, s.jsx)(i.Fragment, {
      children: e()
    }, "custom-header") : (0, s.jsx)(C.Dx, {
      children: et.Z.Messages.REGISTER_TITLE
    }, "title"), F = (0, s.jsxs)(C.gO, {
      className: er.marginTop20,
      children: [(0, s.jsx)(C.II, {
        autoFocus: !0,
        className: er.marginBottom20,
        label: et.Z.Messages.FORM_LABEL_EMAIL,
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
        }),
        error: null != h ? h : ea(R),
        type: "email",
        setRef: e => {
          this.emailRef = e
        },
        required: !0
      }), (0, s.jsx)(C.II, {
        label: et.Z.Messages.DISPLAY_NAME,
        className: er.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: ea(b),
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
      }), (0, s.jsx)(k.Z, {
        show: d,
        top: -12,
        bottom: 20,
        children: (0, s.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: et.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
        })
      }), (0, s.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: U,
        tabIndex: -1,
        children: [(0, s.jsx)(C.II, {
          label: et.Z.Messages.FORM_LABEL_USERNAME,
          className: er.marginBottom20,
          name: "username",
          value: r,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
            })
          },
          error: null != p ? p : ea(S),
          setRef: e => {
            this.usernameRef = e
          },
          required: !0
        }), this.renderUsernameValidation()]
      }), (0, s.jsx)(C.II, {
        label: et.Z.Messages.FORM_LABEL_PASSWORD,
        name: "password",
        value: l,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? et.Z.Messages.REQUIRED : null
        }),
        error: null != f ? f : ea(v),
        type: "password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0
      }), (0, s.jsx)(E.Z, {
        label: et.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
        wrapperClassName: er.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != g ? g : ea(O),
        value: u,
        required: !0
      }), Z && M, (0, s.jsx)(x.Z, {}), j, P, w, !Z && M, J.a ? null : (0, s.jsx)(C.zx, {
        look: A ? C.zx.Looks.FILLED : C.zx.Looks.LINK,
        color: A ? C.zx.Colors.PRIMARY : C.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: er.marginTop20,
        children: et.Z.Messages.ALREADY_HAVE_ACCOUNT
      })]
    });
    return t ? (0, s.jsx)(q.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: o()(T, en.horizontalAuthBox),
      children: () => [G, (0, s.jsxs)("div", {
        className: en.flex,
        children: [(0, s.jsx)(C.Dx, {
          className: en.createAccountTemplateHeader,
          children: et.Z.Messages.REGISTER_TITLE
        }), F]
      }, "register-title")]
    }) : (0, s.jsxs)(C.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: T,
      children: [L && !A ? (0, s.jsx)(C.zx, {
        onClick: this.handleGotoLogin,
        look: C.zx.Looks.LINK,
        color: C.zx.Colors.PRIMARY,
        className: en.goBackButton,
        children: (0, s.jsxs)("div", {
          className: en.content,
          children: [(0, s.jsx)(_.ChevronSmallLeftIcon, {
            size: "xs",
            color: "currentColor",
            className: en.caret
          }), (0, s.jsx)(_.Text, {
            variant: "text-md/normal",
            children: et.Z.Messages.AGE_GATE_GO_BACK
          })]
        })
      }) : null, G, F]
    })
  }
  render() {
    let {
      isUnderage: e,
      isMobileWebInviteRegistration: t
    } = this.props;
    if (e || this.hasError("date_of_birth")) return (0, s.jsx)(g.Z, {});
    let {
      invite: n,
      giftCode: r,
      guildTemplate: i
    } = this.props, a = null != n && null == n.guild && null == n.channel && null != n.inviter;
    return null == n || a || t ? null != i ? this.renderFull(() => (0, s.jsx)(O.Z, {
      guildTemplate: i
    }), !0) : null != r ? this.renderFull(() => (0, s.jsx)(V.Z, {
      giftCode: r
    })) : null != n && a && n.state === Q.r2o.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(Y.Z, {
      invite: n,
      isRegister: !0
    })) : this.renderFull() : n.state === Q.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
  }
  constructor(e) {
    var t;
    super(e), es(this, "emailRef", void 0), es(this, "usernameRef", void 0), es(this, "globalNameRef", void 0), es(this, "passwordRef", void 0), es(this, "dateOfBirthRef", i.createRef()), es(this, "_retryTimer", new h.V7), es(this, "handleGotoLogin", e => {
      let t;
      let {
        email: n
      } = this.state, {
        giftCode: r,
        guildTemplate: s,
        invite: i,
        location: a,
        onLoginStart: o,
        redirectTo: c,
        transitionTo: u,
        isMobileWebInviteRegistration: d
      } = this.props;
      if (d) {
        null == o || o(e);
        return
      }
      let h = null != a ? (0, l.parse)(a.search) : {};
      null != i ? t = Q.Z5c.INVITE_LOGIN(i.code) : null != r ? t = Q.Z5c.GIFT_CODE_LOGIN(r.code) : null != s ? t = Q.Z5c.GUILD_TEMPLATE_LOGIN(s.code) : null != c ? (t = Q.Z5c.LOGIN, h.redirect_to = c) : (t = Q.Z5c.LOGIN, "" !== n && (h = {
        email: n
      })), p.Z.loginReset(), u(t, {
        search: (0, l.stringify)(h)
      }), null == o || o(e), z.S.dispatch(Q.CkL.WAVE_EMPHASIZE)
    }), es(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: r,
        parsedDateOfBirth: s
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
            }), e = !0), 0 === r.length && (this.setState({
              passwordClientError: et.Z.Messages.REQUIRED
            }), e = !0), null == s && (this.setState({
              dateOfBirthClientError: et.Z.Messages.REQUIRED
            }), e = !0), e) return
        }
        this.handleRegister()
      }
    }), es(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), es(this, "renderUsernameValidation", () => {
      let {
        username: e,
        globalName: t,
        usernameFocused: n
      } = this.state, {
        usernameSuggestion: r,
        uniqueUsernameRegistrationConfig: {
          livecheckEnabled: i
        }
      } = this.props;
      return (0, s.jsx)(ec, {
        username: e,
        suggestion: r,
        livecheckEnabled: i,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: () => {
          null != this.usernameRef && this.usernameRef.focus(), null != r && r.length > 0 && this.setState({
            username: r
          })
        }
      })
    });
    let n = null != e.location ? (0, l.parse)(e.location.search) : {};
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

function el(e) {
  let t = (0, d.cj)([F.Z, G.default, f.Z, M.Z, L.Z], () => ({
      consentRequired: F.Z.getAuthenticationConsentRequired(),
      registering: G.default.getRegisterStatus() === Q.$ib.REGISTERING,
      apiErrors: G.default.getErrors(),
      authenticated: G.default.isAuthenticated(),
      isUnderage: f.Z.isUnderageAnonymous(),
      country: M.Z.getCountryCode(),
      hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
    })),
    n = (0, P.F4)(),
    r = (0, d.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
    [a, o] = i.useState(X.E.FULL);
  return (0, m.Z)({
    type: u.ImpressionTypes.VIEW,
    name: u.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: a
    }
  }, {}, [a]), (0, s.jsx)(eo, {
    onChangeStep: e => o(e),
    registrationCopyExperimentConfig: A.Z.getCurrentConfig({
      location: "0ba758_2"
    }, {
      autoTrackExposure: !1
    }),
    uniqueUsernameRegistrationConfig: n,
    usernameSuggestion: r,
    ...e,
    ...t
  })
}

function ec(e) {
  let t, {
      username: n,
      suggestion: r,
      globalName: i,
      livecheckEnabled: a,
      isUsernameFocused: o,
      onClickSuggestion: l
    } = e,
    u = (0, j.a)(n, a, !0),
    d = a && n.length > 0;
  return t = d ? (0, c.EQ)(u).with({
    type: w.K.ERROR,
    message: c.P.select()
  }, e => (0, s.jsx)(_.Text, {
    className: en.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: w.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, s.jsx)(_.Text, {
    className: en.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, s.jsx)(_.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  })) : null != r && r.length > 0 && i.length > 0 ? (0, s.jsx)(_.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.UU_REGISTER_SUGGESTION.format({
      suggestion: r,
      nameOnClick: l
    })
  }) : (0, s.jsx)(_.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: et.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }), (0, s.jsx)(k.Z, {
    show: d && (null == u ? void 0 : u.type) === w.K.ERROR || o,
    top: -12,
    bottom: 20,
    children: t
  })
}
es(eo, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: e => n.g.location.assign(e)
})