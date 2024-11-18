var i = n(200651);
n(192379);
var l = n(481060),
    r = n(643560);
t.Z = (e) => {
    let { entry: t, hideEditButton: n, children: a, onRequestOpen: s, onRequestClose: o } = e;
    return (0, i.jsx)(l.Popout, {
        onRequestOpen: s,
        onRequestClose: o,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(r.default, {
                entry: t,
                closePopout: l,
                hideEditButton: n
            });
        },
        children: a
    });
};
