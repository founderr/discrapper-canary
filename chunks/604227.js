t.d(s, {
    Z: function () {
        return _;
    }
}),
    t(47120),
    t(757143),
    t(653041);
var n = t(735250);
t(470079);
var a = t(525654),
    i = t.n(a),
    r = t(481060),
    o = t(579806),
    l = t(304761),
    c = t(320161),
    d = t(689938),
    u = t(844185);
function _() {
    var e, s, t, a, _, E;
    let T = window.GLOBAL_ENV.RELEASE_CHANNEL,
        I = '324349',
        S = ((e = '1ed535ec0d07769bc156a2e2767e83afcacdac66'), e.substring(0, 7)),
        N = null === o.Z || void 0 === o.Z ? void 0 : o.Z.remoteApp.getVersion(),
        m = null === o.Z || void 0 === o.Z ? void 0 : null === (s = (t = o.Z.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(t),
        C = null === o.Z || void 0 === o.Z ? void 0 : null === (a = (_ = o.Z.remoteApp).getAppArch) || void 0 === a ? void 0 : a.call(_),
        g = null === (E = l.C.getCurrentBuildOverride().overrides) || void 0 === E ? void 0 : E.discord_web,
        A = (function () {
            var e;
            let s = null === i() || void 0 === i() ? void 0 : null === (e = i().os) || void 0 === e ? void 0 : e.toString();
            if (null == s || null == o.Z) return null;
            let t = o.Z.os.release,
                [n, a, r] = t.split('.').map((e) => parseInt(e, 10));
            return s.includes('Windows 10') && void 0 !== r && r >= 22000 && (s = s.replace('Windows 10', 'Windows 11')), s.includes('OS X 10.15.7') && void 0 !== n && n >= 20 && (s = 'macOS '.concat(n - 9)), ''.concat(s, ' (').concat(t, ')');
        })(),
        h = [T, I, '('.concat(S, ')')];
    return (
        null != N && (h.push('Host '.concat(N)), null != C && h.push(C.toLowerCase()), null != m && h.push('('.concat(m, ')'))),
        h.push('Build Override: '.concat(null != g ? g.id : 'N/A')),
        null != A && h.push(A),
        (0, n.jsx)(c.Z, {
            copyValue: h.join(' '),
            text: d.Z.Messages.COPY_VERSION,
            'aria-label': !1,
            children: (e) =>
                (0, n.jsx)(r.Clickable, {
                    ...e,
                    'aria-label': d.Z.Messages.COPY_VERSION,
                    className: u.clickable,
                    children: (0, n.jsxs)('div', {
                        className: u.info,
                        children: [
                            (0, n.jsxs)(r.Text, {
                                tag: 'span',
                                className: u.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    T,
                                    ' ',
                                    I,
                                    ' ',
                                    (0, n.jsxs)('span', {
                                        className: u.versionHash,
                                        children: ['(', S, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != N
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsxs)(r.Text, {
                                              tag: 'span',
                                              className: u.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  N,
                                                  ' ',
                                                  null != C
                                                      ? (0, n.jsxs)('span', {
                                                            className: u.appArch,
                                                            children: [C.toLowerCase(), ' ']
                                                        })
                                                      : null,
                                                  null != m
                                                      ? (0, n.jsxs)('span', {
                                                            children: ['(', m, ')']
                                                        })
                                                      : null
                                              ]
                                          }),
                                          ' '
                                      ]
                                  })
                                : null,
                            null != A
                                ? (0, n.jsx)(r.Text, {
                                      tag: 'span',
                                      className: u.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: A
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
