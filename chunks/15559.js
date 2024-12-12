r.d(n, {
    Z: function () {
        return a;
    }
});
let i = 5;
function a(e, n, r) {
    let { onChange: a } = e,
        s = !1,
        o = !1;
    return (
        (e.onChange = () => {
            if (s) {
                o = !0;
                return;
            }
            s = !0;
            try {
                let e = 0;
                do {
                    if (((o = !1), e++ >= i)) break;
                    null == n || n();
                    try {
                        a();
                    } finally {
                        null == r || r();
                    }
                } while (o);
            } finally {
                s = !1;
            }
        }),
        e
    );
}
