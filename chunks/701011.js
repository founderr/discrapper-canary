t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(442837),
    o = t(481060),
    l = t(110924),
    c = t(812206),
    d = t(788983),
    u = t(317381),
    s = t(781780),
    p = t(325749),
    v = t(981631),
    m = t(965988);
function f() {
    var e;
    let { embeddedActivity: n, channelId: t } = (0, r.cj)([u.ZP], () => {
            let e = u.ZP.getCurrentEmbeddedActivity(),
                n = null == e ? void 0 : e.channelId;
            return {
                embeddedActivity: e,
                channelId: n
            };
        }),
        f = (0, l.Z)(n);
    a.useEffect(() => {
        null != f && null == n && (0, d.xv)(v.KJ3.ACTIVITY_POPOUT);
    }, [n, f]);
    let h = (0, r.e7)([c.Z], () => {
        let e = null == n ? void 0 : n.applicationId;
        return null == e ? void 0 : c.Z.getApplication(e);
    });
    return (0, i.jsx)('div', {
        className: m.container,
        children:
            null == n || null == h || null == t
                ? (0, i.jsx)(o.Spinner, { className: m.iframe })
                : (0, i.jsx)('div', {
                      className: m.loadedContentContainer,
                      children: (0, i.jsxs)('div', {
                          className: m.iframeAndHeaderContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: m.headerContainer,
                                  children: (0, i.jsx)(p.Z, {
                                      applicationId: h.id,
                                      channelId: t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: m.iframeContainer,
                                  children: (0, i.jsx)(s.Z, {
                                      channelId: t,
                                      guildId: null !== (e = n.guildId) && void 0 !== e ? e : void 0,
                                      embeddedActivity: n,
                                      application: h
                                  })
                              })
                          ]
                      })
                  })
    });
}
