var i = n(200651),
    r = n(192379),
    s = n(512969),
    l = n(215569);
class a extends r.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: a, match: o, ...c } = this.props,
            u = null,
            d = null;
        return (
            r.Children.forEach(e, (e) => {
                if (null == u && r.isValidElement(e)) {
                    let { component: i, render: l, ...o } = e.props,
                        c = o.path || o.from;
                    if (
                        null !=
                        (u =
                            null != c
                                ? (0, s.LX)(t.pathname, {
                                      ...o,
                                      path: c
                                  })
                                : null)
                    )
                        (o = {
                            ...o,
                            key: c,
                            location: t,
                            match: u,
                            history: n,
                            staticContext: a
                        }),
                            null != i ? (d = r.createElement(i, o)) : null != l && (d = l(o));
                }
            }),
            (0, i.jsx)(l.W, {
                ...c,
                children: d
            })
        );
    }
}
t.Z = (0, s.EN)(a);
