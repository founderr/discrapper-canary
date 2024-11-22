n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(392711),
    l = n.n(o),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(490029),
    g = n(797614),
    m = n(593481),
    v = n(703656),
    _ = n(254761),
    E = n(70956),
    x = n(960048),
    Z = n(145597),
    S = n(692546),
    I = n(518084),
    C = n(987650),
    y = n(981631),
    N = n(388032),
    T = n(372049);
function O(e, t, n) {
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
let b = 10 * E.Z.Millis.SECOND;
function A() {
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
class L extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, b)), p.Z.track(y.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: r } = this;
        return null == r
            ? null
            : (0, i.jsx)(S.Z, {
                  observe: !1,
                  children: (0, i.jsx)(h.ThemeProvider, {
                      theme: y.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(h.Clickable, {
                              className: a()(r, T.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
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
                                      ? (0, i.jsxs)(I.ZP, {
                                            className: T.stackTrace,
                                            children: [
                                                (0, i.jsx)(I.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(I.ZP.Content, {
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
            O(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            O(this, 'notificationTimer', void 0),
            O(this, 'hideNotification', () => {
                A();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            O(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    A(),
                    p.Z.track(
                        y.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            O(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let P = l().throttle(
    () => {
        g.Z.increment(
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
class R extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, v.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, Z.QF)(),
            r = (0, Z.Ht)();
        (0, f.lW)({
            type: y.BmY.DISPATCH,
            pid: (0, Z.QF)(),
            token: r,
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
        let s = x.Z.captureCrash(e, { extra: t });
        p.Z.track(y.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: s,
            error_level: 'fatal'
        }),
            P();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(L, {
                  error: n,
                  info: r
              })
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', {
                error: null,
                info: null
            });
    }
}
t.Z = R;
