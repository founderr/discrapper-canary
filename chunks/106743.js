n.d(t, {
    K: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var o = n(261833),
    a = n(481060),
    s = n(184299),
    i = n(417575);
function l(e) {
    var t;
    let { quest: n, onClose: l } = e,
        c = (0, s.km)((e) => e.transcript),
        u = ((null == c ? void 0 : c.questId) === n.id && (null == c ? void 0 : c.fetchStatus) === s.iF.SUCCESS && null !== (t = c.text) && void 0 !== t ? t : '').split('\n');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: i.transcriptHeader,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'currentColor',
                        children: 'Transcript'
                    }),
                    (0, r.jsx)(a.Clickable, {
                        onClick: l,
                        className: i.transcriptBackBtn,
                        children: (0, r.jsx)(o.D, { color: 'currentColor' })
                    })
                ]
            }),
            (0, r.jsx)(a.ScrollerAuto, {
                style: {
                    height: '100%',
                    width: '100%'
                },
                fade: !0,
                children: (0, r.jsx)('div', {
                    className: i.transcriptBody,
                    children:
                        (null == c ? void 0 : c.fetchStatus) === s.iF.FETCHING
                            ? (0, r.jsx)('div', {
                                  className: i.transcriptBodySpinner,
                                  children: (0, r.jsx)(a.Spinner, { type: a.Spinner.Type.WANDERING_CUBES })
                              })
                            : (0, r.jsx)(a.Heading, {
                                  variant: 'heading-md/normal',
                                  color: 'text-muted',
                                  children: u.map((e, t) => (0, r.jsx)('p', { children: e }, t))
                              })
                })
            })
        ]
    });
}
