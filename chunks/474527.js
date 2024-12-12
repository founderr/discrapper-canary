var i = r(192379),
    a = r(723184),
    s = r(476400),
    o = r.n(s),
    l = function (e) {
        var n = (0, a.default)({
            default: {
                picker: {
                    width: '20px',
                    height: '20px',
                    borderRadius: '22px',
                    border: '2px #fff solid',
                    transform: 'translate(-12px, -13px)',
                    background: 'hsl(' + Math.round(e.hsl.h) + ', ' + Math.round(100 * e.hsl.s) + '%, ' + Math.round(100 * e.hsl.l) + '%)'
                }
            }
        });
        return i.createElement('div', { style: n.picker });
    };
(l.propTypes = {
    hsl: o().shape({
        h: o().number,
        s: o().number,
        l: o().number,
        a: o().number
    })
}),
    (l.defaultProps = {
        hsl: {
            a: 1,
            h: 249.94,
            l: 0.2,
            s: 0.5
        }
    }),
    (n.C = l);
