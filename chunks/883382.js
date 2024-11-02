n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(409700),
    l = n(480294),
    a = n(63063),
    o = n(838436),
    c = n(51331),
    d = n(922628),
    u = n(726985),
    m = n(981631),
    h = n(388032);
function g() {
    let e = (0, s.cj)([l.Z], () => l.Z.hasConsented(m.pjP.PERSONALIZATION));
    return (0, i.jsx)(o.U, {
        setting: u.s6.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(c.Z, {
            title: h.intl.string(h.t.MNKzys),
            note: h.intl.format(h.t['eQL/Mj'], { helpdeskArticle: a.Z.getArticleURL(m.BhN.DATA_USED_FOR_RECOMMENDED) }),
            value: e,
            onChange: (e) => {
                e
                    ? (0, r.g)([m.pjP.PERSONALIZATION], []).catch(d.S)
                    : (0, d.V)({
                          header: h.intl.string(h.t['9SNpzs']),
                          confirmText: h.intl.string(h.t['9g5UGx']),
                          cancelText: h.intl.string(h.t['+ZLPw8']),
                          onConfirm: () => {
                              (0, r.g)([], [m.pjP.PERSONALIZATION]).catch(d.S);
                          },
                          body: h.intl.string(h.t.gJvDDg)
                      });
            }
        })
    });
}
