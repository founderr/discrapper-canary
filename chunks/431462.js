n.d(t, {
    A: function () {
        return d;
    }
});
var r = n(262068),
    i = n(961742),
    a = n(27273),
    s = n(295415);
async function o(e, t, n) {
    var i;
    let a = null === (i = t.style) || void 0 === i ? void 0 : i.getPropertyValue(e);
    if (a) {
        let i = await (0, r.vg)(a, null, n);
        return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0;
    }
    return !1;
}
async function l(e, t) {
    !(await o('background', e, t)) && (await o('background-image', e, t)), !(await o('mask', e, t)) && (await o('mask-image', e, t));
}
async function u(e, t) {
    let n = (0, i.oY)(e, HTMLImageElement);
    if (!(n && !(0, a.pZ)(e.src)) && !((0, i.oY)(e, SVGImageElement) && !(0, a.pZ)(e.href.baseVal))) return;
    let r = n ? e.src : e.href.baseVal,
        o = await (0, a.sx)(r, (0, s.b)(r), t);
    await new Promise((t, r) => {
        (e.onload = t), (e.onerror = r);
        e.decode && (e.decode = t), 'lazy' === e.loading && (e.loading = 'eager'), n ? ((e.srcset = ''), (e.src = o)) : (e.href.baseVal = o);
    });
}
async function c(e, t) {
    let n = (0, i.qo)(e.childNodes).map((e) => d(e, t));
    await Promise.all(n).then(() => e);
}
async function d(e, t) {
    (0, i.oY)(e, Element) && (await l(e, t), await u(e, t), await c(e, t));
}
