n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    h = n(409059),
    g = n(659900),
    m = n(962220),
    p = n(473855),
    f = n(306453),
    _ = n(929809),
    x = n(108427),
    E = n(390885),
    I = n(314897),
    v = n(896797),
    N = n(954824),
    b = n(781428),
    C = n(163671),
    S = n(423527),
    A = n(981631),
    T = n(58346),
    j = n(701476),
    Z = n(630724),
    R = n(436620),
    L = n(388032),
    P = n(640936),
    O = n(232186);
c.ZP.initialize();
class D extends r.PureComponent {
    componentDidMount() {
        (0, x.e)('guildTemplate'), !R.KO && N.Z.launch('discord://' + A.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return R.KO
            ? (0, i.jsx)(u.zx, {
                  className: O.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, i.jsx)(u.v6, { className: O.marginTop40 });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(u.ZP, {
            children: [(0, i.jsx)(u.Dx, { children: e }), (0, i.jsx)(u.Hh, {})]
        });
    }
    renderInvalidGuildTemplate() {
        return (0, i.jsxs)(u.ZP, {
            children: [
                (0, i.jsx)(u.Ee, {
                    src: n(167969),
                    className: O.marginBottom8
                }),
                (0, i.jsx)(u.Dx, {
                    className: l()(O.marginTop8, O.marginBottom8),
                    children: L.intl.string(L.t.C7ZRNz)
                }),
                (0, i.jsx)(u.DK, { children: L.intl.string(L.t.A6MwXF) }),
                this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(u.ZP, {
            children: [
                (0, i.jsx)(u.Dx, {
                    className: O.marginBottom8,
                    children: L.intl.string(L.t.csrAMD)
                }),
                (0, i.jsx)(u.DK, { children: L.intl.string(L.t['m1+IBg']) }),
                this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, 'guild template must not be null'), e.state === T.Rj.RESOLVING)
            ? (0, i.jsx)(u.ZP, {
                  className: P.authBox,
                  children: (0, i.jsx)(f.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(u.ZP, {
            children: [(0, i.jsx)(u.Dx, { children: L.intl.string(L.t.fOc4go) }), this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
        if (null == e) return this.renderSpinner(L.intl.string(L.t.ZTNur6));
        if (t === A.kEZ.OPEN) return this.renderAppOpened();
        if (t === A.kEZ.OPENING) return this.renderSpinner(L.intl.string(L.t['Z+hCVV']));
        switch (e.state) {
            case T.Rj.RESOLVING:
                return this.renderSpinner(L.intl.string(L.t['Z+hCVV']));
            case T.Rj.RESOLVED:
                if (n || !R.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(b.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: s
                    });
                else
                    return (0, i.jsx)(S.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: s,
                        onRegister: () => {
                            (0, _.c)(j.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.EW.NUF_STARTED);
                        }
                    });
            case T.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleContinue'),
            (i = () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function y(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([v.Z], () => v.Z.defaultRoute)
    };
    return (0, i.jsx)(D, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, g.Z)(t, !1);
    E.Z.flowStep(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.X2.GUILD_CREATE);
    let s = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Dx, {
                className: P.header,
                children: L.intl.string(L.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(u.zx, {
                className: P.createButton,
                onClick: r,
                children: L.intl.string(L.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(C.Z, {
        className: P.authBox,
        children: () => [
            (0, i.jsx)(p.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: P.formContainer,
                    children: s
                },
                'contents'
            )
        ]
    });
}
