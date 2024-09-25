n.d(t, {
    U: function () {
        return m;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(704215),
    o = n(481060),
    s = n(243778),
    l = n(970731),
    u = n(2818),
    c = n(921944),
    d = n(689938),
    _ = n(413859),
    E = n(235810);
let f = a.z.FOR_LATER_POPOUT_COACHMARK,
    h = () =>
        (0, i.jsx)('div', {
            className: _.imageContainer,
            children: (0, i.jsx)('img', {
                className: _.image,
                src: E,
                alt: ''
            })
        }),
    p = (e) =>
        (0, i.jsx)(l.ZP, {
            className: _.container,
            asset: (0, i.jsx)(h, {}),
            header: d.Z.Messages.FOR_LATER_COACHMARK_TITLE,
            content: d.Z.Messages.FOR_LATER_COACHMARK_BODY,
            buttonCTA: d.Z.Messages.GOT_IT,
            buttonProps: {
                color: o.ButtonColors.WHITE,
                innerClassName: _.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: l.DF.TOP_RIGHT
        });
function m(e) {
    let { location: t, children: n } = e,
        { enabled: r, inInbox: a } = u.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        l = t === (a ? 'inbox-button' : 'bookmarks-button'),
        c = r && l ? [f] : [],
        [d, _] = (0, s.US)(c, void 0);
    return d !== f
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(o.Popout, {
              renderPopout: () => p(_),
              position: 'bottom',
              align: 'right',
              animation: o.Popout.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
