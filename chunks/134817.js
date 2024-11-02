t.r(s);
var n = t(200651),
    a = t(192379),
    i = t(512722),
    c = t.n(i),
    l = t(442837),
    r = t(233787),
    o = t(594174),
    d = t(74538),
    u = t(388032);
class g extends a.Component {
    render() {
        let { user: e, transitionState: s, onClose: t } = this.props;
        return (0, n.jsxs)(r.Z, {
            transitionState: s,
            'aria-label': u.intl.string(u.t.BNg1io),
            children: [
                (0, n.jsx)(r.Z.Header, {
                    onClose: () => t(!1),
                    children: u.intl.string(u.t.BNg1io)
                }),
                (0, n.jsx)(r.Z.Content, {
                    type: r.Z.Types.UPGRADE,
                    children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.intl.string(u.t.mKA9OD) : u.intl.string(u.t.sqSlm5)
                }),
                (0, n.jsx)(r.Z.Footer, {
                    primary: {
                        onClick: () => t(!0),
                        label: u.intl.string(u.t.P3etAg)
                    }
                })
            ]
        });
    }
}
s.default = l.ZP.connectStores([o.default], () => {
    let e = o.default.getCurrentUser();
    return c()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e };
})(g);
