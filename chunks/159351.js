r.d(n, {
    Xt: function () {
        return a;
    },
    fw: function () {
        return s;
    }
});
var i = r(570140);
function a(e) {
    i.Z.dispatch({
        type: 'NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE',
        stripePaymentMethod: e
    });
}
function s() {
    i.Z.wait(() => i.Z.dispatch({ type: 'NEW_PAYMENT_SOURCE_CLEAR_ERROR' }));
}
