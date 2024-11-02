var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(481060),
    s = n(481250),
    c = n(513547),
    d = n(388032);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
        let t = o().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
                return (0, r.jsx)(
                    c.ck,
                    {
                        label: t,
                        value: e
                    },
                    t
                );
        });
        return (0, r.jsx)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: d.intl.string(d.t['gWbr/f']),
            children: (0, s.a)(t)
        });
    }
}
t.Z = u;
