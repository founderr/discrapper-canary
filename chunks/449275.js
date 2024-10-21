var i = n(200651),
    a = n(192379),
    s = n(770146),
    r = n(689938),
    l = n(658793);
class o extends a.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, i.jsxs)('div', {
                  className: e,
                  children: [
                      (0, i.jsx)(s.Z, { children: r.Z.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT }),
                      (0, i.jsx)('div', {
                          className: l.content,
                          children: t.legalNotice
                      })
                  ]
              });
    }
}
t.Z = o;
