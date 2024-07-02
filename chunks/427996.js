t.d(n, {
    W: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var a = t(399606), l = t(481060), s = t(337682), r = t(115130), o = t(689938), c = t(903526);
function d() {
    let {
        activityUrlOverride: e,
        useActivityUrlOverride: n,
        filter: t
    } = (0, a.cj)([r.Z], () => ({
        activityUrlOverride: r.Z.getActivityUrlOverride(),
        useActivityUrlOverride: r.Z.getUseActivityUrlOverride(),
        filter: r.Z.getFilter()
    }), []);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)(l.Checkbox, {
                type: l.Checkbox.Types.INVERTED,
                className: c.__invalid_checkbox,
                value: n,
                onClick: s.Y$,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/semibold',
                    children: o.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
                })
            }),
            (0, i.jsx)(l.FormItem, {
                className: c.__invalid_urlOverride,
                title: o.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                children: (0, i.jsx)(l.TextInput, {
                    disabled: !n,
                    value: null != e ? e : void 0,
                    onChange: s.jS,
                    placeholder: 'http://localhost:3000'
                })
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.SearchBar, {
                    className: c.searchBar,
                    query: t,
                    onChange: s.a8,
                    onClear: function () {
                        s.a8('');
                    }
                })
            })
        ]
    });
}
