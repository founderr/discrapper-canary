n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(981631);
let r = '<removed>';
function a(e) {
    var t, n;
    let a = { ...e };
    if ('object' == typeof (t = a).args && 'string' == typeof t.cmd)
        a = (function (e) {
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
        })(a);
    if ('object' == typeof (n = a).data && 'string' == typeof n.cmd)
        a = (function (e) {
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
        })(a);
    return a;
}
