n.d(t, {
    o: function () {
        return x;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    r = n(497505),
    o = n(266843),
    u = n(341907),
    d = n(46140),
    c = n(689938),
    E = n(424621),
    m = n(87181);
function C() {
    return (0, s.jsx)('div', {
        className: E.buttonContainer,
        children: (0, s.jsx)(l.Button, {
            className: E.button,
            color: l.ButtonColors.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, r.jn.QUESTS_EMBED);
            },
            children: c.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
        })
    });
}
function x() {
    let { containerRef: e, size: t } = (0, o.h)();
    return (0, s.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: i()(E.container, {
            [E.wide]: 'lg' === t,
            [E.tall]: 'lg' !== t
        }),
        children: [
            (0, s.jsxs)('div', {
                className: E.contentContainer,
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: c.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: E.__invalid_mobileWebCopy,
                        children: c.Z.Messages.QUESTS_EMBED_INVALID_BODY_3
                    }),
                    (0, s.jsx)(C, {})
                ]
            }),
            (0, s.jsx)('div', {
                className: E.imgContainer,
                children: (0, s.jsx)('img', {
                    src: m,
                    alt: '',
                    className: E.missingQuestImage
                })
            })
        ]
    });
}
