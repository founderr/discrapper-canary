n.d(t, {
    Z: function () {
        return E;
    }
});
var a = n(735250),
    l = n(470079),
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
    let { isLoading: t, noText: n, previewText: l, className: i } = e;
    return (0, a.jsx)('div', {
        className: r()(x.emptyPreviewContainer, i),
        children: t
            ? (0, a.jsx)(o.Spinner, {})
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)('div', { className: x.emptyPreviewImage }),
                      n
                          ? null
                          : (0, a.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: x.emptyPreviewText,
                                children: null != l ? l : m.Z.Messages.STREAM_NO_PREVIEW
                            })
                  ]
              })
    });
}
function E(e) {
    let { stream: t, className: n, noText: i = !1 } = e,
        r = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        o = (0, s.e7)([d.Z], () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r)),
        { url: E, isLoading: _ } = (0, s.cj)([u.Z], () => ({
            url: o ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
            isLoading: o && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
        })),
        f = l.useRef(_ ? null : E);
    l.useEffect(() => {
        !_ && (f.current = E);
    }, [E, _]);
    let p = null == E || _ ? f.current : E;
    return null == p
        ? (0, a.jsx)(v, {
              className: n,
              isLoading: _,
              noText: i,
              previewText: o ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
          })
        : (0, a.jsx)('div', {
              className: n,
              children: (0, a.jsx)('img', {
                  src: p,
                  alt: '',
                  className: x.image
              })
          });
}
