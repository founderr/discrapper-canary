n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(692547),
    s = n(481060),
    c = n(600164),
    d = n(4912),
    u = n(701491);
let m = ['firCount', 'nackCount'];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, r.jsx)(d.Z, {
                  color: l.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: n, section: a, label: i, renderGraph: l } = this.props;
        return (0, r.jsxs)(c.Z, {
            className: o()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: '50%',
            children: [
                (0, r.jsxs)(c.Z, {
                    className: u.kvContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, r.jsx)(c.Z.Child, {
                            children: (0, r.jsx)(s.H, {
                                className: u.title,
                                children: e
                            })
                        }),
                        Array.isArray(n)
                            ? (0, r.jsx)(c.Z.Child, {
                                  grow: 1,
                                  children: n
                              })
                            : (0, r.jsxs)(c.Z.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, r.jsx)('span', {
                                          className: u.itemValue,
                                          title: n,
                                          children: n
                                      })
                                  ]
                              })
                    ]
                }),
                null !== l &&
                    (0, r.jsx)(
                        c.Z.Child,
                        {
                            className: u.graph,
                            children: (0, r.jsx)(s.FormText, {
                                type: s.FormTextTypes.DESCRIPTION,
                                children: l
                            })
                        },
                        null != a ? ''.concat(a, '-').concat(i) : i
                    ),
                (0, r.jsx)(s.FormDivider, { className: u.divider })
            ]
        });
    }
}
