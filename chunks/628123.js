n(47120);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(818405),
    l = n(587158),
    u = n(286379),
    c = n(442837),
    d = n(481060),
    f = n(386506),
    _ = n(304761),
    h = n(865427),
    p = n(406128),
    m = n(25779),
    g = n(797614),
    E = n(703656),
    v = n(626135),
    I = n(960048),
    S = n(998502),
    b = n(981631),
    T = n(388032),
    y = n(624013);
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
function N() {
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, c.e7)([_.C], () => {
            var e;
            return (0, h.fD)() ? (null === (e = _.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, f.bF)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(d.Button, {
        size: d.ButtonSizes.LARGE,
        onClick: n,
        submitting: e,
        className: y.clearOverrideButton,
        children: T.intl.string(T.t['/Nz9ra'])
    });
}
let C = s().throttle(
    (e) => {
        g.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(o.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class R extends i.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, E.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, m.e)(),
            i = I.Z.captureCrash(e, { extra: t });
        v.default.track(b.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: 'fatal'
        }),
            C(r),
            S.ZP.cleanupDisplaySleep();
    }
    _handleSubmitReport() {
        location.reload(!0);
    }
    componentDidMount() {
        null == window.DiscordErrors &&
            ((window.DiscordErrors = {
                softCrash: (e) => {
                    this.triggerSoftCrash(e);
                }
            }),
            (this.discordErrorsSet = !0));
    }
    componentWillUnmount() {
        this.discordErrorsSet && ((window.DiscordErrors = null), (this.discordErrorsSet = !1));
    }
    render() {
        let { children: e, renderCustomMessage: t } = this.props;
        if (null !== this.state.error) {
            let e = (0, r.jsxs)('div', {
                    children: [(0, r.jsx)('p', { children: T.intl.string(T.t.tx8CkJ) }), (0, r.jsx)('p', { children: T.intl.string(T.t.CvQlAA) })]
                }),
                n = (0, r.jsxs)('div', {
                    className: y.buttons,
                    children: [
                        (0, r.jsx)(d.Button, {
                            size: d.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: T.intl.string(T.t['+hivLS'])
                        }),
                        (0, r.jsx)(N, {})
                    ]
                });
            return (0, r.jsx)(p.Z, {
                title: T.intl.string(T.t['3h+n+/']),
                note: null != t ? t() : e,
                action: n,
                className: y.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                error: null,
                info: null
            }),
            A(this, 'discordErrorsSet', !1);
    }
}
t.Z = R;
