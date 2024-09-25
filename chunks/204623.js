n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(525654),
    s = n.n(o),
    l = n(470716),
    u = n(442837),
    c = n(946188),
    d = n(481060),
    _ = n(596454),
    E = n(406128),
    f = n(451478),
    h = n(176354),
    p = n(63063),
    m = n(358085),
    I = n(998502),
    T = n(151851),
    g = n(981631),
    S = n(689938);
function A(e, t, n) {
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
function v() {
    let e = window.require('electron').remote.getCurrentWindow();
    (I.ZP.minimize = () => e.minimize()),
        (I.ZP.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (I.ZP.close = () => e.close());
}
let N = u.ZP.connectStores([f.Z], () => ({ focused: f.Z.isFocused() }))(T.Z);
class O extends a.PureComponent {
    getPlatform() {
        var e;
        let t = null === (e = s().os) || void 0 === e ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        v();
    }
    render() {
        let e = (0, i.jsx)('div', {
                children: (0, i.jsxs)('p', {
                    children: [
                        S.Z.Messages.VERY_OUT_OF_DATE_DESCRIPTION,
                        ' ',
                        (0, i.jsx)(_.Z, {
                            src: h.ZP.getURL(c.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }),
            t = (0, i.jsx)(d.Button, {
                size: d.ButtonSizes.LARGE,
                onClick: this.handleDownload,
                children: S.Z.Messages.DOWNLOAD
            });
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(l.ql, { children: (0, i.jsx)('html', { className: (0, d.getThemeClass)(g.BRd.DARK) }) }),
                (0, i.jsx)(N, { type: this.getPlatform() }),
                (0, i.jsx)(E.Z, {
                    title: S.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: e,
                    action: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleDownload', () => {
                window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? p.Z.getArticleURL(g.BhN.CORRUPT_INSTALLATION) : g.EYA.DOWNLOAD);
            });
    }
}
