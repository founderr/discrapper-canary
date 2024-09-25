n.d(t, {
    Q: function () {
        return r;
    },
    W: function () {
        return d;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(529652);
function u(e) {
    switch (e) {
        case 0:
            return s.CircleWarningIcon;
        case 1:
            return s.CircleInformationIcon;
        case 2:
            return s.CircleXIcon;
        case 3:
            return s.CheckmarkLargeIcon;
    }
}
function c(e) {
    switch (e) {
        case 0:
            return l.warning;
        case 1:
            return l.info;
        case 2:
            return l.error;
        case 3:
            return l.positive;
    }
}
function d(e) {
    let { children: t, messageType: n, className: r, textColor: a = 'text-normal', textVariant: d = 'text-sm/medium' } = e,
        _ = u(n),
        E = c(n);
    return (0, i.jsxs)('div', {
        className: o()(l.container, E, r),
        children: [
            (0, i.jsx)('div', {
                className: l.iconDiv,
                children: (0, i.jsx)(_, {
                    className: l.icon,
                    color: 'currentColor'
                })
            }),
            (0, i.jsx)(s.Text, {
                className: l.text,
                color: a,
                variant: d,
                children: t
            })
        ]
    });
}
!(function (e) {
    (e[(e.WARNING = 0)] = 'WARNING'), (e[(e.INFO = 1)] = 'INFO'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.POSITIVE = 3)] = 'POSITIVE');
})(r || (r = {}));
