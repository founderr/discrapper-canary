var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(818405),
    u = n(587158),
    c = n(286379),
    d = n(442837),
    _ = n(481060),
    E = n(386506),
    f = n(304761),
    h = n(865427),
    p = n(406128),
    m = n(25779),
    I = n(797614),
    T = n(703656),
    g = n(626135),
    S = n(960048),
    A = n(998502),
    v = n(981631),
    N = n(689938),
    O = n(584738);
function R(e, t, n) {
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
function C() {
    let [e, t] = a.useState(!1);
    if (
        null ==
        (0, d.e7)([f.C], () => {
            var e;
            return (0, h.fD)() ? (null === (e = f.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, E.bF)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, i.jsx)(_.Button, {
        size: _.ButtonSizes.LARGE,
        onClick: n,
        submitting: e,
        className: O.clearOverrideButton,
        children: N.Z.Messages.CLEAR_BUILD_OVERRIDE
    });
}
let y = s().throttle(
    (e) => {
        I.Z.increment(
            {
                name: c.V.APP_CRASHED,
                tags: ['reason:'.concat(l.v.UNHANDLED_JS_ERROR), 'level:'.concat(u.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class L extends a.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, T.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, m.e)(),
            i = S.Z.captureCrash(e, { extra: t });
        g.default.track(v.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: 'fatal'
        }),
            y(r),
            A.ZP.cleanupDisplaySleep();
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
            let e = (0, i.jsxs)('div', {
                    children: [(0, i.jsx)('p', { children: N.Z.Messages.ERRORS_UNEXPECTED_CRASH }), (0, i.jsx)('p', { children: N.Z.Messages.ERRORS_ACTION_TO_TAKE })]
                }),
                n = (0, i.jsxs)('div', {
                    className: O.buttons,
                    children: [
                        (0, i.jsx)(_.Button, {
                            size: _.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: N.Z.Messages.ERRORS_RELOAD
                        }),
                        (0, i.jsx)(C, {})
                    ]
                });
            return (0, i.jsx)(p.Z, {
                title: N.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                note: null != t ? t() : e,
                action: n,
                className: O.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                error: null,
                info: null
            }),
            R(this, 'discordErrorsSet', !1);
    }
}
t.Z = L;
