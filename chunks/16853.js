var i = n(735250);
n(470079);
var s = n(481060),
    a = n(643560);
t.Z = (e) => {
    let { entry: t, hideEditButton: n, children: l, onRequestOpen: r, onRequestClose: o } = e;
    return (0, i.jsx)(s.Popout, {
        onRequestOpen: r,
        onRequestClose: o,
        animation: s.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, i.jsx)(a.default, {
                entry: t,
                closePopout: s,
                hideEditButton: n
            });
        },
        children: l
    });
};
