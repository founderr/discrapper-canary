s.d(t, {
    G: function () {
        return i;
    }
}),
    s(610138),
    s(216116),
    s(78328),
    s(815648),
    s(47120);
var n = s(981631);
let i = (e) => {
    let { id: t, name: s, locale: i } = e,
        a = 'https://'.concat(n.xr4, '/hc/').concat(i.toLowerCase(), '/requests/new'),
        r = new URLSearchParams();
    return r.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), r.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), r.append('tf_12094971213335', t), r.append('ticket_form_id', '12275528604823'), r.append('tf_subject', 'App Directory Report '.concat(s, ' ').concat(t)), ''.concat(a, '?').concat(r.toString());
};
