n.d(t, {
    K: function () {
        return c;
    }
});
var r = n(200651),
    o = n(192379),
    a = n(261833),
    s = n(481060),
    l = n(184299),
    i = n(417575);
function c(e) {
    var t;
    let { quest: n, onClose: c } = e,
        u = (0, l.km)((e) => e.transcript),
        d = (null == u ? void 0 : u.questId) === n.id && (null == u ? void 0 : u.fetchStatus) === l.iF.SUCCESS && null !== (t = u.text) && void 0 !== t ? t : '',
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
                className: i.transcriptHeader,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(s.Clickable, {
                        onClick: c,
                        className: i.transcriptBackBtn,
                        children: (0, r.jsx)(a.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(s.ScrollerAuto, {
                className: i.transcriptScroller,
                fade: !0,
                children: (0, r.jsx)('div', {
                    className: i.transcriptBody,
                    children:
                        (null == u ? void 0 : u.fetchStatus) === l.iF.FETCHING
                            ? (0, r.jsx)('div', {
                                  className: i.transcriptBodySpinner,
                                  children: (0, r.jsx)(s.Spinner, { type: s.Spinner.Type.WANDERING_CUBES })
                              })
                            : (0, r.jsx)(s.Heading, {
                                  variant: 'heading-md/normal',
                                  color: 'text-muted',
                                  children: m.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                              })
                })
            })
        ]
    });
}
