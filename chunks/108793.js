n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var s = n(735250),
    i = n(470079),
    a = n(526629),
    r = n(481060),
    o = n(230711),
    l = n(687158),
    u = n(63063),
    d = n(51144),
    c = n(544508),
    E = n(801461),
    _ = n(981631),
    m = n(689938),
    g = n(923112);
function f(e) {
    let { userRef: t, usernameSuggestionLoading: n = !1, oneClickFlow: f = !1, ...I } = e,
        { user: S, editState: T, onClose: h } = I,
        N = (0, l.ZP)(S.id),
        O = (function (e, t, n) {
            switch (e) {
                case E.Wq.EDIT_USERNAME:
                    return {
                        header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                    };
                case E.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
                        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                    };
                case E.Wq.PREVIEW:
                    return {
                        header: m.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({ displayName: t }),
                        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                            onClick: () => {
                                n(), o.Z.open(_.oAB.ACCOUNT);
                            }
                        })
                    };
                case E.Wq.SUGGESTION:
                    return {
                        header: m.Z.Messages.POMELO_ACTION_LABEL_OCF,
                        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
                        link: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({ helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                    };
            }
        })(T, d.ZP.getName(S), h),
        [M, C] = (0, r.useSpring)(() => ({
            opacity: 0,
            y: 10
        }));
    return (
        i.useEffect(() => {
            C({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0
                }
            });
        }, [C, T]),
        (0, s.jsxs)('div', {
            className: g.displayNameContainer,
            children: [
                (0, s.jsxs)(a.animated.div, {
                    style: {
                        opacity: M.opacity,
                        y: M.y
                    },
                    children: [
                        (0, s.jsx)(r.Heading, {
                            className: g.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: O.header
                        }),
                        (0, s.jsxs)('div', {
                            className: g.subtitle,
                            children: [
                                (0, s.jsx)(r.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: O.subtitle
                                }),
                                null != O.link &&
                                    (0, s.jsx)(r.Text, {
                                        className: g.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: O.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(c.Z, {
                    ...I,
                    displayProfile: N,
                    ref: t,
                    usernameSuggestionLoading: n,
                    oneClickFlow: f
                })
            ]
        })
    );
}
