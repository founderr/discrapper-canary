n.d(t, {
    k: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(925329),
    o = n(810568),
    c = n(168524),
    u = n(115530),
    d = n(689938),
    h = n(24705);
function p(e) {
    let { name: t, applicationId: n } = e,
        l = (0, c.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: o.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(r.Clickable, {
        onClick: l,
        className: a()(null != l && h.clickableGameName),
        children: (0, i.jsx)(u.Z, {
            className: h.gameName,
            children: t
        })
    });
}
function f(e) {
    var t, n;
    let { isStreaming: l, application: a, game: o } = e;
    let c = ((t = a), (n = o), null != t ? t.name : null != n ? n.name : d.Z.Messages.STATUS_UNKNOWN);
    return (0, i.jsxs)('div', {
        className: h.gameWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: h.gameIconWrapper,
                children: [
                    (0, i.jsx)(s.Z, {
                        className: h.gameIcon,
                        game: a,
                        pid: null == o ? void 0 : o.pid
                    }),
                    l
                        ? (0, i.jsx)(r.VideoIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: h.liveBadge
                          })
                        : null
                ]
            }),
            (0, i.jsx)('div', {
                className: h.info,
                children:
                    null != c
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(p, {
                                  name: c,
                                  applicationId: null == a ? void 0 : a.id
                              })
                          })
                        : null
            })
        ]
    });
}
