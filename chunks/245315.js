r.d(n, {
    BF: function () {
        return f;
    },
    QA: function () {
        return d;
    },
    cp: function () {
        return c;
    }
});
var i = r(367907),
    a = r(368859),
    s = r(626135),
    o = r(135899),
    l = r(981631),
    u = r(943702);
function c(e) {
    return ((0, a.Z)(e) && e.messageReference.guild_id === o.M_) || (null != e.author && e.author.id === o.c9);
}
function d() {
    return u;
}
let f = (e) => {
    s.default.track(l.rMx.USER_FLOW_TRANSITION, {
        flow_type: o.tA,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.hH)(e.guildId)
    });
};
