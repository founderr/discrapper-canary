n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(653041);
let a = {
        1: 'bold',
        4: 'underline'
    },
    o = {
        30: 'black',
        31: 'red',
        32: 'green',
        33: 'yellow',
        34: 'blue',
        35: 'magenta',
        36: 'cyan',
        37: 'white'
    },
    s = {
        40: 'black',
        41: 'red',
        42: 'green',
        43: 'yellow',
        44: 'blue',
        45: 'magenta',
        46: 'cyan',
        47: 'white'
    },
    l = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    u = new RegExp('(?='.concat(l.source, ')'));
function c() {
    let e = {
            className: 'ansi-control-sequence',
            begin: l,
            starts: {
                end: u,
                endsParent: !0
            }
        },
        t = [..._('foreground', o, ['38', '39'], !0), ..._('background', s, ['48', '49'], !0), ..._('style', a, [], !1), e];
    return (
        E(t),
        {
            contains: [
                {
                    begin: u,
                    contains: t
                }
            ]
        }
    );
}
function d(e, t, n, r) {
    return {
        className: 'ansi-'.concat(e, '-').concat(t),
        endsParent: !0,
        begin: u,
        'on:begin': (e, t) => {
            let i = e[1].split(';');
            for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), i)) e === n ? (t.data.isOn = !0) : r.includes(e) && (t.data.isOn = !1);
            !t.data.isOn && t.ignoreMatch();
        }
    };
}
function _(e, t, n, r) {
    let i = ['0', ...n];
    return (
        r && i.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, r] = t;
            return d(e, r, n, i);
        })
    );
}
function E(e) {
    for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
}
