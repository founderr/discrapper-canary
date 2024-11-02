n.d(t, {
    i: function () {
        return i;
    }
});
var r = n(388032);
function i(e) {
    if (null != e.privacy_policy_url && null != e.terms_of_service_url)
        return r.intl.format(r.t.rxlyKC, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
            termsOfServiceURL: e.terms_of_service_url
        });
    if (null != e.privacy_policy_url)
        return r.intl.format(r.t.TBvmMz, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url
        });
    if (null != e.terms_of_service_url)
        return r.intl.format(r.t['q0T/Q0'], {
            application: e.name,
            termsOfServiceURL: e.terms_of_service_url
        });
    return r.intl.formatToPlainString(r.t['3Ywek5'], { application: e.name });
}
