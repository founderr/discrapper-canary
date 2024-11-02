var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(226961),
    s = n(481250),
    c = n(388032);
class d extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(o.FormSection, {
                  tag: o.FormTitleTags.H2,
                  title: c.intl.string(c.t['3u0gIC']),
                  children: (0, s.V)(e, t)
              });
    }
}
t.Z = i.ZP.connectStores([l.ZP], (e) => {
    let { context: t, index: n } = e,
        r = l.ZP.getAllStats(t)[n];
    return { outbound: null != r ? r.rtp.outbound : null };
})(d);
