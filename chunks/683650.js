n.d(t, {
    o: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    r = n(481060),
    l = n(497505),
    o = n(471985),
    c = n(266843),
    u = n(341907),
    d = n(46140),
    _ = n(689938),
    E = n(695623),
    I = n(87181);
function m() {
    let e = (0, o.Z)(d.dr.EMBED_DESKTOP);
    return (0, i.jsx)('div', {
        className: E.buttonContainer,
        children: (0, i.jsx)(r.Button, {
            className: E.button,
            color: r.ButtonColors.BRAND,
            onClick: () => {
                (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, l.jn.QUESTS_EMBED);
            },
            children: e ? _.Z.Messages.QUESTS : _.Z.Messages.GIFT_INVENTORY
        })
    });
}
function T() {
    let { containerRef: e, size: t } = (0, c.h)();
    return (0, i.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: a()(E.container, {
            [E.wide]: 'lg' === t,
            [E.tall]: 'lg' !== t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: E.contentContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: _.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: E.__invalid_mobileWebCopy,
                        children: _.Z.Messages.QUESTS_EMBED_INVALID_BODY_2
                    }),
                    (0, i.jsx)(m, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: E.imgContainer,
                children: (0, i.jsx)('img', {
                    src: I,
                    alt: '',
                    className: E.missingQuestImage
                })
            })
        ]
    });
}
