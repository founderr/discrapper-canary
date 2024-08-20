t.d(n, {
    G: function () {
        return a;
    }
}),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var i = t(981631);
let a = (e) => {
    let { id: n, name: t, locale: a } = e,
        r = 'https://'.concat(i.xr4, '/hc/').concat(a.toLowerCase(), '/requests/new'),
        o = new URLSearchParams();
    return o.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), o.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), o.append('tf_12094971213335', n), o.append('ticket_form_id', '12275528604823'), o.append('tf_subject', 'App Directory Report '.concat(t, ' ').concat(n)), ''.concat(r, '?').concat(o.toString());
};
