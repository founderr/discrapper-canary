n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(757143),
    n(653041);
var i = n(200651);
n(192379);
var s = n(525654),
    r = n.n(s),
    l = n(481060),
    a = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(388032),
    u = n(244270);
function m() {
    var e, t, n, s, m, g;
    let h = window.GLOBAL_ENV.RELEASE_CHANNEL,
        p = '351128',
        x = ((e = '54f423dd8156d48a6a316c1bd4ea832ec22bb9c9'), e.substring(0, 7)),
        T = null === a.Z || void 0 === a.Z ? void 0 : a.Z.remoteApp.getVersion(),
        S = null === a.Z || void 0 === a.Z ? void 0 : null === (t = (n = a.Z.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(n),
        _ = null === a.Z || void 0 === a.Z ? void 0 : null === (s = (m = a.Z.remoteApp).getAppArch) || void 0 === s ? void 0 : s.call(m),
        E = null === (g = o.C.getCurrentBuildOverride().overrides) || void 0 === g ? void 0 : g.discord_web,
        C = (function () {
            var e;
            let t = null === r() || void 0 === r() ? void 0 : null === (e = r().os) || void 0 === e ? void 0 : e.toString();
            if (null == t || null == a.Z) return null;
            let n = a.Z.os.release,
                [i, s, l] = n.split('.').map((e) => parseInt(e, 10));
            return t.includes('Windows 10') && void 0 !== l && l >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        f = [h, p, '('.concat(x, ')')];
    return (
        null != T && (f.push('Host '.concat(T)), null != _ && f.push(_.toLowerCase()), null != S && f.push('('.concat(S, ')'))),
        f.push('Build Override: '.concat(null != E ? E.id : 'N/A')),
        null != C && f.push(C),
        (0, i.jsx)(c.Z, {
            copyValue: f.join(' '),
            text: d.intl.string(d.t['9Al4QU']),
            'aria-label': !1,
            children: (e) =>
                (0, i.jsx)(l.Clickable, {
                    ...e,
                    'aria-label': d.intl.string(d.t['9Al4QU']),
                    className: u.clickable,
                    children: (0, i.jsxs)('div', {
                        className: u.info,
                        children: [
                            (0, i.jsxs)(l.Text, {
                                tag: 'span',
                                className: u.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    h,
                                    ' ',
                                    p,
                                    ' ',
                                    (0, i.jsxs)('span', {
                                        className: u.versionHash,
                                        children: ['(', x, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != T
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(l.Text, {
                                              tag: 'span',
                                              className: u.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  T,
                                                  ' ',
                                                  null != _
                                                      ? (0, i.jsxs)('span', {
                                                            className: u.appArch,
                                                            children: [_.toLowerCase(), ' ']
                                                        })
                                                      : null,
                                                  null != S
                                                      ? (0, i.jsxs)('span', {
                                                            children: ['(', S, ')']
                                                        })
                                                      : null
                                              ]
                                          }),
                                          ' '
                                      ]
                                  })
                                : null,
                            null != C
                                ? (0, i.jsx)(l.Text, {
                                      tag: 'span',
                                      className: u.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: C
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
