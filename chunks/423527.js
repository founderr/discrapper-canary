"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("757143"), n("47120"), n("627341");
var s, a = n("735250"),
  i = n("470079"),
  l = n("120356"),
  r = n.n(l),
  o = n("593473"),
  u = n("278074"),
  d = n("990547"),
  c = n("442837"),
  f = n("846519"),
  h = n("481060"),
  E = n("893776"),
  g = n("899370"),
  m = n("224841"),
  _ = n("13430"),
  p = n("213609"),
  T = n("882037"),
  I = n("201207"),
  S = n("481230"),
  A = n("853268"),
  N = n("639946"),
  R = n("616952"),
  C = n("792766"),
  O = n("692483"),
  v = n("100159"),
  L = n("473855"),
  x = n("726745"),
  M = n("929809"),
  b = n("541692"),
  y = n("986197"),
  U = n("135200"),
  D = n("219496"),
  P = n("794099"),
  G = n("807369"),
  w = n("180529"),
  j = n("108427"),
  F = n("314897"),
  k = n("480294"),
  B = n("896797"),
  H = n("819570"),
  V = n("292937"),
  W = n("626135"),
  Y = n("585483"),
  K = n("70956"),
  z = n("624138"),
  q = n("481153"),
  Z = n("588705"),
  Q = n("163671"),
  J = n("981631"),
  X = n("355142"),
  $ = n("188785"),
  ee = n("701476"),
  et = n("801461"),
  en = n("689938"),
  es = n("355770"),
  ea = n("611273");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
c.default.initialize();
let el = /\.$/,
  er = e => Array.isArray(e) ? e.map(e => e.replace(el, "")).join(". ").trim() : e;
class eo extends(s = i.PureComponent) {
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
    this.redirectIfAuthenticated(), I.default.trackExposure({
      location: "0ba758_1"
    });
    let {
      giftCodeSKU: e,
      invite: t
    } = this.props;
    W.default.track(J.AnalyticEvents.REGISTER_VIEWED, {
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource,
      ...null != e ? (0, v.default)(e, !1, !1) : {}
    }, {
      flush: !0
    }), null == this.props.consentRequired && E.default.getLocationMetadata(), (0, j.trackAppUIViewed)("register")
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
      isUnderage: a,
      invite: i,
      onChangeStep: l
    } = this.props, {
      parsedDateOfBirth: r
    } = this.state;
    (e.apiErrors !== n || t.parsedDateOfBirth !== r) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(this.props.apiErrors.retry_after * K.default.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
      })
    }))), s && !e.authenticated && ((0, M.setNewUser)(ee.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let o = X.RegistrationSteps.FULL;
    a || this.hasError("date_of_birth") ? o = X.RegistrationSteps.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (o = X.RegistrationSteps.INVITE), l(o)
  }
  redirectIfAuthenticated() {
    let {
      authenticated: e,
      transitionTo: t,
      redirectTo: n
    } = this.props;
    e && t(null != n ? n : B.default.defaultRoute)
  }
  async handleRegister() {
    let {
      email: e,
      username: t,
      globalName: n,
      password: s,
      consent: a,
      parsedDateOfBirth: i
    } = this.state, {
      invite: l,
      guildTemplate: r,
      giftCode: o,
      onRegister: u,
      usernameSuggestion: d,
      isMobileWebInviteRegistration: c
    } = this.props, f = null != l ? l.code : null, h = null != o ? o.skuId : null, E = T.usePromoEmailConsentStore.getState(), g = (0, z.isNullOrEmpty)(d) ? null : t === d, m = $.CONFERENCE_MODE_ENABLED ? await (0, O.formatUsername)(t) : t, _ = $.CONFERENCE_MODE_ENABLED ? await (0, O.formatUsername)(n) : n;
    Y.ComponentDispatch.dispatch(J.ComponentActions.WAVE_EMPHASIZE);
    try {
      c || null == l ? await (0, S.registerFull)({
        email: e,
        username: m,
        globalName: _,
        consent: a,
        password: s,
        invite: f,
        usedUsernameSuggestion: g,
        guildTemplateCode: null == r ? void 0 : r.code,
        giftCodeSKUId: h,
        birthday: i,
        promoEmailConsent: E.required ? E : null
      }) : await (0, S.default)({
        consent: a,
        invite: f,
        giftCodeSKUId: h,
        usedUsernameSuggestion: g,
        globalName: _
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
    } = this.props, i = null, l = null;
    return t ? l = (0, a.jsx)(A.default, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: en.default.Messages.TERMS_PRIVACY_OPT_IN.format({
        termsURL: J.MarketingURLs.TERMS,
        privacyURL: J.MarketingURLs.PRIVACY
      })
    }) : i = (0, a.jsx)(H.SubText, {
      isProminent: !!s,
      className: ea.marginTop8,
      children: n ? en.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
        buttonText: en.default.Messages.CONTINUE,
        termsURL: J.MarketingURLs.TERMS,
        privacyURL: J.MarketingURLs.PRIVACY
      }) : en.default.Messages.TERMS_PRIVACY.format({
        termsURL: J.MarketingURLs.TERMS,
        privacyURL: J.MarketingURLs.PRIVACY
      })
    }), {
      subText: i,
      consentText: l
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
    return (0, a.jsxs)(H.default, {
      className: e,
      children: [(0, a.jsx)(Z.InviteResolvingHeader, {}), (0, a.jsxs)(H.Block, {
        className: ea.marginTop40,
        children: [(0, a.jsx)(h.FormTitle, {
          children: en.default.Messages.FORM_LABEL_USERNAME
        }), (0, a.jsx)(h.Tooltip, {
          text: en.default.Messages.AUTH_USERNAME_TOOLTIP,
          position: "right",
          color: h.Tooltip.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: i
            } = e;
            return (0, a.jsx)(H.Input, {
              autoFocus: !0,
              className: ea.marginBottom8,
              name: "username",
              value: n,
              placeholder: en.default.Messages.FORM_PLACEHOLDER_USERNAME,
              onChange: t,
              onMouseEnter: s,
              onMouseLeave: i
            })
          }
        }), (0, a.jsx)(H.Button, {
          className: ea.marginTop20,
          disabled: !0,
          children: en.default.Messages.CONTINUE
        }), (0, a.jsx)(H.SubText, {
          disabled: !0,
          className: ea.marginTop8,
          children: en.default.Messages.TERMS_PRIVACY.format({
            termsURL: J.MarketingURLs.TERMS,
            privacyURL: J.MarketingURLs.PRIVACY
          })
        }), $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
          look: H.Button.Looks.LINK,
          color: H.Button.Colors.LINK,
          disabled: !0,
          className: ea.marginTop20,
          children: en.default.Messages.ALREADY_HAVE_ACCOUNT
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, a.jsx)(C.default, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, a.jsx)(N.GuildScheduledEventInviteHeader, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, a.jsx)(Z.default, {
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
    } = this.state, i = H.Button.Colors.BRAND, l = en.default.Messages.CONTINUE;
    return (null == e ? void 0 : e.stage_instance) != null && (i = H.Button.Colors.GREEN, l = en.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, a.jsx)(h.Tooltip, {
      text: !s && n ? en.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, a.jsx)("div", {
        className: ea.marginTop20,
        ...e,
        children: (0, a.jsx)(H.Button, {
          type: "submit",
          submitting: t,
          disabled: !this.hasConsent(),
          color: i,
          children: l
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
      consentText: l
    } = this.renderConsentComponents(), r = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
      this.setState({
        globalName: e
      })
    }, u = this.state.globalName;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsxs)(H.default, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), r ? (0, a.jsx)("div", {
          className: es.divider
        }) : null, (0, a.jsxs)(H.Block, {
          className: r ? void 0 : ea.marginTop40,
          children: [(0, a.jsx)(h.FormTitle, {
            error: er(null != s ? s : n),
            children: en.default.Messages.DISPLAY_NAME
          }), (0, a.jsx)(h.Tooltip, {
            text: en.default.Messages.AUTH_USERNAME_TOOLTIP,
            position: "right",
            color: h.Tooltip.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: i
              } = e;
              return (0, a.jsx)(H.Input, {
                autoFocus: !0,
                className: ea.marginBottom8,
                name: "global_name",
                value: u,
                placeholder: en.default.Messages.FORM_PLACEHOLDER_USERNAME,
                onChange: o,
                error: null != n || null != s ? "" : null,
                onMouseEnter: t,
                onMouseLeave: i
              })
            }
          }), (0, a.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: en.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
          }), this.renderInviteButton(), i, l, $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
            look: H.Button.Looks.LINK,
            color: H.Button.Colors.LINK,
            onClick: this.handleGotoLogin,
            className: ea.marginTop20,
            children: en.default.Messages.ALREADY_HAVE_ACCOUNT
          })]
        })]
      }), null != e && r ? (0, a.jsx)(H.default, {
        className: ea.marginTop20,
        children: (0, a.jsx)(C.StageInviteFooter, {
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
    return "string" != typeof e ? null : (0, a.jsx)(H.SubText, {
      className: r()(ea.marginTop20, es.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: s,
      globalName: l,
      password: o,
      consent: u,
      parsedDateOfBirth: d,
      globalNameFocused: c,
      emailClientError: f,
      usernameClientError: E,
      passwordClientError: g,
      dateOfBirthClientError: m
    } = this.state, {
      registering: p,
      consentRequired: T,
      isMobileWebInviteRegistration: I,
      uniqueUsernameRegistrationConfig: {
        suggestions: S
      },
      authBoxClassName: A,
      apiErrors: {
        email: N,
        username: C,
        global_name: O,
        password: v,
        date_of_birth: L
      } = {},
      hasLoggedInAccounts: x,
      registrationCopyExperimentConfig: {
        hasCopyAboveButton: M
      }
    } = this.props, {
      subText: b,
      consentText: D
    } = this.renderConsentComponents(), P = this.renderErrorMessage(), G = (0, a.jsx)(h.Tooltip, {
      text: !u && T ? en.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, a.jsx)("div", {
        className: ea.marginTop20,
        ...e,
        children: (0, a.jsx)(H.Button, {
          type: "submit",
          submitting: p,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: en.default.Messages.CONTINUE
        })
      })
    }), j = async () => {
      this.setState({
        usernameFocused: !0
      }), S && l.length > 0 && !U.default.wasRegistrationSuggestionFetched(l) && await y.default.fetchSuggestionsRegistration(l)
    }, F = null != e ? (0, a.jsx)(i.Fragment, {
      children: e()
    }, "custom-header") : (0, a.jsx)(H.Title, {
      children: en.default.Messages.REGISTER_TITLE
    }, "title"), k = (0, a.jsxs)(H.Block, {
      className: ea.marginTop20,
      children: [(0, a.jsx)(H.Input, {
        autoFocus: !0,
        className: ea.marginBottom20,
        label: en.default.Messages.FORM_LABEL_EMAIL,
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
        }),
        error: null != f ? f : er(N),
        type: "email",
        setRef: e => {
          this.emailRef = e
        },
        required: !0
      }), (0, a.jsx)(H.Input, {
        label: en.default.Messages.DISPLAY_NAME,
        className: ea.marginBottom20,
        name: "global_name",
        value: l,
        onChange: e => this.setState({
          globalName: e
        }),
        error: er(O),
        maxLength: et.MAX_DISPLAY_NAME_LENGTH,
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => this.setState({
          globalNameFocused: !0
        }),
        onBlur: () => this.setState({
          globalNameFocused: !1
        })
      }), (0, a.jsx)(w.default, {
        show: c,
        top: -12,
        bottom: 20,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: en.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
        })
      }), (0, a.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: j,
        tabIndex: -1,
        children: [(0, a.jsx)(H.Input, {
          label: en.default.Messages.FORM_LABEL_USERNAME,
          className: ea.marginBottom20,
          name: "username",
          value: s,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
            })
          },
          error: null != E ? E : er(C),
          setRef: e => {
            this.usernameRef = e
          },
          required: !0
        }), this.renderUsernameValidation()]
      }), (0, a.jsx)(H.Input, {
        label: en.default.Messages.FORM_LABEL_PASSWORD,
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? en.default.Messages.REQUIRED : null
        }),
        error: null != g ? g : er(v),
        type: "password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0
      }), (0, a.jsx)(_.default, {
        label: en.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
        wrapperClassName: ea.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != m ? m : er(L),
        value: d,
        required: !0
      }), M && b, (0, a.jsx)(R.default, {}), G, P, D, !M && b, $.CONFERENCE_MODE_ENABLED ? null : (0, a.jsx)(H.Button, {
        look: I ? H.Button.Looks.FILLED : H.Button.Looks.LINK,
        color: I ? H.Button.Colors.PRIMARY : H.Button.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: ea.marginTop20,
        children: en.default.Messages.ALREADY_HAVE_ACCOUNT
      })]
    });
    return t ? (0, a.jsx)(Q.default, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: r()(A, es.horizontalAuthBox),
      children: () => [F, (0, a.jsxs)("div", {
        className: es.flex,
        children: [(0, a.jsx)(H.Title, {
          className: es.createAccountTemplateHeader,
          children: en.default.Messages.REGISTER_TITLE
        }), k]
      }, "register-title")]
    }) : (0, a.jsxs)(H.default, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: A,
      children: [x && !I ? (0, a.jsx)(H.Button, {
        onClick: this.handleGotoLogin,
        look: H.Button.Looks.LINK,
        color: H.Button.Colors.PRIMARY,
        className: es.goBackButton,
        children: (0, a.jsxs)("div", {
          className: es.content,
          children: [(0, a.jsx)(V.default, {
            width: 16,
            height: 16,
            className: es.caret
          }), (0, a.jsx)(h.Text, {
            variant: "text-md/normal",
            children: en.default.Messages.AGE_GATE_GO_BACK
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
    if (e || this.hasError("date_of_birth")) return (0, a.jsx)(m.default, {});
    let {
      invite: n,
      giftCode: s,
      guildTemplate: i
    } = this.props, l = null != n && null == n.guild && null == n.channel && null != n.inviter;
    return null == n || l || t ? null != i ? this.renderFull(() => (0, a.jsx)(L.default, {
      guildTemplate: i
    }), !0) : null != s ? this.renderFull(() => (0, a.jsx)(q.default, {
      giftCode: s
    })) : null != n && l && n.state === J.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, a.jsx)(Z.default, {
      invite: n,
      isRegister: !0
    })) : this.renderFull() : n.state === J.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
  }
  constructor(e) {
    var t;
    super(e), ei(this, "emailRef", void 0), ei(this, "usernameRef", void 0), ei(this, "globalNameRef", void 0), ei(this, "passwordRef", void 0), ei(this, "dateOfBirthRef", i.createRef()), ei(this, "_retryTimer", new f.Timeout), ei(this, "handleGotoLogin", e => {
      let t;
      let {
        email: n
      } = this.state, {
        giftCode: s,
        guildTemplate: a,
        invite: i,
        location: l,
        onLoginStart: r,
        redirectTo: u,
        transitionTo: d,
        isMobileWebInviteRegistration: c
      } = this.props;
      if (c) {
        null == r || r(e);
        return
      }
      let f = null != l ? (0, o.parse)(l.search) : {};
      null != i ? t = J.Routes.INVITE_LOGIN(i.code) : null != s ? t = J.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = J.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = J.Routes.LOGIN, f.redirect_to = u) : (t = J.Routes.LOGIN, "" !== n && (f = {
        email: n
      })), E.default.loginReset(), d(t, {
        search: (0, o.stringify)(f)
      }), null == r || r(e), Y.ComponentDispatch.dispatch(J.ComponentActions.WAVE_EMPHASIZE)
    }), ei(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: s,
        parsedDateOfBirth: a
      } = this.state, {
        invite: i,
        consentRequired: l
      } = this.props;
      if (null !== l) {
        if (null == i) {
          let e = !1;
          if (0 === t.length && (this.setState({
              emailClientError: en.default.Messages.REQUIRED
            }), e = !0), 0 === n.length && (this.setState({
              usernameClientError: en.default.Messages.REQUIRED
            }), e = !0), 0 === s.length && (this.setState({
              passwordClientError: en.default.Messages.REQUIRED
            }), e = !0), null == a && (this.setState({
              dateOfBirthClientError: en.default.Messages.REQUIRED
            }), e = !0), e) return
        }
        this.handleRegister()
      }
    }), ei(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), ei(this, "renderUsernameValidation", () => {
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
      return (0, a.jsx)(ed, {
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

function eu(e) {
  let t = (0, c.useStateFromStoresObject)([k.default, F.default, g.default, b.default, x.default], () => ({
      consentRequired: k.default.getAuthenticationConsentRequired(),
      registering: F.default.getRegisterStatus() === J.RegistrationStates.REGISTERING,
      apiErrors: F.default.getErrors(),
      authenticated: F.default.isAuthenticated(),
      isUnderage: g.default.isUnderageAnonymous(),
      country: b.default.getCountryCode(),
      hasLoggedInAccounts: x.default.getHasLoggedInAccounts()
    })),
    n = (0, P.useUURegistrationExperiment)(),
    s = (0, c.useStateFromStores)([U.default], () => U.default.registrationUsernameSuggestion()),
    [l, r] = i.useState(X.RegistrationSteps.FULL);
  return (0, p.default)({
    type: d.ImpressionTypes.VIEW,
    name: d.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: l
    }
  }, {}, [l]), (0, a.jsx)(eo, {
    onChangeStep: e => r(e),
    registrationCopyExperimentConfig: I.default.getCurrentConfig({
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

function ed(e) {
  let t, {
      username: n,
      suggestion: s,
      globalName: i,
      livecheckEnabled: l,
      isUsernameFocused: r,
      onClickSuggestion: o
    } = e,
    d = (0, G.useUsernameStatus)(n, l, !0),
    c = l && n.length > 0;
  return t = c ? (0, u.match)(d).with({
    type: D.NameValidationState.ERROR,
    message: u.P.select()
  }, e => (0, a.jsx)(h.Text, {
    className: es.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: D.NameValidationState.AVAILABLE,
    message: u.P.select()
  }, e => (0, a.jsx)(h.Text, {
    className: es.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  })) : null != s && s.length > 0 && i.length > 0 ? (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.default.Messages.UU_REGISTER_SUGGESTION.format({
      suggestion: s,
      nameOnClick: o
    })
  }) : (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }), (0, a.jsx)(w.default, {
    show: c && (null == d ? void 0 : d.type) === D.NameValidationState.ERROR || r,
    top: -12,
    bottom: 20,
    children: t
  })
}
ei(eo, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: e => n.g.location.assign(e)
})