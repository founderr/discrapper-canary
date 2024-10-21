var i = n(200651),
    s = n(192379);
class r extends s.PureComponent {
    render() {
        let { layout: e, layoutSize: t, className: n, renderWidget: s } = this.props;
        return null != e
            ? (0, i.jsx)('div', {
                  className: n,
                  style: {
                      width: t.width,
                      height: t.height
                  },
                  children: e.widgets.map((e) => s(e, t))
              })
            : null;
    }
}
t.Z = r;
