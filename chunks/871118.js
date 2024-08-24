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
    u = t(543882),
    c = t(592125),
    d = t(496675),
    _ = t(981631),
    m = t(689938),
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
                                children: null != l ? l : m.Z.Messages.STREAM_NO_PREVIEW
                            })
                  ]
              })
    });
}
function h(e) {
    let { stream: n, className: t, noText: i = !1 } = e,
        o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(n.channelId)),
        h = (0, s.e7)([d.Z], () => null != o && d.Z.canBasicChannel(_.S7T.CONNECT, o)),
        { url: x, isLoading: I } = (0, s.cj)([u.Z], () => ({
            url: h ? u.Z.getPreviewURL(n.guildId, n.channelId, n.ownerId) : null,
            isLoading: h && u.Z.getIsPreviewLoading(n.guildId, n.channelId, n.ownerId)
        })),
        N = l.useRef(I ? null : x);
    l.useEffect(() => {
        !I && (N.current = x);
    }, [x, I]);
    let C = null == x || I ? N.current : x;
    return null == C
        ? (0, a.jsx)(T, {
              className: t,
              isLoading: I,
              noText: i,
              previewText: h ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
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
