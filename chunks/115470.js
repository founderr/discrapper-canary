var r,
    i = n(442837),
    a = n(570140),
    o = n(178635);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {};
function u(e) {
    let { feedbackType: t, cooldown: n, chance: r } = e;
    l[t] = {
        ...o.R[t],
        cooldown: n,
        chance: r
    };
}
function c(e) {
    let { feedbackType: t } = e;
    delete l[t];
}
class d extends (r = i.ZP.Store) {
    initialize() {}
    getFeedbackConfig(e) {
        return l[e];
    }
}
s(d, 'displayName', 'FeedbackOverrideStore'),
    s(d, 'persistKey', 'feedbackOverrides'),
    (t.Z = new d(a.Z, {
        FEEDBACK_OVERRIDE_SET: u,
        FEEDBACK_OVERRIDE_CLEAR: c
    }));
