n.d(t, {
    K: function () {
        return c;
    }
});
var r = n(200651),
    o = n(192379),
    a = n(261833),
    i = n(481060),
    s = n(184299),
    l = n(417575);
function c(e) {
    var t;
    let { quest: n, onClose: c } = e,
        u = (0, s.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === n.id && (null == u ? void 0 : u.fetchStatus) === s.iF.SUCCESS && null !== (t = u.text) && void 0 !== t ? t : '',
        m = o.useMemo(
            () =>
                d
                    .split('\n')
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [d]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: l.transcriptHeader,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(i.Clickable, {
                        onClick: c,
                        className: l.transcriptBackBtn,
                        children: (0, r.jsx)(a.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(i.ScrollerAuto, {
                className: l.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)('div', {
                    className: l.transcriptBody,
                    children:
                        (null == u ? void 0 : u.fetchStatus) === s.iF.FETCHING
                            ? (0, r.jsx)('div', {
                                  className: l.transcriptBodySpinner,
                                  children: (0, r.jsx)(i.Spinner, { type: i.Spinner.Type.WANDERING_CUBES })
                              })
                            : (0, r.jsx)(i.Heading, {
                                  variant: 'heading-md/normal',
                                  color: 'text-muted',
                                  children: m.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                              })
                })
            })
        ]
    });
}
