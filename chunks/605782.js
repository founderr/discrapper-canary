var s = n(735250),
    i = n(470079),
    r = n(266067),
    o = n(215569);
class l extends i.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: l, match: a, ...c } = this.props,
            d = null,
            u = null;
        return (
            i.Children.forEach(e, (e) => {
                if (null == d && i.isValidElement(e)) {
                    let { component: s, render: o, ...a } = e.props,
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
                            staticContext: l
                        }),
                            null != s ? (u = i.createElement(s, a)) : null != o && (u = o(a));
                }
            }),
            (0, s.jsx)(o.W, {
                ...c,
                children: u
            })
        );
    }
}
t.Z = (0, r.EN)(l);
