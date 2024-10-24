n.d(t, {
    L: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    a = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    c = n(481060),
    u = n(763520),
    d = n(153066),
    h = n(500829);
((s = i || (i = {})).CONTAIN = 'contain'), (s.COVER = 'cover');
let p = l.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: s, className: r, fit: p = 'contain', mirror: m = !1, paused: _ = !1, streamPreviewURL: f, videoSpinnerContext: E, userId: g } = e,
        [C, I] = l.useState(!0),
        [T] = l.useState(() => new u.o('VideoStream'));
    l.useEffect(() => {
        !_ && (C ? T.onSpinnerStarted() : null != t && T.trackSpinnerDuration(E, g, t));
    }, [C, _, t, T, E, g]);
    let x = l.useCallback(() => {
        I(!1);
    }, []);
    return (0, a.jsxs)('div', {
        className: o()(h.wrapper, i),
        children: [
            null != t &&
                (0, a.jsx)(s, {
                    className: o()(h.video, (0, d.l)(h, 'video', p), { [h.mirror]: m }, r),
                    streamId: t,
                    onResize: n,
                    onReady: x,
                    paused: _
                }),
            _
                ? null
                : (0, a.jsx)('div', {
                      className: o()(h.previewWrapper, { [h.loading]: C }),
                      children:
                          C &&
                          (0, a.jsxs)(l.Fragment, {
                              children: [
                                  null != f
                                      ? (0, a.jsx)('img', {
                                            src: f,
                                            alt: '',
                                            className: h.previewImage
                                        })
                                      : (0, a.jsx)('div', {
                                            className: h.emptyPreviewWrapper,
                                            children: (0, a.jsx)('div', { className: h.emptyPreview })
                                        }),
                                  (0, a.jsx)(c.Spinner, { className: h.spinner })
                              ]
                          })
                  })
        ]
    });
});
t.Z = p;
