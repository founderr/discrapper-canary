n.d(t, {
    Q: function () {
        return h;
    }
}),
    n(653041),
    n(47120);
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(33122),
    l = n(761705),
    o = n(9807),
    d = n(843445),
    c = n(981631),
    u = n(388032);
function h(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let p = (e) => {
    let { index: t, items: n, ...i } = e,
        s = n[t],
        r = 0,
        o = [];
    for (let e of n)
        if (e.type === c.s9s.IMG) {
            let { width: t, height: n, src: a } = e;
            e === s && (r = o.length),
                o.push({
                    src: h(a),
                    width: t,
                    height: n
                });
        }
    return (0, a.jsx)(l.Z, {
        ...i,
        items: o,
        startWith: r
    });
};
class m extends i.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            n = e === d.b.SMALL ? o.Z : r.Z;
        return (0, a.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleCurrentItemClick'),
            (i = (e, t) => {
                e.type === c.s9s.IMG &&
                    !(0, s.hasAnyModalOpen)() &&
                    (0, s.openModal)((e) =>
                        (0, a.jsx)(s.ModalRoot, {
                            size: s.ModalSize.DYNAMIC,
                            'aria-label': u.intl.string(u.t.X4IxWF),
                            ...e,
                            children: (0, a.jsx)(p, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        })
                    );
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = m;
