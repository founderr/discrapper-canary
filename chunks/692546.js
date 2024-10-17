n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i,
    s = n(470079),
    a = n(392711),
    r = n.n(a),
    o = n(699581),
    l = n(374470),
    c = n(902704),
    d = n(846519),
    u = n(13245),
    h = n(671999),
    p = n(358085),
    f = n(998502),
    _ = n(145597);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {
        x: 0,
        y: 0
    },
    m = !1;
function I(e) {
    let { clientX: t, clientY: n } = e;
    (m = !0), (g.x = t), (g.y = n);
}
let Z = new Map();
function v(e, t) {
    if (null == t) Z.delete(e), 0 === Z.size && (window.removeEventListener('mousemove', I), (m = !1));
    else {
        let n = Z.get(e);
        if (null != n && (0, c.Z)(n.zone, t.zone)) return;
        0 === Z.size && window.addEventListener('mousemove', I), Z.set(e, t);
    }
    p.isPlatformEmbedded &&
        ((0, _.W2)()
            ? u.Z.setClickZones(
                  Array.from(Z.values()).map((e) => {
                      let { zone: t } = e;
                      return {
                          name: t.name,
                          left: t.left / window.innerWidth,
                          top: t.top / window.innerHeight,
                          right: t.right / window.innerWidth,
                          bottom: t.bottom / window.innerHeight
                      };
                  })
              )
            : (f.ZP.requireModule('discord_overlay2').broadcastCommand({
                  message: 'set_click_zones',
                  zones: Array.from(Z.values()).map((e) => {
                      let { zone: t } = e;
                      return t;
                  })
              }),
              (function () {
                  if (!S)
                      f.ZP.requireModule('discord_overlay2').setClickZoneCallback((e, t, n) => {
                          let i = Z.get(e);
                          null != i && (!m && ((g.x = t), (g.y = n)), i.instance.click());
                      }),
                          (S = !0);
              })()));
}
let S = !1;
class C extends (i = s.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), v(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return s.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, h.B)('click', g.x, g.y);
        (0, h.J)(e, g.x, g.y);
    }
    constructor(...e) {
        super(...e),
            E(this, 'zone', r().uniqueId('ClickArea')),
            E(this, 'interval', new d.Xp()),
            E(this, 'updateZone', () => {
                let e = (0, o.findDOMNode)(this);
                if ((0, l.k)(e)) {
                    let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
                    v(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.ceil(t),
                            top: Math.ceil(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(s)
                        }
                    });
                }
            });
    }
}
E(C, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
