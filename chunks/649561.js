n(47120), n(177593);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    o = n.n(l),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(490029),
    m = n(797614),
    g = n(593481),
    v = n(703656),
    _ = n(254761),
    E = n(70956),
    x = n(960048),
    Z = n(145597),
    S = n(692546),
    C = n(518084),
    I = n(987650),
    y = n(981631),
    N = n(388032),
    T = n(372049);
function b(e, t, n) {
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
let O = 10 * E.Z.Millis.SECOND;
function j() {
    let e = (0, Z.QF)(),
        t = (0, Z.Ht)();
    (0, f.lW)({
        type: y.BmY.DISPATCH,
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
class A extends s.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, O)), p.Z.track(y.rMx.NOTIFICATION_VIEWED, { notif_type: I.n0.OverlayCrashed });
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
                      theme: y.BRd.DARK,
                      children: (s) =>
                          (0, i.jsxs)(h.Clickable, {
                              className: a()(s, T.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(g.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(_.Z, {
                                          width: 40,
                                          height: 40,
                                          className: T.notificationIcon
                                      }),
                                      title: N.intl.string(N.t.U38qZm),
                                      confirmText: N.intl.string(N.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(C.ZP, {
                                            className: T.stackTrace,
                                            children: [
                                                (0, i.jsx)(C.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(C.ZP.Content, {
                                                    className: T.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: T.code,
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
            b(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            b(this, 'notificationTimer', void 0),
            b(this, 'hideNotification', () => {
                j();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            b(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    j(),
                    p.Z.track(
                        y.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: I.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            b(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let M = o().throttle(
    () => {
        m.Z.increment(
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
class P extends s.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, v.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, Z.QF)(),
            s = (0, Z.Ht)();
        (0, f.lW)({
            type: y.BmY.DISPATCH,
            pid: (0, Z.QF)(),
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
            setImmediate(() => window.addEventListener('click', j));
        let r = x.Z.captureCrash(e, { extra: t });
        p.Z.track(y.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: 'fatal'
        }),
            M();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
        return null != n
            ? (0, i.jsx)(A, {
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
            b(this, 'state', {
                error: null,
                info: null
            });
    }
}
t.Z = P;
