t.d(n, {
    Z: function () {
        return h;
    }
});
var a = t(735250),
    l = t(470079),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(481060),
    c = t(543882),
    u = t(592125),
    d = t(496675),
    m = t(981631),
    _ = t(689938),
    E = t(375387);
function T(e) {
    let { isLoading: n, noText: t, previewText: l, className: i } = e;
    return (0, a.jsx)('div', {
        className: r()(E.emptyPreviewContainer, i),
        children: n
            ? (0, a.jsx)(o.Spinner, {})
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)('div', { className: E.emptyPreviewImage }),
                      t
                          ? null
                          : (0, a.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: E.emptyPreviewText,
                                children: null != l ? l : _.Z.Messages.STREAM_NO_PREVIEW
                            })
                  ]
              })
    });
}
function h(e) {
    let { stream: n, className: t, noText: i = !1 } = e,
        o = (0, s.e7)([u.Z], () => u.Z.getBasicChannel(n.channelId)),
        h = (0, s.e7)([d.Z], () => null != o && d.Z.canBasicChannel(m.S7T.CONNECT, o)),
        { url: x, isLoading: N } = (0, s.cj)([c.Z], () => ({
            url: h ? c.Z.getPreviewURL(n.guildId, n.channelId, n.ownerId) : null,
            isLoading: h && c.Z.getIsPreviewLoading(n.guildId, n.channelId, n.ownerId)
        })),
        I = l.useRef(N ? null : x);
    l.useEffect(() => {
        !N && (I.current = x);
    }, [x, N]);
    let C = null == x || N ? I.current : x;
    return null == C
        ? (0, a.jsx)(T, {
              className: t,
              isLoading: N,
              noText: i,
              previewText: h ? void 0 : _.Z.Messages.STREAM_NO_PERMISSION_CTA
          })
        : (0, a.jsx)('div', {
              className: r()(t, E.root),
              children: (0, a.jsx)('img', {
                  src: C,
                  alt: '',
                  className: E.image
              })
          });
}
