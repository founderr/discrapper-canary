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
  E = n("286235"),
  g = n("439932"),
  m = n("819068"),
  S = n("483355"),
  v = n("6791"),
  I = n("49111"),
  y = n("782340"),
  _ = n("39105");
let N = 10 * p.default.Millis.SECOND;

function T() {
  let e = (0, m.getPID)(),
    t = (0, m.getRPCAuthToken)();
  (0, d.send)({
    type: I.OverlayEventTypes.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class O extends a.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, N), r.default.track(I.AnalyticEvents.NOTIFICATION_VIEWED, {
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
        className: s((0, g.getThemeClass)(I.ThemeTypes.DARK), _.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(c.default, {
          expand: !0,
          colorScheme: c.ColorSchemes.DANGER,
          icon: (0, i.jsx)(f.default, {
            width: 40,
            height: 40,
            className: _.notificationIcon
          }),
          title: y.default.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: y.default.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(h.default, {
          className: _.stackTrace,
          children: [(0, i.jsx)(h.default.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(h.default.Content, {
            className: _.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: _.code,
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
      }), T(), r.default.track(I.AnalyticEvents.NOTIFICATION_CLICKED, {
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
class C extends a.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, u.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, m.getPID)(),
      a = (0, m.getRPCAuthToken)();
    (0, d.send)({
      type: I.OverlayEventTypes.DISPATCH,
      pid: (0, m.getPID)(),
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
    let l = E.default.captureCrash(e, {
      extra: t
    });
    r.default.track(I.AnalyticEvents.APP_CRASHED, {
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
    return null != n ? (0, i.jsx)(O, {
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
var A = C