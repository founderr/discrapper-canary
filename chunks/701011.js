i.d(n, {
    Z: function () {
        return h;
    }
});
var t = i(200651),
    a = i(192379),
    l = i(442837),
    r = i(481060),
    d = i(110924),
    o = i(812206),
    c = i(788983),
    u = i(317381),
    s = i(781780),
    v = i(325749),
    m = i(981631),
    f = i(466127);
function h() {
    var e;
    let { embeddedActivity: n, channelId: i } = (0, l.cj)([u.ZP], () => {
            let e = u.ZP.getCurrentEmbeddedActivity(),
                n = null == e ? void 0 : e.channelId;
            return {
                embeddedActivity: e,
                channelId: n
            };
        }),
        h = (0, d.Z)(n);
    a.useEffect(() => {
        null != h && null == n && (0, c.xv)(m.KJ3.ACTIVITY_POPOUT);
    }, [n, h]);
    let p = (0, l.e7)([o.Z], () => {
        let e = null == n ? void 0 : n.applicationId;
        return null == e ? void 0 : o.Z.getApplication(e);
    });
    return (0, t.jsx)('div', {
        className: f.container,
        children:
            null == n || null == p || null == i
                ? (0, t.jsx)(r.Spinner, { className: f.iframe })
                : (0, t.jsx)('div', {
                      className: f.loadedContentContainer,
                      children: (0, t.jsxs)('div', {
                          className: f.iframeAndHeaderContainer,
                          children: [
                              (0, t.jsx)('div', {
                                  className: f.headerContainer,
                                  children: (0, t.jsx)(v.Z, {
                                      applicationId: p.id,
                                      channelId: i
                                  })
                              }),
                              (0, t.jsx)('div', {
                                  className: f.iframeContainer,
                                  children: (0, t.jsx)(s.Z, {
                                      channelId: i,
                                      guildId: null !== (e = n.guildId) && void 0 !== e ? e : void 0,
                                      embeddedActivity: n,
                                      application: p
                                  })
                              })
                          ]
                      })
                  })
    });
}
