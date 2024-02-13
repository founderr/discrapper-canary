"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007"), n("860677");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("917351"),
  r = n.n(o),
  d = n("88807"),
  u = n("721998"),
  c = n("432710"),
  f = n("77078"),
  h = n("539405"),
  p = n("121338"),
  E = n("155084"),
  g = n("393414"),
  m = n("415518"),
  S = n("720691"),
  v = n("560995"),
  I = n("718517"),
  y = n("286235"),
  _ = n("439932"),
  N = n("819068"),
  T = n("483355"),
  O = n("6791"),
  C = n("49111"),
  A = n("782340"),
  x = n("353306");
let R = 10 * I.default.Millis.SECOND;

function M() {
  let e = (0, N.getPID)(),
    t = (0, N.getRPCAuthToken)();
  (0, p.send)({
    type: C.OverlayEventTypes.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class L extends a.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, R), h.default.track(C.AnalyticEvents.NOTIFICATION_VIEWED, {
      notif_type: O.OverlayNotificationType.OverlayCrashed
    })
  }
  componentWillUnmount() {
    let {
      notificationTimer: e
    } = this;
    null != e && clearTimeout(e)
  }
  render() {
    let {
      info: e,
      error: t
    } = this.props, {
      showTrace: n
    } = this.state, {
      notificationTimer: a
    } = this;
    return null == a ? null : (0, i.jsx)(T.default, {
      observe: !1,
      children: (0, i.jsxs)(f.Clickable, {
        className: s((0, _.getThemeClass)(C.ThemeTypes.DARK), x.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(m.default, {
          expand: !0,
          colorScheme: m.ColorSchemes.DANGER,
          icon: (0, i.jsx)(S.default, {
            width: 40,
            height: 40,
            className: x.notificationIcon
          }),
          title: A.default.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: A.default.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(v.default, {
          className: x.stackTrace,
          children: [(0, i.jsx)(v.default.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(v.default.Content, {
            className: x.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: x.code,
              children: (0, i.jsx)("pre", {
                children: t.stack
              })
            })
          })]
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showTrace: !1,
      busy: !1
    }, this.hideNotification = () => {
      M();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }, this.handleReload = e => {
      this.setState({
        busy: !0
      }), M(), h.default.track(C.AnalyticEvents.NOTIFICATION_CLICKED, {
        notif_type: O.OverlayNotificationType.OverlayCrashed,
        action_type: "reload"
      }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
    }, this.handleNotificationClick = e => {
      e.stopPropagation();
      let {
        notificationTimer: t
      } = this;
      null != t && clearTimeout(t), e.shiftKey && this.setState({
        showTrace: !0
      })
    }
  }
}
let D = r.throttle(() => {
  E.default.increment({
    name: c.MetricEvents.APP_CRASHED,
    tags: ["reason:".concat(d.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
  }, !0)
}, 100, {
  trailing: !1
});
class j extends a.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, g.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, N.getPID)(),
      a = (0, N.getRPCAuthToken)();
    (0, p.send)({
      type: C.OverlayEventTypes.DISPATCH,
      pid: (0, N.getPID)(),
      token: a,
      payloads: [{
        type: "OVERLAY_CRASHED",
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: !0,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", M));
    let l = y.default.captureCrash(e, {
      extra: t
    });
    h.default.track(C.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: l
    }), D()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: a
    } = this.state;
    return null != n ? (0, i.jsx)(L, {
      error: n,
      info: a
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      error: null,
      info: null
    }
  }
}
var P = j