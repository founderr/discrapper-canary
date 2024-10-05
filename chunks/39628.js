n(47120);
var i,
    s = n(735250),
    a = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(846519),
    c = n(600164),
    u = n(486296);
function d(e, t, n) {
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
function h(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, s.jsx)('div', {
        className: r()({
            [u.bar]: n,
            [u.barInMultiLine]: !n
        }),
        children: (0, s.jsx)('div', {
            className: u.barInner,
            style: { width: ''.concat(100 * Math.max(Math.min(t, 1), 0), '%') }
        })
    });
}
function p(e) {
    return String(e).padStart(2, '0');
}
function m(e) {
    let { time: t, padLargestUnit: n } = e,
        i = Math.floor(t) % 60,
        s = Math.floor(t / 60) % 60,
        a = Math.floor(t / 3600);
    return 0 === a ? (n ? ''.concat(p(s), ':').concat(p(i)) : ''.concat(s, ':').concat(p(i))) : n ? ''.concat(p(a), ':').concat(p(s), ':').concat(p(i)) : ''.concat(a, ':').concat(p(s), ':').concat(p(i));
}
class _ extends (i = a.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: i, singleLine: a = !1 } = this.props,
            { now: l } = this.state,
            o = (t - e) / 1000,
            d = Math.max(Math.min((l - e) / 1000, o), 0);
        return a
            ? (0, s.jsxs)('div', {
                  className: r()(n, { [u.themed]: i }, u.singleLineContainer),
                  children: [
                      (0, s.jsx)('div', {
                          className: u.textLeftInSingleLine,
                          children: m({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, s.jsx)('div', {
                          className: u.barInSingleLine,
                          children: (0, s.jsx)(h, {
                              percentage: d / o,
                              isSingleLine: !0
                          })
                      }),
                      (0, s.jsx)('div', {
                          className: u.textRight,
                          children: m({
                              time: o,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, s.jsxs)('div', {
                  className: r()(n, { [u.themed]: i }),
                  children: [
                      (0, s.jsx)(h, {
                          percentage: d / o,
                          isSingleLine: !1
                      }),
                      (0, s.jsxs)(c.Z, {
                          children: [
                              (0, s.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: m({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, s.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: m({
                                      time: o,
                                      padLargestUnit: !1
                                  })
                              })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), d(this, 'timer', new o.Xp()), d(this, 'state', { now: Date.now() });
    }
}
d(_, 'defaultProps', { themed: !1 }), (t.Z = _);
