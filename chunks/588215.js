var r;
n.d(t, {
    d$: function () {
        return r;
    },
    rL: function () {
        return i;
    },
    si: function () {
        return a;
    }
});
let i = 2 * n(70956).Z.Millis.DAY;
function a(e) {
    let { joinedAt: t, userId: n } = e;
    return null == t
        ? null
        : {
              guild_joined_at: new Date(t).getTime(),
              user_id: n
          };
}
!(function (e) {
    (e[(e.ORDER_BY_UNSPECIFIED = 0)] = 'ORDER_BY_UNSPECIFIED'), (e[(e.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = 'ORDER_BY_GUILD_JOINED_AT_DESC'), (e[(e.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = 'ORDER_BY_GUILD_JOINED_AT_ASC'), (e[(e.ORDER_BY_USER_ID_DESC = 3)] = 'ORDER_BY_USER_ID_DESC'), (e[(e.ORDER_BY_USER_ID_ASC = 4)] = 'ORDER_BY_USER_ID_ASC');
})(r || (r = {}));
