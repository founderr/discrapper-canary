var s = n(735250),
    r = n(470079),
    i = n(266067),
    a = n(215569);
class o extends r.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: o, match: l, ...c } = this.props,
            u = null,
            d = null;
        return (
            r.Children.forEach(e, (e) => {
                if (null == u && r.isValidElement(e)) {
                    let { component: s, render: a, ...l } = e.props,
                        c = l.path || l.from;
                    if (
                        null !=
                        (u =
                            null != c
                                ? (0, i.LX)(t.pathname, {
                                      ...l,
                                      path: c
                                  })
                                : null)
                    )
                        (l = {
                            ...l,
                            key: c,
                            location: t,
                            match: u,
                            history: n,
                            staticContext: o
                        }),
                            null != s ? (d = r.createElement(s, l)) : null != a && (d = a(l));
                }
            }),
            (0, s.jsx)(a.W, {
                ...c,
                children: d
            })
        );
    }
}
t.Z = (0, i.EN)(o);
