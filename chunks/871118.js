n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(442837),
    s = n(481060),
    u = n(543882),
    c = n(592125),
    d = n(496675),
    h = n(981631),
    m = n(388032),
    x = n(445524);
function v(e) {
    let { isLoading: t, noText: n, previewText: l, className: a } = e;
    return (0, i.jsx)('div', {
        className: r()(x.emptyPreviewContainer, a),
        children: t
            ? (0, i.jsx)(s.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: x.emptyPreviewImage }),
                      n
                          ? null
                          : (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: x.emptyPreviewText,
                                children: null != l ? l : m.intl.string(m.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function f(e) {
    let { stream: t, className: n, noText: a = !1 } = e,
        r = (0, o.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        s = (0, o.e7)([d.Z], () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r)),
        { url: f, isLoading: p } = (0, o.cj)([u.Z], () => ({
            url: s ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
            isLoading: s && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
        })),
        g = l.useRef(p ? null : f);
    l.useEffect(() => {
        !p && (g.current = f);
    }, [f, p]);
    let C = null == f || p ? g.current : f;
    return null == C
        ? (0, i.jsx)(v, {
              className: n,
              isLoading: p,
              noText: a,
              previewText: s ? void 0 : m.intl.string(m.t.pgUTZG)
          })
        : (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)('img', {
                  src: C,
                  alt: '',
                  className: x.image
              })
          });
}
