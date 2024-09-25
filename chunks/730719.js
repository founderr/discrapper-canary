var r = n(735250);
n(470079);
var i = n(481060),
    a = n(689938),
    o = n(318067);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    if (null == t || '' === t) return null;
    let s = () => {
        n();
    };
    return (0, r.jsxs)('div', {
        className: o.errorContainer,
        children: [
            (0, r.jsx)(i.CircleWarningIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: o.errorIcon
            }),
            (0, r.jsx)(i.Text, {
                className: o.errorText,
                variant: 'text-sm/normal',
                children: t
            }),
            (0, r.jsx)(i.Clickable, {
                onClick: s,
                'aria-label': a.Z.Messages.DISMISS,
                className: o.closeIcon
            })
        ]
    });
};
t.Z = s;
