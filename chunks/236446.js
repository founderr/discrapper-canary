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
    f = n(929809),
    m = n(108427),
    I = n(390885),
    N = n(314897),
    T = n(896797),
    A = n(954824),
    x = n(781428),
    C = n(163671),
    v = n(423527),
    S = n(981631),
    Z = n(58346),
    R = n(701476),
    O = n(630724),
    b = n(436620),
    D = n(689938),
    M = n(60561),
    L = n(113207);
c.ZP.initialize();
class P extends r.PureComponent {
    componentDidMount() {
        (0, m.e)('guildTemplate'), !b.KO && A.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && E.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return b.KO
            ? (0, s.jsx)(u.zx, {
                  className: L.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, s.jsx)(u.v6, { className: L.marginTop40 });
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
                    className: L.marginBottom8
                }),
                (0, s.jsx)(u.Dx, {
                    className: a()(L.marginTop8, L.marginBottom8),
                    children: D.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
                }),
                (0, s.jsx)(u.DK, { children: D.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE }),
                this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, s.jsxs)(u.ZP, {
            children: [
                (0, s.jsx)(u.Dx, {
                    className: L.marginBottom8,
                    children: D.Z.Messages.APP_OPENED_TITLE
                }),
                (0, s.jsx)(u.DK, { children: D.Z.Messages.APP_OPENED_BODY }),
                this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (l()(null != e, 'guild template must not be null'), e.state === Z.Rj.RESOLVING)
            ? (0, s.jsx)(u.ZP, {
                  className: M.authBox,
                  children: (0, s.jsx)(g.Z, { guildTemplate: e })
              })
            : (0, s.jsx)(y, { guildTemplate: e });
    }
    renderContinue() {
        return (0, s.jsxs)(u.ZP, {
            children: [(0, s.jsx)(u.Dx, { children: D.Z.Messages.APP_NOT_OPENED }), this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: i } = this.props;
        if (null == e) return this.renderSpinner(D.Z.Messages.LOADING);
        if (t === S.kEZ.OPEN) return this.renderAppOpened();
        if (t === S.kEZ.OPENING) return this.renderSpinner(D.Z.Messages.APP_OPENING);
        switch (e.state) {
            case Z.Rj.RESOLVING:
                return this.renderSpinner(D.Z.Messages.APP_OPENING);
            case Z.Rj.RESOLVED:
                if (n || !b.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, s.jsx)(x.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i
                    });
                else
                    return (0, s.jsx)(v.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: i,
                        onRegister: () => {
                            (0, f.c)(R.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), I.Z.flowStart(O.MK.ORGANIC_GUILD_TEMPLATES, O.EW.NUF_STARTED);
                        }
                    });
            case Z.Rj.EXPIRED:
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
function y(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, h.Z)(t, !1);
    I.Z.flowStep(O.MK.ORGANIC_GUILD_TEMPLATES, O.X2.GUILD_CREATE);
    let i = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(u.Dx, {
                className: M.header,
                children: D.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }),
            n,
            (0, s.jsx)(u.zx, {
                className: M.createButton,
                onClick: r,
                children: D.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
            })
        ]
    });
    return (0, s.jsx)(C.Z, {
        className: M.authBox,
        children: () => [
            (0, s.jsx)(p.Z, { guildTemplate: t }, 'template'),
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
