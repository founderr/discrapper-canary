var r,
    i = n(735250);
n(470079);
var a = n(481060),
    o = n(600164),
    s = n(586383);
!(function (e) {
    (e.SMALL = 'SMALL'), (e.MEDIUM = 'MEDIUM'), (e.LARGE = 'LARGE');
})(r || (r = {}));
let l = {
        SMALL: s.dropdownSmall,
        MEDIUM: s.dropdownMedium,
        LARGE: s.dropdownLarge
    },
    u = (e) => {
        let { onDropdownClick: t, children: n, contentClassName: r, dropdownSize: u = 'MEDIUM', ...c } = e;
        return (0, i.jsx)(a.Button, {
            ...c,
            children: (0, i.jsxs)(o.Z, {
                align: o.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(o.Z.Child, {
                        className: r,
                        children: n
                    }),
                    null != t
                        ? (0, i.jsxs)(a.Clickable, {
                              className: l[u],
                              onClick: (e) => {
                                  e.stopPropagation(), null != t && t(e);
                              },
                              children: [
                                  (0, i.jsx)('div', { className: s.arrowSeparator }),
                                  (0, i.jsx)(a.ChevronSmallDownIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: s.dropdownArrow
                                  })
                              ]
                          })
                        : null
                ]
            })
        });
    };
(u.DropdownSizes = r), (u.Sizes = a.Button.Sizes), (u.Colors = a.Button.Colors), (u.Looks = a.Button.Looks), (t.Z = u);
