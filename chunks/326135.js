a.d(n, {
    G: function () {
        return t;
    }
}),
    a(610138),
    a(216116),
    a(78328),
    a(815648),
    a(47120);
var i = a(981631);
let t = (e) => {
    let { id: n, name: a, locale: t } = e,
        r = 'https://'.concat(i.xr4, '/hc/').concat(t.toLowerCase(), '/requests/new'),
        l = new URLSearchParams();
    return l.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), l.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), l.append('tf_12094971213335', n), l.append('ticket_form_id', '12275528604823'), l.append('tf_subject', 'App Directory Report '.concat(a, ' ').concat(n)), ''.concat(r, '?').concat(l.toString());
};
