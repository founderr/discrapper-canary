l.d(t, {
    Z: function () {
        return c;
    },
    j: function () {
        return m;
    }
});
var n = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(729594),
    s = l(388032),
    o = l(112197);
let d = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    u = (e, t, l) => 'https://'.concat(e, '/embed/').concat(t, '?locale=').concat(l),
    m = ['PlayStation'],
    h = (e, t) => {
        let { host: l, pathname: n } = t,
            i = [];
        switch ((null != n && (i = n.split('/')), e)) {
            case 'PlayStation':
                if (null == l || !d.includes(l) || 2 !== i.length) break;
                return {
                    embedUrl: u(l, i[1], s.intl.currentLocale),
                    style: {
                        width: 400,
                        height: 300,
                        borderRadius: 6
                    }
                };
        }
        return null;
    };
function c(e) {
    var t;
    let l = e.embed.url,
        i = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
    if (null == l || null == i) return null;
    let s = null;
    try {
        s = a.parse(l, !0);
    } catch (e) {
        return null;
    }
    let d = h(i, s);
    return null == d
        ? null
        : (0, n.jsx)('iframe', {
              src: d.embedUrl,
              className: r()(o.embedIFrame, e.className),
              style: d.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
