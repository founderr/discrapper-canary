n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  u = n(388905),
  d = n(362762),
  _ = n(409059),
  E = n(659900),
  I = n(962220),
  h = n(473855),
  p = n(306453),
  g = n(929809),
  f = n(108427),
  N = n(390885),
  m = n(314897),
  T = n(896797),
  A = n(954824),
  Z = n(781428),
  x = n(163671),
  S = n(423527),
  O = n(981631),
  v = n(58346),
  C = n(701476),
  D = n(630724),
  P = n(436620),
  R = n(689938),
  L = n(615114),
  b = n(331651);
c.ZP.initialize();
class M extends i.PureComponent {
  componentDidMount() {
    (0, f.e)("guildTemplate"), !P.KO && A.Z.launch("discord://" + O.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && I.Z.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return P.KO ? (0, s.jsx)(u.zx, {
      className: b.marginTop40,
      onClick: t,
      children: e
    }) : (0, s.jsx)(u.v6, {
      className: b.marginTop40
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
        className: b.marginBottom8
      }), (0, s.jsx)(u.Dx, {
        className: a()(b.marginTop8, b.marginBottom8),
        children: R.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
      }), (0, s.jsx)(u.DK, {
        children: R.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      }), this.renderButton(R.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, s.jsxs)(u.ZP, {
      children: [(0, s.jsx)(u.Dx, {
        className: b.marginBottom8,
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
      className: L.authBox,
      children: (0, s.jsx)(p.Z, {
        guildTemplate: e
      })
    }) : (0, s.jsx)(U, {
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
      transitionTo: i,
      location: r
    } = this.props;
    if (null == e) return this.renderSpinner(R.Z.Messages.LOADING);
    if (t === O.kEZ.OPEN) return this.renderAppOpened();
    if (t === O.kEZ.OPENING) return this.renderSpinner(R.Z.Messages.APP_OPENING);
    switch (e.state) {
      case v.Rj.RESOLVING:
        return this.renderSpinner(R.Z.Messages.APP_OPENING);
      case v.Rj.RESOLVED:
        if (n || !P.KO) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, s.jsx)(Z.Z, {
          guildTemplate: e,
          transitionTo: i,
          location: r
        });
        else return (0, s.jsx)(S.Z, {
          guildTemplate: e,
          transitionTo: i,
          location: r,
          onRegister: () => {
            (0, g.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), N.Z.flowStart(D.MK.ORGANIC_GUILD_TEMPLATES, D.EW.NUF_STARTED)
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

function j(e) {
  let t = {
    guildTemplate: (0, c.e7)([_.Z], () => _.Z.getGuildTemplate(e.code)),
    nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
    authenticated: (0, c.e7)([m.default], () => m.default.isAuthenticated()),
    defaultRoute: (0, c.e7)([T.Z], () => T.Z.defaultRoute)
  };
  return (0, s.jsx)(M, {
    ...e,
    ...t
  })
}

function U(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: i
  } = (0, E.Z)(t, !1);
  N.Z.flowStep(D.MK.ORGANIC_GUILD_TEMPLATES, D.X2.GUILD_CREATE);
  let r = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.Dx, {
      className: L.header,
      children: R.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
    }), n, (0, s.jsx)(u.zx, {
      className: L.createButton,
      onClick: i,
      children: R.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
    })]
  });
  return (0, s.jsx)(x.Z, {
    className: L.authBox,
    children: () => [(0, s.jsx)(h.Z, {
      guildTemplate: t
    }, "template"), (0, s.jsx)("div", {
      className: L.formContainer,
      children: r
    }, "contents")]
  })
}