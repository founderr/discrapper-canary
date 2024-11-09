t.d(n, {
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
var r = t(200651);
t(192379);
var a = t(692547),
    i = t(481060),
    o = t(626166);
function s(e) {
    let { title: n, children: t } = e;
    return (0, r.jsxs)('div', {
        className: o.questionContainer,
        children: [
            (0, r.jsx)(i.Text, {
                className: o.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function l(e) {
    let { icon: n, text: t, meetsRequirement: s } = e;
    return (0, r.jsxs)('div', {
        className: o.requirementContainer,
        children: [
            (0, r.jsx)(n, {
                className: o.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(i.Text, {
                className: o.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            s
                ? (0, r.jsx)(i.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementSuccess,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(i.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementFailure,
                      secondaryColor: a.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: n, text: t, footnote: s, meetsRequirement: l, children: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o.requirementContainer,
                children: [
                    (0, r.jsx)(n, {
                        className: o.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(i.Text, {
                        className: o.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    l
                        ? (0, r.jsx)(i.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.requirementSuccess,
                              secondaryColor: a.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != s &&
                (0, r.jsx)(i.Text, {
                    color: 'header-secondary',
                    className: o.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
