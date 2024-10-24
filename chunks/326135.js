n.d(t, {
    G: function () {
        return i;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var s = n(981631);
let i = (e) => {
    let { id: t, name: n, locale: i } = e,
        a = 'https://'.concat(s.xr4, '/hc/').concat(i.toLowerCase(), '/requests/new'),
        r = new URLSearchParams();
    return r.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), r.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), r.append('tf_12094971213335', t), r.append('ticket_form_id', '12275528604823'), r.append('tf_subject', 'App Directory Report '.concat(n, ' ').concat(t)), ''.concat(a, '?').concat(r.toString());
};
