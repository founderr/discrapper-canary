t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(579806),
    o = t(435064),
    l = t(39604),
    c = t(442334),
    d = t(689938),
    _ = t(595362),
    u = t(193788);
function E() {
    let e = (0, a.e7)([o.Z], () => o.Z.getSettings().storageLocation),
        s = async () => {
            let e = await r.Z.fileManager.showOpenDialog({
                properties: ['openDirectory', 'createDirectory']
            });
            e.length > 0 && l.T1(e[0]);
        };
    return (0, n.jsx)(i.FormSection, {
        children: (0, n.jsx)(c.O, {
            title: d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION,
            note: d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_HELP,
            className: _.formItem,
            children: (0, n.jsx)(i.Clickable, {
                className: u.selectControl,
                'aria-label': d.Z.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_LABEL.format({ storageLocation: e }),
                onClick: s,
                children: (0, n.jsx)(i.TextInput, {
                    tabIndex: -1,
                    value: e,
                    editable: !1,
                    'aria-hidden': !0
                })
            })
        })
    });
}
