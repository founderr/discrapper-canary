n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
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
    v = n(314897),
    I = n(896797),
    b = n(954824),
    N = n(781428),
    C = n(163671),
    S = n(423527),
    T = n(981631),
    A = n(58346),
    Z = n(701476),
    j = n(630724),
    R = n(436620),
    O = n(388032),
    L = n(60561),
    P = n(113207);
c.ZP.initialize();
class y extends r.PureComponent {
    componentDidMount() {
        (0, x.e)('guildTemplate'), !R.KO && b.Z.launch('discord://' + T.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return R.KO
            ? (0, i.jsx)(u.zx, {
                  className: P.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, i.jsx)(u.v6, { className: P.marginTop40 });
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
                    className: P.marginBottom8
                }),
                (0, i.jsx)(u.Dx, {
                    className: a()(P.marginTop8, P.marginBottom8),
                    children: O.intl.string(O.t.C7ZRNz)
                }),
                (0, i.jsx)(u.DK, { children: O.intl.string(O.t.A6MwXF) }),
                this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(u.ZP, {
            children: [
                (0, i.jsx)(u.Dx, {
                    className: P.marginBottom8,
                    children: O.intl.string(O.t.csrAMD)
                }),
                (0, i.jsx)(u.DK, { children: O.intl.string(O.t['m1+IBg']) }),
                this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, 'guild template must not be null'), e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(u.ZP, {
                  className: L.authBox,
                  children: (0, i.jsx)(f.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(u.ZP, {
            children: [(0, i.jsx)(u.Dx, { children: O.intl.string(O.t.fOc4go) }), this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
        if (null == e) return this.renderSpinner(O.intl.string(O.t.ZTNur6));
        if (t === T.kEZ.OPEN) return this.renderAppOpened();
        if (t === T.kEZ.OPENING) return this.renderSpinner(O.intl.string(O.t['Z+hCVV']));
        switch (e.state) {
            case A.Rj.RESOLVING:
                return this.renderSpinner(O.intl.string(O.t['Z+hCVV']));
            case A.Rj.RESOLVED:
                if (n || !R.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(N.Z, {
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
                            (0, _.c)(Z.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(j.MK.ORGANIC_GUILD_TEMPLATES, j.EW.NUF_STARTED);
                        }
                    });
            case A.Rj.EXPIRED:
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
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([v.default], () => v.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([I.Z], () => I.Z.defaultRoute)
    };
    return (0, i.jsx)(y, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, g.Z)(t, !1);
    E.Z.flowStep(j.MK.ORGANIC_GUILD_TEMPLATES, j.X2.GUILD_CREATE);
    let s = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Dx, {
                className: L.header,
                children: O.intl.string(O.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(u.zx, {
                className: L.createButton,
                onClick: r,
                children: O.intl.string(O.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(C.Z, {
        className: L.authBox,
        children: () => [
            (0, i.jsx)(p.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: L.formContainer,
                    children: s
                },
                'contents'
            )
        ]
    });
}
