r.d(n, {
    Mb: function () {
        return l;
    },
    Z0: function () {
        return s;
    },
    d1: function () {
        return c;
    },
    fy: function () {
        return o;
    },
    r5: function () {
        return u;
    }
});
var i = r(313201),
    a = r(388032);
let s = (0, i.hQ)(),
    o = (0, i.hQ)(),
    l = (0, i.hQ)(),
    u = (0, i.hQ)();
function c() {
    [
        {
            id: s,
            text: ','
        },
        {
            id: o,
            text: ','
        },
        {
            id: l,
            text: a.intl.string(a.t.gHp0Cw)
        },
        {
            id: u,
            text: a.intl.string(a.t.SO93ur)
        }
    ].forEach((e) => {
        let { id: n, text: r } = e,
            i = document.getElementById(n);
        null == i && ((i = document.createElement('div')).setAttribute('id', n), (i.innerText = r), (i.style.display = 'none'), document.body.appendChild(i));
    });
}
