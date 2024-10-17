n(47120), n(177593);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    o = n(392711),
    l = n.n(o),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(490029),
    _ = n(797614),
    E = n(593481),
    g = n(703656),
    m = n(254761),
    I = n(70956),
    Z = n(960048),
    v = n(145597),
    S = n(692546),
    C = n(518084),
    x = n(987650),
    N = n(981631),
    T = n(689938),
    O = n(372049);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = 10 * I.Z.Millis.SECOND;
function R() {
    let e = (0, v.QF)(),
        t = (0, v.Ht)();
    (0, f.lW)({
        type: N.BmY.DISPATCH,
        pid: e,
        token: t,
        payloads: [
            {
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: !0,
                pid: e
            }
        ]
    });
}
class M extends s.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, y)), p.Z.track(N.rMx.NOTIFICATION_VIEWED, { notif_type: x.n0.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: s } = this;
        return null == s
            ? null
            : (0, i.jsx)(S.Z, {
                  observe: !1,
                  children: (0, i.jsx)(h.ThemeProvider, {
                      theme: N.BRd.DARK,
                      children: (s) =>
                          (0, i.jsxs)(h.Clickable, {
                              className: r()(s, O.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(E.ZP, {
                                      expand: !0,
                                      colorScheme: E.IC.DANGER,
                                      icon: (0, i.jsx)(m.Z, {
                                          width: 40,
                                          height: 40,
                                          className: O.notificationIcon
                                      }),
                                      title: T.Z.Messages.OVERLAY_CRASHED_TITLE,
                                      confirmText: T.Z.Messages.OVERLAY_RELOAD,
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(C.ZP, {
                                            className: O.stackTrace,
                                            children: [
                                                (0, i.jsx)(C.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(C.ZP.Content, {
                                                    className: O.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: O.code,
                                                        children: (0, i.jsx)('pre', { children: t.stack })
                                                    })
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            A(this, 'notificationTimer', void 0),
            A(this, 'hideNotification', () => {
                R();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            A(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    R(),
                    p.Z.track(
                        N.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: x.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            A(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let L = l().throttle(
    () => {
        _.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class b extends s.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, v.QF)(),
            s = (0, v.Ht)();
        (0, f.lW)({
            type: N.BmY.DISPATCH,
            pid: (0, v.QF)(),
            token: s,
            payloads: [
                {
                    type: 'OVERLAY_CRASHED',
                    pid: i
                },
                {
                    type: 'OVERLAY_SET_INPUT_LOCKED',
                    locked: !0,
                    pid: i
                }
            ]
        }),
            setImmediate(() => window.addEventListener('click', R));
        let a = Z.Z.captureCrash(e, { extra: t });
        p.Z.track(N.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: 'fatal'
        }),
            L();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
        return null != n
            ? (0, i.jsx)(M, {
                  error: n,
                  info: s
              })
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                error: null,
                info: null
            });
    }
}
t.Z = b;
