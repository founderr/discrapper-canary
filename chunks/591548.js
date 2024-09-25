n.d(t, {
    H: function () {
        return l;
    },
    j: function () {
        return s;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(392711),
    o = n.n(a);
function s(e) {
    let t = (e, t) => e.subscriptionPlanId === t.subscriptionPlanId && e.subscriptionPlanPrice === t.subscriptionPlanPrice && e.amount === t.amount && o().isEqual(e.discounts, t.discounts),
        n = [],
        r = new Set();
    return (
        e.map((e) => {
            for (let i of n)
                if (t(i, e)) {
                    r.add(i.subscriptionPlanId), (i.quantity += e.quantity);
                    return;
                }
            n.push({ ...e });
        }),
        n.map((e) => {
            let t = { ...e };
            return (
                r.has(e.subscriptionPlanId) &&
                    ((t.amount = t.amount * t.quantity),
                    (t.discounts = t.discounts.map((e) => ({
                        ...e,
                        amount: e.amount * t.quantity
                    })))),
                t
            );
        })
    );
}
function l(e) {
    return {
        id: e.id,
        subscriptionPlanId: e.subscription_plan_id,
        subscriptionPlanPrice: e.subscription_plan_price,
        amount: e.amount,
        quantity: e.quantity,
        discounts: e.discounts
    };
}
