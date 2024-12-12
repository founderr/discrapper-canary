let i;
var a = r(653041);
i = r(538036).Z;
let s = [],
    o = !1;
n.Z = {
    ...i,
    awaitOnline: () =>
        new Promise((e) => {
            if (i.isOnline()) return e();
            {
                if ((s.push(e), o)) return;
                o = !0;
                let n = () => {
                    s.forEach((e) => e()), (s.length = 0), (o = !1), i.removeOnlineCallback(n);
                };
                i.addOnlineCallback(n);
            }
        })
};
