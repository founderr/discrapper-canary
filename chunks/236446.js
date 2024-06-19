n.d(t, {
  Z: function() {
    return U
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  a = n(512722),
  o = n.n(a),
  c = n(442837),
  u = n(388905),
  d = n(362762),
  E = n(409059),
  _ = n(659900),
  h = n(962220),
  I = n(473855),
  p = n(306453),
  N = n(929809),
  g = n(108427),
  m = n(390885),
  T = n(314897),
  f = n(896797),
  Z = n(954824),
  A = n(781428),
  x = n(163671),
  v = n(423527),
  O = n(981631),
  S = n(58346),
  C = n(701476),
  D = n(630724),
  P = n(436620),
  R = n(689938),
  M = n(615114),
  L = n(331651);
c.ZP.initialize();
class j extends r.PureComponent {
  componentDidMount() {
    (0, g.e)("guildTemplate"), !P.KO && Z.Z.launch("discord://" + O.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && h.Z.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return P.KO ? (0, s.jsx)(u.zx, {
      className: L.marginTop40,
      onClick: t,
      children: e
    }) : (0, s.jsx)(u.v6, {
      className: L.marginTop40
    })
  }
  renderSpinner(e) {
    return (0, s.jsxs)(u.ZP, {
      children: [(0, s.jsx)(u.Dx, {
        children: e
      }), (0, s.jsx)(u.Hh, {})]
    })
  }
  renderInvalidGuildTemplate() {
    return (0, s.jsxs)(u.ZP, {
      children: [(0, s.jsx)(u.Ee, {
        src: n(167969),
        className: L.marginBottom8
      }), (0, s.jsx)(u.Dx, {
        className: l()(L.marginTop8, L.marginBottom8),
        children: R.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
      }), (0, s.jsx)(u.DK, {
        children: R.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      }), this.renderButton(R.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, s.jsxs)(u.ZP, {
      children: [(0, s.jsx)(u.Dx, {
        className: L.marginBottom8,
        children: R.Z.Messages.APP_OPENED_TITLE
      }), (0, s.jsx)(u.DK, {
        children: R.Z.Messages.APP_OPENED_BODY
      }), this.renderButton(R.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (o()(null != e, "guild template must not be null"), e.state === S.Rj.RESOLVING) ? (0, s.jsx)(u.ZP, {
      className: M.authBox,
      children: (0, s.jsx)(p.Z, {
        guildTemplate: e
      })
    }) : (0, s.jsx)(G, {
      guildTemplate: e
    })
  }
  renderContinue() {
    return (0, s.jsxs)(u.ZP, {
      children: [(0, s.jsx)(u.Dx, {
        children: R.Z.Messages.APP_NOT_OPENED
      }), this.renderButton(R.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  render() {
    let {
      guildTemplate: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: r,
      location: i
    } = this.props;
    if (null == e) return this.renderSpinner(R.Z.Messages.LOADING);
    if (t === O.kEZ.OPEN) return this.renderAppOpened();
    if (t === O.kEZ.OPENING) return this.renderSpinner(R.Z.Messages.APP_OPENING);
    switch (e.state) {
      case S.Rj.RESOLVING:
        return this.renderSpinner(R.Z.Messages.APP_OPENING);
      case S.Rj.RESOLVED:
        if (n || !P.KO) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, s.jsx)(A.Z, {
          guildTemplate: e,
          transitionTo: r,
          location: i
        });
        else return (0, s.jsx)(v.Z, {
          guildTemplate: e,
          transitionTo: r,
          location: i,
          onRegister: () => {
            (0, N.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), m.Z.flowStart(D.MK.ORGANIC_GUILD_TEMPLATES, D.EW.NUF_STARTED)
          }
        });
      case S.Rj.EXPIRED:
        return this.renderInvalidGuildTemplate();
      default:
        return null
    }
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleContinue", s = () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function U(e) {
  let t = {
    guildTemplate: (0, c.e7)([E.Z], () => E.Z.getGuildTemplate(e.code)),
    nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
    authenticated: (0, c.e7)([T.default], () => T.default.isAuthenticated()),
    defaultRoute: (0, c.e7)([f.Z], () => f.Z.defaultRoute)
  };
  return (0, s.jsx)(j, {
    ...e,
    ...t
  })
}

function G(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: r
  } = (0, _.Z)(t, !1);
  m.Z.flowStep(D.MK.ORGANIC_GUILD_TEMPLATES, D.X2.GUILD_CREATE);
  let i = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.Dx, {
      className: M.header,
      children: R.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
    }), n, (0, s.jsx)(u.zx, {
      className: M.createButton,
      onClick: r,
      children: R.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
    })]
  });
  return (0, s.jsx)(x.Z, {
    className: M.authBox,
    children: () => [(0, s.jsx)(I.Z, {
      guildTemplate: t
    }, "template"), (0, s.jsx)("div", {
      className: M.formContainer,
      children: i
    }, "contents")]
  })
}