t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(110924),
    d = t(812206),
    c = t(554370),
    u = t(788983),
    s = t(214629),
    p = t(317381),
    m = t(781780),
    v = t(325749),
    f = t(981631),
    h = t(175911);
function x() {
    var e;
    let { embeddedActivity: n, channelId: t } = (0, a.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
                n = null == e ? void 0 : e.channelId;
            return {
                embeddedActivity: e,
                channelId: n
            };
        }),
        x = r.useRef(null),
        Z = (0, o.Z)(n);
    r.useEffect(() => {
        null != n
            ? clearTimeout(x.current)
            : null != Z &&
              null == n &&
              (x.current = window.setTimeout(() => {
                  (0, u.xv)(f.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [n, Z]);
    let I = (0, a.e7)([d.Z], () => {
            let e = null == n ? void 0 : n.applicationId;
            return null == e ? void 0 : d.Z.getApplication(e);
        }),
        _ = (0, s.PR)();
    return (0, i.jsx)('div', {
        className: h.container,
        children:
            null == n || null == I || null == t
                ? (0, i.jsx)(l.Spinner, { className: h.iframe })
                : (0, i.jsx)('div', {
                      className: h.loadedContentContainer,
                      children: (0, i.jsxs)('div', {
                          className: h.iframeAndHeaderContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: h.headerContainer,
                                  children: (0, i.jsx)(v.Z, {
                                      applicationId: I.id,
                                      channelId: t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: h.iframeContainer,
                                  children: (0, i.jsx)(m.Z, {
                                      channelId: t,
                                      guildId: null !== (e = n.guildId) && void 0 !== e ? e : void 0,
                                      embeddedActivity: n,
                                      application: I
                                  })
                              }),
                              _ ? (0, i.jsx)(c.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
