t.d(n, {
    Z: function () {
        return b;
    }
});
var i = t(200651),
    o = t(192379),
    a = t(442837),
    r = t(481060),
    c = t(110924),
    l = t(812206),
    d = t(554370),
    s = t(788983),
    u = t(214629),
    _ = t(317381),
    f = t(781780),
    p = t(325749),
    v = t(981631),
    h = t(466127);
function b() {
    var e;
    let { embeddedActivity: n, channelId: t } = (0, a.cj)([_.ZP], () => {
            let e = _.ZP.getCurrentEmbeddedActivity(),
                n = null == e ? void 0 : e.channelId;
            return {
                embeddedActivity: e,
                channelId: n
            };
        }),
        b = o.useRef(null),
        m = (0, c.Z)(n);
    o.useEffect(() => {
        null != n
            ? clearTimeout(b.current)
            : null != m &&
              null == n &&
              (b.current = window.setTimeout(() => {
                  (0, s.xv)(v.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [n, m]);
    let C = (0, a.e7)([l.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : l.Z.getApplication(e);
        }),
        x = (0, u.PR)();
    return (0, i.jsx)('div', {
        className: h.container,
        children:
            null == n || null == C || null == t
                ? (0, i.jsx)(r.Spinner, { className: h.iframe })
                : (0, i.jsx)('div', {
                      className: h.loadedContentContainer,
                      children: (0, i.jsxs)('div', {
                          className: h.iframeAndHeaderContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: h.headerContainer,
                                  children: (0, i.jsx)(p.Z, {
                                      applicationId: C.id,
                                      channelId: t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: h.iframeContainer,
                                  children: (0, i.jsx)(f.Z, {
                                      channelId: t,
                                      guildId: null !== (e = n.guildId) && void 0 !== e ? e : void 0,
                                      embeddedActivity: n,
                                      application: C
                                  })
                              }),
                              x ? (0, i.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
