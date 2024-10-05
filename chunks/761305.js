n(47120);
var s,
    r = n(735250),
    i = n(470079),
    a = n(593473),
    o = n(442837),
    l = n(544891),
    c = n(108427),
    u = n(601964),
    d = n(896797),
    _ = n(129293),
    h = n(388905),
    E = n(981631),
    p = n(689938),
    g = n(113207);
function f(e, t, n) {
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
o.ZP.initialize();
class m extends (s = i.PureComponent) {
    componentDidMount() {
        let e = (0, _.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        l.tn
            .post({
                url: E.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id
                },
                oldFormErrors: !0
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
        return (0, r.jsx)(h.ZP, { children: (0, r.jsx)(h.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, r.jsxs)(h.ZP, {
            children: [
                (0, r.jsx)(h.Dx, {
                    className: g.marginBottom8,
                    children: p.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                }),
                (0, r.jsx)(h.DK, { children: p.Z.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({ guildName: n.name }) }),
                (0, r.jsx)(h.zx, {
                    className: g.marginTop40,
                    onClick: () => t(e),
                    children: p.Z.Messages.CONTINUE_TO_WEBAPP
                }),
                (0, r.jsx)(h.zx, {
                    className: g.marginTop8,
                    color: h.zx.Colors.LINK,
                    look: h.zx.Looks.LINK,
                    onClick: () => {
                        t(E.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: p.Z.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(h.ZP, {
            children: [
                (0, r.jsx)(h.Ee, {
                    src: n(105020),
                    className: g.marginBottom20
                }),
                (0, r.jsx)(h.Dx, {
                    className: g.marginBottom8,
                    children: p.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }),
                (0, r.jsx)(h.DK, { children: p.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY }),
                (0, r.jsx)(h.zx, {
                    className: g.marginTop40,
                    onClick: () => t(e),
                    children: p.Z.Messages.CONTINUE_TO_WEBAPP
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
            f(this, 'state', {
                busy: !0,
                success: !1,
                guild: null
            });
    }
}
f(m, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }), (t.Z = o.ZP.connectStores([d.Z], () => ({ defaultRoute: d.Z.defaultRoute }))(m));
