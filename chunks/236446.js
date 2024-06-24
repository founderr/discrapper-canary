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
  I = n(962220),
  h = n(473855),
  N = n(306453),
  p = n(929809),
  g = n(108427),
  m = n(390885),
  T = n(314897),
  Z = n(896797),
  A = n(954824),
  f = n(781428),
  x = n(163671),
  O = n(423527),
  S = n(981631),
  v = n(58346),
  D = n(701476),
  P = n(630724),
  C = n(436620),
  R = n(689938),
  M = n(615114),
  L = n(331651);
c.ZP.initialize();
class j extends r.PureComponent {
  componentDidMount() {
    (0, g.e)("guildTemplate"), !C.KO && A.Z.launch("discord://" + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && I.Z.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return C.KO ? (0, s.jsx)(u.zx, {
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
    return (o()(null != e, "guild template must not be null"), e.state === v.Rj.RESOLVING) ? (0, s.jsx)(u.ZP, {
      className: M.authBox,
      children: (0, s.jsx)(N.Z, {
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
    if (t === S.kEZ.OPEN) return this.renderAppOpened();
    if (t === S.kEZ.OPENING) return this.renderSpinner(R.Z.Messages.APP_OPENING);
    switch (e.state) {
      case v.Rj.RESOLVING:
        return this.renderSpinner(R.Z.Messages.APP_OPENING);
      case v.Rj.RESOLVED:
        if (n || !C.KO) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, s.jsx)(f.Z, {
          guildTemplate: e,
          transitionTo: r,
          location: i
        });
        else return (0, s.jsx)(O.Z, {
          guildTemplate: e,
          transitionTo: r,
          location: i,
          onRegister: () => {
            (0, p.c)(D.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), m.Z.flowStart(P.MK.ORGANIC_GUILD_TEMPLATES, P.EW.NUF_STARTED)
          }
        });
      case v.Rj.EXPIRED:
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
    defaultRoute: (0, c.e7)([Z.Z], () => Z.Z.defaultRoute)
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
  m.Z.flowStep(P.MK.ORGANIC_GUILD_TEMPLATES, P.X2.GUILD_CREATE);
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
    children: () => [(0, s.jsx)(h.Z, {
      guildTemplate: t
    }, "template"), (0, s.jsx)("div", {
      className: M.formContainer,
      children: i
    }, "contents")]
  })
}