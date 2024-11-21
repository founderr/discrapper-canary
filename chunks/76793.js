n.d(t, {
    Z: function () {
        return N;
    },
    q: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(232567),
    o = n(700582),
    c = n(90641),
    d = n(615830),
    u = n(630759),
    m = n(931500),
    h = n(921157),
    g = n(171368),
    p = n(594174),
    x = n(51144),
    S = n(388032),
    T = n(8007),
    C = n(113207);
function E(e) {
    let { userId: t, count: n } = e,
        c = (0, r.e7)([p.default], () => p.default.getUser(t)),
        d = x.ZP.getFormattedName(c),
        m = s.useCallback(() => {
            (0, u.Zn)(t);
        }, [t]),
        h = s.useCallback(() => (0, g.openUserProfileModal)({ userId: t }), [t]);
    return (
        s.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: T.section,
            children: [
                null != c &&
                    (0, i.jsx)(o.Z, {
                        className: T.avatar,
                        user: c,
                        size: l.AvatarSizes.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: T.text,
                    children: [
                        (0, i.jsx)(l.Clickable, {
                            className: T.username,
                            onClick: h,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: d
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: S.intl.format(S.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(l.Clickable, {
                    onClick: m,
                    className: T.sectionIconContainer,
                    children: (0, i.jsx)(l.TrashIcon, { size: 'xs' })
                })
            ]
        })
    );
}
function _(e) {
    let { className: t, userId: n, verification: r, index: a } = e,
        o = (0, u.bo)(r.timestamp),
        c = s.useCallback(() => {
            (0, u.ZU)(n, r.verifiedKey);
        }, [r.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: T.text,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: S.intl.format(S.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(l.Clickable, {
                className: T.icon,
                onClick: c,
                children: (0, i.jsx)(l.XSmallIcon, {
                    size: 'md',
                    color: l.tokens.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function f(e) {
    let { userId: t } = e,
        n = (0, m._)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E, {
                userId: t,
                count: n.length
            }),
            n.map((e, r) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(_, {
                                className: T.row,
                                userId: t,
                                index: r,
                                verification: e
                            }),
                            r !== n.length - 1 && (0, i.jsx)('div', { className: T.divider })
                        ]
                    },
                    ''.concat(r, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
function I(e) {
    let { userIds: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(l.FormItem, {
                      className: C.marginBottom20,
                      children: [
                          (0, i.jsx)(l.FormTitle, {
                              tag: l.FormTitleTags.H5,
                              className: C.marginBottom8,
                              children: S.intl.string(S.t['5b3FND'])
                          }),
                          (0, i.jsx)(l.FormText, {
                              type: l.FormTextTypes.DESCRIPTION,
                              children: S.intl.format(S.t['7w9ymJ'], { helpArticle: (0, u.pL)() })
                          })
                      ]
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: T.item,
                              children: (0, i.jsx)(f, { userId: e })
                          },
                          e
                      )
                  )
              ]
          });
}
function N() {
    let e = (0, r.e7)([d.Z], () => d.Z.getPersistentCodesEnabled()),
        t = (0, h.s)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.FormSection, {
                tag: l.FormTitleTags.H1,
                title: S.intl.string(S.t['9Q/PQk']),
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        className: C.marginBottom20,
                        children: S.intl.format(S.t['8IwQfH'], { helpArticle: (0, u.uV)() })
                    }),
                    (0, i.jsxs)(l.FormItem, {
                        children: [
                            (0, i.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H5,
                                className: C.marginBottom8,
                                children: S.intl.string(S.t['2Ap8sr'])
                            }),
                            (0, i.jsx)(l.FormSwitch, {
                                hideBorder: 0 === t.length,
                                value: e,
                                note: S.intl.format(S.t['7CXSaG'], { helpArticle: (0, u.aZ)() }),
                                onChange: c.Z.updatePersistentCodesEnabled,
                                children: S.intl.string(S.t['opi/XF'])
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(I, { userIds: t })
        ]
    });
}
