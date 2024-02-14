"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("860677");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("77078"),
  r = n("539405"),
  d = n("121338"),
  u = n("393414"),
  c = n("415518"),
  f = n("720691"),
  h = n("560995"),
  p = n("718517"),
  g = n("286235"),
  m = n("439932"),
  E = n("819068"),
  S = n("483355"),
  v = n("6791"),
  y = n("49111"),
  O = n("782340"),
  C = n("353306");
let N = 10 * p.default.Millis.SECOND;

function T() {
  let e = (0, E.getPID)(),
    t = (0, E.getRPCAuthToken)();
  (0, d.send)({
    type: y.OverlayEventTypes.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class I extends a.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, N), r.default.track(y.AnalyticEvents.NOTIFICATION_VIEWED, {
      notif_type: v.OverlayNotificationType.OverlayCrashed
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
    return null == a ? null : (0, i.jsx)(S.default, {
      observe: !1,
      children: (0, i.jsxs)(o.Clickable, {
        className: s((0, m.getThemeClass)(y.ThemeTypes.DARK), C.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(c.default, {
          expand: !0,
          colorScheme: c.ColorSchemes.DANGER,
          icon: (0, i.jsx)(f.default, {
            width: 40,
            height: 40,
            className: C.notificationIcon
          }),
          title: O.default.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: O.default.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(h.default, {
          className: C.stackTrace,
          children: [(0, i.jsx)(h.default.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(h.default.Content, {
            className: C.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: C.code,
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
      T();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }, this.handleReload = e => {
      this.setState({
        busy: !0
      }), T(), r.default.track(y.AnalyticEvents.NOTIFICATION_CLICKED, {
        notif_type: v.OverlayNotificationType.OverlayCrashed,
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
class _ extends a.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, u.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, E.getPID)(),
      a = (0, E.getRPCAuthToken)();
    (0, d.send)({
      type: y.OverlayEventTypes.DISPATCH,
      pid: (0, E.getPID)(),
      token: a,
      payloads: [{
        type: "OVERLAY_CRASHED",
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: !0,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", T));
    let l = g.default.captureCrash(e, {
      extra: t
    });
    r.default.track(y.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: l
    })
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: a
    } = this.state;
    return null != n ? (0, i.jsx)(I, {
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
var A = _