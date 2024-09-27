n.d(t, {
    Z: function () {
        return E;
    }
});
var l = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(543882),
    c = n(592125),
    d = n(496675),
    h = n(981631),
    m = n(689938),
    x = n(445524);
function v(e) {
    let { isLoading: t, noText: n, previewText: a, className: i } = e;
    return (0, l.jsx)('div', {
        className: r()(x.emptyPreviewContainer, i),
        children: t
            ? (0, l.jsx)(o.Spinner, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)('div', { className: x.emptyPreviewImage }),
                      n
                          ? null
                          : (0, l.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: x.emptyPreviewText,
                                children: null != a ? a : m.Z.Messages.STREAM_NO_PREVIEW
                            })
                  ]
              })
    });
}
function E(e) {
    let { stream: t, className: n, noText: i = !1 } = e,
        o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        E = (0, s.e7)([d.Z], () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o)),
        { url: _, isLoading: p } = (0, s.cj)([u.Z], () => ({
            url: E ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
            isLoading: E && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
        })),
        T = a.useRef(p ? null : _);
    a.useEffect(() => {
        !p && (T.current = _);
    }, [_, p]);
    let f = null == _ || p ? T.current : _;
    return null == f
        ? (0, l.jsx)(v, {
              className: n,
              isLoading: p,
              noText: i,
              previewText: E ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
          })
        : (0, l.jsx)('div', {
              className: r()(n, x.root),
              children: (0, l.jsx)('img', {
                  src: f,
                  alt: '',
                  className: x.image
              })
          });
}
