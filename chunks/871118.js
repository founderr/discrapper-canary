n.d(t, {
    Z: function () {
        return v;
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
function E(e) {
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
function v(e) {
    let { stream: t, className: n, noText: i = !1 } = e,
        o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        v = (0, s.e7)([d.Z], () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o)),
        { url: _, isLoading: p } = (0, s.cj)([u.Z], () => ({
            url: v ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
            isLoading: v && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
        })),
        f = a.useRef(p ? null : _);
    a.useEffect(() => {
        !p && (f.current = _);
    }, [_, p]);
    let T = null == _ || p ? f.current : _;
    return null == T
        ? (0, l.jsx)(E, {
              className: n,
              isLoading: p,
              noText: i,
              previewText: v ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
          })
        : (0, l.jsx)('div', {
              className: r()(n, x.root),
              children: (0, l.jsx)('img', {
                  src: T,
                  alt: '',
                  className: x.image
              })
          });
}
