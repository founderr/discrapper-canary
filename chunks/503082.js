n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var l = n(512722),
    a = n.n(l),
    i = n(129508),
    r = n(921608),
    s = n(693824);
function o(e, t, n) {
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
class u extends i.Z {
    getCanvasForExport() {
        return this.canvas;
    }
    setContextProperties() {
        null != this.context && ((this.context.fillStyle = this.color), (this.context.strokeStyle = this.color), (this.context.font = ''.concat(this.font.style, ' ').concat(this.font.weight, ' ').concat(this.font.size, 'px ').concat(this.font.family.join(', '))));
    }
    setSize(e, t) {
        let { w: n, h: l } = e;
        null != this.context && null != t ? ((this.canvas.width = n * t), (this.canvas.height = l * t), this.context.scale(t, t)) : ((this.canvas.width = n), (this.canvas.height = l));
    }
    clearRect(e) {
        if (null == this.context) return;
        let { x: t, y: n, w: l, h: a } = e;
        this.context.clearRect(t, n, l, a);
    }
    restoreContext() {
        null != this.context && this.context.restore();
    }
    drawRect(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == this.context) return;
        let { x: l, y: a, w: i, h: r } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(l, a, i, r) : this.context.strokeRect(l, a, i, r);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: a, y: i, w: r, h: s } = e;
        l && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(a, i, r, s, t), n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        var l, i;
        if (null == this.context) return;
        this.setContextProperties();
        let o = null !== (l = t.w) && void 0 !== l ? l : this.canvas.width - t.x,
            u = this.context.measureText(e),
            c = !1,
            d = this.font.size,
            h = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            m = (e) => {
                if (null == this.context || u.width <= r.F) return '';
                let t = ''.concat(e);
                for (; u.width + r.F > o; ) (t = t.slice(0, -4)), (u = this.context.measureText(t)), (c = !0);
                return c && (t += '...'), t;
            };
        if ((this.font.truncate === s.GX.None && h(e, t), this.font.truncate === s.GX.Truncate && h((e = m(e)), t), this.font.truncate === s.GX.Wrap)) {
            let n = e.split(' '),
                l = 1 / 0,
                r = '',
                s = 0;
            for (null != t.h && ((l = t.h / d), a()(l > 0, 'DiscordCavas: boundingBox.h of '.concat(t.h, ' results in 0 visible lines with font size of ').concat(d))); n.length > 0; )
                if ((u = this.context.measureText(r + ' ' + n[0])).width > o) {
                    let e = !1;
                    if (
                        (s + 1 >= l && n.length > 0 && (e = !0),
                        '' !== r
                            ? (h(e ? m(r + '...') : r, {
                                  x: t.x,
                                  y: t.y + d * s
                              }),
                              (r = ''))
                            : h(m(null !== (i = n.shift()) && void 0 !== i ? i : ''), {
                                  x: t.x,
                                  y: t.y + d * s
                              }),
                        e)
                    )
                        break;
                    s += 1;
                } else
                    (r += ' '.concat(n.shift())),
                        0 === n.length &&
                            h(r, {
                                x: t.x,
                                y: t.y + d * s
                            });
        }
        return {
            x: t.x,
            y: t.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
        };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === s.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
        let l = this.font.weight,
            a = (e, t, n) => {
                let a;
                if ('strong' === e.type) this.setFont({ weight: 700 });
                return Array.isArray(e.content) ? (a = i(e.content, t, n)) : (a = this.drawText(e.content, t, n)), this.setFont({ weight: l }), a;
            },
            i = (e, t, n) => {
                let l = 0;
                return (
                    e.forEach((e) => {
                        let { x: i, y: r, w: s, h: o } = t,
                            u = null != s ? s - l : void 0,
                            c = a(
                                e,
                                {
                                    x: i + l,
                                    y: r,
                                    w: u,
                                    h: o
                                },
                                n
                            );
                        null != c && (l += c.w);
                    }),
                    {
                        x: t.x + l,
                        y: t.y,
                        w: l,
                        h: this.font.size
                    }
                );
            };
        Array.isArray(e) ? i(e, t, n) : a(e, t, n);
    }
    drawImage(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: s.JU.Stretch };
        a()(null != this.assetMap, 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.');
        let { fillMode: i } = l;
        if (null == this.context) return s.vP.Failure;
        let r = this.assetMap.get(e);
        if (null == r) return s.vP.ImageNotLoaded;
        if (null != n) {
            if (i === s.JU.Contain) {
                let l;
                let a = {
                        w: r.width,
                        h: r.height
                    },
                    i = +(a.w / a.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > i) {
                    let e = n.h * i;
                    l = {
                        x: t.x + (n.w - e) / 2,
                        y: t.y,
                        w: e,
                        h: n.h
                    };
                } else {
                    let e = n.w / i;
                    l = {
                        x: t.x,
                        y: t.y + (n.h - e) / 2,
                        w: n.w,
                        h: e
                    };
                }
                return (
                    this.drawCroppedImage(
                        e,
                        {
                            x: 0,
                            y: 0,
                            w: a.w,
                            h: a.h
                        },
                        {
                            x: l.x,
                            y: l.y,
                            w: l.w,
                            h: l.h
                        }
                    ),
                    s.vP.Success
                );
            }
            if (i === s.JU.Cover) {
                var o, u, c, d;
                let a;
                let i = {
                        w: r.width,
                        h: r.height
                    },
                    h = +(i.w / i.h).toFixed(1),
                    m = +(n.w / n.h).toFixed(1);
                if (m > h) {
                    let e = i.w / m;
                    a = {
                        x: 0,
                        y: (i.h - e) * (null !== (u = null == l ? void 0 : null === (o = l.focus) || void 0 === o ? void 0 : o.y) && void 0 !== u ? u : 0.5),
                        w: r.width,
                        h: e
                    };
                } else {
                    let e = i.h * m;
                    a = {
                        x: (r.width - e) * (null !== (d = null == l ? void 0 : null === (c = l.focus) || void 0 === c ? void 0 : c.x) && void 0 !== d ? d : 0.5),
                        y: 0,
                        w: e,
                        h: r.height
                    };
                }
                return (
                    this.drawCroppedImage(e, a, {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }),
                    s.vP.Success
                );
            }
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
        } else this.context.drawImage(r, t.x, t.y);
        return s.vP.Success;
    }
    drawRoundedImage(e, t, n, l, a) {
        if (null == this.context) return s.vP.Failure;
        let { x: i, y: r } = t,
            { w: o, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(i, r, o, u, l), this.context.clip(c);
        let d = this.drawImage(e, t, n, a);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        var l;
        if (null == this.context) return s.vP.Failure;
        let a = null === (l = this.assetMap) || void 0 === l ? void 0 : l.get(e);
        if (null == a) return s.vP.ImageNotLoaded;
        let { x: i, y: r, w: o, h: u } = t,
            { x: c, y: d, w: h, h: m } = n;
        return this.context.drawImage(a, i, r, o, u, c, d, h, m), s.vP.Success;
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return s.vP.Failure;
        this.setContextProperties(), this.context.save();
        let a = new Path2D(e);
        return this.context.translate(t.x, t.y), this.context.scale(l, l), n ? this.context.fill(a, 'evenodd') : this.context.stroke(a), this.restoreContext(), s.vP.Success;
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context) return;
        let l = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let { color: t, stop: n } of e) l.addColorStop(n, t);
        this.context.fillStyle = l;
    }
    drawGradientRect(e, t, n, l) {
        return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(l, !0, !1), s.vP.Success);
    }
    drawRoundedGradientRect(e, t, n, l, a) {
        return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(l, a, !0, !1), s.vP.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: l } = e,
            a = new Path2D(t);
        this.context.translate(n, l), this.context.clip(a);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: l, w: a, h: i } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.rect(n, l, a, i), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.rect(n, l, a, i), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: l, y: a, w: i, h: r } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.roundRect(l, a, i, r, t), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.roundRect(l, a, i, r, t), this.context.clip(e);
        }
    }
    constructor(e, t) {
        super(e, t), o(this, 'canvas', void 0), o(this, 'context', void 0), (this.canvas = e), (this.context = this.canvas.getContext('2d')), null != this.context && (this.context.imageSmoothingQuality = 'high');
    }
}
