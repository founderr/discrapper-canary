var i = n(200651),
    s = n(192379),
    r = n(512969),
    l = n(215569);
class o extends s.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: o, match: a, ...c } = this.props,
            d = null,
            u = null;
        return (
            s.Children.forEach(e, (e) => {
                if (null == d && s.isValidElement(e)) {
                    let { component: i, render: l, ...a } = e.props,
                        c = a.path || a.from;
                    if (
                        null !=
                        (d =
                            null != c
                                ? (0, r.LX)(t.pathname, {
                                      ...a,
                                      path: c
                                  })
                                : null)
                    )
                        (a = {
                            ...a,
                            key: c,
                            location: t,
                            match: d,
                            history: n,
                            staticContext: o
                        }),
                            null != i ? (u = s.createElement(i, a)) : null != l && (u = l(a));
                }
            }),
            (0, i.jsx)(l.W, {
                ...c,
                children: u
            })
        );
    }
}
t.Z = (0, r.EN)(o);
