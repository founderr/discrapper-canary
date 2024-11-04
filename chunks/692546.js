n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i,
    r = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(995295),
    o = n(374470),
    c = n(902704),
    d = n(846519),
    u = n(13245),
    h = n(671999),
    p = n(358085),
    f = n(998502),
    g = n(145597);
function m(e, t, n) {
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
let v = {
        x: 0,
        y: 0
    },
    _ = !1;
function E(e) {
    let { clientX: t, clientY: n } = e;
    (_ = !0), (v.x = t), (v.y = n);
}
let x = new Map();
function Z(e, t) {
    if (null == t) x.delete(e), 0 === x.size && (window.removeEventListener('mousemove', E), (_ = !1));
    else {
        let n = x.get(e);
        if (null != n && (0, c.Z)(n.zone, t.zone)) return;
        0 === x.size && window.addEventListener('mousemove', E), x.set(e, t);
    }
    p.isPlatformEmbedded &&
        ((0, g.W2)()
            ? u.Z.setClickZones(
                  Array.from(x.values()).map((e) => {
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
                  zones: Array.from(x.values()).map((e) => {
                      let { zone: t } = e;
                      return t;
                  })
              }),
              (function () {
                  if (!I)
                      f.ZP.requireModule('discord_overlay2').setClickZoneCallback((e, t, n) => {
                          let i = x.get(e);
                          null != i && (!_ && ((v.x = t), (v.y = n)), i.instance.click());
                      }),
                          (I = !0);
              })()));
}
let I = !1;
class S extends (i = r.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), Z(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return r.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, h.B)('click', v.x, v.y);
        (0, h.J)(e, v.x, v.y);
    }
    constructor(...e) {
        super(...e),
            m(this, 'zone', a().uniqueId('ClickArea')),
            m(this, 'interval', new d.Xp()),
            m(this, 'updateZone', () => {
                let e = (0, l.findDOMNode)(this);
                if ((0, o.k)(e)) {
                    let { left: t, top: n, right: i, bottom: r } = e.getBoundingClientRect();
                    Z(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.ceil(t),
                            top: Math.ceil(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(r)
                        }
                    });
                }
            });
    }
}
m(S, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
