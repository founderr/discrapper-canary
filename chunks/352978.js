n.d(t, {
    L: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    u = n(763520),
    d = n(153066),
    h = n(500829);
((l = i || (i = {})).CONTAIN = 'contain'), (l.COVER = 'cover');
let m = s.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: l, className: a, fit: m = 'contain', mirror: p = !1, paused: f = !1, streamPreviewURL: g, videoSpinnerContext: C, userId: x } = e,
        [v, _] = s.useState(!0),
        [I] = s.useState(() => new u.o('VideoStream'));
    s.useEffect(() => {
        !f && (v ? I.onSpinnerStarted() : null != t && I.trackSpinnerDuration(C, x, t));
    }, [v, f, t, I, C, x]);
    let E = s.useCallback(() => {
        _(!1);
    }, []);
    return (0, r.jsxs)('div', {
        className: o()(h.wrapper, i),
        children: [
            null != t &&
                (0, r.jsx)(l, {
                    className: o()(h.video, (0, d.l)(h, 'video', m), { [h.mirror]: p }, a),
                    streamId: t,
                    onResize: n,
                    onReady: E,
                    paused: f
                }),
            f
                ? null
                : (0, r.jsx)('div', {
                      className: o()(h.previewWrapper, { [h.loading]: v }),
                      children:
                          v &&
                          (0, r.jsxs)(s.Fragment, {
                              children: [
                                  null != g
                                      ? (0, r.jsx)('img', {
                                            src: g,
                                            alt: '',
                                            className: h.previewImage
                                        })
                                      : (0, r.jsx)('div', {
                                            className: h.emptyPreviewWrapper,
                                            children: (0, r.jsx)('div', { className: h.emptyPreview })
                                        }),
                                  (0, r.jsx)(c.Spinner, { className: h.spinner })
                              ]
                          })
                  })
        ]
    });
});
t.Z = m;
