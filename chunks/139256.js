n.d(t, {
    $e: function () {
        return b;
    },
    $w: function () {
        return y;
    },
    Og: function () {
        return k;
    },
    ZY: function () {
        return B;
    },
    sc: function () {
        return j;
    },
    zs: function () {
        return G;
    }
}),
    n(627341);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(278074),
    u = n(481060),
    d = n(596454),
    _ = n(44315),
    E = n(377171),
    I = n(124347),
    m = n(695346),
    T = n(186523),
    f = n(553826),
    h = n(506071),
    N = n(203143),
    p = n(79390),
    C = n(839963),
    g = n(294608),
    S = n(65145),
    A = n(981631),
    x = n(689938),
    R = n(142822);
function O(e) {
    let { className: t, children: n } = e;
    return (0, s.jsx)('ul', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        className: t,
        children: n
    });
}
function v(e) {
    let { className: t, children: n } = e;
    return (0, s.jsx)('div', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        role: 'group',
        className: t,
        children: n
    });
}
function M(e) {
    let { className: t, children: n } = e,
        i = (0, u.useRadioGroup)({ orientation: 'vertical' });
    return (0, s.jsx)('div', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        ...i,
        className: t,
        children: n
    });
}
function L(e) {
    let { className: t, onClick: n, isSelected: i, isFirstAnswer: a, children: r } = e,
        { pollAnswerRef: l } = (0, S.dv)();
    return (0, s.jsx)(u.Clickable, {
        role: 'checkbox',
        className: o()(t, R.enabled),
        onClick: n,
        'aria-checked': i,
        ref: a ? l : void 0,
        children: r
    });
}
function Z(e) {
    let t,
        { className: n, children: i, onClick: a, isSelected: r, hasSelectedAnyAnswer: l, isFirstAnswer: c } = e;
    t = l ? (r ? 0 : -1) : c ? 0 : -1;
    let { pollAnswerRef: d } = (0, S.dv)();
    return (0, s.jsx)(u.Clickable, {
        role: 'radio',
        className: o()(n, R.enabled),
        onClick: a,
        'aria-checked': r,
        tabIndex: t,
        ref: c ? d : void 0,
        children: i
    });
}
function b(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: i, canTapAnswers: a, hasSelectedAnyAnswer: r, className: l, answerClassName: u, renderAnswerContent: d } = e,
        { ContainerComponent: _, answerElementType: E } = (0, c.EQ)({
            canTapAnswers: a,
            answersInteraction: n
        })
            .with({ answersInteraction: C.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: M,
                answerElementType: 1
            }))
            .with({ answersInteraction: C.Y7.CHECKBOXES }, () => ({
                ContainerComponent: v,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: C.Y7.LIST
                },
                () => ({
                    ContainerComponent: O,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: O,
                answerElementType: 0
            }));
    return (0, s.jsx)(_, {
        className: l,
        children: t.map((e, t) =>
            (0, s.jsx)(
                P,
                {
                    className: o()(R.__invalid_answer, u),
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: E,
                    answerTapAccessibilityLabel: i,
                    hasSelectedAnyAnswer: r,
                    children: d(e)
                },
                e.answerId
            )
        )
    });
}
function P(e) {
    let { className: t, answer: n, children: i, hasSelectedAnyAnswer: a, isFirstAnswer: l, elementType: c } = e,
        { channelId: u, messageId: d } = (0, g.pE)(),
        _ = (0, g.$B)(n.style),
        E = !0 === n.isSelected,
        I = r.useCallback(() => {
            N.Z.handlePollAnswerTapped({
                channelId: u,
                messageId: d,
                answerId: n.answerId
            });
        }, [u, d, n.answerId]);
    switch (c) {
        case 0:
        case 3:
            return (0, s.jsx)('li', {
                className: o()(t, _),
                children: i
            });
        case 1:
            return (0, s.jsx)(Z, {
                className: o()(t, _),
                onClick: I,
                isSelected: E,
                hasSelectedAnyAnswer: a,
                isFirstAnswer: l,
                children: i
            });
        case 2:
            return (0, s.jsx)(L, {
                className: o()(t, _),
                onClick: I,
                isSelected: E,
                isFirstAnswer: l,
                children: i
            });
    }
}
function D(e) {
    var t;
    let { attachment: n, className: i } = e,
        a = (0, h.n)(),
        r = m.QK.useSetting();
    return (0, s.jsx)(I.ZP, {
        className: i,
        imageClassName: R.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, p.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: r,
        shouldAnimate: a,
        shouldRenderAccessory: !1
    });
}
function j(e) {
    let { className: t, emoji: n } = e;
    return (0, s.jsx)(d.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function U(e, t) {
    return null != e
        ? (0, s.jsx)('div', {
              className: e,
              children: t
          })
        : (0, s.jsx)(s.Fragment, { children: t });
}
function y(e) {
    let { media: t, containerClassName: n, attachmentClassName: i, emojiClassName: a, fallback: r } = e,
        { message: l } = (0, g.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = l.attachments.find((e) => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return U(
                n,
                (0, s.jsx)(D, {
                    className: i,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? U(
              n,
              (0, s.jsx)(j, {
                  className: a,
                  emoji: t.emoji
              })
          )
        : void 0 !== r
          ? (0, s.jsx)(s.Fragment, { children: r })
          : null;
}
function B(e) {
    let { isVictor: t, isExpired: n, size: i, className: a } = e,
        { color: r, backgroundColor: l } = (0, c.EQ)({
            isVictor: t,
            isExpired: n
        })
            .with(
                {
                    isExpired: !0,
                    isVictor: !0
                },
                () => ({
                    color: E.Z.BUTTON_POSITIVE_BACKGROUND,
                    backgroundColor: (0, _.Lq)(A.Ilk.WHITE_500)
                })
            )
            .with(
                {
                    isExpired: !0,
                    isVictor: !1
                },
                () => ({
                    color: E.Z.ICON_PRIMARY,
                    backgroundColor: E.Z.BG_MOD_FAINT
                })
            )
            .otherwise(() => ({
                color: (0, _.Lq)(A.Ilk.BRAND_500),
                backgroundColor: (0, _.Lq)(A.Ilk.WHITE_500)
            }));
    return (0, s.jsx)(u.CircleCheckIcon, {
        size: 'custom',
        width: i,
        height: i,
        className: a,
        color: r,
        secondaryColor: l,
        'aria-hidden': !0
    });
}
function k(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = {
            width: n,
            height: n,
            background: R.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, s.jsx)(f.Z, {
              ...a,
              foreground: R.radioForeground,
              className: i
          })
        : (0, s.jsx)(T.Z, {
              ...a,
              className: i
          });
}
function G(e) {
    let { isSelected: t, size: n, className: i } = e,
        a = 0.85 * n;
    return (0, s.jsx)('div', {
        className: o()(R.checkbox, { [R.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, s.jsx)(u.CheckmarkLargeIcon, {
                size: 'custom',
                width: a,
                height: a,
                color: (0, _.Lq)(A.Ilk.WHITE_500)
            })
    });
}
((a = i || (i = {}))[(a.LIST_ITEM = 0)] = 'LIST_ITEM'), (a[(a.RADIO = 1)] = 'RADIO'), (a[(a.CHECKBOX = 2)] = 'CHECKBOX'), (a[(a.LIST_ITEM_BUTTON = 3)] = 'LIST_ITEM_BUTTON');
