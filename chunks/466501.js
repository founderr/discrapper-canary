i.r(t),
    i.d(t, {
        default: function () {
            return g;
        }
    });
var n = i(200651),
    o = i(192379),
    l = i(481060),
    a = i(651711),
    r = i(434404),
    s = i(202858),
    c = i(587431),
    d = i(400842),
    u = i(271267),
    _ = i(981631),
    E = i(388032),
    M = i(767312),
    b = i(653904);
function A() {
    return (0, n.jsxs)('div', {
        className: M.eligibilityHeader,
        children: [
            (0, n.jsx)(l.Heading, {
                className: M.eligibilityHeaderText,
                variant: 'heading-lg/extrabold',
                color: 'header-primary',
                children: E.intl.string(E.t['3s47iI'])
            }),
            (0, n.jsx)('img', {
                className: M.eligibilityHeaderImage,
                src: b,
                alt: ''
            }),
            (0, n.jsx)(l.ModalCloseButton, {
                className: M.eligibilityHeaderCloseButton,
                onClick: () => {
                    (0, l.closeModal)(u.Q);
                }
            })
        ]
    });
}
function h(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: E, guildId: b, onEligibilityBecameStale: A } = e,
        h = o.useMemo(
            () => ({
                onEligibilityBecameStale: A,
                sortedByIneligible: !0,
                actions: {
                    onEnableMFAClick: s.ZP.enableMFA,
                    onRequireModeratorMFAClick: () => {
                        (0, l.closeModal)(u.Q), r.Z.open(b, _.pNK.SAFETY, void 0, _.KsC.SAFETY_PERMISSIONS);
                    }
                }
            }),
            [b, A]
        ),
        g = (0, a.Z)(t, h);
    return null != E
        ? (0, n.jsx)('div', {
              className: M.paddedContainer,
              children: (0, n.jsx)(c.Z, { children: E.message })
          })
        : null == g || i
          ? (0, n.jsx)('div', {
                className: M.paddedContainer,
                children: (0, n.jsx)(l.Spinner, {})
            })
          : (0, n.jsx)('div', {
                children: g.map((e, t) =>
                    (0, n.jsxs)(
                        o.Fragment,
                        {
                            children: [
                                (0, n.jsx)(d.d, {
                                    name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                                    description: e.description,
                                    checked: e.checked,
                                    actionLabel: e.actionLabel,
                                    actionHandler: e.actionHandler
                                }),
                                t < g.length - 1 ? (0, n.jsx)(l.FormDivider, {}) : null
                            ]
                        },
                        e.checkedLabel
                    )
                )
            });
}
function g(e) {
    let { eligibility: t, eligibilityLoading: i, eligibilityError: o, refreshEligibility: a, guildId: r, transitionState: s } = e;
    return (0, n.jsxs)(l.ModalRoot, {
        className: M.eligibilityModal,
        size: l.ModalSize.MEDIUM,
        transitionState: s,
        children: [
            (0, n.jsx)(A, {}),
            (0, n.jsx)(l.ModalContent, {
                children: (0, n.jsx)(h, {
                    eligibility: t,
                    eligibilityLoading: i,
                    eligibilityError: o,
                    guildId: r,
                    onEligibilityBecameStale: a
                })
            })
        ]
    });
}
