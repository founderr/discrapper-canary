let i;
r.d(n, {
    y: function () {
        return l;
    }
});
var a = r(37082);
try {
    i = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
function s() {
    let e = 'test';
    try {
        return i.setItem(e, e), i.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
}
class o {
    get(e, n) {
        let r = i.getItem(e);
        if (null != r)
            try {
                r = JSON.parse(r);
            } catch (e) {
                r = n;
            }
        else r = n;
        return r;
    }
    set(e, n) {
        i.setItem(e, JSON.stringify(n));
    }
    remove(e) {
        i.removeItem(e);
    }
    clear() {
        i.clear();
    }
}
let l = s() ? new o() : new a.R();
