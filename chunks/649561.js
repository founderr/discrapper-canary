t(47120), t(177593);
var i = t(200651),
    a = t(192379),
    o = t(120356),
    r = t.n(o),
    l = t(392711),
    c = t.n(l),
    s = t(818405),
    d = t(587158),
    u = t(286379),
    p = t(481060),
    _ = t(13245),
    h = t(490029),
    m = t(797614),
    f = t(593481),
    v = t(703656),
    g = t(254761),
    E = t(70956),
    Z = t(960048),
    b = t(145597),
    y = t(692546),
    C = t(518084),
    I = t(987650),
    x = t(981631),
    S = t(388032),
    k = t(974881);
function L(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let N = 10 * E.Z.Millis.SECOND;
function A() {
    let e = (0, b.QF)(),
        n = (0, b.Ht)();
    (0, h.lW)({
        type: x.BmY.DISPATCH,
        pid: e,
        token: n,
        payloads: [
            {
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: !0,
                pid: e
            }
        ]
    });
}
class T extends a.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, N)), _.Z.track(x.rMx.NOTIFICATION_VIEWED, { notif_type: I.n0.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: n } = this.props,
            { showTrace: t } = this.state,
            { notificationTimer: a } = this;
        return null == a
            ? null
            : (0, i.jsx)(y.Z, {
                  observe: !1,
                  children: (0, i.jsx)(p.ThemeProvider, {
                      theme: x.BRd.DARK,
                      children: (a) =>
                          (0, i.jsxs)(p.Clickable, {
                              className: r()(a, k.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(f.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(g.Z, {
                                          width: 40,
                                          height: 40,
                                          className: k.notificationIcon
                                      }),
                                      title: S.intl.string(S.t.U38qZm),
                                      confirmText: S.intl.string(S.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  t && null != e
                                      ? (0, i.jsxs)(C.ZP, {
                                            className: k.stackTrace,
                                            children: [
                                                (0, i.jsx)(C.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(C.ZP.Content, {
                                                    className: k.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: k.code,
                                                        children: (0, i.jsx)('pre', { children: n.stack })
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
            L(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            L(this, 'notificationTimer', void 0),
            L(this, 'hideNotification', () => {
                A();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            L(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    A(),
                    _.Z.track(
                        x.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: I.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            L(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: n } = this;
                null != n && clearTimeout(n), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let P = c().throttle(
    () => {
        m.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(s.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class w extends a.PureComponent {
    componentDidCatch(e, n) {
        let t = (0, v.s1)().location;
        this.setState({
            error: e,
            info: n
        });
        let i = (0, b.QF)(),
            a = (0, b.Ht)();
        (0, h.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, b.QF)(),
            token: a,
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
            setImmediate(() => window.addEventListener('click', A));
        let o = Z.Z.captureCrash(e, { extra: n });
        _.Z.track(x.rMx.APP_CRASHED, {
            path: t.pathname,
            extra: n,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            P();
    }
    render() {
        let { children: e, className: n } = this.props,
            { error: t, info: a } = this.state;
        return null != t
            ? (0, i.jsx)(T, {
                  error: t,
                  info: a
              })
            : (0, i.jsx)('div', {
                  className: n,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', {
                error: null,
                info: null
            });
    }
}
n.Z = w;
