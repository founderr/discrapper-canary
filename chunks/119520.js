n(47120);
var i = n(200651),
    r = n(192379),
    l = n(558381),
    a = n(986035),
    o = n(388032),
    s = n(55144);
function c(e, t, n) {
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
class d extends r.PureComponent {
    render() {
        let {
            game: { name: e }
        } = this.props;
        return (0, i.jsx)('div', {
            className: s.matureListing,
            children: (0, i.jsx)(a.Z, {
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: o.intl.formatToPlainString(o.t.n5PGER, { name: e }),
                description: o.intl.string(o.t['bJx/aG']),
                agreement: o.intl.string(o.t.odZq8f),
                disagreement: o.intl.string(o.t.hieTsL)
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleDisagree', () => {
                (0, l.M9)();
            }),
            c(this, 'handleAgree', () => {
                (0, l.cj)();
            });
    }
}
t.Z = d;
