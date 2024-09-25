n(47120);
var s,
    r = n(735250),
    i = n(470079),
    a = n(593473),
    o = n(442837),
    l = n(544891),
    c = n(481060),
    u = n(129293),
    d = n(388905),
    _ = n(108427),
    h = n(598077),
    E = n(896797),
    p = n(981631),
    g = n(930441),
    m = n(689938),
    f = n(113207);
function I(e, t, n) {
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
class N extends (s = i.PureComponent) {
    componentDidMount() {
        let e = (0, u.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        l.tn
            .post({
                url: p.ANM.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type
                },
                oldFormErrors: !0
            })
            .then(
                (e) => {
                    let {
                            body: { user: n }
                        } = e,
                        s = new h.Z(n);
                    this.setState({
                        success: !0,
                        busy: !1,
                        user: s,
                        category: t.category
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, _.e)('disable_email_notifications');
    }
    renderBusy() {
        return (0, r.jsx)(d.ZP, { children: (0, r.jsx)(d.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: s } = this.props,
            i = m.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({ category: t });
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Dx, {
                    className: f.marginBottom8,
                    children: m.Z.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                }),
                (0, r.jsx)(d.DK, { children: i }),
                (0, r.jsx)(d.zx, {
                    className: f.marginTop20,
                    onClick: () => s(n),
                    children: m.Z.Messages.CONTINUE_TO_WEBAPP
                }),
                (0, r.jsx)(d.zx, {
                    className: f.marginTop8,
                    color: d.zx.Colors.LINK,
                    look: d.zx.Looks.LINK,
                    onClick: () => s(p.Z5c.SETTINGS('notifications', g.vG)),
                    children: m.Z.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                })
            ]
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: s } = this.state;
        if (null != s) {
            let e = g.Od.find((e) => e.category === s);
            if (null != e) return this.renderCategorySuccess(s, e.label());
        }
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.qE, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c.AvatarSizes.DEPRECATED_SIZE_100,
                    className: f.marginBottom20
                }),
                (0, r.jsx)(d.Dx, {
                    className: f.marginBottom8,
                    children: m.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                }),
                (0, r.jsx)(d.DK, { children: m.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY }),
                (0, r.jsx)(d.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: m.Z.Messages.CONTINUE_TO_WEBAPP
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(105020),
                    className: f.marginBottom20
                }),
                (0, r.jsx)(d.Dx, {
                    className: f.marginBottom8,
                    children: m.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }),
                (0, r.jsx)(d.DK, { children: m.Z.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY }),
                (0, r.jsx)(d.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: m.Z.Messages.CONTINUE_TO_WEBAPP
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
            I(this, 'state', {
                busy: !0,
                success: !1,
                user: null,
                category: null
            });
    }
}
I(N, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }), (t.Z = o.ZP.connectStores([E.Z], () => ({ defaultRoute: E.Z.defaultRoute }))(N));
