n.d(t, {
    Z: function () {
        return p;
    },
    j: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(689938),
    l = n(413224);
let u = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    c = (e, t, n) => 'https://'.concat(e, '/embed/').concat(t, '?locale=').concat(n),
    d = 400,
    _ = 300,
    E = 6,
    f = ['PlayStation'],
    h = (e, t) => {
        let { host: n, pathname: r } = t,
            i = [];
        switch ((null != r && (i = r.split('/')), e)) {
            case 'PlayStation':
                if (null == n || !u.includes(n) || 2 !== i.length) break;
                return {
                    embedUrl: c(n, i[1], s.Z.getLocale()),
                    style: {
                        width: d,
                        height: _,
                        borderRadius: E
                    }
                };
        }
        return null;
    };
function p(e) {
    var t;
    let n = e.embed.url,
        i = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
    if (null == n || null == i) return null;
    let s = null;
    try {
        s = o.parse(n, !0);
    } catch (e) {
        return null;
    }
    let u = h(i, s);
    return null == u
        ? null
        : (0, r.jsx)('iframe', {
              src: u.embedUrl,
              className: a()(l.embedIFrame, e.className),
              style: u.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
