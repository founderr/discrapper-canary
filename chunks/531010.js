n.d(t, {
    e: function () {
        return r;
    }
});
var r,
    i = n(818083);
!(function (e) {
    (e.ALLOWED = 'allowed'), (e.DEFAULT = 'default');
})(r || (r = {})),
    (t.Z = (0, i.B)({
        kind: 'guild',
        id: '2023-09_user_apps_guild',
        label: 'Allow user app commands',
        defaultConfig: { userAppsTreatment: 'default' },
        treatments: [
            {
                id: 1,
                label: 'Allow user app commands',
                config: { userAppsTreatment: 'allowed' }
            }
        ]
    }));
