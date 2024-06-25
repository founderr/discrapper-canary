"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(818405),
  l = n(587158),
  u = n(286379),
  _ = n(442837),
  c = n(481060),
  d = n(386506),
  E = n(304761),
  I = n(865427),
  T = n(25779),
  h = n(797614),
  f = n(703656),
  S = n(586576),
  A = n(626135),
  N = n(960048),
  m = n(998502),
  O = n(981631),
  p = n(689938),
  R = n(635603);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function C() {
  let [e, t] = r.useState(!1);
  if (null == (0, _.e7)([E.C], () => {
      var e;
      return (0, I.fD)() ? null === (e = E.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    })) return null;
  let n = async () => {
    try {
      t(!0), await (0, d.bF)(), window.location.reload(!0)
    } catch (e) {
      t(!1)
    }
  };
  return (0, i.jsx)(c.Button, {
    size: c.ButtonSizes.LARGE,
    onClick: n,
    submitting: e,
    className: R.clearOverrideButton,
    children: p.Z.Messages.CLEAR_BUILD_OVERRIDE
  })
}
let v = o().throttle(e => {
  h.Z.increment({
    name: u.V.APP_CRASHED,
    tags: ["reason:".concat(a.v.UNHANDLED_JS_ERROR), "level:".concat(l.c.FATAL), "modded_client:".concat(e)]
  }, !0)
}, 100, {
  trailing: !1
});
class L extends r.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, f.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, T.e)(),
      r = N.Z.captureCrash(e, {
        extra: t
      });
    A.default.track(O.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: r,
      uses_client_mods: i
    }), v(i), m.ZP.cleanupDisplaySleep()
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
      let e = (0, i.jsxs)("div", {
          children: [(0, i.jsx)("p", {
            children: p.Z.Messages.ERRORS_UNEXPECTED_CRASH
          }), (0, i.jsx)("p", {
            children: p.Z.Messages.ERRORS_ACTION_TO_TAKE
          })]
        }),
        n = (0, i.jsxs)("div", {
          className: R.buttons,
          children: [(0, i.jsx)(c.Button, {
            size: c.ButtonSizes.LARGE,
            onClick: this._handleSubmitReport,
            children: p.Z.Messages.ERRORS_RELOAD
          }), (0, i.jsx)(C, {})]
        });
      return (0, i.jsx)(S.Z, {
        title: p.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
        note: null != t ? t() : e,
        action: n,
        className: R.errorPage
      })
    }
    return e
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      error: null,
      info: null
    }), g(this, "discordErrorsSet", !1)
  }
}
t.Z = L