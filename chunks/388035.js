n.d(t, {
    U: function () {
        return T;
    }
}),
    n(47120);
var i = n(735250),
    s = n(704215),
    a = n(481060),
    r = n(243778),
    l = n(970731),
    o = n(2818),
    c = n(921944),
    u = n(689938),
    d = n(413859),
    _ = n(235810);
let E = s.z.FOR_LATER_POPOUT_COACHMARK,
    I = () =>
        (0, i.jsx)('div', {
            className: d.imageContainer,
            children: (0, i.jsx)('img', {
                className: d.image,
                src: _,
                alt: ''
            })
        }),
    m = (e) =>
        (0, i.jsx)(l.ZP, {
            className: d.container,
            asset: (0, i.jsx)(I, {}),
            header: u.Z.Messages.FOR_LATER_COACHMARK_TITLE,
            content: u.Z.Messages.FOR_LATER_COACHMARK_BODY,
            buttonCTA: u.Z.Messages.GOT_IT,
            buttonProps: {
                color: a.ButtonColors.WHITE,
                innerClassName: d.primaryButton
            },
            onClick: () => e(c.L.USER_DISMISS),
            markAsDismissed: e,
            caretPosition: l.DF.TOP_RIGHT
        });
function T(e) {
    let { location: t, children: n } = e,
        { enabled: s, inInbox: l } = o.Z.useExperiment({ location: 'ForLaterCoachmarkWeb' }, { autoTrackExposure: !1 }),
        [c, u] = (0, r.US)(s && t === (l ? 'inbox-button' : 'bookmarks-button') ? [E] : [], void 0);
    return c !== E
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(a.Popout, {
              renderPopout: () => m(u),
              position: 'bottom',
              align: 'right',
              animation: a.Popout.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n
          });
}
