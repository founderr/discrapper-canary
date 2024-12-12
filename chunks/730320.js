var i = r(192379),
    a = r(723184),
    s = r(820611),
    o = r(877837),
    l = r(197499),
    u = function (e) {
        var n = e.color,
            r = e.onClick,
            u = void 0 === r ? function () {} : r,
            c = e.onSwatchHover,
            d = e.first,
            f = e.last,
            _ = e.active,
            h = (0, a.default)(
                {
                    default: {
                        color: {
                            width: '40px',
                            height: '24px',
                            cursor: 'pointer',
                            background: n,
                            marginBottom: '1px'
                        },
                        check: {
                            color: s.Qg(n),
                            marginLeft: '8px',
                            display: 'none'
                        }
                    },
                    first: {
                        color: {
                            overflow: 'hidden',
                            borderRadius: '2px 2px 0 0'
                        }
                    },
                    last: {
                        color: {
                            overflow: 'hidden',
                            borderRadius: '0 0 2px 2px'
                        }
                    },
                    active: { check: { display: 'block' } },
                    'color-#FFFFFF': {
                        color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                        check: { color: '#333' }
                    },
                    transparent: { check: { color: '#333' } }
                },
                {
                    first: d,
                    last: f,
                    active: _,
                    'color-#FFFFFF': '#FFFFFF' === n,
                    transparent: 'transparent' === n
                }
            );
        return i.createElement(
            o.m4,
            {
                color: n,
                style: h.color,
                onClick: u,
                onHover: c,
                focusStyle: { boxShadow: '0 0 4px ' + n }
            },
            i.createElement('div', { style: h.check }, i.createElement(l.default, null))
        );
    };
n.Z = u;
