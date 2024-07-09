var s = n(735250);
n(470079);
var o = n(754700), r = n(481060), a = n(113434), i = n(497505), l = n(644646), c = n(613087), d = n(472144), u = n(569379), p = n(985444);
t.Z = e => {
    let {
            quest: t,
            progressBarRef: n,
            isExpanded: x,
            shouldShowConsoleTaskDetails: m
        } = e, {percentComplete: g} = (0, a.Rf)(t, m ? o.T.CONSOLE : void 0), C = (0, u.eQ)(t), f = (0, u.vf)(t, x), _ = x ? 'expanded' : 'collapsed';
    return (0, s.jsxs)('div', {
        className: p.questProgressWrapper,
        children: [
            (0, s.jsx)(c.l7, {
                inState: _,
                id: 'progress-bar',
                ref: n,
                children: e => (0, s.jsx)(d.Z, {
                    ref: e,
                    quest: t,
                    percentComplete: g,
                    size: 42,
                    strokeWidth: 3,
                    children: (0, s.jsx)(l.Z, {
                        className: p.questProgressRewardTile,
                        quest: t,
                        questContent: i.jn.QUEST_BAR_V2,
                        autoplay: !1
                    })
                })
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(c.l7, {
                        inState: _,
                        id: 'progress-title',
                        children: e => (0, s.jsx)(r.Text, {
                            ref: e,
                            className: p.questProgressHint,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: C
                        })
                    }),
                    (0, s.jsx)(c.l7, {
                        inState: _,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: e => (0, s.jsx)(r.Text, {
                            ref: e,
                            className: p.questProgressHint,
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
