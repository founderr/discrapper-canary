t.d(n, {
    Ih: function () {
        return s;
    },
    PU: function () {
        return a;
    },
    hK: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var i = t(692547),
    l = t(481060),
    o = t(933078);
function u(e) {
    let { title: n, children: t } = e;
    return (0, r.jsxs)('div', {
        className: o.questionContainer,
        children: [
            (0, r.jsx)(l.Text, {
                className: o.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function s(e) {
    let { icon: n, text: t, meetsRequirement: u } = e;
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
            (0, r.jsx)(l.Text, {
                className: o.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            u
                ? (0, r.jsx)(l.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementSuccess,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
                : (0, r.jsx)(l.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o.requirementFailure,
                      secondaryColor: i.Z.colors.WHITE.css
                  })
        ]
    });
}
function a(e) {
    let { icon: n, text: t, footnote: u, meetsRequirement: s, children: a } = e;
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
                    (0, r.jsx)(l.Text, {
                        className: o.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    s
                        ? (0, r.jsx)(l.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: o.requirementSuccess,
                              secondaryColor: i.Z.colors.WHITE.css
                          })
                        : a
                ]
            }),
            null != u &&
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: o.footnote,
                    variant: 'text-xs/normal',
                    children: u
                })
        ]
    });
}
