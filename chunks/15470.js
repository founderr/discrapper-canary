n.d(t, {
    i: function () {
        return C;
    }
}),
    n(47120);
var s = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(302454),
    o = n.n(l),
    h = n(481060),
    u = n(770146),
    d = n(241209),
    c = n(73346),
    p = n(689938),
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
let I = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
    C = {
        ...d.Z.rules,
        heading: {
            ...d.Z.rules.heading,
            react(e, t, n) {
                let i = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
                return (0, s.jsx)(
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
                let n = e.match(I);
                if (null != n) {
                    let e = n[2],
                        s = t.assets.find((t) => t.id === e);
                    return null != s && [...n, s, t.applicationId];
                }
                return !1;
            },
            parse: (e) => ({
                asset: e[3],
                alt: e[1],
                applicationId: e[4]
            }),
            react: (e, t, n) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: m.assetWrapper,
                        children: (0, s.jsx)('img', {
                            alt: e.alt,
                            src: (0, c._W)(e.applicationId, e.asset, 800),
                            className: m.asset
                        })
                    },
                    n.key
                )
        }
    },
    x = o().parserFor(C),
    f = o().reactFor(o().ruleOutput(C, 'react'));
class v extends i.PureComponent {
    componentDidMount() {
        if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
        }
    }
    render() {
        let { applicationId: e, description: t, blurb: n, className: i, assets: a } = this.props,
            { collapsed: l, collapsable: o } = this.state;
        return (0, s.jsxs)('div', {
            className: i,
            children: [
                (0, s.jsx)('div', {
                    className: r()({ [m.collapsed]: o && l }),
                    children: (0, s.jsxs)('div', {
                        ref: this.setContentContainerRef,
                        children: [
                            (0, s.jsx)('div', {
                                className: m.blurb,
                                children: n
                            }),
                            (0, s.jsx)(d.Z, {
                                className: m.description,
                                parser: x,
                                output: f,
                                state: {
                                    assets: a,
                                    applicationId: e
                                },
                                children: t
                            })
                        ]
                    })
                }),
                o
                    ? (0, s.jsx)(h.Button, {
                          className: m.toggleCollapseButton,
                          onClick: this.handleToggleCollapse,
                          color: h.Button.Colors.PRIMARY,
                          children: l ? p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
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
t.Z = v;
