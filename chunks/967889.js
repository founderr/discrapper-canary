"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  h = n("599110"),
  p = n("286235"),
  E = n("50885"),
  C = n("49111"),
  m = n("782340"),
  S = n("966585");

function g() {
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
    className: S.clearOverrideButton,
    children: m.default.Messages.CLEAR_BUILD_OVERRIDE
  })
}
class _ extends r.PureComponent {
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
    }), E.default.cleanupDisplaySleep()
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
            children: m.default.Messages.ERRORS_UNEXPECTED_CRASH
          }), (0, a.jsx)("p", {
            children: m.default.Messages.ERRORS_ACTION_TO_TAKE
          })]
        }),
        n = (0, a.jsxs)("div", {
          className: S.buttons,
          children: [(0, a.jsx)(i.Button, {
            size: i.ButtonSizes.LARGE,
            onClick: this._handleSubmitReport,
            children: m.default.Messages.ERRORS_RELOAD
          }), (0, a.jsx)(g, {})]
        });
      return (0, a.jsx)(f.default, {
        title: m.default.Messages.UNSUPPORTED_BROWSER_TITLE,
        note: null != t ? t() : e,
        action: n,
        className: S.errorPage
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
var v = _