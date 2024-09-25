var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(63063),
    c = n(981631),
    d = n(689938),
    _ = n(326954);
let E = [
    {
        getQuestion: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
        getAnswer: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
    },
    {
        getQuestion: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
        getAnswer: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({ helpCenterUrl: u.Z.getArticleURL(c.BhN.GUILD_BOOSTING_FAQ) })
    },
    {
        getQuestion: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
        getAnswer: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
    },
    {
        getQuestion: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
        getAnswer: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
    }
];
function f(e) {
    let { className: t } = e,
        [n, r] = a.useState(null);
    return (0, i.jsxs)('div', {
        className: s()(_.wrapper, t),
        children: [
            (0, i.jsx)(l.Heading, {
                className: _.heading,
                variant: 'heading-xxl/bold',
                children: d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
            }),
            (0, i.jsx)('ul', {
                className: _.list,
                children: E.map((e, t) => {
                    let a = n === t;
                    return (0, i.jsxs)(
                        'div',
                        {
                            className: _.listItem,
                            children: [
                                (0, i.jsxs)(l.Clickable, {
                                    className: s()(_.questionWrapper, { [_.questionWrapperExpanded]: a }),
                                    onClick: () => r((e) => (e === t ? null : t)),
                                    tag: 'li',
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: _.question,
                                            variant: 'text-lg/normal',
                                            children: e.getQuestion()
                                        }),
                                        a
                                            ? (0, i.jsx)(l.MinusIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.questionIcon
                                              })
                                            : (0, i.jsx)(l.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.questionIcon
                                              })
                                    ]
                                }),
                                a &&
                                    (0, i.jsx)(l.Text, {
                                        className: _.answer,
                                        color: 'text-normal',
                                        variant: 'text-md/normal',
                                        children: e.getAnswer()
                                    })
                            ]
                        },
                        t
                    );
                })
            })
        ]
    });
}
t.Z = f;
