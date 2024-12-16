n.d(e, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(442837),
    s = n(481060),
    u = n(543882),
    c = n(592125),
    d = n(496675),
    h = n(981631),
    f = n(388032),
    v = n(680809);
function p(t) {
    let { isLoading: e, noText: n, previewText: l, className: o } = t;
    return (0, i.jsx)('div', {
        className: r()(v.emptyPreviewContainer, o),
        children: e
            ? (0, i.jsx)(s.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: v.emptyPreviewImage }),
                      n
                          ? null
                          : (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: v.emptyPreviewText,
                                children: null != l ? l : f.intl.string(f.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function x(t) {
    let { stream: e, className: n, noText: o = !1 } = t,
        r = (0, a.e7)([c.Z], () => c.Z.getBasicChannel(e.channelId)),
        s = (0, a.e7)([d.Z], () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r)),
        { url: x, isLoading: g } = (0, a.cj)([u.Z], () => ({
            url: s ? u.Z.getPreviewURL(e.guildId, e.channelId, e.ownerId) : null,
            isLoading: s && u.Z.getIsPreviewLoading(e.guildId, e.channelId, e.ownerId)
        })),
        m = l.useRef(g ? null : x);
    l.useEffect(() => {
        !g && (m.current = x);
    }, [x, g]);
    let w = null == x || g ? m.current : x;
    return null == w
        ? (0, i.jsx)(p, {
              className: n,
              isLoading: g,
              noText: o,
              previewText: s ? void 0 : f.intl.string(f.t.pgUTZG)
          })
        : (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)('img', {
                  src: w,
                  alt: '',
                  className: v.image
              })
          });
}
