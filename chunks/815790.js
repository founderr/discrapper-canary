n.d(t, {
    Dw: function () {
        return _;
    },
    I: function () {
        return o;
    },
    UG: function () {
        return s;
    },
    fv: function () {
        return d;
    },
    jq: function () {
        return r;
    }
});
var r,
    i = n(814391),
    a = n(689938);
let o = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    },
    s = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
!(function (e) {
    (e[(e.JOINED_AT = 0)] = 'JOINED_AT'), (e[(e.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE');
})(r || (r = {}));
let l = () => ({
        seconds: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
        minutes: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
        hours: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
        days: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
        months: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
        years: a.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
    }),
    u = () => ({
        hours: a.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
        days: a.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
        months: a.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
        years: a.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
    });
function c(e) {
    return 0 === e ? l : 1 === e ? u : void 0;
}
let d = (e, t) => {
        let n = c(t);
        return (0, i.Z)(e, n, !1);
    },
    _ = (e) => (null != e ? new Date(e) : new Date()).getTime();
