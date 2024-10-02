n.d(t, {
    $e: function () {
        return M;
    },
    $w: function () {
        return G;
    },
    Og: function () {
        return B;
    },
    ZY: function () {
        return k;
    },
    sc: function () {
        return w;
    },
    zs: function () {
        return F;
    }
});
var r,
    i = n(627341);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(278074),
    c = n(481060),
    d = n(596454),
    _ = n(44315),
    E = n(377171),
    f = n(124347),
    h = n(695346),
    p = n(186523),
    m = n(553826),
    I = n(506071),
    T = n(203143),
    g = n(79390),
    S = n(839963),
    A = n(294608),
    v = n(65145),
    N = n(981631),
    O = n(689938),
    R = n(142822);
function C(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)('ul', {
        'aria-label': O.Z.Messages.POLL_OPTIONS_ARIA,
        className: t,
        children: n
    });
}
function y(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)('div', {
        'aria-label': O.Z.Messages.POLL_OPTIONS_ARIA,
        role: 'group',
        className: t,
        children: n
    });
}
function L(e) {
    let { className: t, children: n } = e,
        r = (0, c.useRadioGroup)({ orientation: 'vertical' });
    return (0, a.jsx)('div', {
        'aria-label': O.Z.Messages.POLL_OPTIONS_ARIA,
        ...r,
        className: t,
        children: n
    });
}
function b(e) {
    let { className: t, onClick: n, isSelected: r, isFirstAnswer: i, children: o } = e,
        { pollAnswerRef: s } = (0, v.dv)();
    return (0, a.jsx)(c.Clickable, {
        role: 'checkbox',
        className: l()(t, R.enabled),
        onClick: n,
        'aria-checked': r,
        ref: i ? s : void 0,
        children: o
    });
}
function D(e) {
    let t,
        { className: n, children: r, onClick: i, isSelected: o, hasSelectedAnyAnswer: s, isFirstAnswer: u } = e;
    t = s ? (o ? 0 : -1) : u ? 0 : -1;
    let { pollAnswerRef: d } = (0, v.dv)();
    return (0, a.jsx)(c.Clickable, {
        role: 'radio',
        className: l()(n, R.enabled),
        onClick: i,
        'aria-checked': o,
        tabIndex: t,
        ref: u ? d : void 0,
        children: r
    });
}
function M(e) {
    let { answers: t, answersInteraction: n, answerTapAccessibilityLabel: r, canTapAnswers: i, hasSelectedAnyAnswer: o, className: s, answerClassName: c, renderAnswerContent: d } = e,
        { ContainerComponent: _, answerElementType: E } = (0, u.EQ)({
            canTapAnswers: i,
            answersInteraction: n
        })
            .with({ answersInteraction: S.Y7.RADIO_BUTTONS }, () => ({
                ContainerComponent: L,
                answerElementType: 1
            }))
            .with({ answersInteraction: S.Y7.CHECKBOXES }, () => ({
                ContainerComponent: y,
                answerElementType: 2
            }))
            .with(
                {
                    canTapAnswers: !0,
                    answersInteraction: S.Y7.LIST
                },
                () => ({
                    ContainerComponent: C,
                    answerElementType: 3
                })
            )
            .otherwise(() => ({
                ContainerComponent: C,
                answerElementType: 0
            }));
    return (0, a.jsx)(_, {
        className: s,
        children: t.map((e, t) =>
            (0, a.jsx)(
                P,
                {
                    className: l()(R.__invalid_answer, c),
                    answer: e,
                    isFirstAnswer: 0 === t,
                    elementType: E,
                    answerTapAccessibilityLabel: r,
                    hasSelectedAnyAnswer: o,
                    children: d(e)
                },
                e.answerId
            )
        )
    });
}
function P(e) {
    let { className: t, answer: n, children: r, hasSelectedAnyAnswer: i, isFirstAnswer: s, elementType: u } = e,
        { channelId: c, messageId: d } = (0, A.pE)(),
        _ = (0, A.$B)(n.style),
        E = !0 === n.isSelected,
        f = o.useCallback(() => {
            T.Z.handlePollAnswerTapped({
                channelId: c,
                messageId: d,
                answerId: n.answerId
            });
        }, [c, d, n.answerId]);
    switch (u) {
        case 0:
        case 3:
            return (0, a.jsx)('li', {
                className: l()(t, _),
                children: r
            });
        case 1:
            return (0, a.jsx)(D, {
                className: l()(t, _),
                onClick: f,
                isSelected: E,
                hasSelectedAnyAnswer: i,
                isFirstAnswer: s,
                children: r
            });
        case 2:
            return (0, a.jsx)(b, {
                className: l()(t, _),
                onClick: f,
                isSelected: E,
                isFirstAnswer: s,
                children: r
            });
    }
}
function U(e) {
    var t;
    let { attachment: n, className: r } = e,
        i = (0, I.n)(),
        o = h.QK.useSetting(),
        s = 212;
    return (0, a.jsx)(f.ZP, {
        className: r,
        imageClassName: R.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, g.fw)(n.filename),
        responsive: !0,
        width: s,
        height: s,
        autoPlay: o,
        shouldAnimate: i,
        shouldRenderAccessory: !1
    });
}
function w(e) {
    let { className: t, emoji: n } = e;
    return (0, a.jsx)(d.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function x(e, t) {
    return null != e
        ? (0, a.jsx)('div', {
              className: e,
              children: t
          })
        : (0, a.jsx)(a.Fragment, { children: t });
}
function G(e) {
    let { media: t, containerClassName: n, attachmentClassName: r, emojiClassName: i, fallback: o } = e,
        { message: s } = (0, A.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = s.attachments.find((e) => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return x(
                n,
                (0, a.jsx)(U, {
                    className: r,
                    attachment: e
                })
            );
    }
    return null != t.emoji
        ? x(
              n,
              (0, a.jsx)(w, {
                  className: i,
                  emoji: t.emoji
              })
          )
        : void 0 !== o
          ? (0, a.jsx)(a.Fragment, { children: o })
          : null;
}
function k(e) {
    let { isVictor: t, isExpired: n, size: r, className: i } = e,
        { color: o, backgroundColor: s } = (0, u.EQ)({
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
                    backgroundColor: (0, _.Lq)(N.Ilk.WHITE_500)
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
                color: (0, _.Lq)(N.Ilk.BRAND_500),
                backgroundColor: (0, _.Lq)(N.Ilk.WHITE_500)
            }));
    return (0, a.jsx)(c.CircleCheckIcon, {
        size: 'custom',
        width: r,
        height: r,
        className: i,
        color: o,
        secondaryColor: s,
        'aria-hidden': !0
    });
}
function B(e) {
    let { isSelected: t, size: n, className: r } = e,
        i = {
            width: n,
            height: n,
            background: R.radioBackground,
            'aria-hidden': !0
        };
    return t
        ? (0, a.jsx)(m.Z, {
              ...i,
              foreground: R.radioForeground,
              className: r
          })
        : (0, a.jsx)(p.Z, {
              ...i,
              className: r
          });
}
function F(e) {
    let { isSelected: t, size: n, className: r } = e,
        i = 0.85 * n;
    return (0, a.jsx)('div', {
        className: l()(R.checkbox, { [R.checkboxSelected]: t }, r),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children:
            t &&
            (0, a.jsx)(c.CheckmarkLargeIcon, {
                size: 'custom',
                width: i,
                height: i,
                color: (0, _.Lq)(N.Ilk.WHITE_500)
            })
    });
}
!(function (e) {
    (e[(e.LIST_ITEM = 0)] = 'LIST_ITEM'), (e[(e.RADIO = 1)] = 'RADIO'), (e[(e.CHECKBOX = 2)] = 'CHECKBOX'), (e[(e.LIST_ITEM_BUTTON = 3)] = 'LIST_ITEM_BUTTON');
})(r || (r = {}));
