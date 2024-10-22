n.d(t, {
    Ih: function () {
        return l;
    },
    PU: function () {
        return c;
    },
    hK: function () {
        return s;
    }
});
var o = n(200651);
n(192379);
var r = n(692547),
    a = n(481060),
    i = n(626166);
function s(e) {
    let { title: t, children: n } = e;
    return (0, o.jsxs)('div', {
        className: i.questionContainer,
        children: [
            (0, o.jsx)(a.Text, {
                className: i.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: t
            }),
            n
        ]
    });
}
function l(e) {
    let { icon: t, text: n, meetsRequirement: s } = e;
    return (0, o.jsxs)('div', {
        className: i.requirementContainer,
        children: [
            (0, o.jsx)(t, {
                className: i.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, o.jsx)(a.Text, {
                className: i.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            s
                ? (0, o.jsx)(a.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: i.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, o.jsx)(a.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: i.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: s, meetsRequirement: l, children: c } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: i.requirementContainer,
                children: [
                    (0, o.jsx)(t, {
                        className: i.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, o.jsx)(a.Text, {
                        className: i.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    l
                        ? (0, o.jsx)(a.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: i.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != s &&
                (0, o.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: i.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
