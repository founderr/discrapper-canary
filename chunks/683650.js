n.d(t, {
    o: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(497505),
    l = n(266843),
    u = n(341907),
    c = n(46140),
    d = n(689938),
    _ = n(424621),
    E = n(87181);
function f() {
    let e = () => {
        (0, u.navigateToQuestHome)(c.dr.EMBED_DESKTOP, s.jn.QUESTS_EMBED);
    };
    return (0, r.jsx)('div', {
        className: _.buttonContainer,
        children: (0, r.jsx)(o.Button, {
            className: _.button,
            color: o.ButtonColors.BRAND,
            onClick: e,
            children: d.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
        })
    });
}
function h() {
    let { containerRef: e, size: t } = (0, l.h)();
    return (0, r.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: a()(_.container, {
            [_.wide]: 'lg' === t,
            [_.tall]: 'lg' !== t
        }),
        children: [
            (0, r.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: _.__invalid_mobileWebCopy,
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_BODY_3
                    }),
                    (0, r.jsx)(f, {})
                ]
            }),
            (0, r.jsx)('div', {
                className: _.imgContainer,
                children: (0, r.jsx)('img', {
                    src: E,
                    alt: '',
                    className: _.missingQuestImage
                })
            })
        ]
    });
}
