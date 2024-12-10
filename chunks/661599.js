var i = n(200651),
    r = n(192379),
    l = n(230711),
    a = n(324262),
    o = n(981631),
    s = n(388032),
    c = n(510342);
class d extends r.PureComponent {
    render() {
        return (0, i.jsx)(a.Z, {
            guild: this.props.guild,
            onClick: () => l.Z.open(o.oAB.ACCOUNT),
            message: s.intl.format(s.t['oCd+am'], {}),
            cta: s.intl.string(s.t['8dCrV1']),
            trackingSource: o.PsQ.GUILD_MFA_WARNING,
            type: o.vID.MFA_WARNING,
            image: c,
            imageMarginX: 54,
            undismissable: !0
        });
    }
}
t.Z = d;
