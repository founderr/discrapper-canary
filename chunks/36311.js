n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(986035),
    d = n(594174),
    h = n(63063),
    m = n(981631),
    p = n(388032),
    f = n(401701);
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
class C extends l.PureComponent {
    componentDidMount() {
        let { current: e } = this.scroller;
        null == e || e.scrollToBottom();
    }
    render() {
        let { nsfwDisallowed: e } = this.props,
            t = p.intl.string(p.t.peE8aW);
        t = e ? p.intl.format(p.t['2kHZen'], { helpURL: h.Z.getArticleURL(m.BhN.NSFW_AGE_GATING) }) : p.intl.string(p.t.E4Cd5O);
        let n = e
            ? (0, i.jsx)(u.Z, {
                  onAgree: this.handleAgree,
                  onDisagree: this.handleDisagree,
                  title: p.intl.string(p.t.NEabBQ),
                  description: t,
                  agreement: null,
                  disagreement: p.intl.string(p.t['13/7kZ']),
                  imageClassName: f.ageGatedImage
              })
            : (0, i.jsx)(u.Z, {
                  onAgree: this.handleAgree,
                  onDisagree: this.handleDisagree,
                  title: p.intl.string(p.t.ZmwvDQ),
                  description: t,
                  agreement: p.intl.string(p.t.wVq7ur),
                  disagreement: p.intl.string(p.t.hg1uxs)
              });
        return (0, i.jsx)(o.AdvancedScroller, {
            ref: this.scroller,
            className: f.scroller,
            children: (0, i.jsx)('div', {
                className: a()(this.props.className, f.wrapper),
                children: n
            })
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'scroller', l.createRef()),
            g(this, 'handleDisagree', () => {
                let { guild: e } = this.props;
                null != e && c.Z.nsfwReturnToSafety(e.id);
            }),
            g(this, 'handleAgree', () => {
                let { guild: e } = this.props;
                null != e && c.Z.nsfwAgree(e.id);
            });
    }
}
t.Z = s.ZP.connectStores([d.default], () => {
    var e;
    return { nsfwDisallowed: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1 };
})(C);
