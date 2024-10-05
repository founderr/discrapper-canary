n.d(t, {
    o: function () {
        return C;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    r = n(497505),
    l = n(266843),
    u = n(341907),
    d = n(46140),
    c = n(689938),
    m = n(424621),
    E = n(87181);
function x() {
    return (0, s.jsx)('div', {
        className: m.buttonContainer,
        children: (0, s.jsx)(o.Button, {
            className: m.button,
            color: o.ButtonColors.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, r.jn.QUESTS_EMBED);
            },
            children: c.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
        })
    });
}
function C() {
    let { containerRef: e, size: t } = (0, l.h)();
    return (0, s.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: i()(m.container, {
            [m.wide]: 'lg' === t,
            [m.tall]: 'lg' !== t
        }),
        children: [
            (0, s.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: c.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: m.__invalid_mobileWebCopy,
                        children: c.Z.Messages.QUESTS_EMBED_INVALID_BODY_3
                    }),
                    (0, s.jsx)(x, {})
                ]
            }),
            (0, s.jsx)('div', {
                className: m.imgContainer,
                children: (0, s.jsx)('img', {
                    src: E,
                    alt: '',
                    className: m.missingQuestImage
                })
            })
        ]
    });
}
