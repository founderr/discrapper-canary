n.d(t, {
    N: function () {
        return E;
    }
});
var r = n(653041);
var i = n(735250),
    a = n(470079),
    o = n(711873),
    s = n.n(o),
    l = n(134432);
function u(e, t, n) {
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
let c = /url\(['"](.*)['"]\)/,
    d = (e) => {
        if (null == e || '' === e || 'none' === e) return null;
        let t = e.match(c);
        return null != t ? t[1] : e;
    };
function _(e) {
    return null == e || '' === e || 'none' === e ? 'none' : 'url('.concat(e, ')');
}
function E(e) {
    class t extends a.Component {
        componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: r } = this.state,
                { style: i } = this.props,
                a = null != i ? d(i.backgroundImage) : null;
            null == a && a !== n
                ? this.setState({
                      loaded: !0,
                      cached: a
                  })
                : this.cachedURLs.indexOf(a) >= 0
                  ? this.setState({
                        loaded: !0,
                        cached: a
                    })
                  : null != a && a !== n && !0 === r && this.setState({ loaded: !1 }, () => this.preloadURL(a));
        }
        preloadURL(e) {
            this.canceller && this.canceller(),
                (this.canceller = (0, l.po)(e, (t) => {
                    this.canceller && (this.canceller = null),
                        !t &&
                            (this.cachedURLs.push(e),
                            this.setState({
                                cached: e,
                                loaded: !0
                            }));
                    let { onBackgroundImageLoad: n } = this.props;
                    n && n(t, e);
                }));
        }
        componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
        }
        render() {
            let { style: t, onBackgroundImageLoad: n, ...r } = this.props,
                { loaded: a, cached: o } = this.state;
            return (
                !a &&
                    null != t &&
                    (t = {
                        ...t,
                        backgroundImage: _(o)
                    }),
                (0, i.jsx)(e, {
                    style: t,
                    ...r
                })
            );
        }
        constructor(e) {
            super(e), u(this, 'cachedURLs', []), u(this, 'canceller', null);
            let { style: t } = e,
                n = null != t ? d(t.backgroundImage) : null;
            (this.cachedURLs = [n]),
                (this.state = {
                    cached: n,
                    loaded: !0
                });
        }
    }
    return s()(t, e), t;
}
