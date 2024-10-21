var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    o = n(600164),
    c = n(138894),
    u = n(113207);
class d extends s.PureComponent {
    render() {
        let { title: e, description: t, agreement: n, disagreement: s, onAgree: a, onDisagree: d, imageClassName: h } = this.props;
        return (0, i.jsxs)(o.Z, {
            className: c.gatedContent,
            justify: o.Z.Justify.CENTER,
            align: o.Z.Align.CENTER,
            direction: o.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)('div', { className: l()(c.image, h) }),
                (0, i.jsx)('div', {
                    className: l()(c.title, u.marginBottom8),
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: l()(c.description, u.marginBottom20),
                    children: t
                }),
                (0, i.jsxs)(o.Z, {
                    justify: o.Z.Justify.CENTER,
                    align: o.Z.Align.CENTER,
                    grow: 0,
                    children: [
                        null != s
                            ? (0, i.jsx)(r.Button, {
                                  className: c.action,
                                  size: r.ButtonSizes.LARGE,
                                  color: r.ButtonColors.PRIMARY,
                                  onClick: d,
                                  children: s
                              })
                            : null,
                        null != n
                            ? (0, i.jsx)(r.Button, {
                                  className: c.action,
                                  color: r.Button.Colors.RED,
                                  size: r.ButtonSizes.LARGE,
                                  onClick: a,
                                  children: n
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
t.Z = d;
