r.d(n, {
    f: function () {
        return l;
    }
});
var i = r(47120);
var a = r(742635);
let s = (e) => {
        let n = {};
        for (let r of Object.keys(e)) {
            let i = e[r];
            null != i &&
                (n[r] = {
                    eventName: i.event_name,
                    target: i.target,
                    externalIds: i.external_ids
                });
        }
        return n;
    },
    o = (e) => {
        let n = {};
        for (let r of Object.keys(e)) {
            let i = e[r];
            null != i &&
                (n[r] = {
                    eventName: i.event_name,
                    title: i.title,
                    target: i.target,
                    description: i.description
                });
        }
        return n;
    },
    l = (e) => {
        switch (e.type) {
            case a.L.FIRST_PARTY:
                return {
                    type: a.L.FIRST_PARTY,
                    tasks: s(e.tasks),
                    joinOperator: e.join_operator
                };
            case a.L.THIRD_PARTY:
                return {
                    type: a.L.THIRD_PARTY,
                    tasks: o(e.tasks),
                    enrollmentUrl: e.enrollment_url,
                    developerApplicationId: e.developer_application_id,
                    joinOperator: e.join_operator
                };
        }
    };
