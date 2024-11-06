n.d(t, {
    i: function () {
        return b;
    }
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    l = n(302454),
    o = n.n(l),
    d = n(481060),
    u = n(770146),
    c = n(241209),
    h = n(73346),
    p = n(388032),
    m = n(499142);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    b = {
        ...c.Z.rules,
        heading: {
            ...c.Z.rules.heading,
            react(e, t, n) {
                let i = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, a.jsx)(
                    u.Z,
                    {
                        tag: i,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        assetImage: {
            order: 5,
            match(e, t) {
                let n = e.match(f);
                if (null != n) {
                    let e = n[2],
                        a = t.assets.find((t) => t.id === e);
                    return null != a && [...n, a, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4]
            }),
            react: (e, t, n) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: m.assetWrapper,
                        children: (0, a.jsx)('img', {
                            alt: e.alt,
                            src: (0, h._W)(e.applicationId, e.asset, 800),
                            className: m.asset
                        })
                    },
                    n.key
                )
        }
    },
    C = o().parserFor(b),
    I = o().reactFor(o().ruleOutput(b, 'react'));
class x extends i.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: i, assets: r } = this.props,
            { collapsed: l, collapsable: o } = this.state;
        return (0, a.jsxs)('div', {
            className: i,
            children: [
                (0, a.jsx)('div', {
                    className: s()({ [m.collapsed]: o && l }),
                    children: (0, a.jsxs)('div', {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, a.jsx)('div', {
                                className: m.blurb,
                                children: n
                            }),
                            (0, a.jsx)(c.Z, {
                                className: m.description,
                                parser: C,
                                output: I,
                                state: {
                                    assets: r,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                o
                    ? (0, a.jsx)(d.Button, {
                          className: m.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: d.Button.Colors.PRIMARY,
                          children: l ? p.intl.string(p.t.DxcOXF) : p.intl.string(p.t.rD6EaG)
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                collapsed: !0,
                collapsable: !0
            }),
            g(this, '_container', void 0),
            g(this, 'handleToggleCollapse', () => {
                this.setState({ collapsed: !this.state.collapsed });
            }),
            g(this, 'setContentContainerRef', (e) => {
                this._container = e;
            });
    }
}
t.Z = x;
