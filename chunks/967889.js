"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  i = n("77078"),
  l = n("960460"),
  o = n("489740"),
  u = n("355025"),
  d = n("51545"),
  c = n("393414"),
  f = n("90404"),
  h = n("599110"),
  p = n("286235"),
  m = n("50885"),
  C = n("49111"),
  E = n("782340"),
  g = n("966585");

function S() {
  let [e, t] = r.useState(!1), n = (0, s.useStateFromStores)([o.default], () => {
    var e;
    return (0, u.probablyHasBuildOverride)() ? null === (e = o.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
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
    className: g.clearOverrideButton,
    children: E.default.Messages.CLEAR_BUILD_OVERRIDE
  })
}
class v extends r.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, c.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let a = p.default.captureCrash(e, {
      extra: t
    });
    h.default.track(C.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: a,
      uses_client_mods: (0, d.usesClientMods)()
    }), m.default.cleanupDisplaySleep()
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
            children: E.default.Messages.ERRORS_UNEXPECTED_CRASH
          }), (0, a.jsx)("p", {
            children: E.default.Messages.ERRORS_ACTION_TO_TAKE
          })]
        }),
        n = (0, a.jsxs)("div", {
          className: g.buttons,
          children: [(0, a.jsx)(i.Button, {
            size: i.ButtonSizes.LARGE,
            onClick: this._handleSubmitReport,
            children: E.default.Messages.ERRORS_RELOAD
          }), (0, a.jsx)(S, {})]
        });
      return (0, a.jsx)(f.default, {
        title: E.default.Messages.UNSUPPORTED_BROWSER_TITLE,
        note: null != t ? t() : e,
        action: n,
        className: g.errorPage
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
var _ = v