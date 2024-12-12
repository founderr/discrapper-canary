r.d(n, {
    A: function () {
        return l;
    },
    S: function () {
        return o;
    }
});
var i = r(663993),
    a = r(618541),
    s = r(981631);
function o() {
    return (0, i.wE)({
        createPromise: () => r.e('10444').then(r.t.bind(r, 91438, 23)),
        webpackId: 91438
    }).then((e) => {
        let { default: n } = e;
        return n;
    });
}
function l() {
    let e = a.Z.getClient();
    return null == e
        ? o().then((e) =>
              e.client
                  .create({ authorization: s.Ai1.BRAINTREE.KEY })
                  .then((e) => u(e))
                  .catch(() => null)
          )
        : u(e);
}
function u(e) {
    return o().then((n) =>
        n.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null)
    );
}
