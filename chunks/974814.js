var r = n(67867),
    i = n(414629),
    a = n(732116).CONSTRUCTOR,
    o = n(197859),
    s = n(294377),
    l = n(735471),
    u = n(691244),
    c = o && o.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            forced: a,
            real: !0
        },
        {
            catch: function (e) {
                return this.then(void 0, e);
            }
        }
    ),
    !i && l(o))
) {
    var d = s('Promise').prototype.catch;
    c.catch !== d && u(c, 'catch', d, { unsafe: !0 });
}
