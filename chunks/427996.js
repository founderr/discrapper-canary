n.d(t, {
    W: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(399606),
    a = n(481060),
    u = n(337682),
    c = n(115130),
    d = n(689938),
    s = n(828018);
function f(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: f,
            filter: p
        } = (0, o.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter()
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: r()(s.container, n),
        children: [
            (0, i.jsx)(a.Checkbox, {
                type: a.Checkbox.Types.INVERTED,
                value: f,
                onClick: u.Y$,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/semibold',
                    children: d.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
                })
            }),
            f
                ? (0, i.jsx)(a.FormItem, {
                      title: d.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                      children: (0, i.jsx)(a.TextInput, {
                          disabled: !f,
                          value: null != l ? l : void 0,
                          onChange: u.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)('div', {
                      children: (0, i.jsx)(a.SearchBar, {
                          className: s.searchBar,
                          query: p,
                          onChange: u.a8,
                          onClear: function () {
                              u.a8('');
                          }
                      })
                  })
        ]
    });
}
