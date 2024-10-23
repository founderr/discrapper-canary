var o = n(200651);
n(192379);
var s = n(481060),
    r = n(113434),
    a = n(497505),
    l = n(644646),
    i = n(613087),
    c = n(472144),
    d = n(46140),
    u = n(183004);
t.Z = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, taskDetails: x, activeScreen: C } = e,
        { percentComplete: g } = x,
        _ = (0, r.eQ)(n),
        f = (0, r.vf)(n, m, C);
    return (0, o.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, o.jsx)(i.l7, {
                inState: t,
                id: 'progress-bar',
                ref: p,
                children: (e) =>
                    (0, o.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: g,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, o.jsx)(l.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: a.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, o.jsxs)('div', {
                className: u.questProgressCopy,
                children: [
                    (0, o.jsx)(i.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, o.jsx)(s.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: _
                            })
                    }),
                    (0, o.jsx)(i.l7, {
                        inState: t,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: (e) =>
                            (0, o.jsx)(s.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: f
                            })
                    })
                ]
            })
        ]
    });
};
