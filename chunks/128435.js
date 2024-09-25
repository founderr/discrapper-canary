n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(627341);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(278074),
    u = n(263568),
    c = n(481060),
    d = n(203143),
    _ = n(365206),
    E = n(294608),
    f = n(65145),
    h = n(920557),
    p = n(113749);
function m(e) {
    let { media: t } = e;
    return (0, i.jsx)(c.Heading, {
        variant: 'text-md/medium',
        className: p.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function I(e) {
    let { children: t, onClick: n, variant: r = 'text-sm/medium', color: a = 'interactive-active', className: o, buttonRef: l } = e;
    return (0, i.jsx)(c.Button, {
        onClick: n,
        className: s()(p.__invalid_textButton, o),
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        buttonRef: l,
        children: (0, i.jsx)(c.Text, {
            variant: r,
            color: a,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function T(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: r, isInteractive: a, className: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(p.detailsText, o),
        children: [
            a
                ? (0, i.jsx)(I, {
                      onClick: r,
                      variant: 'text-sm/normal',
                      color: 'none',
                      className: s()(p.detailsTextButton, p.interactive),
                      children: t
                  })
                : (0, i.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      scaleFontToUserSetting: !0,
                      children: t
                  }),
            null != n &&
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    scaleFontToUserSetting: !0,
                    children: n
                })
        ]
    });
}
function g(e, t) {
    let n = {
        answers: t.answers,
        answersInteraction: t.answersInteraction,
        answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
        isExpired: t.isExpired,
        canTapAnswers: t.canTapAnswers,
        hasSelectedAnyAnswer: t.hasSelectedAnswer,
        myAvatarUrl: t.myAvatarUrl,
        canShowVoteCounts: t.canShowVoteCounts
    };
    return (0, l.EQ)(t.layoutType)
        .with(u.C.DEFAULT, () => (0, i.jsx)(h.K, { ...n }))
        .with(u.C.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(_.Z, { ...n }))
        .otherwise(() => null);
}
function S(e) {
    let { action: t, channelId: n, messageId: r, isInteractive: o, className: l } = e,
        { actionButtonRef: u, manageFocusOnAction: _ } = (0, f.dv)(),
        E = a.useCallback(async () => {
            if ((null == t ? void 0 : t.type) != null)
                await d.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: r,
                    type: t.type
                }),
                    _(t.type);
        }, [null == t ? void 0 : t.type, n, r, _]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, i.jsx)(
                c.Button,
                {
                    buttonRef: u,
                    onClick: E,
                    disabled: !t.enabled,
                    color: 'secondaryButton' === t.presentation ? c.Button.Colors.CUSTOM : c.Button.Colors.BRAND,
                    size: c.Button.Sizes.SMALL,
                    className: s()(l, p.buttonPresentation, 'secondaryButton' === t.presentation && p.secondaryButtonPresentation),
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: t.label
                    })
                },
                t.presentation
            )
          : 'textButton' === t.presentation
            ? (0, i.jsx)(I, {
                  buttonRef: u,
                  onClick: E,
                  className: l,
                  children: t.label
              })
            : (0, i.jsx)(T, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: E,
                  isInteractive: o,
                  className: l
              });
}
function A(e) {
    let { message: t, poll: n, className: r } = e,
        a = (0, E.$B)(n.containerStyle),
        o = g(t, n);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: s()(p.container, a, r),
              children: (0, i.jsxs)(c.HeadingLevel, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: p.header,
                          children: [
                              (0, i.jsx)(m, { media: n.question }),
                              null != n.promptLabel &&
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: p.prompt,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel
                                  })
                          ]
                      }),
                      o,
                      (0, i.jsxs)('div', {
                          className: p.bottomBar,
                          children: [
                              (0, i.jsx)(S, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: p.secondaryAction,
                                  isInteractive: n.isInteractive
                              }),
                              (0, i.jsx)(S, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: p.tertiaryAction
                              }),
                              (0, i.jsx)(S, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.primaryAction
                              })
                          ]
                      })
                  ]
              })
          });
}
function v(e) {
    let { message: t, poll: n, className: r } = e;
    return (0, i.jsx)(E.XL, {
        message: t,
        poll: n,
        children: (0, i.jsx)(f.Pk, {
            children: (0, i.jsx)(A, {
                message: t,
                poll: n,
                className: r
            })
        })
    });
}
