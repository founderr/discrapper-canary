n.d(t, {
    Q: function () {
        return h;
    }
}),
    n(653041),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(33122),
    l = n(761705),
    o = n(9807),
    d = n(843445),
    u = n(981631),
    c = n(388032);
function h(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let p = (e) => {
    let { index: t, items: n, ...i } = e,
        r = n[t],
        s = 0,
        o = [];
    for (let e of n)
        if (e.type === u.s9s.IMG) {
            let { width: t, height: n, src: a } = e;
            e === r && (s = o.length),
                o.push({
                    src: h(a),
                    width: t,
                    height: n
                });
        }
    return (0, a.jsx)(l.Z, {
        ...i,
        items: o,
        startWith: s
    });
};
class m extends i.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            n = e === d.b.SMALL ? o.Z : s.Z;
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
                e.type === u.s9s.IMG &&
                    !(0, r.hasAnyModalOpen)() &&
                    (0, r.openModal)((e) =>
                        (0, a.jsx)(r.ModalRoot, {
                            size: r.ModalSize.DYNAMIC,
                            'aria-label': c.intl.string(c.t.X4IxWF),
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
