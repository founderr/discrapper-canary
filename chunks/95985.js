var o = n(735250);
n(470079);
var s = n(481060),
    r = n(497505),
    a = n(644646),
    l = n(613087),
    i = n(472144),
    c = n(569379),
    d = n(46140),
    u = n(183004);
t.Z = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, taskDetails: x, activeScreen: _ } = e,
        { percentComplete: C } = x,
        g = (0, c.eQ)(n),
        f = (0, c.vf)(n, m, _);
    return (0, o.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, o.jsx)(l.l7, {
                inState: t,
                id: 'progress-bar',
                ref: p,
                children: (e) =>
                    (0, o.jsx)(i.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: C,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, o.jsx)(a.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: r.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, o.jsxs)('div', {
                className: u.questProgressCopy,
                children: [
                    (0, o.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, o.jsx)(s.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: g
                            })
                    }),
                    (0, o.jsx)(l.l7, {
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
