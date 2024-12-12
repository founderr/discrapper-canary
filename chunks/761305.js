n(47120);
var i,
    r = n(200651),
    s = n(192379),
    l = n(593473),
    a = n(442837),
    o = n(544891),
    c = n(108427),
    u = n(601964),
    d = n(896797),
    h = n(129293),
    g = n(388905),
    m = n(981631),
    p = n(388032),
    f = n(232186);
function _(e, t, n) {
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
a.ZP.initialize();
class x extends (i = s.PureComponent) {
    componentDidMount() {
        let e = (0, h.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        o.tn
            .post({
                url: m.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) => {
                    let {
                            body: { guild: t }
                        } = e,
                        n = new u.ZP(t);
                    this.setState({
                        success: !0,
                        busy: !1,
                        guild: n
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, c.e)('disable_server_highlight_notifications');
    }
    renderBusy() {
        return (0, r.jsx)(g.ZP, { children: (0, r.jsx)(g.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Dx, {
                    className: f.marginBottom8,
                    children: p.intl.string(p.t.Z33eiI)
                }),
                (0, r.jsx)(g.DK, { children: p.intl.format(p.t.NRWtfH, { guildName: n.name }) }),
                (0, r.jsx)(g.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O)
                }),
                (0, r.jsx)(g.zx, {
                    className: f.marginTop8,
                    color: g.zx.Colors.LINK,
                    look: g.zx.Looks.LINK,
                    onClick: () => {
                        t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: p.intl.string(p.t['cGmT/P'])
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, {
                    src: n(105020),
                    className: f.marginBottom20
                }),
                (0, r.jsx)(g.Dx, {
                    className: f.marginBottom8,
                    children: p.intl.string(p.t.ox9hIS)
                }),
                (0, r.jsx)(g.DK, { children: p.intl.string(p.t['/dcuR0']) }),
                (0, r.jsx)(g.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O)
                })
            ]
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                busy: !0,
                success: !1,
                guild: null
            });
    }
}
_(x, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }), (t.Z = a.ZP.connectStores([d.Z], () => ({ defaultRoute: d.Z.defaultRoute }))(x));
