n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    _ = n(409059),
    h = n(659900),
    E = n(962220),
    g = n(473855),
    p = n(306453),
    m = n(929809),
    f = n(108427),
    I = n(390885),
    N = n(314897),
    T = n(896797),
    A = n(954824),
    x = n(781428),
    C = n(163671),
    R = n(423527),
    S = n(981631),
    O = n(58346),
    Z = n(701476),
    v = n(630724),
    b = n(436620),
    L = n(689938),
    M = n(60561),
    D = n(113207);
c.ZP.initialize();
class P extends r.PureComponent {
    componentDidMount() {
        (0, f.e)('guildTemplate'), !b.KO && A.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && E.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return b.KO
            ? (0, s.jsx)(u.zx, {
                  className: D.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, s.jsx)(u.v6, { className: D.marginTop40 });
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
                    className: D.marginBottom8
                }),
                (0, s.jsx)(u.Dx, {
                    className: a()(D.marginTop8, D.marginBottom8),
                    children: L.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }),
                (0, s.jsx)(u.DK, { children: L.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE }),
                this.renderButton(L.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, s.jsxs)(u.ZP, {
            children: [
                (0, s.jsx)(u.Dx, {
                    className: D.marginBottom8,
                    children: L.Z.Messages.APP_OPENED_TITLE
                }),
                (0, s.jsx)(u.DK, { children: L.Z.Messages.APP_OPENED_BODY }),
                this.renderButton(L.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, 'guild template must not be null'), e.state === O.Rj.RESOLVING)
            ? (0, s.jsx)(u.ZP, {
                  className: M.authBox,
                  children: (0, s.jsx)(p.Z, { guildTemplate: e })
              })
            : (0, s.jsx)(U, { guildTemplate: e });
    }
    renderContinue() {
        return (0, s.jsxs)(u.ZP, {
            children: [(0, s.jsx)(u.Dx, { children: L.Z.Messages.APP_NOT_OPENED }), this.renderButton(L.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: i } = this.props;
        if (null == e) return this.renderSpinner(L.Z.Messages.LOADING);
        if (t === S.kEZ.OPEN) return this.renderAppOpened();
        if (t === S.kEZ.OPENING) return this.renderSpinner(L.Z.Messages.APP_OPENING);
        switch (e.state) {
            case O.Rj.RESOLVING:
                return this.renderSpinner(L.Z.Messages.APP_OPENING);
            case O.Rj.RESOLVED:
                if (n || !b.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, s.jsx)(x.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i
                    });
                else
                    return (0, s.jsx)(R.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i,
                        onRegister: () => {
                            (0, m.c)(Z.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), I.Z.flowStart(v.MK.ORGANIC_GUILD_TEMPLATES, v.EW.NUF_STARTED);
                        }
                    });
            case O.Rj.EXPIRED:
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
    return (0, s.jsx)(P, {
        ...e,
        ...t
    });
}
function U(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, h.Z)(t, !1);
    I.Z.flowStep(v.MK.ORGANIC_GUILD_TEMPLATES, v.X2.GUILD_CREATE);
    let i = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(u.Dx, {
                className: M.header,
                children: L.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }),
            n,
            (0, s.jsx)(u.zx, {
                className: M.createButton,
                onClick: r,
                children: L.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })
        ]
    });
    return (0, s.jsx)(C.Z, {
        className: M.authBox,
        children: () => [
            (0, s.jsx)(g.Z, { guildTemplate: t }, 'template'),
            (0, s.jsx)(
                'div',
                {
                    className: M.formContainer,
                    children: i
                },
                'contents'
            )
        ]
    });
}
