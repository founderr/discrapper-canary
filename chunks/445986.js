s.d(t, {
    Q: function () {
        return c;
    }
}),
    s(653041),
    s(47120);
var n = s(735250),
    a = s(470079),
    i = s(481060),
    r = s(33122),
    l = s(761705),
    o = s(9807),
    h = s(843445),
    d = s(981631),
    u = s(689938);
function c(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let p = (e) => {
    let { index: t, items: s, ...a } = e,
        i = s[t],
        r = 0,
        o = [];
    for (let e of s)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: s, src: n } = e;
            e === i && (r = o.length),
                o.push({
                    src: c(n),
                    width: t,
                    height: s
                });
        }
    return (0, n.jsx)(l.Z, {
        ...a,
        items: o,
        startWith: r
    });
};
class m extends a.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            s = e === h.b.SMALL ? o.Z : r.Z;
        return (0, n.jsx)(s, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, s, a;
        super(...e),
            (t = this),
            (s = 'handleCurrentItemClick'),
            (a = (e, t) => {
                e.type === d.s9s.IMG &&
                    !(0, i.hasAnyModalOpen)() &&
                    (0, i.openModal)((e) =>
                        (0, n.jsx)(i.ModalRoot, {
                            size: i.ModalSize.DYNAMIC,
                            'aria-label': u.Z.Messages.IMAGE,
                            ...e,
                            children: (0, n.jsx)(p, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        })
                    );
            }),
            s in t
                ? Object.defineProperty(t, s, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[s] = a);
    }
}
t.Z = m;
