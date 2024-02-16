"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  i = n("77078"),
  l = n("960460"),
  u = n("489740"),
  o = n("355025"),
  d = n("51545"),
  c = n("393414"),
  f = n("90404"),
  E = n("599110"),
  S = n("286235"),
  h = n("50885"),
  _ = n("49111"),
  C = n("782340"),
  p = n("966585");

function m() {
  let [e, t] = r.useState(!1), n = (0, s.useStateFromStores)([u.default], () => {
    var e;
    return (0, o.probablyHasBuildOverride)() ? null === (e = u.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
  });
  if (null == n) return null;
  let d = async () => {
    try {
      t(!0), await (0, l.clearBuildOverride)(), window.location.reload(!0)
    } catch (e) {
      t(!1)
    }
  };
  return (0, a.jsx)(i.Button, {
    size: i.ButtonSizes.LARGE,
    onClick: d,
    submitting: e,
    className: p.clearOverrideButton,
    children: C.default.Messages.CLEAR_BUILD_OVERRIDE
  })
}
class T extends r.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, c.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let a = S.default.captureCrash(e, {
      extra: t
    });
    E.default.track(_.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: a,
      uses_client_mods: (0, d.usesClientMods)()
    }), h.default.cleanupDisplaySleep()
  }
  _handleSubmitReport() {
    location.reload(!0)
  }
  componentDidMount() {
    null == window.DiscordErrors && (window.DiscordErrors = {
      softCrash: e => {
        this.triggerSoftCrash(e)
      }
    }, this.discordErrorsSet = !0)
  }
  componentWillUnmount() {
    this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
  }
  render() {
    let {
      children: e,
      renderCustomMessage: t
    } = this.props;
    if (null !== this.state.error) {
      let e = (0, a.jsxs)("div", {
          children: [(0, a.jsx)("p", {
            children: C.default.Messages.ERRORS_UNEXPECTED_CRASH
          }), (0, a.jsx)("p", {
            children: C.default.Messages.ERRORS_ACTION_TO_TAKE
          })]
        }),
        n = (0, a.jsxs)("div", {
          className: p.buttons,
          children: [(0, a.jsx)(i.Button, {
            size: i.ButtonSizes.LARGE,
            onClick: this._handleSubmitReport,
            children: C.default.Messages.ERRORS_RELOAD
          }), (0, a.jsx)(m, {})]
        });
      return (0, a.jsx)(f.default, {
        title: C.default.Messages.UNSUPPORTED_BROWSER_TITLE,
        note: null != t ? t() : e,
        action: n,
        className: p.errorPage
      })
    }
    return e
  }
  constructor(...e) {
    super(...e), this.state = {
      error: null,
      info: null
    }, this.discordErrorsSet = !1
  }
}
var g = T