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
    g = n(921157),
    h = n(171368),
    p = n(594174),
    x = n(51144),
    T = n(388032),
    S = n(47074),
    _ = n(232186);
function E(e) {
    let { userId: t, count: n } = e,
        c = (0, r.e7)([p.default], () => p.default.getUser(t)),
        d = x.ZP.getFormattedName(c),
        m = s.useCallback(() => {
            (0, u.Zn)(t);
        }, [t]),
        g = s.useCallback(() => (0, h.openUserProfileModal)({ userId: t }), [t]);
    return (
        s.useEffect(() => {
            (0, a.PR)(t);
        }, [t]),
        (0, i.jsxs)('div', {
            className: S.section,
            children: [
                null != c &&
                    (0, i.jsx)(o.Z, {
                        className: S.avatar,
                        user: c,
                        size: l.AvatarSizes.SIZE_40
                    }),
                (0, i.jsxs)('div', {
                    className: S.text,
                    children: [
                        (0, i.jsx)(l.Clickable, {
                            className: S.username,
                            onClick: g,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: d
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: T.intl.format(T.t['/MBjYG'], { count: n })
                        })
                    ]
                }),
                (0, i.jsx)(l.Clickable, {
                    onClick: m,
                    className: S.sectionIconContainer,
                    children: (0, i.jsx)(l.TrashIcon, { size: 'xs' })
                })
            ]
        })
    );
}
function C(e) {
    let { className: t, userId: n, verification: r, index: a } = e,
        o = (0, u.bo)(r.timestamp),
        c = s.useCallback(() => {
            (0, u.ZU)(n, r.verifiedKey);
        }, [r.verifiedKey, n]);
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsxs)('div', {
                className: S.text,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: T.intl.format(T.t.N4qBBA, { index: a + 1 })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: o
                    })
                ]
            }),
            (0, i.jsx)(l.Clickable, {
                className: S.icon,
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
                            (0, i.jsx)(C, {
                                className: S.row,
                                userId: t,
                                index: r,
                                verification: e
                            }),
                            r !== n.length - 1 && (0, i.jsx)('div', { className: S.divider })
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
                      className: _.marginBottom20,
                      children: [
                          (0, i.jsx)(l.FormTitle, {
                              tag: l.FormTitleTags.H5,
                              className: _.marginBottom8,
                              children: T.intl.string(T.t['5b3FND'])
                          }),
                          (0, i.jsx)(l.FormText, {
                              type: l.FormTextTypes.DESCRIPTION,
                              children: T.intl.format(T.t['7w9ymJ'], { helpArticle: (0, u.pL)() })
                          })
                      ]
                  }),
                  t.map((e) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: S.item,
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
        t = (0, g.s)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.FormSection, {
                tag: l.FormTitleTags.H1,
                title: T.intl.string(T.t['9Q/PQk']),
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        className: _.marginBottom20,
                        children: T.intl.format(T.t['8IwQfH'], { helpArticle: (0, u.uV)() })
                    }),
                    (0, i.jsxs)(l.FormItem, {
                        children: [
                            (0, i.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H5,
                                className: _.marginBottom8,
                                children: T.intl.string(T.t['2Ap8sr'])
                            }),
                            (0, i.jsx)(l.FormSwitch, {
                                hideBorder: 0 === t.length,
                                value: e,
                                note: T.intl.format(T.t['7CXSaG'], { helpArticle: (0, u.aZ)() }),
                                onChange: c.Z.updatePersistentCodesEnabled,
                                children: T.intl.string(T.t['opi/XF'])
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(I, { userIds: t })
        ]
    });
}
