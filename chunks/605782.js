var i = n(200651),
    s = n(192379),
    r = n(512969),
    l = n(215569);
class o extends s.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: o, match: c, ...a } = this.props,
            d = null,
            u = null;
        return (
            s.Children.forEach(e, (e) => {
                if (null == d && s.isValidElement(e)) {
                    let { component: i, render: l, ...c } = e.props,
                        a = c.path || c.from;
                    if (
                        null !=
                        (d =
                            null != a
                                ? (0, r.LX)(t.pathname, {
                                      ...c,
                                      path: a
                                  })
                                : null)
                    )
                        (c = {
                            ...c,
                            key: a,
                            location: t,
                            match: d,
                            history: n,
                            staticContext: o
                        }),
                            null != i ? (u = s.createElement(i, c)) : null != l && (u = l(c));
                }
            }),
            (0, i.jsx)(l.W, {
                ...a,
                children: u
            })
        );
    }
}
t.Z = (0, r.EN)(o);
