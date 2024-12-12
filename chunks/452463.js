r.d(n, {
    G: function () {
        return o;
    }
});
var i,
    a = [],
    s = function () {
        return a.splice(0).forEach(function (e) {
            return e();
        });
    },
    o = function (e) {
        if (!i) {
            var n = 0,
                r = document.createTextNode(''),
                o = { characterData: !0 };
            new MutationObserver(function () {
                return s();
            }).observe(r, o),
                (i = function () {
                    r.textContent = ''.concat(n ? n-- : n++);
                });
        }
        a.push(e), i();
    };
