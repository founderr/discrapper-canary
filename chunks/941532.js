r.d(n, {
    i: function () {
        return a;
    }
});
var i = r(388032);
function a(e) {
    if (null != e.privacy_policy_url && null != e.terms_of_service_url)
        return i.intl.format(i.t.rxlyKC, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url,
            termsOfServiceURL: e.terms_of_service_url
        });
    if (null != e.privacy_policy_url)
        return i.intl.format(i.t.TBvmMz, {
            application: e.name,
            privacyPolicyURL: e.privacy_policy_url
        });
    if (null != e.terms_of_service_url)
        return i.intl.format(i.t['q0T/Q0'], {
            application: e.name,
            termsOfServiceURL: e.terms_of_service_url
        });
    return i.intl.formatToPlainString(i.t['3Ywek5'], { application: e.name });
}
