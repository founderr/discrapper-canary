"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  u = n.n(r),
  o = n("446674"),
  d = n("208620"),
  c = n("569808"),
  f = n("800932"),
  E = n("913645"),
  _ = n("434824"),
  I = n("473759"),
  h = n("165926"),
  p = n("970366"),
  T = n("42963"),
  N = n("271938"),
  m = n("476108"),
  A = n("124969"),
  g = n("65300"),
  S = n("291850"),
  v = n("598489"),
  O = n("860959"),
  C = n("49111"),
  R = n("579033"),
  L = n("56235"),
  D = n("149806"),
  x = n("53452"),
  M = n("782340"),
  P = n("520916"),
  U = n("890957");
o.default.initialize();
class b extends a.PureComponent {
  componentDidMount() {
    (0, p.trackAppUIViewed)("guildTemplate"), !x.IS_APP_COMPATIBLE_BROWSER && g.default.launch("discord://" + C.Routes.GUILD_TEMPLATE(this.props.code), () => void 0)
  }
  componentDidUpdate(e) {
    this.props.code !== e.code && E.default.resolveGuildTemplate(this.props.code)
  }
  renderButton(e, t) {
    return x.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(A.Button, {
      className: U.marginTop40,
      onClick: t,
      children: e
    }) : (0, s.jsx)(A.IncompatibleBrowser, {
      className: U.marginTop40
    })
  }
  renderSpinner(e) {
    return (0, s.jsxs)(A.default, {
      children: [(0, s.jsx)(A.Title, {
        children: e
      }), (0, s.jsx)(A.AuthSpinner, {})]
    })
  }
  renderInvalidGuildTemplate() {
    return (0, s.jsxs)(A.default, {
      children: [(0, s.jsx)(A.Image, {
        src: n("653240"),
        className: U.marginBottom8
      }), (0, s.jsx)(A.Title, {
        className: i(U.marginTop8, U.marginBottom8),
        children: M.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
      }), (0, s.jsx)(A.SubTitle, {
        children: M.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      }), this.renderButton(M.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAppOpened() {
    return (0, s.jsxs)(A.default, {
      children: [(0, s.jsx)(A.Title, {
        className: U.marginBottom8,
        children: M.default.Messages.APP_OPENED_TITLE
      }), (0, s.jsx)(A.SubTitle, {
        children: M.default.Messages.APP_OPENED_BODY
      }), this.renderButton(M.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  renderAuthenticatedOrDownload() {
    let {
      guildTemplate: e
    } = this.props;
    return (u(null != e, "guild template must not be null"), e.state === R.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(A.default, {
      className: P.authBox,
      children: (0, s.jsx)(I.default, {
        guildTemplate: e
      })
    }) : (0, s.jsx)(G, {
      guildTemplate: e
    })
  }
  renderContinue() {
    return (0, s.jsxs)(A.default, {
      children: [(0, s.jsx)(A.Title, {
        children: M.default.Messages.APP_NOT_OPENED
      }), this.renderButton(M.default.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
    })
  }
  render() {
    let {
      guildTemplate: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: a,
      location: l
    } = this.props;
    if (null == e) return this.renderSpinner(M.default.Messages.LOADING);
    if (t === C.NativeAppStates.OPEN) return this.renderAppOpened();
    if (t === C.NativeAppStates.OPENING) return this.renderSpinner(M.default.Messages.APP_OPENING);
    switch (e.state) {
      case R.GuildTemplateStates.RESOLVING:
        return this.renderSpinner(M.default.Messages.APP_OPENING);
      case R.GuildTemplateStates.RESOLVED:
        if (n || !x.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
        if (this.props.login) return (0, s.jsx)(S.default, {
          guildTemplate: e,
          transitionTo: a,
          location: l
        });
        else return (0, s.jsx)(O.default, {
          guildTemplate: e,
          transitionTo: a,
          location: l,
          onRegister: () => {
            (0, h.setNewUser)(L.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE), T.default.flowStart(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.RegistrationSteps.NUF_STARTED)
          }
        });
      case R.GuildTemplateStates.EXPIRED:
        return this.renderInvalidGuildTemplate();
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), this.handleContinue = () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }
  }
}

function j(e) {
  let t = {
    guildTemplate: (0, o.useStateFromStores)([c.default], () => c.default.getGuildTemplate(e.code)),
    nativeAppState: (0, o.useStateFromStores)([d.default], () => d.default.getState(e.code)),
    authenticated: (0, o.useStateFromStores)([N.default], () => N.default.isAuthenticated()),
    defaultRoute: (0, o.useStateFromStores)([m.default], () => m.default.defaultRoute)
  };
  return (0, s.jsx)(b, {
    ...e,
    ...t
  })
}

function G(e) {
  let {
    guildTemplate: t
  } = e, {
    form: n,
    handleSubmit: a
  } = (0, f.default)(t, !1);
  T.default.flowStep(D.FlowType.ORGANIC_GUILD_TEMPLATES, D.CreateGuildSteps.GUILD_CREATE);
  let l = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(A.Title, {
      className: P.header,
      children: M.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
    }), n, (0, s.jsx)(A.Button, {
      className: P.createButton,
      onClick: a,
      children: M.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD
    })]
  });
  return (0, s.jsx)(v.default, {
    className: P.authBox,
    children: () => [(0, s.jsx)(_.default, {
      guildTemplate: t
    }, "template"), (0, s.jsx)("div", {
      className: P.formContainer,
      children: l
    }, "contents")]
  })
}