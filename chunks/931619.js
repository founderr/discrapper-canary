let r;
var i = n(653041);
r = n(538036).Z;
let a = [],
    o = !1;
t.Z = {
    ...r,
    awaitOnline: () =>
        new Promise((e) => {
            if (r.isOnline()) return e();
            {
                if ((a.push(e), o)) return;
                o = !0;
                let t = () => {
                    a.forEach((e) => e()), (a.length = 0), (o = !1), r.removeOnlineCallback(t);
                };
                r.addOnlineCallback(t);
            }
        })
};
