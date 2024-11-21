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
var r = n(200651);
n(192379);
var i = n(692547),
    a = n(481060),
    o = n(626166);
function s(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: o.questionContainer,
        children: [
            (0, r.jsx)(a.Text, {
                className: o.questionTitle,
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
    return (0, r.jsxs)('div', {
        className: o.requirementContainer,
        children: [
            (0, r.jsx)(t, {
                className: o.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, r.jsx)(a.Text, {
                className: o.requirementText,
                variant: 'text-md/normal',
                children: n
            }),
            s
                ? (0, r.jsx)(a.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(a.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementFailure,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: t, text: n, footnote: s, meetsRequirement: l, children: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o.requirementContainer,
                children: [
                    (0, r.jsx)(t, {
                        className: o.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(a.Text, {
                        className: o.requirementText,
                        variant: 'text-md/normal',
                        children: n
                    }),
                    l
                        ? (0, r.jsx)(a.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.requirementSuccess,
                              secondaryColor: i.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != s &&
                (0, r.jsx)(a.Text, {
                    color: 'header-secondary',
                    className: o.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
