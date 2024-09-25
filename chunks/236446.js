n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    o = n(512722),
    l = n.n(o),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    _ = n(409059),
    h = n(659900),
    E = n(962220),
    p = n(473855),
    g = n(306453),
    m = n(929809),
    f = n(108427),
    I = n(390885),
    N = n(314897),
    T = n(896797),
    x = n(954824),
    A = n(781428),
    C = n(163671),
    Z = n(423527),
    R = n(981631),
    v = n(58346),
    S = n(701476),
    O = n(630724),
    b = n(436620),
    P = n(689938),
    D = n(60561),
    M = n(113207);
c.ZP.initialize();
class L extends r.PureComponent {
    componentDidMount() {
        (0, f.e)('guildTemplate'), !b.KO && x.Z.launch('discord://' + R.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && E.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return b.KO
            ? (0, s.jsx)(u.zx, {
                  className: M.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, s.jsx)(u.v6, { className: M.marginTop40 });
    }
    renderSpinner(e) {
        return (0, s.jsxs)(u.ZP, {
            children: [(0, s.jsx)(u.Dx, { children: e }), (0, s.jsx)(u.Hh, {})]
        });
    }
    renderInvalidGuildTemplate() {
        return (0, s.jsxs)(u.ZP, {
            children: [
                (0, s.jsx)(u.Ee, {
                    src: n(167969),
                    className: M.marginBottom8
                }),
                (0, s.jsx)(u.Dx, {
                    className: a()(M.marginTop8, M.marginBottom8),
                    children: P.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }),
                (0, s.jsx)(u.DK, { children: P.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE }),
                this.renderButton(P.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, s.jsxs)(u.ZP, {
            children: [
                (0, s.jsx)(u.Dx, {
                    className: M.marginBottom8,
                    children: P.Z.Messages.APP_OPENED_TITLE
                }),
                (0, s.jsx)(u.DK, { children: P.Z.Messages.APP_OPENED_BODY }),
                this.renderButton(P.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (l()(null != e, 'guild template must not be null'), e.state === v.Rj.RESOLVING)
            ? (0, s.jsx)(u.ZP, {
                  className: D.authBox,
                  children: (0, s.jsx)(g.Z, { guildTemplate: e })
              })
            : (0, s.jsx)(y, { guildTemplate: e });
    }
    renderContinue() {
        return (0, s.jsxs)(u.ZP, {
            children: [(0, s.jsx)(u.Dx, { children: P.Z.Messages.APP_NOT_OPENED }), this.renderButton(P.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: i } = this.props;
        if (null == e) return this.renderSpinner(P.Z.Messages.LOADING);
        if (t === R.kEZ.OPEN) return this.renderAppOpened();
        if (t === R.kEZ.OPENING) return this.renderSpinner(P.Z.Messages.APP_OPENING);
        switch (e.state) {
            case v.Rj.RESOLVING:
                return this.renderSpinner(P.Z.Messages.APP_OPENING);
            case v.Rj.RESOLVED:
                if (n || !b.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, s.jsx)(A.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i
                    });
                else
                    return (0, s.jsx)(Z.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i,
                        onRegister: () => {
                            (0, m.c)(S.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), I.Z.flowStart(O.MK.ORGANIC_GUILD_TEMPLATES, O.EW.NUF_STARTED);
                        }
                    });
            case v.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        var t, n, s;
        super(...e),
            (t = this),
            (n = 'handleContinue'),
            (s = () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s);
    }
}
function j(e) {
    let t = {
        guildTemplate: (0, c.e7)([_.Z], () => _.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([N.default], () => N.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([T.Z], () => T.Z.defaultRoute)
    };
    return (0, s.jsx)(L, {
        ...e,
        ...t
    });
}
function y(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, h.Z)(t, !1);
    I.Z.flowStep(O.MK.ORGANIC_GUILD_TEMPLATES, O.X2.GUILD_CREATE);
    let i = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(u.Dx, {
                className: D.header,
                children: P.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }),
            n,
            (0, s.jsx)(u.zx, {
                className: D.createButton,
                onClick: r,
                children: P.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })
        ]
    });
    return (0, s.jsx)(C.Z, {
        className: D.authBox,
        children: () => [
            (0, s.jsx)(p.Z, { guildTemplate: t }, 'template'),
            (0, s.jsx)(
                'div',
                {
                    className: D.formContainer,
                    children: i
                },
                'contents'
            )
        ]
    });
}
