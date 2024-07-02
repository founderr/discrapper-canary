var i = n(735250);
n(470079);
var a = n(481060), s = n(643560);
t.Z = e => {
    let {
        entry: t,
        forceLightTheme: n,
        hideEditButton: l,
        children: r,
        onRequestOpen: o,
        onRequestClose: c
    } = e;
    return (0, i.jsx)(a.Popout, {
        onRequestOpen: o,
        onRequestClose: c,
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: e => {
            let {closePopout: a} = e;
            return (0, i.jsx)(s.default, {
                entry: t,
                closePopout: a,
                forceLightTheme: n,
                hideEditButton: l
            });
        },
        children: r
    });
};
