n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(525654),
    s = n.n(a),
    o = n(765053),
    l = n(442837),
    u = n(336317),
    c = n(481060),
    d = n(596454),
    f = n(406128),
    _ = n(451478),
    p = n(176354),
    h = n(63063),
    m = n(358085),
    g = n(998502),
    E = n(151851),
    v = n(981631),
    I = n(388032);
let b = l.ZP.connectStores([_.Z], () => ({ focused: _.Z.isFocused() }))(E.Z);
class T extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null === (e = s().os) || void 0 === e ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        !(function () {
            let e = window.require('electron').remote.getCurrentWindow();
            (g.ZP.minimize = () => e.minimize()),
                (g.ZP.maximize = () => {
                    e.isMaximized() ? e.unmaximize() : e.maximize();
                }),
                (g.ZP.close = () => e.close());
        })();
    }
    render() {
        let e = (0, r.jsx)('div', {
                children: (0, r.jsxs)('p', {
                    children: [
                        I.intl.string(I.t['4tRjHB']),
                        ' ',
                        (0, r.jsx)(d.Z, {
                            src: p.ZP.getURL(u.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }),
            t = (0, r.jsx)(c.Button, {
                size: c.ButtonSizes.LARGE,
                onClick: this.handleDownload,
                children: I.intl.string(I.t['1WjMbG'])
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(o.ql, { children: (0, r.jsx)('html', { className: (0, c.getThemeClass)(v.BRd.DARK) }) }),
                (0, r.jsx)(b, { type: this.getPlatform() }),
                (0, r.jsx)(f.Z, {
                    title: I.intl.string(I.t['3h+n+/']),
                    note: e,
                    action: t
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'handleDownload'),
            (r = () => {
                window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.Z.getArticleURL(v.BhN.CORRUPT_INSTALLATION) : v.EYA.DOWNLOAD);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
