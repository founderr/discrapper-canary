n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(981631);
let r = '<removed>';
function l(e) {
    var t, n;
    let l = { ...e };
    if ('object' == typeof (t = l).args && 'string' == typeof t.cmd)
        l = (function (e) {
            switch (e.cmd) {
                case i.Etm.AUTHENTICATE:
                case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
                    return {
                        ...e,
                        args: {
                            ...e.args,
                            access_token: r
                        }
                    };
                default:
                    return { ...e };
            }
        })(l);
    if ('object' == typeof (n = l).data && 'string' == typeof n.cmd)
        l = (function (e) {
            switch (e.cmd) {
                case i.Etm.AUTHENTICATE:
                case i.Etm.GET_PROVIDER_ACCESS_TOKEN:
                    return {
                        ...e,
                        data: {
                            ...e.data,
                            access_token: r
                        }
                    };
                default:
                    return { ...e };
            }
        })(l);
    return l;
}
