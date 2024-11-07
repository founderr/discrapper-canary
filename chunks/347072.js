n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(357156),
    l = n(343747),
    u = n(388032),
    c = n(296059);
function d(e) {
    let { guild: t, focused: n, onSelectItem: i, refreshEnabled: d, ...f } = e,
        { canCreateExpressions: _ } = (0, o.XJ)(t);
    return (0, r.jsx)(s.Tooltip, {
        text: u.intl.string(u.t['fHo+z8']),
        shouldShow: !_,
        children: (e) =>
            (0, r.jsx)('li', {
                className: c.soundButtonWrapper,
                ...e,
                children: (0, r.jsx)(s.ClickableContainer, {
                    ...f,
                    'aria-label': u.intl.formatToPlainString(u.t.c1qVYm, { guildName: t.name }),
                    className: a()(d ? c.soundAddButtonRefresh : c.soundAddButton, {
                        [c.focused]: n,
                        [c.disabled]: !_
                    }),
                    onClick: () => (null != i ? i() : (0, l.Z)(t.id)),
                    children: d
                        ? (0, r.jsxs)('div', {
                              className: c.soundAddInfoRefresh,
                              children: [
                                  (0, r.jsx)(s.CirclePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIconRefresh
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: _ ? void 0 : 'text-muted',
                                      className: c.soundAddTextRefresh,
                                      children: u.intl.string(u.t['8Fu/S0'])
                                  })
                              ]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.PlusSmallIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIcon
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: _ ? 'header-primary' : 'text-muted',
                                      children: u.intl.string(u.t['8Fu/S0'])
                                  })
                              ]
                          })
                })
            })
    });
}
