t.d(n, {
    K: function () {
        return c;
    }
});
var r = t(200651),
    o = t(192379),
    a = t(261833),
    s = t(481060),
    i = t(184299),
    l = t(417575);
function c(e) {
    var n;
    let { quest: t, onClose: c } = e,
        u = (0, i.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === t.id && (null == u ? void 0 : u.fetchStatus) === i.iF.SUCCESS && null !== (n = u.text) && void 0 !== n ? n : '',
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
                    (0, r.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(s.Clickable, {
                        onClick: c,
                        className: l.transcriptBackBtn,
                        children: (0, r.jsx)(a.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(s.ScrollerAuto, {
                className: l.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)('div', {
                    className: l.transcriptBody,
                    children:
                        (null == u ? void 0 : u.fetchStatus) === i.iF.FETCHING
                            ? (0, r.jsx)('div', {
                                  className: l.transcriptBodySpinner,
                                  children: (0, r.jsx)(s.Spinner, { type: s.Spinner.Type.WANDERING_CUBES })
                              })
                            : (0, r.jsx)(s.Heading, {
                                  variant: 'heading-md/normal',
                                  color: 'text-muted',
                                  children: m.map((e, n) => (0, r.jsx)('p', { children: e }, n))
                              })
                })
            })
        ]
    });
}
