t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(442837),
    s = t(40330),
    c = t(95398),
    u = t(169525),
    d = t(546432),
    m = t(944486),
    f = t(388032),
    p = t(116803);
function x(e) {
    let { file: n, name: t, size: r, spoiler: x } = e,
        h = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        v = i.useMemo(() => (null != n.contentType && -1 !== n.contentType.indexOf('/') ? n.contentType.split('/') : ['unknown', 'unknown']), [n.contentType]),
        [C, _] = i.useState(x),
        g = i.useMemo(
            () => () =>
                (0, l.jsx)(d.mz, {
                    mimeType: v,
                    downloadURL: n.url,
                    showDownload: !0,
                    showImageAppPicker: !1,
                    isVisualMediaType: !1,
                    channelId: h
                }),
            [n, v, h]
        ),
        I = (e) =>
            (0, l.jsx)(s.Z, {
                className: a()({ [p.fileHidden]: e }),
                url: n.url,
                fileName: null != t ? t : f.intl.string(f.t.GnuJ5u),
                fileSize: null != r ? r : 0,
                renderAdjacentContent: g
            });
    return (0, l.jsx)('div', {
        className: p.fileDisplayContainer,
        children: x
            ? (0, l.jsx)(c.Z, {
                  type: c.Z.Types.ATTACHMENT,
                  reason: u.wk.SPOILER,
                  obscured: C,
                  onToggleObscurity: () => _((e) => !e),
                  children: (e) => I(e)
              })
            : I(!1)
    });
}
