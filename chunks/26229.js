var i = n(200651),
    r = n(192379);
class s extends r.PureComponent {
    render() {
        let { layout: e, layoutSize: t, className: n, renderWidget: r } = this.props;
        return null != e
            ? (0, i.jsx)('div', {
                  className: n,
                  style: {
                      width: t.width,
                      height: t.height
                  },
                  children: e.widgets.map((e) => r(e, t))
              })
            : null;
    }
}
t.Z = s;
