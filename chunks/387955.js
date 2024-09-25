n.d(t, {
    Z: function () {
        return m;
    }
});
var s = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    o = n(63063),
    l = n(773446),
    u = n(572264),
    d = n(981631),
    c = n(689938),
    E = n(923112),
    _ = n(849399);
function m(e) {
    let { user: t } = e;
    return (0, s.jsxs)('div', {
        className: E.infoContainer,
        children: [
            (0, s.jsx)('img', {
                className: E.infoPicture,
                alt: '',
                src: _
            }),
            (0, s.jsx)(r.Heading, {
                className: E.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({ n: t.tag })
            }),
            (0, s.jsx)(r.Text, {
                className: E.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
            }),
            (0, s.jsx)(r.Text, {
                className: E.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({ helpdeskArticle: o.Z.getArticleURL(d.BhN.POMELO_FAQ) })
            }),
            (0, s.jsxs)('div', {
                className: a()([E.infoItem, E.infoItemSpacing]),
                children: [
                    (0, s.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, s.jsx)(r.FriendsIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: a()([E.infoItem, E.infoItemSpacing]),
                children: [
                    (0, s.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, s.jsx)(l.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: E.infoItem,
                children: [
                    (0, s.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, s.jsx)(u.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({ username: t.tag })
                    })
                ]
            })
        ]
    });
}
