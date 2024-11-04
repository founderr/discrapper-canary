var i = n(200651),
    r = n(192379),
    a = n(230711),
    l = n(82950),
    s = n(981631),
    o = n(388032),
    c = n(510342);
class d extends r.PureComponent {
    render() {
        return (0, i.jsx)(l.Z, {
            guild: this.props.guild,
            onClick: () => a.Z.open(s.oAB.ACCOUNT),
            message: o.intl.format(o.t['oCd+am'], {}),
            cta: o.intl.string(o.t['8dCrV1']),
            trackingSource: s.PsQ.GUILD_MFA_WARNING,
            type: s.vID.MFA_WARNING,
            image: c,
            imageMarginX: 54,
            undismissable: !0
        });
    }
}
t.Z = d;
